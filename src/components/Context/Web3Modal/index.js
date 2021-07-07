import { useContext } from "react";
import reactDom from "react-dom";
import { AiOutlineClose } from "react-icons/ai";
import { web3Context } from "..";
import { ErrorBoundary } from "../../ErrorBoundary";
import { Web3ModalWrapper } from "./styles";
import metamask from "../../../assets/others/metamask.jfif";
import walletconnect from "../../../assets/others/walletconnect.jfif";

const Web3Modal = () => {
	const { closeModal, connectDapp } = useContext(web3Context);

	return reactDom.createPortal(
		<Web3ModalWrapper>
			<div className="container">
				<header className="grid">
					<h1>Connect to a wallet</h1>

					<div className="grid disclaimer">
						<p>
							By connecting a wallet, you agree to Uniswap Labs’ Terms of
							Service and acknowledge that you have read and understand the
							Uniswap protocol disclaimer.
						</p>
					</div>
				</header>
				<div className="icon" onClick={closeModal}>
					<AiOutlineClose />
				</div>
				<div className="grid providers">
					<div className="grid card" onClick={() => connectDapp("metamask")}>
						<img src={metamask} alt="metamask" />
					</div>
					<div
						className="grid card"
						onClick={() => connectDapp("wallectconnect")}
					>
						<img src={walletconnect} alt="metamask" />
					</div>
				</div>
			</div>
		</Web3ModalWrapper>,
		document.querySelector("#portal")
	);
};

export default ErrorBoundary(Web3Modal);
