import React from "react";
import { PresaleWrapper } from "./styles";
import logo from "../../assets/Amuse-logo-icon.png";

const Presale = () => {
	return (
		<PresaleWrapper className="grid">
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

			<div className="grid presale-form">
				<form className="grid">
					<header className="grid">
						<h1>Amuse Presale</h1>
					</header>
					<div className="grid currencies">
						<section className="grid currency">
							<div className="image">
								<img src={logo} alt="logo" />
							</div>
							<div className="grid">
								<h1>Ethereum</h1>
								<p>1.00 ETH</p>
							</div>
						</section>

						<section className="grid currency">
							<div className="image">
								<img src={logo} alt="logo" />
							</div>
							<div className="grid">
								<h1>Ethereum</h1>
								<p>1.00 ETH</p>
							</div>
						</section>
					</div>

					<div className="grid prices">
						<section className="grid"></section>
					</div>
				</form>
			</div>
		</PresaleWrapper>
	);
};

export default Presale;
