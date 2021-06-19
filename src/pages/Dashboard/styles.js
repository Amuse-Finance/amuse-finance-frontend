import styled from "styled-components";

export const DashboardContainer = styled.div`    
    & .dashboard-wrapper {
        grid-template-columns: repeat(2, 1fr);
        width: 100%;
        grid-gap: 2em;
        padding: 4em 3em;


        & .card-container {
            grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
            grid-template-rows: auto;
            width: 100%;
            grid-gap: 2rem;
    
            & .card {
                width: 100%;
                height: 175px;
                background: var(--white);
                outline: none;
                padding: 1.5em 1em;
                border-radius: 1.5em;
                cursor: pointer;
                border: 1.5px solid var(--lightGrey);
                transition: all 2s ease-in-out;
                place-items: center;
                letter-spacing: var(--mainSpacing);
                font-size: 1.1em;
    
                &:hover {
                    box-shadow: 5px 5px 25px  #5bc6d0;
                    cursor: pointer;
                }
                
                & .sub-card {
                    grid-template-columns: 2fr 1fr 2fr;
                    place-items: center;
                    grid-gap: 0 .25em;
                    font-size: 1em;
                    font-weight: 900;
    
                    & .icon {
                        font-size: 2em;
                    }
                }
            }
        }
    }

    & .hide { display: none; }

    @media(max-width: 1591px) {
        & .dashboard-wrapper { 
            grid-template-columns: 1fr;
            padding: 2.5em 3em;
        }

        @media(max-width: 425px) {
            & .dashboard-wrapper { 
                padding: 2.5em 0; 
                grid-gap: 0 2em;
            }
            & .card-container {
                grid-template-columns: 1fr;
                padding: 2.5em .5em ;

            }
        }
    }
`;