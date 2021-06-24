import { useState, useContext } from 'react';
import { NavLink, Link } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";
import { web3Context } from "../Context";
import { ErrorBoundary } from "../ErrorBoundary";
import './navbar.css';

import { NavbarContainer } from './styles'
import user from '../../assets/login/userLogin.jpeg';
import Panel from '../Panel';

const Navbar = ({ theme }) => {
    const [navOpen, setNavOpen] = useState(false);
    const [panelState, setPanelState] = useState(false)
    const { loading } = useContext(web3Context);

    let Navlist = ['', 'Dashboard', 'Vault', 'Governance', 'Contact', 'FAQ'];
    Navlist = Navlist.map((item, i) => {
        return (
            <NavLink key={i} exact to={item.replace('','/').toLowerCase()} className='mainSpacing'>
                {item === '' ? 'Home' : item}
            </NavLink>
        );
    });

    return (
        <NavbarContainer className='grid navbar' theme={theme}>
            <div className="grid nav-brand">
                <Link to='/'>
                    <h2 className='mainSpacing'>
                        Amused
                    </h2>
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