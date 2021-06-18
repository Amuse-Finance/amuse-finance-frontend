import styled from "styled-components";

export const Transaction = styled.div`
    width: 100vw;
    height: 200vh;
    padding: 0 3rem;

    & .transaction-header {
        grid-template-columns: repeat(3, 1fr);
        width: 50%;
        // background: red;
        place-items: start;
        margin: 0;
        transition: var(--mainTransition);

        & .tabs {
            width: 100%;
            place-self: start;
            // background: green;
            border: 1px solid var(--darkGrey);
            border-top: none;
            padding: 1rem;
            text-align: center;
            cursor: pointer;
            transition: all 1.5s ease-in-out;
        }

        & .active {
            background: green;
        }
    }
`;