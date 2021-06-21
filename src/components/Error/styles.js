import styled from "styled-components";

export const ErrorBanner = styled.div`
    position: absolute;
    top: 8em;
    left: 0;
    right: 0;
    height: 10em;
    width: 50vw;
    background: var(--darkGrey);
    color: var(--white);
    padding: 1em 2em;
    border-radius: 1em;


    & header {
        grid-template-columns: repeat(12, 1fr);
        width: 100%;

        & h1 { 
            grid-column: 1/12;
            margin: auto 0;
        }

        & button {
            grid-column: 13;
            outline: 0;
        }
    }

    & div {
        height: 2px;
        background: var(--mainGreen);
    }

    & section {
        & p .revert-reason { text-align: center }
    }

    
`;