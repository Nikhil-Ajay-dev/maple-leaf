import React, { useEffect, useState } from 'react'
import { FaCanadianMapleLeaf } from 'react-icons/fa';
import { Link, NavLink } from 'react-router-dom';

function Header() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // Calculate 50vh in pixels
            const fiftyVh = window.innerHeight * 0.5;
            setScrolled(window.scrollY > fiftyVh);
        };
        
        window.addEventListener('scroll', handleScroll);
        // Initial check
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={`header ${scrolled ? 'scrolled' : ''}`}>
            <div className="container header-inner">
                <div className="logo">
                    <img 
                        src='../logo.png' 
                        alt="Maple Leaf Window Film" 
                        className="logo-img"
                    />
                    <div className="logo-text">
                        <span className="bold">MAPLE LEAF</span>
                        <span className="light">WINDOW FILM</span>
                    </div>
                </div>

                <nav className={`nav-links ${mobileOpen ? 'open' : ''}`}>
                    <NavLink to="/" activeClassName="active" end>HOME</NavLink>
                    <NavLink to="/about" activeClassName="active" end>ABOUT</NavLink>
                    
                    <div className="dropdown">
                        <NavLink to="/services">SERVICES <i className="fas fa-chevron-down"></i></NavLink>
                        <div className="dropdown-menu">
                            <Link to="/anti-graffiti">Anti-Graffiti Window Films</Link>
                            <Link to="/blinds">Blinds</Link>
                            <Link to="/custom-printed-plotted-film">Custom Printed & Plotted Film</Link>
                            <Link to="/daylight-redirection">Daylight Redirection Films</Link>
                            <Link to="/decorative-tinting">Decorative Window Tinting</Link>
                            <Link to="/feather-friendly">Feather Friendly Film</Link>
                            <Link to="/heat-control">Heat Control Window Films</Link>
                            <Link to="/privacy-film">Privacy Film</Link>
                            <Link to="/security-film">Security Film</Link>
                            <Link to="/solar-film">Solar Film</Link>
                            <Link to="/wall-graphics">Wall Graphics</Link>
                            <Link to="/way-finding">Way Finding Signage</Link>
                        </div>
                    </div>
                    <NavLink to="/projects">PROJECTS</NavLink>
                    <NavLink to="/contact">CONTACT</NavLink>
                </nav>

                <div className="header-right">
                    <a href="tel:226-503-6102" className="header-phone">
                        <i className="fas fa-phone-alt"></i> 226-503-6102
                    </a>
                    <Link to="/contact" className="header-btn">GET FREE QUOTE</Link>
                    <div className="hamburger" onClick={() => setMobileOpen(!mobileOpen)}>
                        <i className={`fas ${mobileOpen ? 'fa-times' : 'fa-bars'}`}></i>
                    </div>
                </div>
            </div>

            <style>{`
                :root {
                    --primary-blue: #07154a;
                    --primary-gold: #d6a800;
                    --dark-gold: #b89200;
                    --gray-bg: #f5f5f5;
                }

                .header {
                    background: transparent;
                    position: fixed;
                    top: 0;
                    left: 0;
                    right: 0;
                    width: 100%;
                    z-index: 1000;
                    transition: all 0.4s ease;
                    padding: 0;
                }

                .header.scrolled {
                    background: #ffffff;
                    box-shadow: 0 2px 10px rgba(7, 21, 74, 0.08);
                }

                .header-inner {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    height: 80px;
                    max-width: 1280px;
                    margin: 0 auto;
                    padding: 0 24px;
                    transition: height 0.3s ease;
                }

                .header.scrolled .header-inner {
                    height: 64px;
                }

                .logo {
                    display: flex;
                    align-items: center;
                    gap: 10px;
                    text-decoration: none;
                    flex-shrink: 0;
                }

                .logo-img {
                    width: 50px;
                    height: auto;
                    transition: all 0.3s ease;
                }

                .header.scrolled .logo-img {
                    width: 40px;
                }

                .logo-text {
                    display: flex;
                    flex-direction: column;
                    line-height: 1.1;
                }

                .logo-text .bold {
                    font-weight: 900;
                    font-size: 1.1rem;
                    color: #ffffff;
                    letter-spacing: 0.5px;
                    transition: color 0.3s ease;
                }

                .header.scrolled .logo-text .bold {
                    color: var(--primary-blue);
                }

                .logo-text .light {
                    font-weight: 400;
                    font-size: 0.85rem;
                    color: var(--primary-gold);
                    letter-spacing: 1px;
                }

                .nav-links {
                    display: flex;
                    gap: 22px;
                    font-weight: 700;
                    font-size: 0.8rem;
                    letter-spacing: 0.5px;
                    align-items: center;
                }

                .nav-links a {
                    color: #ffffff;
                    text-decoration: none;
                    transition: all 0.2s ease;
                    position: relative;
                    padding: 8px 0;
                    display: flex;
                    align-items: center;
                    gap: 4px;
                    white-space: nowrap;
                }

                .header.scrolled .nav-links a {
                    color: #333;
                }

                .nav-links a i {
                    font-size: 0.65rem;
                    opacity: 0.7;
                }

                .nav-links a:hover {
                    color: var(--primary-gold);
                }

                .header.scrolled .nav-links a:hover {
                    color: var(--primary-blue);
                }

                .nav-links a.active {
                    color: var(--primary-gold);
                    font-weight: 800;
                }

                .header.scrolled .nav-links a.active {
                    color: var(--primary-blue);
                }

                .nav-links a.active::after {
                    content: '';
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    width: 100%;
                    height: 3px;
                    background: var(--primary-gold);
                    border-radius: 2px;
                }

                .dropdown {
                    position: relative;
                }

                .dropdown-menu {
                    display: none;
                    position: absolute;
                    top: 100%;
                    left: 0;
                    background: #ffffff;
                    min-width: 270px;
                    box-shadow: 0 8px 24px rgba(7, 21, 74, 0.15);
                    padding: 10px 0;
                    border-radius: 4px;
                    border-top: 3px solid var(--primary-gold);
                    text-align: left;
                }

                .dropdown:hover .dropdown-menu {
                    display: block;
                }

                .dropdown-menu a {
                    display: block;
                    padding: 8px 20px;
                    font-weight: 500;
                    text-transform: none;
                    font-size: 0.85rem;
                    color: #444 !important;
                    border-left: 3px solid transparent;
                    transition: all 0.2s ease;
                    white-space: normal;
                }

                .dropdown-menu a:hover {
                    background: var(--gray-bg);
                    color: var(--primary-blue) !important;
                    border-left-color: var(--primary-gold);
                }

                .header-right {
                    display: flex;
                    align-items: center;
                    gap: 16px;
                    flex-shrink: 0;
                }

                .header-phone {
                    font-weight: 700;
                    font-size: 0.85rem;
                    color: #ffffff;
                    text-decoration: none;
                    display: flex;
                    align-items: center;
                    gap: 6px;
                    transition: all 0.2s ease;
                    white-space: nowrap;
                }

                .header.scrolled .header-phone {
                    color: var(--primary-blue);
                }

                .header-phone:hover {
                    color: var(--primary-gold);
                }

                .header-phone i {
                    color: var(--primary-gold);
                    font-size: 0.85rem;
                }

                .header-btn {
                    background: var(--primary-gold);
                    color: var(--primary-blue);
                    padding: 8px 16px;
                    border-radius: 4px;
                    font-weight: 700;
                    font-size: 0.7rem;
                    text-decoration: none;
                    letter-spacing: 0.5px;
                    transition: all 0.3s ease;
                    border: 2px solid var(--primary-gold);
                    white-space: nowrap;
                }

                .header.scrolled .header-btn {
                    background: var(--primary-blue);
                    color: #ffffff;
                    border-color: var(--primary-blue);
                }

                .header-btn:hover {
                    background: var(--primary-blue);
                    color: #ffffff;
                    transform: translateY(-2px);
                    box-shadow: 0 4px 12px rgba(214, 168, 0, 0.3);
                    border-color: var(--primary-blue);
                }

                .header.scrolled .header-btn:hover {
                    background: var(--primary-gold);
                    color: var(--primary-blue);
                    border-color: var(--primary-gold);
                    box-shadow: 0 4px 12px rgba(214, 168, 0, 0.3);
                }

                .hamburger {
                    display: none;
                    font-size: 1.5rem;
                    cursor: pointer;
                    color: #ffffff;
                    transition: color 0.2s ease;
                }

                .header.scrolled .hamburger {
                    color: var(--primary-blue);
                }

                .hamburger:hover {
                    color: var(--primary-gold);
                }

                /* Tablet Styles */
                @media (max-width: 1024px) {
                    .nav-links {
                        gap: 14px;
                        font-size: 0.7rem;
                    }

                    .header-phone {
                        font-size: 0.75rem;
                    }

                    .header-btn {
                        padding: 6px 12px;
                        font-size: 0.65rem;
                    }

                    .header-right {
                        gap: 12px;
                    }
                }

                /* Mobile Styles */
                @media (max-width: 992px) {
                    .nav-links {
                        display: none;
                        position: absolute;
                        top: 100%;
                        left: 0;
                        right: 0;
                        background: #ffffff;
                        flex-direction: column;
                        padding: 20px 24px;
                        gap: 12px;
                        box-shadow: 0 8px 24px rgba(7, 21, 74, 0.15);
                        border-top: 3px solid var(--primary-gold);
                    }

                    .nav-links.open {
                        display: flex;
                    }

                    .nav-links a {
                        color: #333 !important;
                        padding: 10px 0;
                        width: 100%;
                        border-bottom: 1px solid #f0f0f0;
                        white-space: normal;
                    }

                    .nav-links a.active::after {
                        display: none;
                    }

                    .nav-links a.active {
                        color: var(--primary-gold) !important;
                    }

                    .header.scrolled .nav-links a.active {
                        color: var(--primary-blue) !important;
                    }

                    .dropdown-menu {
                        position: static;
                        box-shadow: none;
                        padding-left: 20px;
                        border-top: none;
                        display: none;
                        background: var(--gray-bg);
                        border-radius: 4px;
                        margin-top: 4px;
                    }

                    .dropdown:hover .dropdown-menu {
                        display: block;
                    }

                    .dropdown-menu a {
                        border-left: none;
                        padding: 6px 16px;
                        color: #444 !important;
                    }

                    .dropdown-menu a:hover {
                        border-left: 3px solid var(--primary-gold);
                    }

                    .hamburger {
                        display: block;
                        color: #ffffff;
                    }

                    .header.scrolled .hamburger {
                        color: var(--primary-blue);
                    }

                    .header-phone {
                        display: none;
                    }

                    .header-btn {
                        padding: 8px 14px;
                        font-size: 0.7rem;
                    }

                    .logo-img {
                        width: 40px;
                    }

                    .header.scrolled .logo-img {
                        width: 35px;
                    }

                    .logo-text .bold {
                        font-size: 0.9rem;
                    }

                    .logo-text .light {
                        font-size: 0.7rem;
                    }
                }

                @media (max-width: 576px) {
                    .header-inner {
                        padding: 0 12px;
                        height: 64px;
                    }

                    .header.scrolled .header-inner {
                        height: 56px;
                    }

                    .header-btn {
                        padding: 6px 10px;
                        font-size: 0.6rem;
                    }

                    .logo-text .bold {
                        font-size: 0.75rem;
                    }

                    .logo-text .light {
                        font-size: 0.6rem;
                    }

                    .logo-img {
                        width: 32px;
                    }

                    .header.scrolled .logo-img {
                        width: 28px;
                    }

                    .logo {
                        gap: 6px;
                    }

                    .header-right {
                        gap: 8px;
                    }

                    .hamburger {
                        font-size: 1.2rem;
                    }
                }
            `}</style>
        </header>
    );
};

export default Header;