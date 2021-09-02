import styled from "styled-components";

export const AccountContainer = styled.div`
	width: 80vw;
	margin: 2em auto;

	.header {
		width: 100%;
		grid-template-columns: repeat(3, 1fr);
		grid-gap: 0 2em;

		.bg {
			grid-column: 1/2;
			width: 100%;
			height: auto;
			place-items: center;
			padding: 4em 0;
			grid-gap: 2em 0;
			font-family: inherit;
			letter-spacing: var(--mainSpacing);

			.image {
				width: 100%;
				height: 100%;
				/* border-radius: 100%; */
				background: url(${(props) => props.image && props.image}) center/cover
					no-repeat;
				padding: 2em;
				position: relative;
				opacity: 0.75;

				.edit {
					position: absolute;
					top: 47.5%;
					left: 0;
					width: 100%;
					place-items: center;
					place-items: center;
					opacity: 1;

					.icon {
						font-size: 2em;
						cursor: pointer;
						color: var(--mainBlue);
					}
				}
			}
		}

		.collections {
			grid-column: 2/4;
			width: 100%;
			background: green;
			padding: 2em;

			.art-name {
				width: 100%;
			}

			.art-name {
				h1 {
					font-size: 2em;
				}
			}

			.art-ownerDetails {
				grid-template-columns: repeat(3, 1fr);
				grid-gap: 0 2em;
				background: red;
				width: 100%;
			}
		}
	}

	@media (max-width: 375px) {
		& {
			.bg {
				.description {
					h1 {
						font-size: 1.5em;
					}
				}
			}
		}
	}
`;
