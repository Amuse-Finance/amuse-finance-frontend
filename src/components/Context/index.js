import { createContext, Component } from "react";
import Web3 from "web3";

const web3Context = createContext();

class Web3Provider extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            loading: true,
            web3: null,
            user: ""
        }
    }

    async componentDidMount() {
        await this.connectDapp();
    }

    connectDapp = async () => {
        await this.loadWeb3();
        await this.loadBlockchainData();
    }

    loadWeb3 = async () => {
        try {
            const ethereum = window.ethereum;
            await ethereum.enable();
            
            // Get Network / chainId
            const _chainId = await ethereum.request({ method: 'eth_chainId' });
            if(parseInt(_chainId, 16) !== 1) return alert("Connect wallet to a Kovan network");

            const _accounts = await ethereum.request({ method: 'eth_accounts' });
            const web3 = new Web3(ethereum);
            const user = web3.utils.toChecksumAddress(_accounts[0]);
            ethereum.autoRefreshOnNetworkChange = false;

            this.setState({
                loading: false,
                web3,
                user,
            })
        } catch (error) {
            console.log(error.message);
            return error.message;
        }
    }

    // load blockchain data
    loadBlockchainData = async ({ web3 } = this.state) => {
        try {
            if(!web3) return;
        } catch (error) {
            console.log(error.message);
            return error.message;
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