import React from "react";
import { PresaleWrapper } from "./styles";
import logo from "../../assets/Amuse-logo-icon.png";

const Presale = () => {
	return (
		<PresaleWrapper className="grid">
			<div className="grid banner">
				<div className="grid">
					<h1>Presale Information</h1>
				</div>
				<div className="grid image">
					<img src={logo} alt="logo" />
				</div>
			</div>
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

			<form className="grid"></form>
		</PresaleWrapper>
	);
};

export default Presale;
