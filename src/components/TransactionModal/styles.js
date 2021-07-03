import styled from "styled-components";

export const TransactionWrapper = styled.div`
    grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
    position: fixed;
    bottom: 2em;
    right: 0;
    height: 100px;

    .main-content {
        position: relative;
        background: var(--mainWhite);
        height: 100%;
        place-self: end;
        text-align: left;
        width: 100%;
        margin: 0 2em 0 0;
        padding: 1em;
        border-radius: .75em;
        box-shadow: 5px 5px 7.5px var(--lightGrey);
        letter-spacing: var(--mainSpacing);

        .close {
            position: absolute;
            top: 1em;
            right: .5em;
            font-size: 1.25em;
            cursor: pointer;
        }
    }
`;