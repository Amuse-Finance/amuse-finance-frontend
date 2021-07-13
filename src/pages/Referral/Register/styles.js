import styled from "styled-components";
import background from "../../../assets/background.jpeg";

export const RegisterReferralContainer = styled.div`
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
			margin: 0 0 1em;
		}

		form {
			width: 50%;
			background: var(--white);
			color: var(--mainBlue);
			place-items: center;
			padding: 2em;
			grid-gap: 1em 0;
			border-radius: 0.75em;

			input {
				width: 100%;
				height: 60px;
				padding: 0.75em;
				border-radius: 0.5em;
				border: 0.1em solid gray;
			}

			button {
				background: var(--mainBlue);
				width: 100%;
				height: 60px;
				border-radius: 0.5em;
				letter-spacing: 0.25em;
				color: var(--white);
				transition: var(--mainTransition);

				&:hover {
					color: var(--mainBlue);
					background: transparent;
					border: 0.05em solid var(--mainBlue);
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
					width: 100%;
					padding: 4em 1em 4em 0.1em;
					form {
						width: 90%;
						padding: 2em;
					}
				}
			}
		}
	}
`;
