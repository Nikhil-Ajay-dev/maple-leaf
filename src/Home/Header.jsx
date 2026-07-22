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
                    <i><FaCanadianMapleLeaf /></i>
                    <div className="logo-text">
                        <span className="bold">MAPLE LEAF</span>
                        <span className="light">WINDOW FILM</span>
                    </div>
                </div>

                <nav className={`nav-links ${mobileOpen ? 'open' : ''}`}>
                    <NavLink to="/" activeClassName="active" end>HOME</NavLink>
                    <NavLink to="/about" activeClassName="active" end>ABOUT</NavLink>
                    {/* <div className="dropdown">
                            <NavLink to="/residential">RESIDENTIAL <i className="fas fa-chevron-down"></i></NavLink>
                            <div className="dropdown-menu">
                                <Link to="/residential">Residential Film</Link>
                                <Link to="/residential/privacy">Privacy</Link>
                            </div>
                        </div>
                        <div className="dropdown">
                            <NavLink to="/commercial">COMMERCIAL <i className="fas fa-chevron-down"></i></NavLink>
                            <div className="dropdown-menu">
                                <Link to="/commercial">Commercial Film</Link>
                                <Link to="/commercial/security">Security</Link>
                            </div>
                        </div> */}
                    <div className="dropdown">
                        <NavLink to="/services">SERVICES <i className="fas fa-chevron-down"></i></NavLink>
                        <div className="dropdown-menu">
                            <Link to="/services/anti-graffiti">Anti-Graffiti Window Films</Link>
                            <Link to="/services/blinds">Blinds</Link>
                            <Link to="/services/custom-printed-plotted-film">Custom Printed & Plotted Film</Link>
                            <Link to="/services/daylight-redirection">Daylight Redirection Films</Link>
                            <Link to="/services/decorative-tinting">Decorative Window Tinting</Link>
                            <Link to="/services/feather-friendly">Feather Friendly Film</Link>
                            <Link to="/services/heat-control">Heat Control Window Films</Link>
                            <Link to="/services/privacy-film">Privacy Film</Link>
                            <Link to="/services/security-film">Security Film</Link>
                            <Link to="/services/solar-film">Solar Film</Link>
                            <Link to="/services/wall-graphics">Wall Graphics</Link>
                            <Link to="/services/way-finding">Way Finding Signage</Link>

                        </div>
                    </div>
                    <NavLink to="/projects">PROJECTS</NavLink>
                    {/* <NavLink to="/about">ABOUT</NavLink> */}
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
          --primary-red: #d32f2f;
          --dark-red: #b71c1c;
          --gray-bg: #f5f5f5;
        }

        .header {
          background: #ffffff;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.08);
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

        .logo i {
          color: var(--primary-red);
          font-size: 2rem;
        }

        .logo-text {
          display: flex;
          flex-direction: column;
          line-height: 1.1;
        }

        .logo-text .bold {
          font-weight: 900;
          font-size: 1.1rem;
          color: #111;
          letter-spacing: 0.5px;
        }

        .logo-text .light {
          font-weight: 400;
          font-size: 0.85rem;
          color: #555;
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

        .nav-links a:hover,
        .nav-links a.active {
          color: var(--primary-red);
        }

        .nav-links a.active::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 2px;
          background: var(--primary-red);
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
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
          padding: 10px 0;
          border-radius: 4px;
          border-top: 3px solid var(--primary-red);
          text-align: left
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
        }

        .dropdown-menu a:hover {
          background: var(--gray-bg);
          color: var(--primary-red);
        }

        .header-right {
          display: flex;
          align-items: center;
          gap: 20px;
        }

        .header-phone {
          font-weight: 700;
          font-size: 0.95rem;
          color: var(--primary-red);
          text-decoration: none;
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .header-btn {
          background: var(--primary-red);
          color: #fff;
          padding: 10px 20px;
          border-radius: 4px;
          font-weight: 700;
          font-size: 0.8rem;
          text-decoration: none;
          letter-spacing: 0.5px;
          transition: background 0.2s ease;
        }

        .header-btn:hover {
          background: var(--dark-red);
        }

        .hamburger {
          display: none;
          font-size: 1.5rem;
          cursor: pointer;
          color: #333;
        }

        @media (max-width: 992px) {
          .nav-links {
            display: none;
          }

          .hamburger {
            display: block;
          }
        }
      `}</style>
        </header>
    );
};

export default Header
