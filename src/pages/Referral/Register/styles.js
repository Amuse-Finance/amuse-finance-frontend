import styled from "styled-components";

export const RegisterReferralContainer =  styled.div`
    width: 100vw;

    & .wrapper {
        width: 70%;
        grid-gap: 2em 4em;
        padding: 4rem 0;

        & h2 {
            font-size: 1.5em;
            font-weight: 900;
            letter-spacing: var(--mainSpacing);
        }

        & form {
            width: 50%;
            background: var(--mainWhite);
            place-items: center;
            padding: 2em;
            line-height: 2;
            grid-gap: 1.25em 0;

            & input {
                width: 100%;
                height: 60px;
                padding: .75em;
                border-radius: .5em;
                border: .1em solid gray;
            }

            & button {
                background: var(--mainGreen);
                width: 100%;
                height: 60px;
                border-radius: .5em;
                letter-spacing: .25em;
                color: var(--white);
                transition: var(--mainTransition);

                &:hover {
                    color: var(--mainGreen);
                    background: transparent;
                    border: .05em solid var(--mainGreen);
                }
            }
        }
    }

    @media(max-width: 1023px) {
        & {
            .wrapper {
                width: 100%;
                padding: 2em 0;
            }
        }

        @media(max-width: 767px) {
            & {
                .wrapper {    
                    form { width: 90%; }
                }
            }
        }
    }
`;