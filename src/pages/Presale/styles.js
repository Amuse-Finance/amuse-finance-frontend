import styled from "styled-components";

export const PresaleWrapper = styled.div`
	width: 100vw;
	color: var(--white);

	.banner {
		grid-template-columns: repeat(2, 1fr);
		width: 100%;
		height: 35vh;
		background: green;
		place-items: start;
		align-items: center;
		padding: 0 2em;

		.grid {
			width: 100%;
			font-size: 3em;
			place-items: center;
		}

		.image {
			width: 100%;
			height: 100%;
			place-items: end;
			place-items: end;
			align-items: center;
			padding: 0 2em 0 0;

			img {
				width: auto;
				height: 150px;
			}
		}
	}

	.card-container {
		grid-template-columns: repeat(3, 1fr);
		width: 80%;
		place-items: center;
		padding: 2em 4em;
		grid-gap: 2em 3em;

		.card {
			/* background: orange; */
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

	@media (max-width: 767px) {
		& {
			width: 100%;

			.card-container {
				grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
			}
		}
	}
`;
