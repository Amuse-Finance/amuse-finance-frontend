import styled from "styled-components";

export const TeamWrapper = styled.div`
	width: 100vw;
	padding: 2em 0;

	header {
		width: 50%;
		text-align: center;
		line-height: 1.25;
		padding: 0 0 1em;

		.icon {
			font-size: 4em;
			color: var(--darkGrey);
		}

		h1 {
			font-size: 4em;
			font-family: atmospheric;
			font-weight: 700;
		}

		h5 {
			text-transform: capitalize;
			font-size: 1.2em;
		}
	}

	.team-card-container {
		grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
		width: 70%;
		grid-gap: 3em;
		padding: 2em 4em;
		position: relative;
		border: none;

		.card {
			width: 100%;
			color: var(--white);
			border-radius: 0.45em;
			transition: var(--mainTransition);
			cursor: pointer;
			position: relative;

			&:hover {
				.details {
					background: transparent;
					border: 0.1em solid var(--mainBlue);
					color: var(--mainBlue);
					border-top: none;
				}
			}

			.role {
				background: var(--mainBlue);
				position: absolute;
				top: 0;
				left: 0;
				padding: 0.2em 1em;
				border-radius: 0.45em 0 0.45em 0;
				color: var(--white);
				letter-spacing: var(--mainSpacing);
				text-transform: uppercase;
			}

			.image {
				border-radius: inherit;
				border-bottom-left-radius: 0;
				border-bottom-right-radius: 0;
				grid-row: 1/5;
				transition: var(--mainTransition);

				img {
					background-repeat: no-repeat;
					border-radius: inherit;
					height: 300px;
					width: 100%;
					background-position: cover;
					background-size: center;
					transition: var(--mainTransition);
				}
			}

			.details {
				grid-row: 5/6;
				width: 100%;
				padding: 0.5em 1em;
				letter-spacing: var(--mainSpacing);
				line-height: 1.5;
				background: var(--mainBlue);
				border-radius: inherit;
				border-top-left-radius: 0;
				border-top-right-radius: 0;
				transition: var(--mainTransition);

				h1 {
					font-size: 1.25em;
				}

				small {
					font-size: 0.75em;
				}

				.social-handles {
					grid-template-columns: repeat(4, 1fr);
					width: 80%;
					place-items: center;
					padding: 0.5em 0;

					.icon {
						font-size: 1.3em;

						&:hover {
							color: var(--mainBlue);
						}
					}
				}
			}
		}
	}

	@media (max-width: 767px) {
		& {
			header {
				width: 100%;
				text-align: center;
				line-height: 1.25;

				h1 {
					font-size: 2.25em;
					font-family: atmospheric;
					font-weight: 700;
				}

				h5 {
					font-size: 1.25em;
					font-weight: 300;
				}
			}

			.team-card-container {
				width: 100%;
			}
		}

		@media (max-width: 425px) {
			& {
				.team-card-container {
					grid-template-columns: repeat(auto-fill, minmax(330px, 1fr));
					width: 100%;
					grid-gap: 3em;
					padding: 2em 0.75em;
				}
			}
		}
	}
`;
