import { useState, useContext } from 'react';
import { NavLink, Link } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";
import { web3Context } from "../Context";
import { ErrorBoundary } from "../ErrorBoundary";
import amuseLogo from "../../assets/Amuse-logo.jpg";
import './navbar.css';

import { NavbarContainer } from './styles'
import user from '../../assets/login/userLogin.jpeg';
import Panel from './Panel';

const Navbar = ({ theme }) => {
    const [navOpen, setNavOpen] = useState(false);
    const [panelState, setPanelState] = useState(false)
    const { loading } = useContext(web3Context);

    const pages = [
        { name: "Home", path: "" },
        { name: "Dashboard", path: "dashboard" },
        { name: "Vault", path: "vault" },
        { name: "Team", path: "team" },
        { name: "Contact", path: "contact" },
        { name: "FAQ", path: "faq" },
    ];

    const Navlist = pages.map((item, i) => {
        const { name, path } = item;
        return (
            <NavLink key={i} exact to={path.replace('','/').toLowerCase()} className='mainSpacing'>{name}</NavLink>
        );
    });

    return (
        <NavbarContainer className='grid navbar' theme={theme}>
            <div className="grid nav-brand">
                <Link to='/'>
                    <img src={amuseLogo} alt="Amuse.Finance" />
                </Link>
            </div>
            <div className={ navOpen ? 'grid nav-list nav-list-mobile' : 'grid nav-list' }>
                <ul>{Navlist}</ul>
            </div>
            <div className="grid nav-icons" onClick={() => setPanelState(() => !panelState)}>
                <span className='grid'>
                    <img src={user} alt="user" className={!loading ? "online" : ""}  />
                </span>
                {panelState && <Panel className="grid" />}
            </div>
            <div className="toggle">
                <AiOutlineMenu className='icon' onClick={() => setNavOpen(!navOpen)} />
            </div>
        </NavbarContainer>
    )
}

export default ErrorBoundary(Navbar);