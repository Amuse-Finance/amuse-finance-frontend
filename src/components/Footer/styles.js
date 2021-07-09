import styled from "styled-components";

export const FooterContainer = styled.div`
	grid-template-columns: 2fr 2fr 1fr;
	grid-template-rows: minmax(200px, auto);
	grid-gap: 2rem;
	background: var(--mainBlue);
	color: var(--white);
	padding: 2em 3rem;
	place-items: start;
	align-items: center;

	h1 {
		font-size: 1.25em;
	}

	.form {
		width: 100%;
		place-items: center;
		grid-gap: 0.25em 0;

		.form-control {
			margin: 0.5em 0 0;
			width: 70%;

			input {
				color: var(--darkGrey);
				width: 100%;
				height: 50px;
				padding: 1rem;
				letter-spacing: var(--letterSpacing);
				border-radius: 1em 0.25em 1em 0.25em;
			}
		}
	}

	.socials {
		width: 100%;
		grid-gap: 0.25em 0;
		letter-spacing: var(--mainSpacing);

		p {
			font-size: 0.8em;
		}

		.social-icons {
			display: grid;
			grid-template-columns: repeat(4, 1fr);
			width: auto;
			width: auto;

			.icon {
				margin: 0 1rem 0 0;
				font-size: 1.25rem;

				&::hover {
					color: var(--lightBlue);
				}
			}
		}
	}

	@media (max-width: 1000px) {
		& {
			grid-template-columns: repeat(2, 1fr);
		}

		@media (max-width: 767px) {
			& {
				grid-template-columns: 1fr;
				width: 100%;

				.center {
					height: auto;
				}

				.form {
					place-items: start;
					width: 100%;
					.form-control {
						input {
							width: 100%;
						}
					}
				}
			}
		}
	}
`;
