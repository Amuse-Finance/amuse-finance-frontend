import React from "react";
import { IoRocketOutline } from "react-icons/io5";
import { FaDiscord, FaLinkedin, FaGithub } from "react-icons/fa";
import { FiTwitter } from "react-icons/fi";
import { ErrorBoundary } from "../../components/ErrorBoundary";
import { TeamWrapper } from "./styles";
import ceoImage from "../../assets/team/ceo.jpg";
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
						<img alt="team-member" src={ceoImage} />
					</div>
					<div className="grid details">
						<h1>Abdullah Zakariyya</h1>
						<small>DragonLord</small>

						<div className="grid social-handles">
							<FaDiscord className="icon" />
							<FiTwitter className="icon" />
							<FaLinkedin className="icon" />
							<FaGithub className="icon" />
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
							<FaDiscord className="icon" />
							<FiTwitter className="icon" />
							<FaLinkedin className="icon" />
							<FaGithub className="icon" />
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
							<FaDiscord className="icon" />
							<FiTwitter className="icon" />
							<FaLinkedin className="icon" />
							<FaGithub className="icon" />
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
							<FaDiscord className="icon" />
							<FiTwitter className="icon" />
							<FaLinkedin className="icon" />
							<FaGithub className="icon" />
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
