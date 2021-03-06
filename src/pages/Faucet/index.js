import { useContext, useEffect, useState } from "react";
import { web3Context } from "../../components/Context";
import { ErrorBoundary } from "../../components/ErrorBoundary";
import Error from "../../components/Error";
import FaucetHistory from "./FaucetHistory";
import { FaucetContainer } from "./styles";

const Faucet = () => {
	const [faucetAmount, setFaucetAmount] = useState("");
	const [errorMessage, setErrorMessage] = useState("");
	const { user, networkType, requestFaucet, faucetHistory } =
		useContext(web3Context);

	useEffect(() => {
		if (errorMessage.length > 0)
			setTimeout(() => {
				setErrorMessage("");
			}, 5000);
	}, [errorMessage]);

	const setFaucet = (e) => {
		e.preventDefault();
		if (isNaN(e.target.value)) return;
		setFaucetAmount(e.target.value <= 2000 ? e.target.value : 2000);
	};

	const _handleSubmit = async (e) => {
		e.preventDefault();
		const _response = await requestFaucet(faucetAmount);
		if (_response.error) {
			setErrorMessage(() => _response.error);
		}
	};

	return (
		<FaucetContainer className="grid">
			<div className="grid wrapper">
				<form className="grid" onSubmit={_handleSubmit}>
					<h2>Request for Testnet Faucet</h2>
					<input
						type="text"
						value={user}
						placeholder="Enter wallet address"
						disabled={true}
					/>
					<input
						type="text"
						value={faucetAmount}
						placeholder="Enter amount (max is 2000 AMD)"
						onChange={setFaucet}
					/>
					<button type="submit">Request</button>
					{errorMessage.length > 0 && <Error error={errorMessage} />}
				</form>
			</div>
			<div className="grid claimed-faucets">
				<FaucetHistory
					className="grid"
					networkType={networkType}
					faucetHistory={faucetHistory}
				/>
			</div>
		</FaucetContainer>
	);
};

export default ErrorBoundary(Faucet);
