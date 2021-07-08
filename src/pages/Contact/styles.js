import styled from "styled-components";

export const ContactWrapper = styled.div`
	place-items: center;
	padding: 3em 0;
	width: 100%;
	height: 100%;
	grid-gap: 2em 0;

	form {
		width: 40%;
		background: var(--white);
		place-items: center;
		padding: 2em;
		line-height: 2;
		grid-gap: 1.25em 0;

		header {
			/* line-height: 1.25; */
			font-family: atmospheric;

			.icon {
				font-size: 4em;
				color: var(--darkGrey);
			}

			h1 {
				font-size: 2em;
				font-weight: 600;
			}
		}

		input,
		textarea {
			width: 100%;
			height: 60px;
			padding: 0.75em;
			border-radius: 0.3em;
			border: 0.1em solid gray;
		}

		textarea {
			height: 250px;
			resize: none;
		}

		button {
			background: var(--mainGreen);
			width: 100%;
			height: 60px;
			border-radius: 0.25em;
			letter-spacing: 0.25em;
			color: var(--white);
			transition: var(--mainTransition);
			place-items: center;

			.icon {
				font-size: 1.5em;
			}

			&:hover {
				color: var(--mainGreen);
				background: transparent;
				border: 0.05em solid var(--mainGreen);
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
