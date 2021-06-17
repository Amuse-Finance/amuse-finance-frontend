import { createContext, Component } from "react";

const web3Context = createContext();

class Web3Provider extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            loading: false,
        }
    }


    render() {

        return (
            <web3Context.Provider value= {{
                ...this.state,
            }}>
                {this.props.children}
            </web3Context.Provider >
        )
    }
}

export { web3Context, Web3Provider }