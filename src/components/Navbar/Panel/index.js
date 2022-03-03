import { useContext, useState } from "react";
import reactDom from "react-dom";
import { Link } from "react-router-dom";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { web3Context } from "../../Context";
import { ErrorBoundary } from "../../ErrorBoundary";
import { shortener, getPath } from "../../Helper";
import { PanelWrapper } from "./styles";

const Panel = () => {
	const [isCopied, setCopied] = useState(false);
	const { user, networkType, addAmdToMetamask } = useContext(web3Context);

	return reactDom.createPortal(
		<PanelWrapper className="grid">
			<header className="grid">
				<div className="grid top">
					<h2>Connected with Metamask</h2>
					<p>{networkType}</p>
				</div>
				<div className="grid body">
					<div className="grid bg"></div>
					<div className="grid wallet">
						<a
							href={`${getPath(networkType)}/address/${user}`}
							target="_blank"
							rel="noreferrer"
						>
							{shortener(user)}
						</a>
					</div>
				</div>

				<div className="grid clipboard">
					<div className="btn">
						<CopyToClipboard text={user} onCopy={() => setCopied(true)}>
							<button type="button">{isCopied ? "copied" : "copy"}</button>
						</CopyToClipboard>
					</div>
					<div className="btn">
						<button type="button">
							<a
								href={`${getPath(networkType)}/address/${user}`}
								target="_blank"
								rel="noreferrer"
							>
								view on explorer
							</a>
						</button>
					</div>
				</div>
			</header>
			<div className="grid list-container">
				<div className="grid list-item">
					<h3 className="grid">
						<Link to="/account">My Account</Link>
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
						<Link to="/contact">Get Support</Link>
					</h3>
				</div>
				<div className="grid list-item">
					<h3 className="grid" onClick={addAmdToMetamask}>
						Add AMD to Metamask
					</h3>
				</div>
			</div>
		</PanelWrapper>,
		document.querySelector("#portal")
	);
};

export default ErrorBoundary(Panel);
