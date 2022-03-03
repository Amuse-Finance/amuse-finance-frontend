import React, { useEffect, useState } from "react";
import { ErrorBoundary } from "../../../components/ErrorBoundary";
import { FaucetHistoryContainer } from "./styles";
import { getPath, shortener } from "../../../components/Helper";

const FaucetHistory = ({ networkType, faucetHistory }) => {
	const [history, setHistory] = useState([]);

	useEffect(() => {
		if (faucetHistory === undefined) return;
		const _maxHistory = [...faucetHistory].splice(0, 10);
		let _count = _maxHistory.length;
		const _txnItems = _maxHistory.map((item, index) => {
			const { hash, account, amount } = item;
			const _currentCount = _count;
			_count--;
			return (
				<div className="grid card" key={index}>
					<div className="grid">
						<h2>{_currentCount}</h2>
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
								href={`${getPath(networkType)}/address/${account}`}
								target="_blank"
								rel="noreferrer"
							>
								{shortener(account)}
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
				</div>
			);
		});
		setHistory(() => [..._txnItems, ..._txnItems]);
	}, [networkType, faucetHistory]);

	return (
		<FaucetHistoryContainer className="grid">
			<header className="grid header">
				<div className="grid">
					<h2>S/N</h2>
				</div>
				<div className="grid">
					<h2>Hash</h2>
				</div>
				<div className="grid">
					<h2>Account</h2>
				</div>
				<div className="grid">
					<h2>Amount</h2>
				</div>
			</header>

			<div className="grid card-container">
				{history.length === 0 ? <></> : history}
			</div>
		</FaucetHistoryContainer>
	);
};

export default ErrorBoundary(FaucetHistory);
