import styled from "styled-components";

export const Transaction = styled.div`
    grid-template-columns: 1fr;
    width: 100vw;
    padding: 0 3em 3em;

    & .transaction-header {
        grid-template-columns: repeat(3, 1fr);
        width: 50%;
        height: 55px;
        place-items: start;
        margin: 0;
        background: var(--white);


        & .tabs {
            width: 100%;
            height: 100%;
            place-self: start;
            border: none;
            border-right: 1px solid var(--darkGrey);
            border-bottom: 1px solid var(--darkGrey);
            text-align: center;
            align-items: center;
            cursor: pointer;
            border-collapse: collapse;
            transition: all 1.25s ease-in-out;
            letter-spacing: var(--mainSpacing);
            word-spacing: var(--wordSpacing);
        }

        & .active { background: green; }
        & .refferal { border-right: 1px solid var(--darkGrey); }
    }

    & .transaction-body {
        width: 100%;
        // border: 1.5px solid var(--darkGrey);
        background: var(--white);
    }
`;