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
        border-top-left-radius: .75em;

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
            outline: none;
        }

        & #transaction_history { border-top-left-radius: .75em; }

        & .active { 
            background: green; outline: none;
            color: var(--white);
        }
        & .refferal { border-right: none; }
    }

    & .transaction-body {
        width: 100%;
        background: var(--white);
        padding: 1rem 0;
        line-height: 2;
    }
`;