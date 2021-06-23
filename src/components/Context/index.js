import { createContext, Component } from "react";
import Web3 from "web3";
import axios from "axios";
import { abi as amusedTokenABI } from "../../contracts/AmusedTokenABI.json";
import { abi as amusedVaultABI } from "../../contracts/AmusedVaultABI.json";
import { fixedDataArray } from "../Helper";

const web3Context = createContext();

class Web3Provider extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            loading: true,
            web3: null,
            user: "",
            ethereum: null,
            amuseTokenAddress: "",
            amusedVaultAddress: "",
            amusedToken: null,
            amusedVault: null,
            balance: 0,
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
            referralHistory: []
        }
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
    }

    loadWeb3 = async () => {
        try {
            // const amuseTokenAddress = "0x68A753059A2d1D5A64358Ff985AC5Edbf54C7De4";
            // const amusedVaultAddress = "0xe04064D1deC63456B4696Db1995F37ce7C21a92E";

            const amuseTokenAddress = "0xC44260c0b92658EA786661d41d86E3AaAe136AB1";
            const amusedVaultAddress = "0xb1F1cE027EB1877F98E883E816a6DB24c359EB11";

            const ethereum = window.ethereum;
            await ethereum.enable();
            
            // Get Network / chainId
            const _chainId = await ethereum.request({ method: 'eth_chainId' });
            if(parseInt(_chainId, 16) !== 4) return alert("Amused: Connect wallet to a Rinkeby network");

            const _accounts = await ethereum.request({ method: 'eth_accounts' });
            const web3 = new Web3(ethereum);
            const user = web3.utils.toChecksumAddress(_accounts[0]);            

            const amusedToken = (new web3.eth.Contract(amusedTokenABI, amuseTokenAddress)).methods;
            const amusedVault = (new web3.eth.Contract(amusedVaultABI, amusedVaultAddress)).methods;

            this.setState({
                loading: false,
                web3,
                user,
                ethereum,
                amuseTokenAddress,
                amusedVaultAddress,
                amusedToken,
                amusedVault,
            });
            ethereum.autoRefreshOnNetworkChange = true;
        } catch (error) {
            console.log(error.message);
            return error.message;
        }
    }

    // load blockchain data
    loadBlockchainData = async ({ loading, web3, user, amusedVault } = this.state) => {
        try {
            if(loading || !web3) return;
            const amdPrice = 0.25;
            const balance = await this.balanceOf();
            const stakes = await this.stakes();
            const dailyCashback = await this.getDailyCashback();
            const _transactionHistory = await fixedDataArray((await axios.get(`https://amused-finance-backend.herokuapp.com/api/v1/transactions?user=${user}`)).data);
            const _refferalHistory = await fixedDataArray(await (await axios.get(`https://amused-finance-backend.herokuapp.com/api/v1/transactions/refferalHistory?user=${user}`)).data);

            this.setState({
                amdPrice,
                balance,
                dailyCashback,
                stakes,
                transactionHistory: _transactionHistory,
                referralHistory: _refferalHistory
            });
        } catch (error) {
            console.log(error.message);
            return error.message;
        }
    }

    fromWei = (_amount, { web3 } = this.state) => web3.utils.fromWei(_amount.toString(), "ether");

    toWei = (_amount, { web3 } = this.state) => web3.utils.toWei(_amount.toString(), "ether");

    balanceOf = async (_account, { loading, user, amusedToken } = this.state) => {
        try {
            if(loading) return;
            const _balance = await amusedToken.balanceOf(_account ? _account : user).call();
            return this.fromWei(_balance);
        } catch (error) {
            return error.message;
        }
    }

    stakes = async ({ loading, user, amusedVault } = this.state) => {
        try {
            if(loading) return;
            const { stakes: _stakes, timestamp } = await amusedVault.stakes(user).call();
            const stakes = this.fromWei(_stakes);
            const stakesRewads = await this.getStakeRewards(_stakes);

            return { user, stakes, timestamp, ...stakesRewads };
        } catch (error) {
            console.log(error);
            return error;
        }
    }

    allowance = async ({ loading, user, amuseTokenAddress, amusedToken } = this.state) => {
        try {
            if(loading) return;
            const _allowance = await amusedToken.allowance(user, amuseTokenAddress).call();
            return this.fromWei(_allowance);
        } catch (error) {
            return error;
        }
    }

    parseErrorMessage = _error => {
        try {
            const _unparsed = "while converting number to string, invalid number value '', should be a number matching (^-?[0-9.]+).";
            const _errArr = _error.message.split(':');
            const _errorMessage = ((_errArr[_errArr.length - 1]).split(`"`))[0];
            if(_errorMessage === _unparsed) return `Unable to parse argument. Do click the right button ("Approve" / "Lock")?`;
            return _errorMessage;
        } catch (error) {  return error; }
    }

    getDailyCashback = async ({ user, amusedToken } = this.state) => {
        try {
            const _dailyCashback = await amusedToken.calculateDailyCashback(user).call();
            return this.fromWei(_dailyCashback);
        } catch (error) { return error; }
    }

    getStakeRewards = async (_stakes, { loading, user, amusedVault } = this.state) => {
        try {
            let tokenValueEarned = 0;
            let ethValueEarned = 0;

            if(loading || parseFloat(_stakes) < 1) return { tokenValueEarned, ethValueEarned };
            const { _tokenValueEarned, _ethValueEarned } = await amusedVault.calculateStakeRewards(user, _stakes).call();
            tokenValueEarned = this.fromWei(_tokenValueEarned);
            ethValueEarned = this.fromWei(_ethValueEarned);

            return { tokenValueEarned, ethValueEarned };
        } catch (error) { return error; }
    }

    approve = async (_amount, { loading, web3, user, amusedVaultAddress, amusedToken } = this.state) => {
        try {
            if(loading || _amount < 0) return;
            // const gasPrice = await web3.eth.getGasPrice();
            const _formattedStakeAmount = this.toWei(_amount);
            const _response = await amusedToken.approve(amusedVaultAddress, _formattedStakeAmount).send({
                from: user,
                // gasPrice,
            });
            console.log(_response);
            return {
                status: true,
                data: _response
            };
        } catch (error) {
            return {
                status: false,
                data: this.parseErrorMessage(error)
            }
        }
    }

    stake = async (_amount, { loading, web3, user, amuseTokenAddress, amusedVault } = this.state) => {
        try {
            if(loading || _amount < 0) return;
            // const gasPrice = await web3.eth.getGasPrice();
            const _formattedStakeAmount = this.toWei(_amount);
            await amusedVault.stake(_formattedStakeAmount).call({ from: user });
            const _response = await amusedVault.stake(_formattedStakeAmount).send({
                from: user,
                // gasPrice,
            });
            console.log(_response);
            return { status: true, data: _response };
        } catch (error) {
            return {
                status: false,
                data: this.parseErrorMessage(error)
            }
        }
    }

    unstake = async (_amount, { loading, user, amusedVault } = this.state) => {
        try {
            if(loading) return;
            await amusedVault.unstake(this.toWei(_amount)).call({ from: user });
            const _response = await amusedVault.unstake(this.toWei(_amount)).send({ 
                from: user
            });
            console.log(_response);

            return { status: true,  data: _response };
        } catch (error) {
            return {
                status: false,
                data: this.parseErrorMessage(error)
            }
        }
    }

    render() {
        return (
            <web3Context.Provider value={{
                ...this.state,
                fromWei: this.fromWei,
                toWei: this.toWei,
                connectDapp: this.connectDapp,
                allowance: this.allowance,
                approve: this.approve,
                stake: this.stake,
                unstake: this.unstake
            }}>
                {this.props.children}
            </web3Context.Provider>
        )
    }
}

export { web3Context, Web3Provider }