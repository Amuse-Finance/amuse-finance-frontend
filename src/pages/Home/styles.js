import styled from "styled-components";

export const HomeWrapper = styled.div`
	.features-container {
		background: var(--mainBlue);
		place-items: center;
		padding: 2em 0;
		width: 100%;

		header {
			letter-spacing: var(--mainSpacing);
			line-height: 1.75;
			place-items: center;
			color: var(--white);
			padding: 2em;
			width: 60%;
			text-align: center;

			h1 {
				font-size: 2em;
				text-transform: capitalize;
			}
		}

		.card-container {
			width: 100%;
			place-items: center;
			padding: 0 1em 0 0;

			.wrapper {
				grid-template-columns: repeat(auto-fit, minmax(270px, 1fr));
				grid-gap: 2em;
				width: 100%;
				padding: 2em;
				margin: 0 auto;

				.card {
					width: 100%;
					background: var(--white);
					color: var(--darkGrey);
					border-radius: 1em;
					padding: 2em;
					grid-gap: 1em 0;

					:hover {
						background: var(--hoverBlue);
					}

					.block-container {
						width: 100%;
						grid-template-columns: 3% 97%;

						.blocks {
							width: 100%;
							height: 30px;
							grid-gap: 0 0.09em;
							grid-template-columns: repeat(2, 1fr);
							place-items: start;
							margin: 0;
							.block {
								width: 100%;
								height: 100%;
								background: #3db3e2;
								text-align: left;
							}
						}
						.sorted-arrow {
							width: 100%;
							align-items: center;
							color: #d6b1ff;
							font-size: 1.35em;
						}
					}

					.header {
						width: 100%;
						text-transform: capitalize;
						font-size: 1.5em;
						letter-spacing: var(--mainSpacing);
						font-weight: 800;
						place-items: start;
					}

					.detail {
						width: 100%;
						font-size: 1em;
						font-weight: 500;
						letter-spacing: var(--mainSpacing);
					}
				}
			}
		}
	}

	.chart-container {
		grid-template-columns: repeat(2, 1fr);
		width: 100vw;
		padding: 1.5em 0;
		grid-gap: 2em;

		.wrapper {
			width: 100%;
			grid-gap: 2em 0;
			place-items: center;
			text-align: center;
			line-height: 2;

			header {
				h1 {
					font-size: 2em;
				}
			}

			form {
				input {
					margin: 1em 0;
					padding: 0.5em 1em;
					border: 0.05em solid var(--darkGrey);
					background: transparent;
					border-radius: 0.5em;
				}
			}

			.fusion-chart {
				width: 100%;
				place-items: center;
			}
		}
	}

	@media (max-width: 1439px) {
		& {
			.chart-container {
				grid-template-columns: 1fr;
			}
		}

		@media (max-width: 767px) {
			& {
				.features-container {
					border-bottom: 0.1em solid var(--white);

					header {
						width: 100%;
					}
					.card-container {
						padding: 0 0em 0 0;
					}
				}

				.chart-container {
					display: none;
				}
			}
		}
	}
`;
