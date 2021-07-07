import styled from "styled-components";

export const Web3ModalWrapper = styled.div`
	position: fixed;
	width: 100vw;
	height: 100vh;
	top: 0;
	padding: 0 1em;
	color: var(--white);
	opacity: 0.95;

	.container {
		width: 500px;
		height: auto;
		background: var(--darkGrey);
		place-items: center;
		margin: 10em auto auto;
		padding: 2em;
		border-radius: 0.5em;
		position: relative;

		header {
			/* place-items: center; */
			grid-gap: 1em 0;

			h1 {
				font-size: min(2em, 100px);
			}

			.disclaimer {
				background: green;
				padding: 1em;
				border-radius: 1em;
				background: rgb(33, 36, 41);
			}
		}

		.icon {
			position: absolute;
			top: 0;
			right: 1em;
			padding: 1.5em 0;
			font-size: 1.5em;
			cursor: pointer;
		}

		.providers {
			grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
			width: 100%;
			padding: 2em 0;
			grid-gap: 1em 2em;

			.card {
				width: 100%;
				height: 100%;
				border-radius: 1em;
				margin-bottom: 3em;
				cursor: pointer;

				img {
					width: 100%;
					height: 100px;
					background: red;
					border-radius: inherit;
				}
			}
		}
	}

	@media (max-width: 500px) {
		& {
			padding: 1em 0;

			.container {
				margin: 2.5em auto auto;

				.providers {
					grid-template-columns: 1fr;

					.card {
						height: auto;
						margin-bottom: 0;
					}
				}
			}
		}
	}
`;
