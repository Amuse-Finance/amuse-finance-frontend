import React, { useContext, useEffect, useState } from "react";
import { web3Context } from "../../../components/Context";
import Error from "../../../components/Error";
import { ErrorBoundary } from "../../../components/ErrorBoundary";
import { RegisterReferralContainer } from "./styles";

const RegisterReferral = () => {
	const [referrerID, setReferrerID] = useState("");
	const [referrer, setReferrer] = useState(null);
	const [errorMessage, setErrorMessage] = useState("");

	const { loading, registerReferrer, decryptReferrerHash } =
		useContext(web3Context);

	useEffect(() => {
		if (loading) return;
		let _result = window.location.search.replace("?", "");
		_result = _result.split("=");
		if (_result[0] !== "referrerID") return;
		_result = _result[1];
		setReferrerID(() => `${_result}==`);
		setReferrer(() => decryptReferrerHash(_result));
	}, [loading, decryptReferrerHash]);

	const handleSubmit = async (e) => {
		e.preventDefault();
		const { status, data } = await registerReferrer(referrer);
		if (!status) {
			setErrorMessage(() => data);
			setTimeout(() => window.location.reload(), 10000);
		}
	};

	return (
		<RegisterReferralContainer className="grid">
			<div className="grid wrapper">
				<form className="grid" onSubmit={handleSubmit}>
					<h2>Register Referrer</h2>
					<input
						value={referrerID}
						type="text"
						placeholder="Enter Referrer's ID"
						disabled={true}
					/>
					<button>Register</button>
					{errorMessage.length > 0 && <Error error={errorMessage} />}
				</form>
			</div>
		</RegisterReferralContainer>
	);
};

export default ErrorBoundary(RegisterReferral);
