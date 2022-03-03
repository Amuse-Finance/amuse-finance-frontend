import styled from "styled-components";

export const FaucetHistoryContainer = styled.div`
	width: 100%;
	grid-template-rows: 10% 90%;

	.header {
		grid-template-columns: 1fr 2fr 2fr 2fr;
		align-items: center;
		width: 100%;
		background: var(--mainBlue);
		color: var(--white);
		border-radius: 0.5em 0.5em 0 0;
	}

	.card-container {
		width: 100%;
		color: var(--mainBlue);
		background: var(--mainWhite);
		border-radius: 0 0 0.5em 0.5em;
		overflow-y: auto;

		.card {
			grid-template-columns: 1fr 2fr 2fr 2fr;
			align-items: center;
			width: 100%;
			height: 55px;
			border-top: 0.1em solid gray;
		}
	}
`;
