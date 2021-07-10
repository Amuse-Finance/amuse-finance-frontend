import { useState } from "react";
import { FaLinkedin, FaGithub, FaTelegram, FaTwitter } from "react-icons/fa";
import { FooterContainer } from "./styles";
import { ErrorBoundary } from "../ErrorBoundary";

const Footer = () => {
	const [email, setEmail] = useState("");
	const getYear = new Date().getFullYear();

	const socialLinks = [
		{ icon: <FaGithub />, to: "https://github.com/abdillahzakkie" },
		{ icon: <FaTelegram />, to: "https://t.me/DragonTrybe" },
		{
			icon: <FaLinkedin />,
			to: "https://www.linkedin.com/in/abdullah-zakarriya-ba58961aa",
		},
		{ icon: <FaTwitter />, to: "https://twitter.com/Dev_DragonLord" },
	];
	const socialIcon = socialLinks.map((item, i) => {
		return (
			<a
				href={item.to}
				key={i}
				target="_blank"
				rel="noopener noreferrer"
				className="icon"
			>
				{item.icon}
			</a>
		);
	});

	return (
		<FooterContainer className="grid footer">
			<section className="grid">
				<h1>About me</h1>
				<small>
					We have tested a number of registry fix and clean utilities and
					present our top 3 list on our site for your convenience.
				</small>
				<small>
					copyright &copy; {getYear} all rights reserved | Designed & built with
					💖 by DragonLord
				</small>
			</section>
			<section className="grid form">
				<h1>Newsletter</h1>
				<small>Stay up to date with our latest trends</small>
				<form className="form-control">
					<input
						type="email"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						placeholder="example@mail.com"
					/>
				</form>
			</section>
			<section className="grid socials">
				<h1>Stay tuned with Amuse</h1>
				<p>Let us be social</p>
				<div className="social-icons">{socialIcon}</div>
			</section>
		</FooterContainer>
	);
};

export default ErrorBoundary(Footer);
