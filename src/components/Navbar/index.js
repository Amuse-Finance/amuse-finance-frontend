import { useState, useContext } from 'react';
import { NavLink, Link } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";
import { web3Context } from "../Context";
import './navbar.css';

import { NavbarContainer } from './styles'
import user from '../../assets/login/userLogin.jpeg';

export function Navbar({ theme }) {
    const [navOpen, setNavOpen] = useState(false);
    const context = useContext(web3Context);

    const { loading, connectDapp } = context;

    const _active = {
        'padding': '.75rem',
    }

    let Navlist = ['', 'Dashboard', 'Vault', 'Governance', 'Whitepaper', 'FAQ'];
    Navlist = Navlist.map((item, i) => {
        return (
            <NavLink 
                key={i} 
                exact
                activeStyle={_active} 
                to={item.replace('','/').toLowerCase()}
                className='mainSpacing'
            >
                {item === '' ? 'Home' : item}
            </NavLink>
        );
    });

    return (
        <NavbarContainer className='grid navbar' theme={theme}>
            <div className="grid nav-brand">
                <Link to='/'>
                    <h2 className='mainSpacing'>
                        Amused.Finance
                    </h2>
                </Link>
            </div>
            <div className={ navOpen ? 'grid nav-list nav-list-mobile' : 'grid nav-list' }>
                <ul>{Navlist}</ul>
            </div>
            <div className="grid nav-icons" onClick={loading ? connectDapp : undefined}>
                <span className='grid'>
                    <img src={user} alt="user" className={!loading ? "online" : ""}  />
                </span>
            </div>
            <div className="toggle">
                <AiOutlineMenu className='icon' onClick={() => setNavOpen(!navOpen)} />
            </div>
        </NavbarContainer>
    )
}