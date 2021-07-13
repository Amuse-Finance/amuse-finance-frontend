import styled from "styled-components";

export const FooterContainer = styled.div`
	background: var(--mainBlue);
	color: var(--white);
	padding: 2em;
	width: 100vw;

	.wrapper {
		width: 100%;
		grid-template-columns: 2fr 1fr;

		section {
			place-items: start;
			width: 100%;
			line-height: 2;
			grid-gap: 0.5em 0;

			h1 {
				font-size: 1.5em;
			}

			p {
				font-size: 0.9em;
			}

			form {
				width: 100%;
				position: relative;

				input {
					width: 70%;
					height: 50px;
					padding: 0 0.75em;
					border-radius: 0.5em;
					background: var(--mainBlue);
					color: var(--white);
					border: 0.1em solid var(--white);
					letter-spacing: var(--mainSpacing);
				}

				button {
					position: absolute;
					top: 15px;
					right: 33%;
					outline: none;

					.icon {
						font-size: 1.25em;
						color: var(--white);
					}
				}
			}

			.social-icons {
				grid-template-columns: repeat(4, 1fr);
				width: 50%;
				place-items: start;
				margin: auto 0;
				padding: 1em 0;
				font-size: 1.25em;
			}
		}
	}

	@media (max-width: 767px) {
		& {
			.wrapper {
				grid-template-columns: 1fr;
				grid-gap: 2em 0;

				section {
					form {
						input {
							width: 95%;
						}

						button {
							right: 10%;
						}
					}
				}
			}
		}
	}
`;
