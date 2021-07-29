import styled from "styled-components";

export const PresaleWrapper = styled.div`
	width: 100vw;
	color: var(--white);
	overflow-x: hidden;

	.wrapper {
		grid-gap: 0 2em;
		width: 100%;

		.card-container {
			grid-template-columns: repeat(3, 1fr);
			width: 80%;
			place-items: center;
			padding: 2em 4em;
			grid-gap: 2em 3em;
			border-bottom: 0.1em solid var(--mainBlue);

			.card {
				width: 100%;
				padding: 1em 2em;
				border-right: 0.1em solid gray;
				color: var(--darkGrey);
				grid-gap: 0.5em 0;

				h1 {
					font-size: 1.25em;
				}

				&:nth-child(3n) {
					border: none;
				}
			}
		}
	}

	.presale-form {
		width: 100vw;
		padding: 2em 0;

		.wrapper {
			background: var(--white);
			color: var(--mainBlue);
			width: 40%;
			padding: 2em;
			border-radius: 1em;
			box-shadow: 2.5px 2.5px 20px var(--mainBlue);
			margin: 2em auto;
			letter-spacing: var(--mainSpacing);
			grid-gap: 1.5em 0;

			header {
				margin-bottom: 1em;
				font-size: 2.5em;
			}

			.currencies {
				grid-template-columns: repeat(2, 1fr);
				grid-template-rows: 100px;
				width: 100%;
				grid-gap: 2em;
				color: var(--white);

				.currency {
					grid-template-columns: repeat(12, 1fr);
					background: var(--mainBlue);
					width: 100%;
					height: 100%;
					place-items: center;
					grid-gap: 0 1em;
					padding: 1em;
					border-radius: 1em;

					.image {
						grid-column: 1/4;
						height: 100%;
						width: 100%;
						place-items: center;

						img {
							width: 100px;
							height: 50px;
							border-radius: 50%;
							border: 0.1em solid var(--white);
							background: var(--white);
						}
					}
					.ticker {
						grid-column: 4/13;
						width: 100%;

						h1 {
							font-weight: 800;
						}

						p {
							font-size: 0.9em;
						}
					}
				}
			}

			.price-formatter {
				width: 100%;
				letter-spacing: var(--mainSpacing);
				grid-gap: 1em 0;

				.converter {
					grid-template-columns: repeat(2, 1fr);
					place-items: start;
					width: 100%;
					grid-gap: 0 2em;

					.grid {
						width: 100%;
						font-weight: 700;
						font-size: 1.1em;
					}

					.second {
						text-align: end;
					}
				}

				.underline {
					width: 100%;
					background: var(--mainBlue);
					height: 0.1em;
				}
			}

			.form-group {
				width: 100%;
				grid-gap: 1em 0;

				.grid {
					width: 100%;
					position: relative;

					input,
					button {
						height: 50px;
						padding: 0 1em;
						border-radius: 0.5em;
						letter-spacing: var(--mainSpacing);
						width: 100%;
					}

					input {
						background: var(--mainWhite);
					}

					button {
						background: var(--mainBlue);
						color: var(--white);
					}

					.coin {
						position: absolute;
						top: 10px;
						right: 15px;
						font-weight: 800;
					}
				}
			}
		}
	}

	@media (max-width: 1700px) {
		& {
			.presale-form {
				.wrapper {
					width: 60%;
				}
			}
		}

		@media (max-width: 1200px) {
			& {
				width: 100%;

				.wrapper {
					.card-container {
						grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
						.card {
							border: none;
						}
					}
				}

				.presale-form {
					width: 90%;

					.wrapper {
						width: 100%;
						padding: 2em 1em;

						header {
							font-size: 1.75em;
						}

						.currencies {
							grid-template-columns: 1fr;
						}
					}
				}
			}
		}

		@media (max-width: 767px) {
			& {
				.wrapper {
					.card-container {
						.card {
							border: none;
						}
					}
				}
			}
		}
	}
`;
