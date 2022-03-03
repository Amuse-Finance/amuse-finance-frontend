import styled from "styled-components";

export const PanelWrapper = styled.div`
	// width: 270px;
	width: 350px;
	height: auto;
	background: var(--mainWhite);
	transition: var(--mainTransition);
	position: absolute;
	top: 5.585em;
	right: 0;
	border-bottom-left-radius: 0.25em;
	color: var(--mainBlue);
	z-index: 100;
	border: 0.1em solid var(--mainBlue);
	border-top: none;
	border-right: none;

	header {
		width: 100%;
		height: auto;
		color: var(--darkGrey);
		grid-gap: 0 0.5em;
		padding: 0.5em 0;

		.top {
			grid-template-columns: repeat(12, 1fr);
			place-items: start;
			width: 100%;
			padding: 0 0 0 0.5em;

			h2 {
				grid-column: 1/8;
				font-size: 1em;
				font-weight: 600;
				width: 100%;
				padding: 0.25em 0;
			}

			p {
				grid-column: 8/12;
				background: var(--mainBlue);
				color: var(--white);
				opacity: 0.75;
				width: 100%;
				text-align: center;
				padding: 0.25em 0.75em;
				border-radius: 0.5em;
				font-weight: 500;
				font-size: 0.9em;
				letter-spacing: var(--mainSpacing);
				text-transform: capitalize;
			}
		}

		.body {
			grid-template-columns: repeat(12, 1fr);
			grid-gap: 0 1em;
			align-items: center;
			place-items: start;
			padding: 0 0 0 0.5em;

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

		.clipboard {
			grid-template-columns: 2fr 3fr;
			width: 100%;
			padding: 0.5em 0.5em 0;
			margin: 0 auto;

			.btn {
				width: 90%;
				grid-gap: 0 0.5em;

				button {
					padding: 0.25em 0.75em;
					background: transparent;
					color: var(--mainBlue);
					border: 0.1em solid var(--mainBlue);
					border-radius: 0.5em;
					font-weight: 600;
					width: 100%;
					transition: var(--mainTransition);

					&:hover {
						background: var(--mainBlue);
						color: var(--white);
					}
				}
			}
		}
	}

	.list-container {
		width: 100%;
		margin: 0;
		line-height: 2;
		transition: var(--mainTransition);
		padding: 0.5em;

		.list-item {
			text-align: left;
			width: 100%;
			padding: 0.5em;
			border-radius: inherit;
			transition: all 1s ease-in-out;
			cursor: pointer;
			margin: 0;

			&:hover {
				background: var(--mainBlue);
				color: var(--white);
			}

			h3 {
				width: 100%;
				place-items: start;
			}
		}
	}
`;
