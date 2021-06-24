import styled from "styled-components";

export const PanelWrapper = styled.div`
    width: 350px;
    height: auto;
    background: var(--lightGrey);
    transition: var(--mainTransition);
    position: absolute;
    top: 6.275em;
    right: 0;
    border-bottom-left-radius: 1em;
    color: var(--darkGrey);

    & header {
        grid-template-columns: repeat(2, 1fr);
        width: 100%;
        height: auto;
        color: var(--darkGrey);
        padding: 0 1em;
        place-items: center;
        grid-gap: 0 2em;
        border-bottom: 2px solid var(--mainWhite);

        & .button {
            padding: 1em;
            border-radius: 1em;
            text-align: center;
            text-decoration: underline;
            color: inherit;
            font-weight: 700;
        }

    }

    & .list-container {
        padding: 2em 0;
        grid-gap: 0 4em;
        line-height: 2;
        height: auto;
        margin: 0;

        & li {
            grid-template-columns: repeat(2, 1fr);
            place-items: start;
        }
    }

`;