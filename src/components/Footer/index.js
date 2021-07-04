import { useState } from 'react';
import { FaLinkedin, FaGithub, FaTelegram, FaTwitter } from "react-icons/fa";
import { FooterContainer } from "./styles";
import { ErrorBoundary } from "../ErrorBoundary";

const Footer = () => {
    const [email, setEmail] = useState('');
    const getYear = new Date().getFullYear();

    let socialIcon = [
        { icon: <FaGithub /> , to: "https://github.com/abdillahzakkie" },
        { icon: <FaTelegram /> , to: "https://t.me/DragonTrybe" },
        { icon: <FaLinkedin /> , to: "https://www.linkedin.com/in/abdullah-zakarriya-ba58961aa" },
        { icon: <FaTwitter /> , to: "https://twitter.com/Dev_DragonLord" },
    ];
    socialIcon = socialIcon.map((item, i) => {
        return <a href={item.to} key={i} target='_blank' rel='noopener noreferrer' className='icon'>{item.icon}</a>
    })
    
    return (
        <FooterContainer className='grid footer'>
            <section className="grid">
                <h3>About me</h3>
                <small>
                    We have tested a number of registry fix and clean utilities and present our top 3 list on our site for your convenience.
                </small>
                <small>
                    copyright &copy; {getYear} all rights reserved | 
                    Designed & built with 💖 by DragonLord
                </small>
            </section>
            <section className="grid">
                <h3>Newsletter</h3>
                <small>
                    Stay up to date with our latest trends
                </small>
                <form className='form-control'>
                    <input type="email" 
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        placeholder='example@mail.com'
                    />
                </form>
            </section>
            <section className="grid">
                <h3>Follow me</h3>
                <small>Let us be social</small>
                <div className="social-icons">{socialIcon}</div>
            </section>
        </FooterContainer>
    )
}

export default ErrorBoundary(Footer);