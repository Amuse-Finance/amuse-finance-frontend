import styled from "styled-components";

export const ChartWrapper = styled.div`
	grid-template-columns: repeat(2, 1fr);
	width: 100vw;
	padding: 1.5em 0;
	grid-gap: 2em;

	.fusion-chart {
		width: 100%;
		grid-gap: 2em 0;
		place-items: center;
		text-align: center;
		line-height: 2;

		h1 {
			font-size: 2em;
		}

		input {
			margin: 1em 0;
			padding: 0.5em 1em;
			border: 0.05em solid var(--darkGrey);
			background: transparent;
			border-radius: 0.5em;
		}
	}

	@media (max-width: 1023px) {
		& {
			grid-template-columns: 1fr;
		}

		@media (max-width: 767px) {
			& {
				.fusion-chart {
					display: none;
				}
			}
		}
	}
`;
