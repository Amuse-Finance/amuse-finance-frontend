import { useContext } from "react";
import { web3Context } from "../../../components/Context";
import { shortener } from "../../../components/Helper";
import { NormalTransactionWrapper } from "./styles";
import { ErrorBoundary } from "../../../components/ErrorBoundary";
require("dotenv/config");

const NormalTransaction = () => {
	const { fromWei, transactionHistory } = useContext(web3Context);

	const _txnItems = transactionHistory.map((item, index) => {
		const { hash, from, to, value, gasPrice, gasUsed, timestamp } = item;
		const gasFee = fromWei(gasPrice) * gasUsed * 2400;
		return (
			<div className="grid card" key={index}>
				<div className="grid">
					<h2>
						<a
							href={`https://etherscan.io/tx/${hash}`}
							target="_blank"
							rel="noreferrer"
						>
							{shortener(hash)}
						</a>
					</h2>
				</div>
				<div className="grid">
					<h2>
						<a
							href={`https://etherscan.io/address/${from}`}
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
							href={`https://etherscan.io/address/${to}`}
							target="_blank"
							rel="noreferrer"
						>
							{shortener(to)}
						</a>
					</h2>
				</div>
				<div className="grid">
					<h2>
						<a
							href={`https://etherscan.io/tx/${hash}`}
							target="_blank"
							rel="noreferrer"
						>
							{parseFloat(value).toFixed(3)} ETH
						</a>
					</h2>
				</div>
				<div className="grid">
					<h2>
						<a
							href={`https://etherscan.io/tx/${hash}`}
							target="_blank"
							rel="noreferrer"
						>
							${parseFloat(gasFee).toFixed(3)}
						</a>
					</h2>
				</div>
				<div className="grid">
					<h2>
						<a href={`https://etherscan.io/tx/${hash}`}>{timestamp}</a>
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

			<div className="grid card-container">{_txnItems}</div>
		</NormalTransactionWrapper>
	);
};

export default ErrorBoundary(NormalTransaction);
