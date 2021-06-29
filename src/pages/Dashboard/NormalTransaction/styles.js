import styled from "styled-components";


export const NormalTransactionWrapper = styled.div`
    width: 100%;

    & .header {
        grid-template-columns: 1fr 4fr 4fr 4fr 2fr 2fr;
        align-items: center;
        width: 100%;
        height: 50px;
    }

    & .card-container {
        width: 100%;
        height: 100%;

        & .card {
            grid-template-columns: 1fr 4fr 4fr 4fr 2fr 2fr;
            align-items: center;
            width: 100%;
            height: 50px;
        }
    }
`;