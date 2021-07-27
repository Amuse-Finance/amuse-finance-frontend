import styled from "styled-components";

export const PresaleWrapper = styled.div`
	width: 100vw;
	color: var(--white);

	.card-container {
		grid-template-columns: repeat(3, 1fr);
		width: 80%;
		place-items: center;
		padding: 2em 4em;
		grid-gap: 2em 3em;

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

	.presale-form {
		background: orange;
		width: 100vw;
		padding: 2em 0;

		form {
			background: green;
			width: 40%;
			height: 700px;
			padding: 2em;
			border-radius: 1em;

			header {
				h1 {
					font-size: 2em;
				}
			}

			.currencies {
				grid-template-columns: repeat(2, 1fr);
				grid-template-rows: 100px;
				width: 100%;
				grid-gap: 2em;

				.currency {
					grid-template-columns: repeat(12, 1fr);
					background: grey;
					width: 100%;
					height: 100%;
					place-items: center;

					.image {
						grid-column: 1/4;
						height: 100%;
						width: 100%;
						background: red;

						img {
							width: 100%;
							height: 50px;
						}
					}
				}
			}

			.prices {
				background: green;
				width: 100%;
			}
		}
	}

	@media (max-width: 767px) {
		& {
			width: 100%;

			.card-container {
				grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
				.card {
					border: none;
				}
			}
		}
	}
`;
