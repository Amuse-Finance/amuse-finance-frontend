import { useContext } from "react";
import reactDom from "react-dom";
import { BsArrowRight } from "react-icons/bs";
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
                <div className="grid button">
                    <a href={`https://etherscan.io/address/${user}`}>
                        {shortener(user)}
                    </a>
                </div>
                <div className="grid button">
                    <p className="grid">Rinkeby</p>
                </div>
            </header>
            <ul className="grid list-container">
                <li className="grid">
                    <BsArrowRight className="icon" />
                    <span>My Account</span>
                </li>
                <li className="grid">
                    <BsArrowRight className="icon" />
                    <span>My Account</span>
                </li>
                <li className="grid">
                    <BsArrowRight className="icon" />
                    <span>My Account</span>
                </li>
                <li className="grid">
                    <BsArrowRight className="icon" />
                    <span>My Account</span>
                </li>
                <li className="grid">
                    <BsArrowRight className="icon" />
                    <span>My Account</span>
                </li>
            </ul>
        </PanelWrapper>,
        document.querySelector("#portal")
    )
}

export default ErrorBoundary(Panel)
