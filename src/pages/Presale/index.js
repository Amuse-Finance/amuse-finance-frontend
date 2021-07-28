import { useState } from "react";
import { PresaleWrapper } from "./styles";
import logo from "../../assets/Amuse-logo-icon.png";
import ethLogo from "../../assets/others/ethereum-logo.jfif";
require("dotenv/config");

const Presale = () => {
	const [ethAmount, setEthAmount] = useState("");
	const [amdEthRate, setAmdEthRate] = useState("");

	const _validateInputAmount = (e) => {
		e.preventDefault();
		if (isNaN(e.target.value) || e.target.value === "") {
			setEthAmount(() => "0.00");
			setAmdEthRate(() => "0.00");
			return;
		}

		const _amdEthRate = process.env.REACT_APP_amdEthRate;

		setEthAmount(() => e.target.value);
		setAmdEthRate(() => parseFloat(ethAmount) / parseFloat(_amdEthRate));
	};

	return (
		<PresaleWrapper className="grid">
			<div className="grid wrapper">
				<div className="grid card-container">
					<div className="grid card">
						<h1>Token name - Amuse</h1>
						<h4>Ticker - AMD</h4>
					</div>
					<div className="grid card">
						<h1>Token address - AmuseFinance.eth</h1>
						<h4>Decimal - 18</h4>
					</div>
					<div className="grid card">
						<h1>Initial supply - 20, 000, 000 AMD</h1>
						<h4>DEX Listing - Uniswap</h4>
					</div>
				</div>

				<div className="grid card-container">
					<div className="grid card">
						<h1>Softcap - 100.00 ETH</h1>
					</div>
					<div className="grid card">
						<h1>Hardcap - 150.00 ETH</h1>
					</div>
					<div className="grid card">
						<h1>Current Raised - 0.00 ETH</h1>
					</div>
				</div>
			</div>

			<div className="grid presale-form">
				<div className="grid wrapper">
					<header className="grid">
						<h1>Amuse Presale</h1>
					</header>
					<div className="grid currencies">
						<section className="grid currency">
							<div className="grid image">
								<img src={ethLogo} alt="logo" />
							</div>
							<div className="grid">
								<h1>Ethereum</h1>
								<p>1.00 ETH</p>
							</div>
						</section>

						<section className="grid currency">
							<div className="grid image">
								<img src={logo} alt="logo" />
							</div>
							<div className="grid">
								<h1>Ethereum</h1>
								<p>1.00 ETH</p>
							</div>
						</section>
					</div>

					<div className="grid price-formatter">
						<section className="grid converter">
							<div className="grid">
								<h1>ETH Amount:</h1>
							</div>
							<div className="grid second">
								<h2>{ethAmount} ETH</h2>
							</div>
						</section>

						<div className="underline" />

						<section className="grid converter">
							<div className="grid">
								<h1>AMD Amount:</h1>
							</div>
							<div className="grid second">
								<h2>{amdEthRate} AMD</h2>
							</div>
						</section>
					</div>

					<form className="grid form-group">
						<div className="grid">
							<input
								type="text"
								value={ethAmount}
								placeholder="1.00"
								onChange={(e) => _validateInputAmount(e)}
							/>
							<div className="coin">
								<p>ETH</p>
							</div>
						</div>
						<div className="grid">
							<button type="submit">Buy AMD</button>
						</div>
					</form>
				</div>
			</div>
		</PresaleWrapper>
	);
};

export default Presale;
