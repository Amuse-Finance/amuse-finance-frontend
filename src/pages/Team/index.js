import React from "react";
import { IoRocketOutline } from "react-icons/io5";
import { FaDiscord, FaLinkedin, FaGithub, FaTelegram } from "react-icons/fa";
import { FiTwitter } from "react-icons/fi";
import { ErrorBoundary } from "../../components/ErrorBoundary";
import { TeamWrapper } from "./styles";
import ceo from "../../assets/team/ceo.jpg";
import amdLogo from "../../assets/team/unknown.webp";

const Team = () => {
	return (
		<TeamWrapper className="grid">
			<header className="grid">
				<div className="grid team-icon">
					<IoRocketOutline className="icon" />
				</div>
				<div className="grid">
					<h1>Our Team</h1>
					<h5>Our core team members</h5>
				</div>
			</header>

			<div className="grid team-card-container">
				<div className="card">
					<div className="grid image">
						<img alt="team-member" src={ceo} />
					</div>
					<div className="grid details">
						<h1>Abdullah Zakariyya</h1>
						<small>Excessive Overlord</small>

						<div className="grid social-handles">
							<a
								href="https://t.me/ExcessiveOverlord"
								target="_blank"
								rel="noreferrer"
							>
								<FaTelegram className="icon" />
							</a>
							<a
								href="https://twitter.com/abdillahzakkie?s=09"
								target="_blank"
								rel="noreferrer"
							>
								<FiTwitter className="icon" />
							</a>

							<a
								href="https://github.com/abdillahzakkie"
								target="_blank"
								rel="noreferrer"
							>
								<FaGithub className="icon" />
							</a>
						</div>
					</div>
					<div className="grid role">
						<small>founder</small>
					</div>
				</div>

				<div className="grid card">
					<div className="grid image">
						<img alt="team-member" src={amdLogo} />
					</div>
					<div className="grid details">
						<h1>AbdulLateef Raji</h1>
						<small>SoftDev</small>

						<div className="grid social-handles">
							<a href="https://amuse.finance" target="_blank" rel="noreferrer">
								<FaDiscord className="icon" />
							</a>
							<FiTwitter className="icon" />
							<FaLinkedin className="icon" />
						</div>
					</div>
					<div className="grid role">
						<small>co-founder</small>
					</div>
				</div>

				<div className="grid card">
					<div className="grid image">
						<img alt="team-member" src={amdLogo} />
					</div>
					<div className="grid details">
						<h1>Uthmaan Zakariyya</h1>
						<small>Javamind</small>

						<div className="grid social-handles">
							<a href="https://amuse.finance" target="_blank" rel="noreferrer">
								<FaDiscord className="icon" />
							</a>
							<FiTwitter className="icon" />
							<FaLinkedin className="icon" />
						</div>
					</div>
					<div className="grid role">
						<small>co-founder</small>
					</div>
				</div>

				<div className="grid card">
					<div className="grid image">
						<img alt="team-member" src={amdLogo} />
					</div>
					<div className="grid details">
						<h1>Zenesk</h1>
						<small>Zenesk</small>

						<div className="grid social-handles">
							<a href="https://amuse.finance" target="_blank" rel="noreferrer">
								<FaDiscord className="icon" />
							</a>
							<FiTwitter className="icon" />
							<FaLinkedin className="icon" />
						</div>
					</div>
					<div className="grid role">
						<small>Strategist</small>
					</div>
				</div>
			</div>
		</TeamWrapper>
	);
};

export default ErrorBoundary(Team);
