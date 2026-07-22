import React, { useState, useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css/pagination';
import { Link, NavLink } from 'react-router-dom';
import { FaCanadianMapleLeaf } from "react-icons/fa";
import Header from './Header';

function HomePage() {



    const HeroSection = () => {
        return (
            <section className="hero">
                <div className="container hero-container">
                    <div className="hero-content">
                        <p className="eyebrow">THE RIGHT WINDOW FILM.</p>
                        <h1>
                            PROFESSIONALLY <br />
                            INSTALLED.
                        </h1>

                        <p className="hero-text">
                            Premium window film solutions for homes, businesses, storefronts, condos, and luxury properties across the Greater Toronto Area.
                        </p>

                        <div className="hero-benefits">
                            <div className="benefit-item">
                                <i className="fas fa-shield-alt"></i>
                                <div className="benefit-text">
                                    <strong>PROTECT</strong>
                                    <span>What Matters</span>
                                </div>
                            </div>

                            <div className="benefit-item">
                                <i className="fas fa-sun"></i>
                                <div className="benefit-text">
                                    <strong>REDUCE HEAT</strong>
                                    <span>Stay Comfortable</span>
                                </div>
                            </div>

                            <div className="benefit-item">
                                <i className="fas fa-eye"></i>
                                <div className="benefit-text">
                                    <strong>INCREASE PRIVACY</strong>
                                    <span>Enhance Your Space</span>
                                </div>
                            </div>
                        </div>

                        <div className="hero-buttons">
                            <button className="btn-red">GET FREE QUOTE &rarr;</button>
                            <button className="btn-outline">VIEW OUR PROJECTS</button>
                        </div>

                        <div className="hero-reviews">
                            <i className="fab fa-google google-icon"></i>
                            <div className="stars">
                                ★★★★★
                            </div>
                            <span className="rating-num">5.0</span>
                            <span className="review-count">Based on <strong>200+</strong> Google Reviews</span>
                        </div>
                    </div>
                </div>

                <style>{`
        .hero {
          background: linear-gradient(to right, rgba(0, 0, 0, 0.75) 30%, rgba(0, 0, 0, 0.2) 100%), 
                      url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1600&h=800&fit=crop&crop=center') center/cover no-repeat;
          min-height: 680px;
          display: flex;
          align-items: center;
          position: relative;
          color: #ffffff;
        }

        .hero-container {
          max-width: 1280px;
          margin: 0 auto;
          padding: 60px 24px;
          width: 100%;
        }

        .hero-content {
          max-width: 580px;
        }

        .eyebrow {
          color: #ffffff;
          font-weight: 700;
          letter-spacing: 2.5px;
          font-size: 0.85rem;
          margin-bottom: 8px;
          text-transform: uppercase;
          opacity: 0.9;
        }

        .hero-content h1 {
          font-size: 3.6rem;
          font-weight: 900;
          line-height: 1.05;
          margin-bottom: 20px;
          letter-spacing: 1px;
          text-transform: uppercase;
        }

        .hero-text {
          font-size: 1rem;
          line-height: 1.5;
          opacity: 0.9;
          margin-bottom: 32px;
          max-width: 520px;
        }

        .hero-benefits {
          display: flex;
          gap: 24px;
          flex-wrap: wrap;
          margin-bottom: 36px;
        }

        .benefit-item {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .benefit-item i {
          font-size: 1.4rem;
          color: #ffffff;
        }

        .benefit-text {
          display: flex;
          flex-direction: column;
          font-size: 0.75rem;
          line-height: 1.2;
        }

        .benefit-text strong {
          font-weight: 800;
          letter-spacing: 0.5px;
        }

        .benefit-text span {
          font-weight: 400;
          opacity: 0.8;
        }

        .hero-buttons {
          display: flex;
          gap: 16px;
          flex-wrap: wrap;
          margin-bottom: 32px;
        }

        .btn-red {
          background: var(--primary-red, #d32f2f);
          color: white;
          border: none;
          padding: 14px 28px;
          font-weight: 700;
          font-size: 0.85rem;
          border-radius: 4px;
          cursor: pointer;
          letter-spacing: 0.5px;
          transition: background 0.2s ease;
        }

        .btn-red:hover {
          background: #b71c1c;
        }

        .btn-outline {
          background: transparent;
          color: white;
          border: 1px solid rgba(255, 255, 255, 0.7);
          padding: 14px 28px;
          font-weight: 700;
          font-size: 0.85rem;
          border-radius: 4px;
          cursor: pointer;
          letter-spacing: 0.5px;
          transition: all 0.2s ease;
        }

        .btn-outline:hover {
          background: rgba(90, 87, 87, 0.15);
          border-color: var(--primary-red, #d32f2f);
          color: var(--primary-red, #d32f2f)
        }

        .hero-reviews {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 0.85rem;
        }

        .google-icon {
          font-size: 1.2rem;
          background: linear-gradient(45deg, #4285f4, #ea4335, #fbbc05, #34a853);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .stars {
          color: #ffc107;
          letter-spacing: 2px;
          font-size: 1rem;
        }

        .rating-num {
          font-weight: 800;
        }

        .review-count {
          opacity: 0.85;
          margin-left: 4px;
        }

        @media (max-width: 768px) {
          .hero-content h1 {
            font-size: 2.5rem;
          }
          
          .hero-benefits {
            flex-direction: column;
            gap: 16px;
          }
        }
      `}</style>
            </section>
        );
    };


    const categories = [
        { icon: 'fas fa-home', label: 'HOMEOWNERS' },
        { icon: 'fas fa-building', label: 'BUSINESSES' },
        { icon: 'fas fa-store', label: 'RETAIL STORES' },
        { icon: 'fas fa-city', label: 'CONDOS' },
        { icon: 'fas fa-hard-hat', label: 'BUILDERS & DEVELOPERS' },
    ];

    const TrustedCategories = () => {
        return (
            <section className="trusted-section">
                <div className="container">
                    <h3 className="trusted-heading">TRUSTED BY</h3>
                    <div className="trusted-grid">
                        {categories.map((item, idx) => (
                            <div key={idx} className="trusted-item">
                                <i className={item.icon}></i>
                                <span>{item.label}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <style>{`
        :root {
          --primary-red: #d32f2f;
          --border-color: #e0e0e0;
        }

        .trusted-section { 
          padding: 24px 0 32px; 
          background: #ffffff;
          border-bottom: 1px solid #f0f0f0;
        }

        .container {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 24px;
        }

        .trusted-heading { 
          text-align: center; 
          font-weight: 700; 
          letter-spacing: 2px; 
          font-size: 0.8rem; 
          margin-bottom: 20px; 
          color: #555555; 
          text-transform: uppercase;
        }

        .trusted-grid { 
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
        }

        .trusted-item { 
          display: flex; 
          align-items: center; 
          justify-content: center;
          gap: 12px; 
          flex: 1;
          border-right: 1px solid var(--border-color);
          padding: 0 16px;
        }

        .trusted-item:last-child {
          border-right: none;
        }

        .trusted-item i { 
          color: var(--primary-red); 
          font-size: 1.5rem; 
          flex-shrink: 0;
        }

        .trusted-item span {
          font-weight: 700; 
          font-size: 0.75rem; 
          color: #333333;
          letter-spacing: 0.5px;
          white-space: nowrap;
        }

        @media (max-width: 992px) {
          .trusted-grid {
            flex-wrap: wrap;
            gap: 20px 0;
          }

          .trusted-item {
            flex: 1 1 33.33%;
            border-right: none;
          }
        }

        @media (max-width: 576px) {
          .trusted-item {
            flex: 1 1 50%;
            justify-content: flex-start;
          }
        }
      `}</style>
            </section>
        );
    };





    const cards = [
        {
            id: 1,
            title: 'PROTECT MY GLASS',
            desc: 'Security film helps protect against break-ins, impacts, and accidents.',
            icon: 'fas fa-shield-alt',
            img: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=400&h=250&fit=crop',
            btn: 'EXPLORE SECURITY FILM →'
        },
        {
            id: 2,
            title: 'REDUCE HEAT',
            desc: 'Heat reduction film keeps your space cooler and reduces energy costs.',
            icon: 'fas fa-sun',
            img: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=400&h=250&fit=crop',
            btn: 'EXPLORE SOLAR FILM →'
        },
        {
            id: 3,
            title: 'INCREASE PRIVACY',
            desc: 'Add privacy to any space without sacrificing natural light or style.',
            icon: 'fas fa-eye',
            img: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400&h=250&fit=crop',
            btn: 'EXPLORE PRIVACY FILM →'
        },
        {
            id: 4,
            title: 'PROTECT BIRDS',
            desc: 'Bird safety films help reduce bird collisions with discreet dot patterns.',
            icon: 'fas fa-dove',
            img: 'https://images.unsplash.com/photo-1562926045-9a69b0f8f1a6?w=400&h=250&fit=crop',
            btn: 'EXPLORE BIRD SAFETY →'
        },
        {
            id: 5,
            title: 'COMMERCIAL SOLUTIONS',
            desc: 'Improve comfort, privacy, appearance, and safety for your business.',
            icon: 'fas fa-building',
            img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=250&fit=crop',
            btn: 'VIEW COMMERCIAL FILM →'
        },
    ];

    const ImprovementCards = () => {
        return (
            <section className="improvement-section">
                <div className="container">
                    <div className="section-title">
                        <h2>WHAT WOULD YOU LIKE TO IMPROVE?</h2>
                        <div className="underline"></div>
                    </div>

                    <div className="cards-grid">
                        {cards.map(card => (
                            <div key={card.id} className="improvement-card">
                                <div className="card-image-wrapper">
                                    <div className="card-image">
                                        <img src={card.img} alt={card.title} loading="lazy" />
                                    </div>
                                    <div className="card-icon">
                                        <i className={card.icon}></i>
                                    </div>
                                </div>

                                <div className="card-content">
                                    <h3>{card.title}</h3>
                                    <p>{card.desc}</p>
                                    <button className="card-btn">{card.btn}</button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <style>{`
        :root {
          --primary-red: #d32f2f;
          --dark-red: #b71c1c;
          --light-gray: #eef0f2;
        }

        .improvement-section { 
          padding: 60px 0; 
          background: #fcfcfc; 
        }

        .container {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 24px;
        }

        .section-title {
          text-align: center;
          margin-bottom: 48px;
        }

        .section-title h2 {
          font-size: 1.6rem;
          font-weight: 800;
          color: #222222;
          letter-spacing: 1px;
          margin-bottom: 12px;
          text-transform: uppercase;
        }

        .section-title .underline {
          width: 40px;
          height: 3px;
          background: var(--primary-red);
          margin: 0 auto;
          border-radius: 2px;
        }

        .cards-grid { 
          display: grid; 
          grid-template-columns: repeat(5, 1fr); 
          gap: 20px; 
        }

        /* CARD MAIN CONTAINER - OVERFLOW MUST BE VISIBLE */
        .improvement-card { 
          background: #ffffff; 
          border-radius: 12px; 
          overflow: visible !important; /* Prevents badge clipping */
          box-shadow: 0 6px 18px rgba(0, 0, 0, 0.05); 
          transition: transform 0.3s ease, box-shadow 0.3s ease; 
          border: 1px solid var(--light-gray);
          display: flex;
          flex-direction: column;
          text-align: center;
          position: relative;
        }

        .improvement-card:hover { 
          transform: translateY(-6px); 
          box-shadow: 0 14px 28px rgba(0, 0, 0, 0.1); 
        }

        /* WRAPPER FOR IMAGE & ABSOLUTE ICON */
        .card-image-wrapper {
          position: relative;
          width: 100%;
          overflow: visible;
        }

        /* IMAGE CONTAINER - HANDLES CORNER RADIUS & ZOOM CLIP ONLY FOR THE IMG */
        .card-image { 
          height: 190px; 
          width: 100%;
          overflow: hidden; 
          border-top-left-radius: 11px;
          border-top-right-radius: 11px;
        }

        .card-image img { 
          width: 100%; 
          height: 100%; 
          object-fit: cover; 
          transition: transform 0.4s ease; 
        }

        .improvement-card:hover .card-image img { 
          transform: scale(1.05); 
        }

        /* CENTERED FLOATING BADGE (NO LONGER CLIPPED) */
        .card-icon { 
          position: absolute; 
          bottom: -28px; 
          left: 50%; 
          transform: translateX(-50%); 
          background: #ffffff; 
          color: var(--primary-red); 
          width: 56px; 
          height: 56px; 
          border-radius: 50%; 
          display: flex; 
          align-items: center; 
          justify-content: center; 
          font-size: 1.3rem; 
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
          z-index: 10;
        }

        /* Inner Ring */
        .card-icon::before {
          content: '';
          position: absolute;
          inset: 3px;
          border: 1.5px dashed rgba(211, 47, 47, 0.3);
          border-radius: 50%;
        }

        .card-content {
          padding: 40px 16px 24px;
          display: flex;
          flex-direction: column;
          flex-grow: 1;
          justify-content: space-between;
          align-items: center;
        }

        .improvement-card h3 { 
          font-size: 0.9rem; 
          font-weight: 800; 
          color: #111111;
          margin-bottom: 10px;
          letter-spacing: 0.5px;
          text-transform: uppercase;
        }

        .improvement-card p { 
          font-size: 0.78rem; 
          color: #666666; 
          line-height: 1.45;
          margin-bottom: 24px;
          max-width: 220px;
        }

        .card-btn { 
          width: 100%;
          background: #ffffff; 
          border: 1px solid #f0a8a8; 
          color: var(--primary-red); 
          font-weight: 700; 
          font-size: 0.72rem; 
          padding: 10px 8px;
          border-radius: 4px;
          cursor: pointer; 
          transition: all 0.2s ease; 
          letter-spacing: 0.5px;
          text-transform: uppercase;
        }

        .card-btn:hover { 
          background: var(--primary-red);
          color: #ffffff;
          border-color: var(--primary-red);
        }

        @media (max-width: 1100px) {
          .cards-grid {
            grid-template-columns: repeat(3, 1fr);
            gap: 32px 20px;
          }
        }

        @media (max-width: 768px) {
          .cards-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 480px) {
          .cards-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
            </section>
        );
    };






    const BeforeAfterSection = () => {
        const [position, setPosition] = useState(50);
        const containerRef = useRef(null);
        const [isDragging, setIsDragging] = useState(false);

        const handleMove = (e) => {
            if (!isDragging) return;
            const rect = containerRef.current.getBoundingClientRect();
            const x = ((e.clientX - rect.left) / rect.width) * 100;
            if (x >= 0 && x <= 100) setPosition(x);
        };

        const handleStart = () => setIsDragging(true);
        const handleEnd = () => setIsDragging(false);

        return (
            <section className="before-after-section bg-dark">
                <div className="container before-after-inner">
                    <div className="before-after-text">
                        <span className="eyebrow">SEE THE DIFFERENCE</span>
                        <h2>TRANSFORM YOUR GLASS. TRANSFORM YOUR SPACE.</h2>
                        <p>
                            From privacy upgrades to heat reduction and glare protection, our films are
                            selected for the right problem and installed with care.
                        </p>
                        <button className="btn-red">VIEW MORE BEFORE & AFTER</button>
                    </div>
                    <div
                        className="before-after-slider"
                        ref={containerRef}
                        onMouseMove={handleMove}
                        onMouseDown={handleStart}
                        onMouseUp={handleEnd}
                        onMouseLeave={handleEnd}
                        onTouchMove={(e) => {
                            const touch = e.touches[0];
                            const rect = containerRef.current.getBoundingClientRect();
                            const x = ((touch.clientX - rect.left) / rect.width) * 100;
                            if (x >= 0 && x <= 100) setPosition(x);
                        }}
                    >
                        <div className="ba-container">
                            {/* Bottom layer: The "BEFORE" image (visible on the left side) */}
                            <div className="ba-image-after"></div>

                            {/* Top layer: The "AFTER" image (revealed from left to right) */}
                            <div
                                className="ba-image-before"
                                style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
                            ></div>

                            {/* Drag handle */}
                            <div className="ba-handle" style={{ left: `${position}%` }}>
                                <div className="handle-circle">
                                    <i className="fas fa-arrows-alt-h"></i>
                                </div>
                            </div>

                            {/* Labels */}
                            <span className="ba-label before">BEFORE</span>
                            <span className="ba-label after">AFTER</span>
                        </div>
                    </div>
                </div>
                <style>{`
        .before-after-section { padding: 60px 0; }
        .before-after-inner { display: grid; grid-template-columns: 1fr 1fr; gap: 40px; align-items: center; }
        .before-after-text .eyebrow { color: var(--primary-red); font-weight: 600; letter-spacing: 2px; font-size: 0.9rem; }
        .before-after-text h2 { font-size: 2.2rem; font-weight: 800; line-height: 1.2; margin: 12px 0 16px; text-transform: uppercase; }
        .before-after-text p { opacity: 0.8; margin-bottom: 24px; }
        .before-after-slider { width: 100%; aspect-ratio: 4/3; cursor: ew-resize; user-select: none; }
        
        .ba-container { 
          width: 100%; 
          height: 100%; 
          position: relative; 
          border-radius: 8px; 
          overflow: hidden;
          background: #1a1a1a;
        }
        
        /* Bottom layer - BEFORE image (always visible) */
        .ba-image-before {
          position: absolute;
          inset: 0;
          background-image: url('../Images/Before.png');
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
        }
        
        /* Top layer - AFTER image (revealed by clipPath) */
        .ba-image-after {
          position: absolute;
          inset: 0;
          background-image: url('../Images/After.png');
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
        }
        
        .ba-label {
          position: absolute;
          top: 16px;
          padding: 6px 16px;
          border-radius: 20px;
          font-weight: 700;
          font-size: 0.75rem;
          text-transform: uppercase;
          letter-spacing: 1px;
          z-index: 5;
          pointer-events: none;
        }
        .ba-label.before {
          left: 16px;
          background: rgba(0,0,0,0.75);
          color: white;
        }
        .ba-label.after {
          right: 16px;
          background: var(--primary-red);
          color: white;
        }
        
        .ba-handle {
          position: absolute;
          top: 0;
          width: 3px;
          height: 100%;
          background: white;
          transform: translateX(-50%);
          pointer-events: none;
          z-index: 10;
          box-shadow: 0 0 12px rgba(0,0,0,0.3);
        }
        .handle-circle {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          background: white;
          width: 44px;
          height: 44px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--primary-red);
          box-shadow: 0 4px 16px rgba(0,0,0,0.3);
          font-size: 1.2rem;
          border: 2px solid var(--primary-red);
        }
        
        @media (max-width: 992px) {
          .before-after-inner { grid-template-columns: 1fr; }
          .before-after-text { text-align: center; }
          .before-after-text h2 { font-size: 1.8rem; }
        }
        @media (max-width: 576px) {
          .before-after-section { padding: 40px 0; }
          .before-after-text h2 { font-size: 1.4rem; }
          .handle-circle { width: 36px; height: 36px; font-size: 1rem; }
        }
      `}</style>
            </section>
        );
    };




    const reasons = [
        {
            icon: 'fas fa-shield-alt',
            title: 'PROFESSIONAL ADVICE',
            desc: 'We recommend the right film based on your needs, not just what\'s most expensive.'
        },
        {
            icon: 'fas fa-award',
            title: 'EXPERT INSTALLATION',
            desc: 'Trained professionals with years of experience and attention to detail.'
        },
        {
            icon: 'fas fa-gem',
            title: 'PREMIUM PRODUCTS',
            desc: 'We use high-quality window films backed by leading manufacturers.'
        },
        {
            icon: 'fas fa-ribbon',
            title: 'WARRANTY OPTIONS',
            desc: 'Enjoy peace of mind with lifetime warranty options on select films.'
        },
        {
            icon: 'fas fa-map-marker-alt',
            title: 'SERVING THE GTA',
            desc: 'Proudly serving Toronto and all surrounding cities and communities.'
        },
    ];

    const WhyChooseUs = () => {
        return (
            <section className="why-choose-section">
                <div className="container">
                    {/* Header Block */}
                    <div className="why-header">
                        <p className="why-eyebrow">WHY CHOOSE MAPLE LEAF WINDOW FILM</p>
                        <h2 className="why-main-title">RIGHT PRODUCT. RIGHT INSTALL. RIGHT PEOPLE.</h2>
                        <p className="why-description">
                            We don't just install window film — we provide the right solution for your space.<br />
                            Our goal is simple: solve the problem properly the first time.
                        </p>
                    </div>

                    {/* Reasons Grid */}
                    <div className="why-grid">
                        {reasons.map((item, idx) => (
                            <div key={idx} className="why-card">
                                <div className="why-icon">
                                    <i className={item.icon}></i>
                                </div>
                                <h4>{item.title}</h4>
                                <p>{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <style>{`
        :root {
          --primary-red: #d32f2f;
          --border-color: #e2e8f0;
        }

        .why-choose-section { 
          padding: 70px 0; 
          background: #ffffff; 
        }

        .container {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 24px;
        }

        .why-header {
          text-align: center;
          margin-bottom: 50px;
        }

        .why-eyebrow {
          color: var(--primary-red);
          font-size: 0.8rem;
          font-weight: 800;
          letter-spacing: 2px;
          text-transform: uppercase;
          margin-bottom: 10px;
        }

        .why-main-title {
          font-size: 1.85rem;
          font-weight: 900;
          color: #111111;
          letter-spacing: 0.5px;
          margin-bottom: 14px;
          text-transform: uppercase;
        }

        .why-description {
          font-size: 0.88rem;
          color: #666666;
          line-height: 1.5;
          max-width: 680px;
          margin: 0 auto;
        }

        /* 5-Column Grid with Dividers */
        .why-grid { 
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          width: 100%;
        }

        .why-card { 
          text-align: center; 
          padding: 0 20px; 
          flex: 1;
          border-right: 1px solid var(--border-color);
          display: flex;
          flex-direction: column;
          align-items: center;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .why-card:hover { 
          transform: translateY(-8px)
        }

        .why-card:last-child {
          border-right: none;
        }

        /* Outlined Red Icon */
        .why-icon { 
          background: transparent; 
          color: var(--primary-red); 
          font-size: 2.4rem; 
          margin-bottom: 20px; 
          display: flex;
          align-items: center;
          justify-content: center;
          height: 50px;
        }

        .why-card h4 { 
          font-weight: 800; 
          font-size: 0.82rem; 
          color: #111111;
          margin-bottom: 10px; 
          letter-spacing: 0.5px;
          text-transform: uppercase;
        }

        .why-card p { 
          font-size: 0.85rem; 
          color: #8c8989; 
          line-height: 1.5;
          max-width: 210px;
          margin: 0 auto;
        }

        @media (max-width: 992px) {
          .why-grid {
            flex-wrap: wrap;
            gap: 30px 0;
          }

          .why-card {
            flex: 1 1 33.33%;
            border-right: none;
            margin-bottom: 20px;
          }
        }

        @media (max-width: 600px) {
          .why-main-title {
            font-size: 1.4rem;
          }

          .why-card {
            flex: 1 1 100%;
          }
        }
      `}</style>
            </section>
        );
    };



    const projects = [
        { img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400&h=300&fit=crop', title: 'Luxury Residential' },
        { img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=300&fit=crop', title: 'Commercial Office' },
        { img: 'https://images.unsplash.com/photo-1556906781-9a412961c28c?w=400&h=300&fit=crop', title: 'Retail Storefront' },
        { img: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400&h=300&fit=crop', title: 'Modern Condo' },
        { img: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=400&h=300&fit=crop', title: 'Luxury Home' },
    ];

    const FeaturedProjects = () => {
        return (
            <section className="projects-section">
                <div className="container">
                    <div className="projects-header">
                        <h2>FEATURED PROJECTS</h2>
                        <button className="view-all">VIEW ALL PROJECTS →</button>
                    </div>
                    <Swiper spaceBetween={20} slidesPerView={1.2} breakpoints={{ 768: { slidesPerView: 2.5 }, 1024: { slidesPerView: 4 } }}>
                        {projects.map((p, idx) => (
                            <SwiperSlide key={idx}>
                                <div className="project-card">
                                    <img src={p.img} alt={p.title} loading="lazy" />
                                    <div className="project-overlay"><span>{p.title}</span></div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </section>
        );
    };


    const steps = [
        { num: '1', title: 'CONTACT US', desc: 'Reach out by phone, form, or email. We\'ll learn about your project.' },
        { num: '2', title: 'CONSULTATION', desc: 'We assess your space and recommend the best film for your needs.' },
        { num: '3', title: 'PROFESSIONAL INSTALLATION', desc: 'Our experts install your film with precision and care.' },
        { num: '4', title: 'ENJOY THE RESULTS', desc: 'Enjoy more comfort, privacy, and protection for years to come.' },
    ];

    const HowItWorks = () => {
        return (
            <section className="how-it-works bg-gray">
                <div className="container">
                    <div className="section-title">
                        <h2>HOW IT WORKS</h2>
                        <div className="underline"></div>
                    </div>
                    <div className="steps">
                        {steps.map((step, idx) => (
                            <React.Fragment key={idx}>
                                <div className="step-card">
                                    <div className="step-number">{step.num}</div>
                                    <div className="step-icon"><i className="fas fa-check-circle"></i></div>
                                    <h4>{step.title}</h4>
                                    <p>{step.desc}</p>
                                </div>
                                {idx < steps.length - 1 && <div className="step-arrow"><i className="fas fa-arrow-right"></i></div>}
                            </React.Fragment>
                        ))}
                    </div>
                </div>
            </section>
        );
    };



    const testimonials = [
        { name: 'Sarah M.', place: 'Toronto, ON', text: 'Amazing experience from start to finish. The team was professional, on time, and the film has made such a difference in our home. Highly recommended!' },
        { name: 'Michael B.', place: 'Vaughan, ON', text: 'Exceptional service and quality. Our office is much more comfortable now. The installers were meticulous and courteous.' },
        { name: 'David L.', place: 'Mississauga, ON', text: 'We love the privacy film in our condo. It\'s elegant and functional. The team gave great advice and delivered perfectly.' },
    ];

    const Testimonials = () => {
        return (
            <section className="testimonials-section bg-dark">
                <div className="container">
                    <div className="testimonials-top">
                        <h2>WHAT OUR CLIENTS SAY</h2>
                        <div className="stars">★★★★★ <span>Based on 200+ Google Reviews</span></div>
                    </div>
                    <Swiper modules={[Pagination, Autoplay]} pagination={{ clickable: true }} autoplay={{ delay: 5000 }} spaceBetween={30} slidesPerView={1} breakpoints={{ 768: { slidesPerView: 2 } }}>
                        {testimonials.map((t, idx) => (
                            <SwiperSlide key={idx}>
                                <div className="testimonial-card">
                                    <div className="stars">★★★★★</div>
                                    <p>"{t.text}"</p>
                                    <h4>{t.name}</h4>
                                    <span>{t.place}</span>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </section>
        );
    };


    const CTASection = () => {
        return (
            <section className="cta-section bg-red">
                <div className="container cta-inner">
                    <div>
                        <h3>READY TO IMPROVE YOUR SPACE?</h3>
                        <h2>GET YOUR FREE QUOTE TODAY!</h2>
                        <p>Fast response • Expert advice • No obligation</p>
                    </div>
                    <div>
                        <button className="btn-white">GET FREE QUOTE →</button>
                        <p className="cta-phone">or call <a href="tel:+16478084677">647-808-4677</a></p>
                    </div>
                </div>
            </section>
        );
    };



    const Footer = () => {
        return (
            <footer className="footer bg-dark">
                <div className="container footer-grid">
                    <div>
                        <div className="logo"><i><FaCanadianMapleLeaf /></i> MAPLE LEAF <span>WINDOW FILM</span></div>
                        <p>Professional window film solutions for homes and businesses across the Greater Toronto Area.</p>
                    </div>
                    <div>
                        <h4>Quick Links</h4>
                        <Link to="/">Home</Link>
                        <Link to="/residential">Residential</Link>
                        <Link to="/commercial">Commercial</Link>
                        <Link to="/services">Services</Link>
                        <Link to="/projects">Projects</Link>
                    </div>
                    <div>
                        <h4>Services</h4>
                        <Link to="/services/security-film">Security Film</Link>
                        <Link to="/services/solar-film">Solar / Heat Reduction</Link>
                        <Link to="/services/privacy-film">Privacy Film</Link>
                        <Link to="/services/decorative-film">Decorative Frost Film</Link>
                        <Link to="/services/bird-safety-film">Bird Strike Protection</Link>
                    </div>
                    <div>
                        <h4>Contact</h4>
                        <p><i className="fas fa-phone"></i> 647-808-4677</p>
                        <p><i className="fas fa-envelope"></i> info@mapleleafwindowfilm.com</p>
                        <p><i className="fas fa-map-pin"></i> Serving Toronto & Surrounding Areas</p>
                        <h4>Hours</h4>
                        <p>Mon - Fri: 8:00am - 6:00pm</p>
                        <p>Saturday: 9:00am - 3:00pm</p>
                        <p>Sunday: Closed</p>
                    </div>
                </div>
                <div className="footer-bottom">
                    <div className="container">
                        <span>© 2024 Maple Leaf Window Film. All Rights Reserved.</span>
                        <div><Link to="/privacy">Privacy Policy</Link> <Link to="/terms">Terms of Service</Link></div>
                    </div>
                </div>
            </footer>
        );
    };

    return (
        <>
            <Header />
            <HeroSection />
            <TrustedCategories />
            <ImprovementCards />
            <BeforeAfterSection />
            <WhyChooseUs />
            <FeaturedProjects />
            <HowItWorks />
            <Testimonials />
            <CTASection />
            <Footer />
        </>
    )
}

export default HomePage
