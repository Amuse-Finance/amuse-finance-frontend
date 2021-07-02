import styled from "styled-components";

export const TeamWrapper = styled.div`
    width: 100vw;
    padding: 2em 0;

    header {
        width: 50%;
        text-align: center;
        line-height: 1.25;

        .icon {
            font-size: 4em;
            color: var(--darkGrey);
        }

        h1 {
            font-size:4em;
            font-family: atmospheric;
            font-weight: 700;
        }

        h5 { text-transform: capitalize; }
    }

    .team-card-container {
        grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
        width: 70%;
        grid-gap: 3em;
        padding: 2em 4em;
        position: relative;
        border: none;

        .card {
            width: 100%;
            height: auto;
            background: grey;
            border-radius: .5em;
            transition: var(--mainTransition);
            cursor: pointer;
            
            .image {
                border-radius: inherit;
                border-bottom-left-radius: 0;
                border-bottom-right-radius: 0;
                grid-row: 1/5;
                transition: var(--mainTransition);

                img {
                    background-repeat: no-repeat;
                    border-radius: inherit;
                    height: 100%;
                    width: 100%;
                    background-position: cover;
                    background-size: center;
                    transition: var(--mainTransition);

                }
            }

            .details {
                grid-row: 5/6;
                width: 100%;
                padding: .5em 1em;
                letter-spacing: var(--mainSpacing);
                line-height: 1.5;
                color: var(--white);


                h1 { font-size: 1.25em; }
                small { font-size: .75em; }

                .social-handles {
                    grid-template-columns: repeat(4, 1fr);
                    width: 80%;
                    place-items: center;
                    padding: .5em 0;
                    font-size: 1.2em;
                    
                }
            }
        }
    }

    @media(max-width: 767px) {
        & {
            .team-card-container { width: 100% }
        }

        @media(max-width: 425px) {
            & {
                .team-card-container {
                    grid-template-columns: repeat(auto-fill, minmax(330px, 1fr));
                    width: 100%;
                    grid-gap: 3em;
                    padding: 2em .75em;
                }
            }
        }
    }
`;