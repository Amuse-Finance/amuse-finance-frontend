import styled from "styled-components";

export const FooterContainer = styled.div`
    grid-template-columns: 2fr 2fr 1fr;
    grid-template-rows: minmax(200px, auto);
    grid-gap: 2rem;
    background-color: #000;
    color: var(--white);
    padding: 3rem;
    border-top: 1px solid var(--white);

    & .center {
        line-height: 2.5;
        height: 100px;
        width: 100%;
    }
    & .center h3 { text-transform: capitalize; }
    /* & .center small { color: var(--lightGrey); } */

    & .form-control { margin: 1rem 0 0; }
    & .form-control input {
        color: var(--darkGrey);
        height: 50px;
        padding: 1rem;
        letter-spacing: var(--letterSpacing);
        font-family: cursive;
        border-top-left-radius: 1rem;
        border-top-right-radius: .25rem;
        border-bottom-left-radius: .25rem;
        border-bottom-right-radius: 1rem;
    }
    & .form-control input { width: 80%; }
    & .form-control input::placeholder { text-transform: capitalize; }


    & .social-icons { 
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        width: auto;
        width: auto;
    }

    & .icon { margin: 0 1rem 0 0; font-size: 1.1rem; }
    & .icon:hover { color: var(--lightBlue); }

    @media (max-width: 1000px) {
        & { grid-template-columns: repeat(2, 1fr); }
    
        @media (max-width: 767px) {
            & { grid-template-columns: 1fr; }
            & .center { height: auto; }
            & .form-control input { width: 100%; }

            @media (max-width: 482px) {
                & .form-control { display: block; }
            }
        }
    }
`