import styled from "styled-components";
import background from "../../assets/background.jpeg";

export const ContactWrapper = styled.div`
	background: url(${background}) center/cover no-repeat;
	place-items: center;
	padding: 10em 0;
	width: 100%;
	height: 100%;
	grid-gap: 2em 0;

	form {
		width: 50%;
		background: var(--white);
		color: var(--mainBlue);
		place-items: center;
		padding: 2em 2em 3em;
		grid-gap: 1.25em 0;
		border-radius: 0.75em;
		line-height: 2;

		header {
			font-family: inter;
			font-size: 2em;
			font-weight: 600;
			margin: 0 0 0;
			text-align: center;
		}

		input,
		textarea {
			width: 100%;
			height: 60px;
			padding: 0.75em;
			border-radius: 0.5em;
			border: 0.1em solid var(--mainBlue);
		}

		textarea {
			height: 250px;
			resize: none;
		}

		button {
			background: var(--mainBlue);
			color: var(--white);
			width: 100%;
			height: 60px;
			border-radius: 0.25em;
			letter-spacing: 0.25em;
			transition: var(--mainTransition);
			place-items: center;

			.icon {
				font-size: 1.5em;
			}

			&:hover {
				color: var(--mainBlue);
				background: transparent;
				border: 0.05em solid var(--mainBlue);
			}
		}
	}

	@media (max-width: 767px) {
		& {
			form {
				width: 90%;
			}
		}
	}
`;
