import React from "react";
import { AccountContainer } from "./styles";
import user from "../../assets/team/designer.jpg";
// import { FiEdit } from "react-icons/fi";

const Account = () => {
	return (
		<AccountContainer className="grid" image={user}>
			<div className="grid header">
				<div className="grid bg">
					<div className="grid image">
						{/* <div className="grid edit">
							<FiEdit className="icon" />
						</div> */}
					</div>
				</div>

				<div className="grid collections">
					<section className="grid art-name">
						<h1>Brash Bear</h1>
					</section>
					<section className="grid art-ownerDetails">
						<div className="grid">
							<h3>Owned by DragonLord</h3>
						</div>

						<div className="grid">
							<h3>Owned by DragonLord</h3>
						</div>

						<div className="grid">
							<h3>Owned by DragonLord</h3>
						</div>
					</section>
				</div>
			</div>
		</AccountContainer>
	);
};

export default Account;
