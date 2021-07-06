import styled from "styled-components";

export const RefferalWrapper = styled.div`
    width: 100%;
    background: var(--mainWhite);
    border-radius: .75em;
    padding: 0 1em 1em;
    min-height: 400px;

    & .header {
        grid-template-columns: 1fr 4fr 4fr 4fr 4fr 2fr;
        align-items: center;
        width: 100%;
        height: 50px;
    }

    & .card-container {
        width: 100%;
        height: 100%;

        & .card {
            grid-template-columns: 1fr 4fr 4fr 4fr 4fr 2fr;
            align-items: center;
            width: 100%;
            height: 50px;
        }
    }
`;