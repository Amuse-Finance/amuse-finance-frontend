import styled from "styled-components";
import background from "../../assets/footer-bg.jpeg";

export const FooterContainer = styled.div`
	grid-template-columns: 2fr 2fr 1fr;
	grid-template-rows: minmax(200px, auto);
	grid-gap: 2rem;
	background: url(${background}) center/cover no-repeat;
	color: var(--white);
	padding: 3rem;

	& .center {
		line-height: 2.5;
		height: 100px;

		& h3 {
			text-transform: capitalize;
		}
	}

	& .form-control {
		margin: 1rem 0 0;

		& input {
			color: var(--darkGrey);
			width: 100%;
			height: 50px;
			padding: 1rem;
			letter-spacing: var(--letterSpacing);
			font-family: cursive;
			border-top-left-radius: 1rem;
			border-top-right-radius: 0.25rem;
			border-bottom-left-radius: 0.25rem;
			border-bottom-right-radius: 1rem;
		}
	}

	& .social-icons {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		width: auto;
		width: auto;
	}

	& .icon {
		margin: 0 1rem 0 0;
		font-size: 1.1rem;
	}
	& .icon:hover {
		color: var(--lightBlue);
	}

	@media (max-width: 1000px) {
		& {
			grid-template-columns: repeat(2, 1fr);
		}

		@media (max-width: 767px) {
			& {
				grid-template-columns: 1fr;
			}
			& .center {
				height: auto;
			}
			& .form-control input {
				width: 100%;
			}

			@media (max-width: 482px) {
				& .form-control {
					display: block;
				}
			}
		}
	}
`;
