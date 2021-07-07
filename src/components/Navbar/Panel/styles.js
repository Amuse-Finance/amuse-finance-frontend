import styled from "styled-components";

export const PanelWrapper = styled.div`
	// width: 270px;
	width: 350px;
	height: auto;
	background: var(--lightGrey);
	transition: var(--mainTransition);
	position: absolute;
	top: 7.2em;
	right: 1em;
	border-bottom-left-radius: 0.25em;
	color: var(--darkGrey);
	z-index: 100;

	header {
		width: 100%;
		height: auto;
		color: var(--darkGrey);
		grid-gap: 0 0.5em;
		padding: 0.5em;

		.top {
			/* grid-template-columns: 4fr 2fr; */
			grid-template-columns: repeat(12, 1fr);
			place-items: start;
			width: 100%;

			h2 {
				grid-column: 1/8;
				font-size: 0.825rem;
				font-weight: 500;
				width: 100%;
				padding: 0.25em 0;
			}

			p {
				grid-column: 8/12;
				background: var(--darkGrey);
				color: var(--white);
				opacity: 0.75;
				width: 100%;
				text-align: center;
				padding: 0.25em 0.75em;
				border-radius: 0.5em;
				font-weight: 500;
				font-size: 0.75em;
				letter-spacing: var(--mainSpacing);
				text-transform: capitalize;
			}
		}

		.clipboard {
			grid-template-columns: repeat(2, 1fr);
			width: 100%;
			grid-gap: 0 0.5em;
			padding: 1em 0.5em 0;

			.btn {
				background: red;
				button {
					padding: 0.25em 0.75em;
					background: gray;
					border-radius: 0.5em;
					font-weight: 600;
					transition: var(--mainTransition);

					&:hover {
						background: transparent;
						border: 1px solid gray;
					}
				}
			}
		}

		.body {
			grid-template-columns: repeat(12, 1fr);
			grid-gap: 0 1em;
			align-items: center;
			place-items: start;

			.bg {
				width: 20px;
				height: 20px;
				background: linear-gradient(to right, blue, green, red);
				border-radius: 100%;
				place-self: center;
			}

			.wallet {
				place-self: start;
				font-weight: 700;
				letter-spacing: var(--mainSpacing);
			}
		}

		.container {
			grid-template-columns: repeat(2, 1fr);
			place-items: center;
			border-radius: 1em;
			text-align: center;
			text-decoration: underline;
			color: inherit;
			font-weight: 700;
		}
	}

	.list-container {
		width: 100%;
		place-items: start;
		margin: 0;
		line-height: 2;
		transition: var(--mainTransition);
		padding: 0.5em;

		.list-item {
			text-align: left;
			color: green;
			width: 100%;
			padding: 0.5em;
			border-radius: inherit;
			transition: all 1s ease-in-out;
			cursor: pointer;

			&:hover {
				background: green;
				color: var(--white);
			}

			h3 {
				width: 100%;
			}
		}
	}
`;
