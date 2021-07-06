import styled from 'styled-components';

export const NavbarContainer = styled.div`
    grid-template-columns: repeat(12, 1fr);
    background: #000;
    color: var(--white);
    border-bottom: ${props => props.theme !== 'dark' && '1px solid var(--darkGrey)'};
    width: 100vw;
    height: auto;
    z-index: 1;
    position: relative;

    .nav-brand {  
        align-items: center;

        img {
            width: 50px;
            height: 50px;
            border-radius: 100%;
        }
    }

    & .nav-list ul a,
    & .toggle {
        color: var(--white);
    }
`