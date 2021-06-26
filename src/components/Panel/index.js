import { useContext } from "react";
import reactDom from "react-dom";
import { Link } from "react-router-dom";
import { web3Context } from "../Context";
import { ErrorBoundary } from "../ErrorBoundary";
import { shortener } from "../Helper";
import { PanelWrapper } from "./styles";

const Panel = () => {
    const { user } = useContext(web3Context);

    return reactDom.createPortal(
        <PanelWrapper className="grid">
            <header className="grid">
                <div className="grid">
                    <a href={`https://etherscan.io/address/${user}`}>
                        {shortener(user)}
                    </a>
                </div>
                <div className="grid">
                    <h2>Rinkeby</h2>
                </div>
            </header>
            <div className="grid list-container">
                <div className="grid list-item">
                    <h3 className="grid">
                        <Link to="/my-account">My Account</Link>
                    </h3>
                </div>
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
