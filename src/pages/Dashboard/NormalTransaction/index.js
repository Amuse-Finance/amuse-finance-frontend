import { useContext } from "react";
import { web3Context } from "../../../components/Context";
import { shortener } from "../../../components/Helper";
import { NormalTransactionWrapper } from "./styles";
import { ErrorBoundary } from "../../../components/ErrorBoundary";
require("dotenv/config");

const NormalTransaction = () => {
	const { loading, fromWei, etherPrice, networkType, transactionHistory } =
		useContext(web3Context);
	const _txnItems = transactionHistory.map((item, index) => {
		const { hash, from, to, value, gasPrice, gasUsed, timestamp } = item;
		// if (typeof gasPrice !== "string") return <></>;
		const gasFee = fromWei(gasPrice) * gasUsed * etherPrice;
		const _prefix =
			networkType === "Mainnet"
				? "https://etherscan.io"
				: `https://${networkType}.etherscan.io`;

		return (
			<div className="grid card" key={index}>
				<div className="grid">
					<h2>
						<a href={`${_prefix}/tx/${hash}`} target="_blank" rel="noreferrer">
							{shortener(hash)}
						</a>
					</h2>
				</div>
				<div className="grid">
					<h2>
						<a
							href={`${_prefix}/address/${from}`}
							target="_blank"
							rel="noreferrer"
						>
							{shortener(from)}
						</a>
					</h2>
				</div>
				<div className="grid">
					<h2>
						<a
							href={
								to !== "" ? `${_prefix}/address/${to}` : `${_prefix}/tx/${hash}`
							}
							target="_blank"
							rel="noreferrer"
						>
							{to !== "" ? shortener(to) : "Contract Creation"}
						</a>
					</h2>
				</div>
				<div className="grid">
					<h2>
						<a href={`${_prefix}/tx/${hash}`} target="_blank" rel="noreferrer">
							{parseFloat(value).toFixed(3)} ETH
						</a>
					</h2>
				</div>
				<div className="grid">
					<h2>
						<a href={`${_prefix}/tx/${hash}`} target="_blank" rel="noreferrer">
							${parseFloat(gasFee).toFixed(3)}
						</a>
					</h2>
				</div>
				<div className="grid">
					<h2>
						<a href={`${_prefix}/tx/${hash}`}>{timestamp}</a>
					</h2>
				</div>
			</div>
		);
	});

	return (
		<NormalTransactionWrapper className="grid">
			<header className="grid header">
				<div className="grid">
					<h2>Hash</h2>
				</div>
				<div className="grid">
					<h2>Sender</h2>
				</div>
				<div className="grid">
					<h2>Recipient</h2>
				</div>
				<div className="grid">
					<h2>Value</h2>
				</div>
				<div className="grid">
					<h2>Tx Fees in USD</h2>
				</div>
				<div className="grid">
					<h2>Date</h2>
				</div>
			</header>

			{!loading ? (
				<div className="grid card-container">{_txnItems}</div>
			) : (
				<></>
			)}
		</NormalTransactionWrapper>
	);
};

export default ErrorBoundary(NormalTransaction);
