import React, { useContext, useState } from "react";
import { FaPaperPlane } from "react-icons/fa";
import { IoMdContacts } from "react-icons/io";
import { web3Context } from "../../components/Context";
import { ErrorBoundary } from "../../components/ErrorBoundary";
import { ContactWrapper } from "./styles";

const Contact = () => {
	const [title, setTitle] = useState("");
	const [description, setDescription] = useState("");
	const { user } = useContext(web3Context);
	const _handleSubmit = async () => {};

	return (
		<ContactWrapper className="grid">
			<form className="grid" onSubmit={_handleSubmit}>
				<header className="grid">
					<div className="grid team-icon">
						<IoMdContacts className="icon" />
					</div>
					<div className="grid">
						<h1>Get in touch with the team</h1>
					</div>
				</header>

				<input
					type="text"
					value={user}
					placeholder="Enter wallet address"
					disabled={true}
				/>
				<input
					type="text"
					value={title}
					placeholder="Enter title"
					onChange={(e) => setTitle(e.target.value)}
				/>
				<textarea
					type="text"
					value={description}
					placeholder="Enter description"
					onChange={(e) => setDescription(e.target.value)}
				/>
				<button type="button" className="grid">
					<FaPaperPlane className="icon" />
				</button>
			</form>
		</ContactWrapper>
	);
};

export default ErrorBoundary(Contact);
