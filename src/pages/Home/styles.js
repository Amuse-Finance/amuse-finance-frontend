import styled from "styled-components";

export const HomeWrapper = styled.div`
	position: relative;
	overflow-x: hidden;

	.banner {
		height: 75vh;
		width: 100%;
		grid-template-columns: repeat(2, 1fr);
		grid-gap: 2em 1em;

		.typewritter-effect {
			width: 100%;
			margin: auto;
			padding: 0 0 0 6em;

			div {
				line-height: 1.5;
				margin: auto;
				width: 100%;
				color: var(--mainBlue);

				h1 {
					font-size: 2em;
					font-weight: 900;
					letter-spacing: var(--mainSpacing);
				}

				p {
					font-size: 1.2em;
				}

				.btns {
					margin: 2em 0;

					a {
						width: 100%;

						button {
							background: var(--mainBlue);
							outline: none;

							width: 40%;
							margin: 0 0 1em;
							border-radius: 5em;
							color: var(--white);
							text-align: center;
							font-size: 1.05em;
							padding: 1em;
							border: 0.1em solid var(--mainBlue);
							transition: var(--mainTransition);
							font-family: cursive;

							&:hover {
								background: transparent;
								color: var(--mainBlue);
								border: 0.1em solid var(--mainBlue);
							}
						}

						.active {
							background: transparent;
							color: var(--mainBlue);

							&:hover {
								background: var(--mainBlue);
								color: var(--white);
							}
						}
					}
				}
			}
		}

		.custom {
			width: 100%;
			height: 100%;
			place-items: center;
			position: relative;

			.circle {
				width: 60%;
				height: 80%;
				border-radius: 100%;
				background: var(--mainBlue);
				margin: auto 0;
				margin-right: 0;
			}

			.dashboard-preview {
				position: absolute;
				top: 0;
				right: 0;
				height: 100%;

				.image {
					width: 100%;
					height: 100%;
					place-items: end;
					align-items: center;

					img {
						width: 66%;
						height: 66%;
					}
				}
			}
		}
	}

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

					.img {
						width: 100%;
						height: 100%;

						img {
							width: 50px;
							height: 50px;
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
			.banner {
				.typewritter-effect {
					div {
						.btns {
							button {
								width: 65%;
							}
						}
					}
				}
			}

			.chart-container {
				grid-template-columns: 1fr;
			}
		}

		@media (max-width: 1023px) {
			& {
				.banner {
					.typewritter-effect {
						padding: 0 0 0 2em;

						div {
							.btns {
								a {
									button {
										width: 70%;
										padding: 1.25em 0.5em;
									}
								}
							}
						}
					}
				}
			}

			@media (max-width: 767px) {
				& {
					.banner {
						grid-template-columns: 1fr;

						.typewritter-effect {
							grid-template-columns: repeat(12, 1fr);

							div {
								grid-column: 1/13;

								.btns {
									width: 100%;
									place-items: start;
									margin: 2em auto;
									padding: auto;

									a {
										width: 70%;
										button {
											width: 100%;
										}
									}
								}
							}
						}

						.custom {
							display: none;
						}
					}

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
	}
`;
