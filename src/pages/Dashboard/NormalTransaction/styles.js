import styled from "styled-components";

export const NormalTransactionWrapper = styled.div`
	width: 100%;

	.header {
		grid-template-columns: repeat(6, 1fr);
		align-items: center;
		width: 100%;
		height: 60px;
		background: var(--mainBlue);
		color: var(--white);
		margin: 0 0 1em;
		border-radius: 0.5em;
		font-weight: 500;
		letter-spacing: var(--mainSpacing);
	}

	.card-container {
		width: 100%;
		height: 100%;

		.card {
			grid-template-columns: repeat(6, 1fr);
			align-items: center;
			width: 100%;
			height: 55px;
			border-bottom: 0.1em solid gray;
		}
	}
`;
