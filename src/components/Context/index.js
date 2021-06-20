import { createContext, Component } from "react";
import Web3 from "web3";
import { getNormalTransactionLists } from "../Helper";

const web3Context = createContext();

class Web3Provider extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            loading: true,
            web3: null,
            user: "",
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
            const ethereum = window.ethereum;
            await ethereum.enable();
            
            // Get Network / chainId
            const _chainId = await ethereum.request({ method: 'eth_chainId' });
            if(parseInt(_chainId, 16) !== 4) return alert("Connect wallet to a Rinkeby network");

            const _accounts = await ethereum.request({ method: 'eth_accounts' });
            const web3 = new Web3(ethereum);
            const user = web3.utils.toChecksumAddress(_accounts[0]);
            ethereum.autoRefreshOnNetworkChange = false;

            this.setState({
                web3,
                user,
            })
        } catch (error) {
            console.log(error.message);
            return error.message;
        }
    }

    // load blockchain data
    loadBlockchainData = async ({ web3, user } = this.state) => {
        try {
            if(!web3) return;
            const _transactionHistory = await getNormalTransactionLists(web3, user);
            console.log(_transactionHistory);
            this.setState({
                loading: false,
                transactionHistory: _transactionHistory
            })
        } catch (error) {
            console.log(error.message);
            return error.message;
        }
    }

    getNormalTransactionLists = async (web3, user) => {
        try {
            const _data = await getNormalTransactionLists(web3, user);
            return _data;
        } catch (error) {
            console.log(error);
            return error;
        }
    }


    render() {
        return (
            <web3Context.Provider value={{
                ...this.state,
                connectDapp: this.connectDapp
            }}>
                {this.props.children}
            </web3Context.Provider>
        )
    }
}

export { web3Context, Web3Provider }