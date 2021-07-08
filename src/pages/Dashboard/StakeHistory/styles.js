import styled from "styled-components";

export const StakeTransactionWrapper = styled.div`
	width: 100%;

	& .header {
		grid-template-columns: 1fr 4fr 4fr 4fr 4fr 2fr;
		align-items: center;
		width: 100%;
		height: 60px;
		background: var(--mainBlue);
		color: var(--white);
		border-radius: 0.5em;
	}

	& .card-container {
		width: 100%;
		height: 100%;

		& .card {
			grid-template-columns: 1fr 4fr 4fr 4fr 4fr 2fr;
			align-items: center;
			width: 100%;
			height: 55px;
			border-bottom: 0.1em solid gray;
		}
	}
`;
