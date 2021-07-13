import { useState, useContext, useEffect } from "react";
import { web3Context } from "../../../components/Context";
import Error from "../../../components/Error";
import { ErrorBoundary } from "../../../components/ErrorBoundary";

const Unstake = () => {
	const [unstakeInput, setUnstakeInput] = useState("");
	const [errorMessage, setErrorMessage] = useState("");

	const context = useContext(web3Context);
	const { unstake, stakes } = context;
	const { stakes: _stakes } = stakes;

	useEffect(() => {
		if (errorMessage.length > 0)
			setTimeout(() => {
				setErrorMessage("");
			}, 5000);
	}, [errorMessage]);

	const validateInput = (e) => {
		e.preventDefault();
		if (isNaN(e.target.value)) return;
		setUnstakeInput(() => e.target.value);
	};

	const _unstake = async (e) => {
		e.preventDefault();
		if (parseFloat(unstakeInput) === "") setUnstakeInput(() => _stakes);
		const { status, data } = await unstake(unstakeInput);
		setUnstakeInput(() => "");
		if (!status) {
			setErrorMessage(() => data);
			setTimeout(() => window.location.reload(), 10000);
		}
	};

	return (
		<form className="grid">
			<h2>Unstake AMD</h2>
			<input
				type="text"
				value={unstakeInput}
				placeholder="Enter amount to unlock"
				onChange={validateInput}
			/>
			<button onClick={_unstake}>Unlock</button>
			{errorMessage.length > 0 && <Error error={errorMessage} />}
		</form>
	);
};

export default ErrorBoundary(Unstake);
