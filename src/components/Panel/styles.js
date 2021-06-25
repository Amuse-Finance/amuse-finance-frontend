import styled from "styled-components";

export const PanelWrapper = styled.div`
    width: 270px;
    height: auto;
    background: var(--lightGrey);
    transition: var(--mainTransition);
    position: absolute;
    top: 6.275em;
    right: 1.5px;
    border-bottom-left-radius: 1em;
    color: var(--darkGrey);

    & header {
        grid-template-columns: repeat(2, 1fr);
        height: auto;
        color: var(--darkGrey);
        place-items: center;
        grid-gap: 0 .5em;
        border-bottom: 2px solid var(--mainWhite);

        & .grid {
            padding: 1em;
            border-radius: 1em;
            text-align: center;
            text-decoration: underline;
            color: inherit;
            font-weight: 700;
        }

    }

    & .list-container {
        width: 100%;
        place-items: start;
        margin: 0;
        line-height: 2;
        transition: var(--mainTransition);
        
        & .list-item {
            text-align: left;
            color: green;
            width: 100%;
            padding: .5em 1em;
            border-radius: inherit;
            transition: all 1s ease-in-out;
            cursor: pointer;

            &:hover {
                background: green;
                color: var(--white);
            }
        }

        & .list-item:nth-last-child(1) { border-bottom-left-radius: 1em; }
    }

`;