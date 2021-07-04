import { useContext } from "react";
import reactDom from "react-dom";
import { Link } from "react-router-dom";
import { web3Context } from "../../Context";
import { ErrorBoundary } from "../../ErrorBoundary";
import { shortener } from "../../Helper";
import { PanelWrapper } from "./styles";

const Panel = () => {
    const { user } = useContext(web3Context);

    return reactDom.createPortal(
        <PanelWrapper className="grid">
            <header className="grid">
                <div className="grid top">
                    <h2>Connected with Metamask</h2>
                    <p>Rinkeby</p>
                </div>
                <div className="grid body">
                    <div className="grid bg"></div>
                    <div className="grid wallet">
                        <a href={`https://rinkeby.etherscan.io/address/${user}`}>{shortener(user)}</a>
                    </div>
                </div>
            </header>
            <div className="grid list-container">
                <div className="grid list-item">
                    <h3 className="grid">
                        <Link to="/referral">Referral</Link>
                    </h3>
                </div>
                <div className="grid list-item">
                    <h3 className="grid">
                        <Link to="/faucet">Get Testnet Faucets</Link>
                    </h3>
                </div>
                <div className="grid list-item">
                    <h3 className="grid">
                        <Link to="/support">
                            Get Support
                        </Link>
                    </h3>
                </div>
            </div>
        </PanelWrapper>,
        document.querySelector("#portal")
    )
}

export default ErrorBoundary(Panel)
