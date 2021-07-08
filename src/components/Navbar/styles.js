import styled from "styled-components";

export const NavbarContainer = styled.div`
	grid-template-columns: repeat(12, 1fr);
	background: var(--white);
	color: var(--darkGrey);
	width: 100vw;
	height: auto;
	z-index: 1;
	position: relative;
	padding: 1.75em 2rem;

	.nav-brand,
	.nav-list,
	.nav-icons,
	.toggle {
		margin: auto;
	}

	.nav-brand {
		grid-column: 1/2;
		width: 100%;
		height: 100%;
		letter-spacing: var(--mainSpacing);
		align-items: center;

		img {
			width: 50px;
			height: 50px;
			/* border-radius: 100%; */
		}
	}

	.nav-list {
		grid-column: 2/12;
		text-transform: capitalize;

		ul {
			a {
				padding: 0 2rem;
				letter-spacing: var(--mainSpacing);
				font-weight: 500;
				font-size: 1.1em;
			}
		}
	}

	.nav-icons {
		grid-template-columns: 1fr;
		grid-column: 12/13;
		height: 35px;
		width: 100%;

		img {
			width: 40px;
			height: 40px;
			margin: auto;
			border-radius: 100%;
			border: 2px solid var(--red);
			cursor: pointer;
		}

		.online {
			border: 2px solid green;
		}
	}

	.toggle {
		display: none;
	}

	@media (max-width: 1023px) {
		& {
			padding: 1rem 2rem;

			.toggle {
				padding: 2rem 0;
				display: grid;
				grid-column: 13;
				font-size: 1.25rem;
				cursor: pointer;
			}

			.nav-brand {
				grid-column: 1/10;
				margin-left: 0;
				padding: 0.5em 0;
			}

			.nav-list,
			.nav-icons {
				display: none;
			}

			.nav-list-mobile {
				display: grid;
				grid-column: 1/14;
				grid-row: 2;
				margin: 0.5rem 0 0;
				color: var(--darkGrey);
			}
		}

		/* Nav list */
		.nav-list-mobile {
			display: grid;
			grid-column: 1/14;
			grid-row: 2;
			margin: 0.5rem 0 0;
			color: var(--darkGrey);

			ul {
				display: grid;
				grid-template-columns: 1fr;
				grid-template-rows: auto;
				padding-bottom: 1rem;

				a {
					padding: 0.5rem 1.25rem !important;
					letter-spacing: var(--mainSpacing);
				}
			}
		}
	}
`;
