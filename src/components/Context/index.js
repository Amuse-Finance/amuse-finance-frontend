import { createContext, Component } from "react";
import Web3 from "web3";
import axios from "axios";
import { abi as amusedTokenABI } from "../../contracts/AmusedTokenABI.json";
import { abi as amusedVaultABI } from "../../contracts/AmusedVaultABI.json";
import { fixedDataArray, getRefferalHistory, getStakedHistory } from "../Helper";

const web3Context = createContext();

class Web3Provider extends Component {
  constructor(props) {
    super(props);
    

    this.state = {
      loading: true,
      web3: null,
      user: process.env.REACT_APP_defaultAccount,
      ethereum: null,
      amuseTokenAddress: "",
      amusedVaultAddress: "",
      USDT: "",
      WETH: "",
      amusedToken: null,
      amusedVault: null,
      balance: 0,
      cashbackPercentage: 0,
      stakes: {
        user: "",
        stakes: 0,
        ethValueEarned: 0,
        tokenValueEarned: 0,
        timestamp: 0,
      },
      dailyCashback: 0,
      amdPrice: 0,
      transactionHistory: [],
      referralHistory: [],
      stakeHistory: [],
    };
  }

  async componentDidMount() {
    await this.connectDapp();
  }

  connectDapp = async () => {
    try {
      await this.loadWeb3();
      await this.loadBlockchainData();
    } catch (error) {
      return error;
    }
  };

  loadWeb3 = async () => {
    try {
      const amuseTokenAddress = process.env.REACT_APP_AmusedToken;
      const amusedVaultAddress = process.env.REACT_APP_AmusedVault;
      const USDT = process.env.REACT_APP_USDT;
      const WETH = process.env.REACT_APP_WETH;

      /*
          Mainnet address for WETH and USDT
          const USDT = "0xdac17f958d2ee523a2206206994597c13d831ec7";
          const WETH = "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2";
      */
      const ethereum = window.ethereum;
      await ethereum.enable();

      // Get Network / chainId
      const _chainId = await ethereum.request({ method: "eth_chainId" });
      const _accounts = await ethereum.request({ method: "eth_accounts" });
      const web3 = new Web3(ethereum);
      const _netWorkType = await web3.eth.net.getNetworkType();

      if (parseInt(_chainId, 16) !== 1 && parseInt(_chainId, 16) !== 4) {
        this.setState({ loading: true });
        return alert(`Amused: Invalid network detected. Please switch from ${_netWorkType} to Mainnet / Rinkeby`);
      }


      const user = web3.utils.toChecksumAddress(_accounts[0]);

      const amusedToken = new web3.eth.Contract(amusedTokenABI, amuseTokenAddress);
      const amusedVault = new web3.eth.Contract(amusedVaultABI, amusedVaultAddress);

      this.setState({
        loading: false,
        web3,
        user,
        ethereum,
        amuseTokenAddress,
        amusedVaultAddress,
        USDT,
        WETH,
        amusedToken,
        amusedVault,
      });
    } catch (error) {
      console.log(error.message);
      return error.message;
    }
  };

  // load blockchain data
  loadBlockchainData = async ({ loading, web3, user, amusedToken, amusedVault } = this.state) => {
    try {
      if (loading || !web3) return;
      const amdPrice = 0.25;
      const _cashbackPercentage = await this.cashbackPercentage();
      const balance = await this.balanceOf();
      const stakes = await this.stakes();
      const dailyCashback = await this.getDailyCashback();
      const _transactionHistory = await fixedDataArray((await axios.get(`https://amused-finance-backend.herokuapp.com/api/v1/transactions?user=${user}`)).data);
      const _refferalHistory = await fixedDataArray(await getRefferalHistory(web3, amusedToken, user));
      const _stakeHistory = await this.getStakedHistory();
      
      this.setState({
        amdPrice,
        balance,
        dailyCashback,
        cashbackPercentage: _cashbackPercentage,
        stakes,
        transactionHistory: _transactionHistory,
        referralHistory: _refferalHistory,
        stakeHistory: _stakeHistory
      });
    } catch (error) {
      console.log(error.message);
      return error.message;
    }
  };

  reRender = async () => await this.loadBlockchainData();

  updateAccount = async (_newAddress) => {
    try {
      this.setState({ user: _newAddress });
      await this.reRender();
    } catch (error) {
      return error;
    }
  };

  fromWei = (_amount, { web3 } = this.state) => web3.utils.fromWei(_amount.toString(), "ether");

  toWei = (_amount, { web3 } = this.state) => web3.utils.toWei(_amount.toString(), "ether");

  toChecksumAddress = (_account, { web3 } = this.state) => web3.utils.toChecksumAddress(_account);

  balanceOf = async (_account, { loading, user, amusedToken } = this.state) => {
    try {
      if (loading) return;
      const _balance = await amusedToken.methods.balanceOf(_account ? _account : user).call();
      return this.fromWei(_balance);
    } catch (error) {
      return error.message;
    }
  };

