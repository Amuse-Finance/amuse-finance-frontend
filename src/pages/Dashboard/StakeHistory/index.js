import { useContext } from "react";
import { web3Context } from "../../../components/Context";
import ErrorBoundary from "../../../components/ErrorBoundary/";
import { getPath, shortener } from "../../../components/Helper";
import { StakeTransactionWrapper } from "./styles";

const StakeHistory = () => {
	const { networkType, stakeHistory } = useContext(web3Context);

	let _index = stakeHistory.length;
	const _txnItems = stakeHistory.map((item) => {
		const { ethValue, amount, tokenValue, hash, timestamp } = item;
		const _currentIndex = _index;
		_index--;
		return (
			<div className="grid card" key={_currentIndex}>
				<div className="grid">
					<h2>{_currentIndex}</h2>
				</div>
				<div className="grid">
					<h2>
						<a
							href={`${getPath(networkType)}/tx/${hash}`}
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
							href={`${getPath(networkType)}/tx/${hash}`}
							target="_blank"
							rel="noreferrer"
						>
							{parseFloat(amount).toFixed(2)} AMD
						</a>
					</h2>
				</div>
				<div className="grid">
					<h2>
						<a
							href={`${getPath(networkType)}/tx/${hash}`}
							target="_blank"
							rel="noreferrer"
						>
							{parseFloat(tokenValue).toFixed(2)} AMD
						</a>
					</h2>
				</div>
				<div className="grid">
					<h2>
						<a
							href={`${getPath(networkType)}/tx/${hash}`}
							target="_blank"
							rel="noreferrer"
						>
							{parseFloat(ethValue).toFixed(6)} ETH
						</a>
					</h2>
				</div>
				<div className="grid">
					<h2>
						<a
							href={`${getPath(networkType)}/tx/${hash}`}
							target="_blank"
							rel="noreferrer"
						>
							{timestamp}
						</a>
					</h2>
				</div>
			</div>
		);
	});

	return (
		<StakeTransactionWrapper className="grid">
			<header className="grid header">
				<div className="grid">
					<h2>#</h2>
				</div>
				<div className="grid">
					<h2>Hash</h2>
				</div>
				<div className="grid">
					<h2>Amount Unstaked</h2>
				</div>
				<div className="grid">
					<h2>Estimated AMD Rewards</h2>
				</div>
				<div className="grid">
					<h2>Estimated ETH Rewards</h2>
				</div>
				<div className="grid">
					<h2>Date</h2>
				</div>
			</header>

			<div className="grid card-container">{_txnItems}</div>
		</StakeTransactionWrapper>
	);
};

export default ErrorBoundary(StakeHistory);
