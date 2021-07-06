import React from "react";
import { IoRocketOutline } from "react-icons/io5";
import { FaDiscord, FaLinkedin, FaGithub } from "react-icons/fa";
import { FiTwitter } from "react-icons/fi";
import { ErrorBoundary } from "../../components/ErrorBoundary";
import { TeamWrapper } from "./styles";
import user1 from "../../assets/team/team-1.jpg";
import user2 from "../../assets/team/team-2.jpg";
import ceoImage from "../../assets/team/ceo.jpg";

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
							<FaDiscord />
							<FiTwitter />
							<FaLinkedin />
							<FaGithub />
						</div>
					</div>
					<div className="grid role">
						<small>c.e.o</small>
					</div>
				</div>

				<div className="grid card">
					<div className="grid image">
						<img alt="team-member" src={user1} />
					</div>
					<div className="grid details">
						<h1>AbdulLateef Raji</h1>
						<small>SoftDev</small>

						<div className="grid social-handles">
							<FaDiscord />
							<FiTwitter />
							<FaLinkedin />
							<FaGithub />
						</div>
					</div>
					<div className="grid role">
						<small>developer</small>
					</div>
				</div>

				<div className="grid card">
					<div className="grid image">
						<img alt="team-member" src={user2} />
					</div>
					<div className="grid details">
						<h1>Uthmaan Zakariyya</h1>
						<small>Javamind</small>

						<div className="grid social-handles">
							<FaDiscord />
							<FiTwitter />
							<FaLinkedin />
							<FaGithub />
						</div>
					</div>
					<div className="grid role">
						<small>c.e.o</small>
					</div>
				</div>

				<div className="grid card">
					<div className="grid image">
						<img alt="team-member" src={user1} />
					</div>
					<div className="grid details">
						<h1>Abdullah Zakariyya</h1>
						<small>DragonLord</small>

						<div className="grid social-handles">
							<FaDiscord />
							<FiTwitter />
							<FaLinkedin />
							<FaGithub />
						</div>
					</div>
					<div className="grid role">
						<small>c.e.o</small>
					</div>
				</div>
			</div>
		</TeamWrapper>
	);
};

export default ErrorBoundary(Team);
