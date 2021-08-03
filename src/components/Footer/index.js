import { useState } from "react";
import {
	FaLinkedin,
	FaGithub,
	FaTelegram,
	FaTwitter,
	FaMediumM,
} from "react-icons/fa";
import { FiSend } from "react-icons/fi";
import { FooterContainer } from "./styles";
import { ErrorBoundary } from "../ErrorBoundary";
import logo from "../../assets/Amuse icon.png";

const Footer = () => {
	const [email, setEmail] = useState("");
	const getYear = new Date().getFullYear();

	const socialLinks = [
		{ icon: <FaGithub />, to: "https://github.com/Amuse-Finance" },
		{ icon: <FaTelegram />, to: "https://t.me/amuse_finance_channel" },
		{
			icon: <FaMediumM />,
			to: "https://medium.com/@amusefinance",
		},
		{ icon: <FaTwitter />, to: "https://twitter.com/AmuseFinance" },
	];
	const socialIcon = socialLinks.map((item, index) => {
		return (
			<div className="grid" key={index}>
				<a
					href={item.to}
					target="_blank"
					rel="noopener noreferrer"
					className="icon"
				>
					{item.icon}
				</a>
			</div>
		);
	});

	return (
		<FooterContainer className="grid footer">
			<div className="grid wrapper">
				<section className="grid">
					<div className="grid brand">
						<div className="grid logo">
							<img src={logo} alt="amuse" />
						</div>
						<div className="grid">
							<h1>Amuse</h1>
						</div>
					</div>
					<p>
						Amuse is a protocol that gives cashback for the gas fees spent by
						its users. Cut down on your gas cost when you choose Amuse.
					</p>
				</section>
				<section />
				<section className="grid form">
					<h1>Stay up to date</h1>
					<form className="form-control">
						<input
							type="email"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							placeholder="example@mail.com"
						/>
						<button type="submit">
							<FiSend className="icon" />
						</button>
					</form>
					<div className="grid social-icons">{socialIcon}</div>
				</section>
			</div>

			<div className="grid copy-right">
				<p>
					copyright &copy; {getYear} all rights reserved | Designed & built with
					💖 by DragonLord
				</p>
			</div>
		</FooterContainer>
	);
};

export default ErrorBoundary(Footer);
