import styled from "styled-components";

export const PanelWrapper = styled.div`
    // width: 270px;
    width: 350px;
    height: auto;
    background: var(--lightGrey);
    transition: var(--mainTransition);
    position: absolute;
    top: 6.275em;
    right: 3px;
    border-bottom-left-radius: .25em;
    color: var(--darkGrey);
    z-index: 100;

    header {
        width: 100%;
        height: auto;
        color: var(--darkGrey);
        grid-gap: 0 .5em;
        padding: .5em;


        .top {
            grid-template-columns: 4fr 2fr;
            place-items: start;
            width: 100%;

            h2 {
                grid-columns: 1/8;
                font-size: 0.825rem;
                font-weight: 500;
                width: 100%;
                padding: .25em 0;
            }
            
            p {
                grid-columns: 8/13;
                background: var(--darkGrey);
                color: var(--white);
                opacity: .75;
                width: 100%;
                text-align: center;
                padding: .25em .75em;
                border-radius: .5em;
                font-weight: 500;
                font-size: .75em;
                letter-spacing: var(--mainSpacing);
                text-transform: capitalize;
            }
        }

        .clipboard {
            grid-template-columns: repeat(2, 1fr);
            width: 100%;
            grid-gap: 0 .5em;
            padding: 1em .5em 0;

            button {
                padding: .25em 1em;
                background: gray;
                border-radius: .5em;
                font-weight: 600;
                transition: var(--mainTransition);

                &:hover {
                    background: transparent;
                    border: 1px solid gray;
                }
            }
        }

        .body {
            grid-template-columns: repeat(12, 1fr);
            grid-gap: 0 1em;
            align-items: center;
            
            .bg {
                grid-columns: 1;
                width: 20px;
                height: 20px;
                background: linear-gradient(to right, blue, green, red);
                border-radius: 100%;
            }

            .wallet {
                grid-columns: 1/12;
                place-self: start;
                font-weight: 700;
                letterr-spacing: var(--mainSpacing);
            }
        }

        .container {
            grid-template-columns: repeat(2, 1fr);
            place-items: center;
            border-radius: 1em;
            text-align: center;
            text-decoration: underline;
            color: inherit;
            font-weight: 700;
        }

    }

    .list-container {
        width: 100%;
        place-items: start;
        margin: 0;
        line-height: 2;
        transition: var(--mainTransition);
        padding: .5em;
        
        .list-item {
            text-align: left;
            color: green;
            width: 100%;
            padding: .5em;
            border-radius: inherit;
            transition: all 1s ease-in-out;
            cursor: pointer;

            &:hover {
                background: green;
                color: var(--white);
            }

            h3 {  width: 100%; }
        }

    }

`;