  cashbackPercentage = async ({ loading, amusedToken } = this.state) => !loading && await amusedToken.methods.cashbackPercentage().call();

  stakes = async ({ loading, user, amusedVault } = this.state) => {
    try {
      if (loading) return;
      const { stakes: _stakes, timestamp } = await amusedVault.methods.stakes(user).call();
      const stakes = this.fromWei(_stakes);
      const stakesRewads = await this.getStakeRewards(_stakes);

      return { user, stakes, timestamp, ...stakesRewads };
    } catch (error) {
      console.log(error);
      return error;
    }
  };

  allowance = async ({ loading, user, amuseTokenAddress, amusedToken } = this.state) => {
    try {
      if (loading) return;
      const _allowance = await amusedToken.methods.allowance(user, amuseTokenAddress).call();
      return this.fromWei(_allowance);
    } catch (error) {
      return error;
    }
  };

  parseErrorMessage = (_error) => {
    try {
      const _unparsed = "while converting number to string, invalid number value '', should be a number matching (^-?[0-9.]+).";
      const _errArr = _error.message.split(":");
      const _errorMessage = _errArr[_errArr.length - 1].split(`"`)[0];
      if (_errorMessage === _unparsed) return `Unable to parse arguments`;
      return _errorMessage;
    } catch (error) {
      return error;
    }
  };

  getDailyCashback = async ({ user, amusedToken } = this.state) => {
    try {
      const _dailyCashback = await amusedToken.methods.calculateDailyCashback(user).call();
      return this.fromWei(_dailyCashback);
    } catch (error) { return error; }
  };

  getStakeRewards = async (_stakes, { loading, user, amusedVault } = this.state) => {
    try {
      let tokenValueEarned = 0;
      let ethValueEarned = 0;

      if (loading || parseFloat(_stakes) < 1) return { tokenValueEarned, ethValueEarned };
      const { _tokenValueEarned, _ethValueEarned } = await amusedVault.methods.calculateStakeRewards(user, _stakes).call();
      tokenValueEarned = this.fromWei(_tokenValueEarned);
      ethValueEarned = this.fromWei(_ethValueEarned);

      return { tokenValueEarned, ethValueEarned };
    } catch (error) {  return error; }
  };

  approve = async (_amount, { loading, web3, user, amusedVaultAddress, amusedToken } = this.state) => {
    try {
      if (loading || _amount < 0) return;
      // const gasPrice = await web3.eth.getGasPrice();
      const _formattedStakeAmount = this.toWei(_amount);
      const _response = await amusedToken.methods.approve(amusedVaultAddress, _formattedStakeAmount).send({
          from: user,
          // gasPrice,
        });
      await this.reRender();
      return { status: true, data: _response };
    } catch (error) {
      return { status: false, data: this.parseErrorMessage(error) };
    }
  };

  stake = async (_amount, { loading, web3, user, amuseTokenAddress, amusedVault } = this.state) => {
    try {
      if (loading || _amount < 0) return;
      // const gasPrice = await web3.eth.getGasPrice();
      const _formattedStakeAmount = this.toWei(_amount);
      await amusedVault.methods.stake(_formattedStakeAmount).call({ from: user });
      const _response = await amusedVault.methods.stake(_formattedStakeAmount).send({
        from: user,
        // gasPrice,
      });
      await this.reRender();
      return { status: true, data: _response };
    } catch (error) {
      return {
        status: false,
        data: this.parseErrorMessage(error),
      };
    }
  };

  getRefferalHistory = async ({ loading, web3, user, amusedToken } = this.state) => {
    try {
      if (loading) return;
      const _result = await getRefferalHistory(amusedToken, web3, user);
      return _result;
    } catch (error) {
      console.log(error);
      return error;
    }
  };

  getStakedHistory = async ({ loading, web3, user, amusedVault } = this.state) => {
    try {
      if(loading) return;
      const _result = await getStakedHistory(web3, user, amusedVault);
      return  _result;
    } catch (error) { return error; }
  }

  unstake = async (_amount, { loading, user, amusedVault } = this.state) => {
    try {
      if (loading) return;
      await amusedVault.methods.unstake(this.toWei(_amount)).call({ from: user });
      const _response = await amusedVault.methods.unstake(this.toWei(_amount)).send({
        from: user,
      });
      await this.reRender();
      return { status: true, data: _response };
    } catch (error) {
      return {
        status: false,
        data: this.parseErrorMessage(error),
      };
    }
  };

  render() {
    return (
      <web3Context.Provider
        value={{
          ...this.state,
          fromWei: this.fromWei,
          toWei: this.toWei,
          connectDapp: this.connectDapp,
          updateAccount: this.updateAccount,
          allowance: this.allowance,
          approve: this.approve,
          stake: this.stake,
          unstake: this.unstake,
        }}
      >
        {this.props.children}
      </web3Context.Provider>
    );
  }
}

export { web3Context, Web3Provider };
