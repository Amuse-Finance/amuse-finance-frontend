import styled from "styled-components";

export const RegisterReferralContainer = styled.div`
	width: 100vw;

	& .wrapper {
		width: 70%;
		grid-gap: 2em 4em;
		padding: 4rem 0;

		& h2 {
			font-size: 1.5em;
			font-weight: 900;
			letter-spacing: var(--mainSpacing);
			margin: 0 0 1em;
		}

		& form {
			width: 50%;
			background: var(--mainBlue);
			color: var(--white);
			place-items: center;
			padding: 2em;
			grid-gap: 1.25em 0;
			border-radius: 0.75em;

			& input {
				width: 100%;
				height: 60px;
				padding: 0.75em;
				border-radius: 0.5em;
				border: 0.1em solid gray;
			}

			& button {
				background: var(--mainGreen);
				width: 100%;
				height: 60px;
				border-radius: 0.5em;
				letter-spacing: 0.25em;
				color: var(--white);
				transition: var(--mainTransition);

				&:hover {
					color: var(--mainGreen);
					background: transparent;
					border: 0.05em solid var(--mainGreen);
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
