import { useContext } from "react";
import reactDom from "react-dom";
import { web3Context } from "../Context";
import { ErrorBoundary } from "../ErrorBoundary";
import { shortener } from "../Helper";
import { PanelWrapper } from "./styles";

const Panel = () => {
    const { user } = useContext(web3Context);
    console.log(shortener(user));

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
                    <h3>My Account</h3>
                </div>
                <div className="grid list-item">
                    <h3>Referral</h3>
                </div>
                <div className="grid list-item">
                    <h3>Get Testnet Faucets</h3>
                </div>
                <div className="grid list-item">
                    <h3>Get Support</h3>
                </div>
            </div>
        </PanelWrapper>,
        document.querySelector("#portal")
    )
}

export default ErrorBoundary(Panel)
