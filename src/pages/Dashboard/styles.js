import styled from "styled-components";

export const DashboardContainer = styled.div`
	.dashboard-wrapper {
		width: 100%;
		grid-gap: 2em;
		padding: 4em 3em;

		.card-container {
			grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
			grid-template-rows: auto;
			width: 100%;
			grid-gap: 2rem;

			.card {
				width: 100%;
				height: 200px;
				background: var(--white);
				color: var(--mainBlue);
				outline: none;
				padding: 1.5em 1em;
				border-radius: 1em;
				cursor: pointer;
				border: 1.5px solid var(--lightGrey);
				transition: all 2s ease-in-out;
				place-items: center;
				letter-spacing: var(--mainSpacing);
				font-size: 1.1em;

				&:hover {
					box-shadow: 5px 5px 25px var(--lightGrey);
					cursor: pointer;
				}

				h3 {
					font-weight: 600;
				}

				.sub-card {
					grid-template-columns: 2fr 1fr 2fr;
					place-items: center;
					grid-gap: 0 0.75em;
					font-size: 0.75em;
					font-weight: 900;
					width: 100%;

					.text {
						border: 1px solid rgba(14, 60, 98, 0.56);
						padding: 0.5em;
						border-radius: 0.75em;
						font-weight: 600;
						width: 150px;
						/* font-size: 1.1em; */
						place-items: center;
					}

					.icon {
						font-size: 2em;
						background: var(--mainBlue);
						padding: 0.5em 0.5em;
						border-radius: 100%;
						color: var(--white);
					}
				}
			}
		}
	}

	.txn-data {
		grid-template-columns: 1fr;
		width: 100vw;
		padding: 0 3em 3em;

		.transaction-header {
			grid-template-columns: repeat(2, 1fr);
			width: 27.5%;
			height: 55px;
			place-items: start;
			margin: 0 0 1em;
			grid-gap: 0 0.5em;
			transition: var(--mainTransition);

			.tabs {
				width: 100%;
				height: 100%;
				place-self: start;
				border: none;
				background: var(--white);
				text-align: center;
				align-items: center;
				cursor: pointer;
				transition: all 1.25s ease-in-out;
				letter-spacing: var(--mainSpacing);
				word-spacing: var(--wordSpacing);
				outline: none;
				border-radius: 0.25em;
			}

			.active {
				background: var(--mainBlue);
				color: var(--white);
			}
		}

		.transaction-body {
			width: 100%;
			line-height: 2;
		}
	}

	.hide {
		display: none;
	}

	@media (max-width: 1591px) {
		& {
			.dashboard-wrapper {
				grid-template-columns: 1fr;
				padding: 2.5em 3em;
			}
		}

		@media (max-width: 767px) {
			& {
				.dashboard-wrapper {
					padding: 2.5em 0;
					grid-gap: 0 2em;

					.card-container {
						grid-template-columns: 1fr;
						padding: 2.5em 0.5em;

						.sub-card {
							.text {
								padding: 0.5em 0.75em;
								font-size: 1em;
								width: 120px;
							}
						}
					}
				}
			}
		}
	}
`;
