import styled from "styled-components";
import background from "../../assets/background.jpeg";

export const VaultContainer = styled.div`
	width: 100vw;
	background: url(${background}) center/cover no-repeat;

	.wrapper {
		width: 70%;
		grid-gap: 2em 4em;
		padding: 4rem 0;

		h2 {
			font-size: 1.5em;
			font-weight: 900;
			letter-spacing: var(--mainSpacing);
		}

		form {
			width: 50%;
			background: var(--white);
			color: var(--mainBlue);
			place-items: center;
			padding: 2em 2em 3em;
			grid-gap: 1.25em 0;
			border-radius: 0.75em;
			line-height: 2;

			input {
				width: 100%;
				height: 60px;
				padding: 0.75em;
				border-radius: 0.3em;
				border: 0.1em solid gray;
				color: var(--darkGrey);
			}

			button {
				background: var(--mainBlue);
				color: var(--white);
				width: 100%;
				height: 60px;
				border-radius: 0.3em;
				letter-spacing: 0.25em;
				margin: 0.25em 0 0;
				transition: all 1s ease-in-out;
				border: 0.1em solid var(--white);

				&:hover {
					background: transparent;
					color: var(--mainBlue);
					border: 0.1em solid var(--mainBlue);
				}
			}
		}
	}

	@media (max-width: 1023px) {
		& {
			.wrapper {
				width: 100%;
				padding: 2em 0;
			}
		}

		@media (max-width: 767px) {
			& {
				.wrapper {
					form {
						width: 90%;
					}
				}
			}
		}
	}
`;
