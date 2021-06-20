import { createContext, Component } from "react";
import Web3 from "web3";
import { abi as amusedTokenABI } from "../../contracts/AmusedTokenABI.json";
import { abi as amusedVaultABI } from "../../contracts/AmusedVaultABI.json";
import { getNormalTransactionLists } from "../Helper";

const web3Context = createContext();

class Web3Provider extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            loading: true,
            web3: null,
            user: "",
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
            transactionHistory: []
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
            const amuseTokenAddress = "0xAb3074455A4b2735D0a6cb1dac76B59decd71e93";
            const amusedVaultAddress = "0x8b97C9B4a4414F6031D6587b0fbeF343AEB122Ca";

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
    loadBlockchainData = async ({ web3, user, amusedVault } = this.state) => {
        try {
            if(!web3) return;
            const amdPrice = 0.25;
            const balance = await this.balanceOf();
            const stakes = await this.stakes();
            const dailyCashback = await this.getDailyCashback();
            const _transactionHistory = await getNormalTransactionLists(web3, user);
            
            this.setState({
                amdPrice,
                balance,
                dailyCashback,
                stakes,
                transactionHistory: _transactionHistory
            });
        } catch (error) {
            console.log(error.message);
            return error.message;
        }
    }

    fromWei = (_amount, { web3 } = this.state) => web3.utils.fromWei(_amount.toString(), "ether");
    toWei = (_amount, { web3 } = this.state) => web3.utils.toWei(_amount.toString(), "ether");

    getNormalTransactionLists = async (web3, user) => {
        try {
            const _data = await getNormalTransactionLists(web3, user);
            return _data;
        } catch (error) {
            console.log(error);
            return error;
        }
    }

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
            const stakesRewads = await this.getStakeRewards();
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
            const _errArr = _error.message.split(':');
            return ((_errArr[_errArr.length - 1]).split(`"`))[0];
        } catch (error) {  return error; }
    }

    getDailyCashback = async ({ user, amusedToken } = this.state) => {
        try {
            const _dailyCashback = await amusedToken.calculateDailyCashback(user).call();
            return this.fromWei(_dailyCashback);
        } catch (error) {
            return error;
        }
    }

    getStakeRewards = async ({ loading, user, amusedVault } = this.state) => {
        if(loading) return;
        try {
            const { _tokenValueEarned, _ethValueEarned } = await amusedVault.calculateRewards(user).call();
            const tokenValueEarned = this.fromWei(_tokenValueEarned);
            const ethValueEarned = this.fromWei(_ethValueEarned);
            return { tokenValueEarned, ethValueEarned };
        } catch (error) {
            return error;
        }
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
            return {
                status: true,
                data: _response
            }
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
                connectDapp: this.connectDapp,
                allowance: this.allowance,
                approve: this.approve,
                stake: this.stake
            }}>
                {this.props.children}
            </web3Context.Provider>
        )
    }
}

export { web3Context, Web3Provider }