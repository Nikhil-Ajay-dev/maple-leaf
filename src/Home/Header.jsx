import React, { useEffect, useState } from 'react'
import { FaCanadianMapleLeaf } from 'react-icons/fa';
import { Link, NavLink } from 'react-router-dom';

function Header() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 60);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={`header ${scrolled ? 'scrolled' : ''}`}>
            <div className="container header-inner">
                <div className="logo">
                    <img 
                        src='https://mapleleafwindowfilm.com/wp-content/uploads/2025/02/cropped-logo.jpg' 
                        alt="Maple Leaf Window Film" 
                        style={{width: '15%', marginTop: '-10px'}} 
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
                    background: #ffffff;
                    box-shadow: 0 2px 10px rgba(7, 21, 74, 0.08);
                    position: sticky;
                    top: 0;
                    z-index: 1000;
                    transition: all 0.3s ease;
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
                }

                .logo-text {
                    display: flex;
                    flex-direction: column;
                    line-height: 1.1;
                }

                .logo-text .bold {
                    font-weight: 900;
                    font-size: 1.1rem;
                    color: var(--primary-blue);
                    letter-spacing: 0.5px;
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
                    color: #333;
                    text-decoration: none;
                    transition: color 0.2s ease;
                    position: relative;
                    padding: 8px 0;
                    display: flex;
                    align-items: center;
                    gap: 4px;
                }

                .nav-links a i {
                    font-size: 0.65rem;
                    opacity: 0.7;
                }

                .nav-links a:hover {
                    color: var(--primary-blue);
                }

                .nav-links a.active {
                    color: var(--primary-blue);
                    font-weight: 800;
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
                    color: #444;
                    border-left: 3px solid transparent;
                    transition: all 0.2s ease;
                }

                .dropdown-menu a:hover {
                    background: var(--gray-bg);
                    color: var(--primary-blue);
                    border-left-color: var(--primary-gold);
                }

                .header-right {
                    display: flex;
                    align-items: center;
                    gap: 20px;
                }

                .header-phone {
                    font-weight: 700;
                    font-size: 0.95rem;
                    color: var(--primary-blue);
                    text-decoration: none;
                    display: flex;
                    align-items: center;
                    gap: 6px;
                    transition: color 0.2s ease;
                }

                .header-phone:hover {
                    color: var(--primary-gold);
                }

                .header-phone i {
                    color: var(--primary-gold);
                }

                .header-btn {
                    background: var(--primary-blue);
                    color: #fff;
                    padding: 10px 20px;
                    border-radius: 4px;
                    font-weight: 700;
                    font-size: 0.8rem;
                    text-decoration: none;
                    letter-spacing: 0.5px;
                    transition: all 0.3s ease;
                    border: 2px solid transparent;
                }

                .header-btn:hover {
                    background: var(--primary-gold);
                    transform: translateY(-2px);
                    box-shadow: 0 4px 12px rgba(214, 168, 0, 0.3);
                }

                .hamburger {
                    display: none;
                    font-size: 1.5rem;
                    cursor: pointer;
                    color: var(--primary-blue);
                    transition: color 0.2s ease;
                }

                .hamburger:hover {
                    color: var(--primary-gold);
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
                        padding: 10px 0;
                        width: 100%;
                        border-bottom: 1px solid #f0f0f0;
                    }

                    .nav-links a.active::after {
                        display: none;
                    }

                    .nav-links a.active {
                        color: var(--primary-gold);
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
                    }

                    .dropdown-menu a:hover {
                        border-left: 3px solid var(--primary-gold);
                    }

                    .hamburger {
                        display: block;
                    }

                    .header-phone {
                        display: none;
                    }
                }

                @media (max-width: 576px) {
                    .header-btn {
                        padding: 8px 14px;
                        font-size: 0.7rem;
                    }

                    .logo-text .bold {
                        font-size: 0.9rem;
                    }

                    .logo-text .light {
                        font-size: 0.7rem;
                    }

                    .logo img {
                        width: 12% !important;
                    }
                }
            `}</style>
        </header>
    );
};

export default Header;