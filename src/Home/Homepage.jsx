import React, { useState, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css/pagination";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { FaCanadianMapleLeaf } from "react-icons/fa";
import Header from "./Header";

function HomePage() {
  const HeroSection = () => {
    // Feature hot-spots mapped as percentages relative to the container
    const hotspots = [
      {
        id: "heat",
        title: "HEAT REJECTION",
        subtitle: "Blocks solar infrared energy",
        icon: "fas fa-sun",
        dotPos: { x: "68%", y: "64%" },
        labelPos: { x: "52%", y: "16%" },
        linePoints: "68,64 58,64 58,20",
      },
      {
        id: "privacy",
        title: "PRIVACY FILM",
        subtitle: "Creates one-way or obscured views",
        icon: "fas fa-user-shield",
        dotPos: { x: "62%", y: "76%" },
        labelPos: { x: "40%", y: "80%" },
        linePoints: "62,76 56,76 56,84 50,84",
      },
      {
        id: "security",
        title: "SECURITY FILM",
        subtitle: "Holds glass together on impact",
        icon: "fas fa-shield-alt",
        dotPos: { x: "76%", y: "70%" },
        labelPos: { x: "87%", y: "72%" },
        linePoints: "76,70 85,70 85,76 87,76",
      },
      {
        id: "birds",
        title: "BIRD SAFETY FILM",
        subtitle: "Deterrent for bird strikes",
        icon: "fas fa-crow",
        dotPos: { x: "79%", y: "60%" },
        labelPos: { x: "82%", y: "11%" },
        linePoints: "79,60 88,60 88,20",
      },
    ];

    return (
      <section className="hero">
        <div className="container hero-container">
          {/* Left Hero Text Content */}
          <div className="hero-content">
            <p className="eyebrow animate-text">THE RIGHT WINDOW FILM.</p>
            <h1>
              <span className="animate-text-delay">PROFESSIONALLY</span> <br />
              <span className="animate-text-delay-2">INSTALLED.</span>
            </h1>

            <p className="hero-text animate-text-delay-3">
              Premium window film solutions for homes, businesses, storefronts,
              condos, and luxury properties across the Greater Toronto Area.
            </p>

            <div className="hero-benefits">
              <div className="benefit-item animate-benefit-1">
                <i className="fas fa-shield-alt"></i>
                <div className="benefit-text">
                  <strong>PROTECT</strong>
                  <span>What Matters</span>
                </div>
              </div>

              <div className="benefit-item animate-benefit-2">
                <i className="fas fa-sun"></i>
                <div className="benefit-text">
                  <strong>REDUCE HEAT</strong>
                  <span>Stay Comfortable</span>
                </div>
              </div>

              <div className="benefit-item animate-benefit-3">
                <i className="fas fa-eye"></i>
                <div className="benefit-text">
                  <strong>INCREASE PRIVACY</strong>
                  <span>Enhance Your Space</span>
                </div>
              </div>
            </div>

            <div className="hero-buttons animate-buttons">
              <button className="btn-primary">GET FREE QUOTE &rarr;</button>
              <button className="btn-outline">VIEW OUR PROJECTS</button>
            </div>

            <div className="hero-reviews animate-reviews">
              <i className="fab fa-google google-icon"></i>
              <div className="stars">★★★★★</div>
              <span className="rating-num">5.0</span>
              <span className="review-count">
                Based on <strong>200+</strong> Google Reviews
              </span>
            </div>
          </div>

          {/* Right Interactive Diagram Overlay */}
          <div className="diagram-layer">
            {/* Animated Projection SVG Lines */}
            <svg
              className="svg-overlay"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
            >
              {hotspots.map((spot) => (
                <polyline
                  key={`line-${spot.id}`}
                  points={spot.linePoints}
                  className="animated-line"
                />
              ))}
            </svg>

            {/* Hotspot Dots & Text Labels */}
            {hotspots.map((spot, index) => (
              <React.Fragment key={spot.id}>
                {/* Pulsating Target Dot on Glass */}
                <div
                  className="pulsating-point"
                  style={{ left: spot.dotPos.x, top: spot.dotPos.y }}
                >
                  <span className="core-dot"></span>
                  <span className="ring-pulse"></span>
                </div>

                {/* Label Card */}
                <div
                  className="hotspot-label"
                  style={{
                    left: spot.labelPos.x,
                    top: spot.labelPos.y,
                    animationDelay: `${0.5 + index * 0.3}s`,
                  }}
                >
                  <i className={`${spot.icon} label-icon`}></i>
                  <div>
                    <strong>{spot.title}</strong>
                  </div>
                </div>
              </React.Fragment>
            ))}
          </div>
        </div>

        <style>{`
        :root {
          --primary-blue: #07154a;
          --primary-gold: #d6a800;
          --dark-gold: #b89200;
        }

        .hero {
          background: linear-gradient(to right, rgba(0, 0, 0, 0.82) 25%, rgba(7, 21, 74, 0.0) 100%), 
            url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1600&h=800&fit=crop&crop=center') center/cover no-repeat;
          min-height: 720px;
          display: flex;
          align-items: center;
          position: relative;
          color: #ffffff;
          overflow: hidden;
        }

        .hero-container {
          max-width: 1280px;
          margin: 0 auto;
          padding: 60px 24px;
          width: 100%;
          position: relative;
          display: flex;
        }

        .hero-content {
          max-width: 540px;
          z-index: 5;
        }

        /* ===== TEXT ANIMATIONS ===== */
        @keyframes slideUpFade {
          0% { opacity: 0; transform: translateY(30px); }
          100% { opacity: 1; transform: translateY(0); }
        }

        @keyframes scaleIn {
          0% { opacity: 0; transform: scale(0.8); }
          100% { opacity: 1; transform: scale(1); }
        }

        .animate-text {
          animation: slideUpFade 0.8s ease forwards;
        }

        .animate-text-delay {
          animation: slideUpFade 0.8s ease 0.2s forwards;
          opacity: 0;
          display: inline-block;
        }

        .animate-text-delay-2 {
          animation: slideUpFade 0.8s ease 0.4s forwards;
          opacity: 0;
          display: inline-block;
        }

        .animate-text-delay-3 {
          animation: slideUpFade 0.8s ease 0.6s forwards;
          opacity: 0;
        }

        .animate-benefit-1 {
          animation: scaleIn 0.6s ease 0.8s forwards;
          opacity: 0;
        }

        .animate-benefit-2 {
          animation: scaleIn 0.6s ease 1.0s forwards;
          opacity: 0;
        }

        .animate-benefit-3 {
          animation: scaleIn 0.6s ease 1.2s forwards;
          opacity: 0;
        }

        .animate-buttons {
          animation: slideUpFade 0.8s ease 1.4s forwards;
          opacity: 0;
        }

        .animate-reviews {
          animation: slideUpFade 0.8s ease 1.6s forwards;
          opacity: 0;
        }

        .eyebrow {
          color: var(--primary-gold);
          font-weight: 700;
          letter-spacing: 2.5px;
          font-size: 0.85rem;
          margin-bottom: 8px;
          text-transform: uppercase;
        }

        .hero-content h1 {
          font-size: 3.6rem;
          font-weight: 900;
          line-height: 1.05;
          margin-bottom: 20px;
          letter-spacing: 1px;
          text-transform: uppercase;
        }

        .hero-content h1 span {
          color: #ffffff;
        }

        .hero-text {
          font-size: 1rem;
          line-height: 1.5;
          opacity: 0.9;
          margin-bottom: 32px;
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
          color: var(--primary-gold);
        }

        .benefit-text {
          display: flex;
          flex-direction: column;
          font-size: 0.75rem;
          line-height: 1.2;
        }

        .benefit-text strong {
          font-weight: 800;
          color: #ffffff;
        }

        .benefit-text span {
          opacity: 0.8;
          color: #ffffff;
        }

        .hero-buttons {
          display: flex;
          gap: 16px;
          flex-wrap: wrap;
          margin-bottom: 32px;
        }

        .btn-primary {
          background: var(--primary-blue);
          color: white;
          border: none;
          padding: 14px 28px;
          font-weight: 700;
          border-radius: 4px;
          cursor: pointer;
          transition: all 0.3s ease;
          letter-spacing: 0.5px;
          border: 2px solid var(--primary-gold);
        }

        .btn-primary:hover {
          background: var(--primary-gold);
          transform: translateY(-2px);
          box-shadow: 0 4px 20px rgba(214, 168, 0, 0.4);
        }

        .btn-outline {
          background: transparent;
          color: white;
          border: 2px solid rgba(255, 255, 255, 0.5);
          padding: 14px 28px;
          font-weight: 700;
          border-radius: 4px;
          cursor: pointer;
          transition: all 0.3s ease;
          letter-spacing: 0.5px;
        }

        .btn-outline:hover {
          background: rgba(214, 168, 0, 0.15);
          border-color: var(--primary-gold);
          color: var(--primary-gold);
          transform: translateY(-2px);
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
        }

        .rating-num {
          font-weight: 800;
          color: var(--primary-gold);
        }

        .review-count {
          opacity: 0.85;
        }

        /* ===== DIAGRAM & ANIMATION STYLES ===== */

        .diagram-layer {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
        }

        .svg-overlay {
          position: absolute;
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
        }

        /* Line projection drawing animation */
        .animated-line {
          fill: none;
          stroke: var(--primary-gold);
          stroke-width: 0.4;
          stroke-dasharray: 100;
          stroke-dashoffset: 100;
          animation: drawLine 2.5s ease-out forwards;
          filter: drop-shadow(0 0 6px rgba(214, 168, 0, 0.5));
        }

        .animated-line:nth-child(2) {
          animation-delay: 0.3s;
        }

        .animated-line:nth-child(3) {
          animation-delay: 0.6s;
        }

        .animated-line:nth-child(4) {
          animation-delay: 0.9s;
        }

        @keyframes drawLine {
          to {
            stroke-dashoffset: 0;
          }
        }

        /* Pulsating Target Dot */
        .pulsating-point {
          position: absolute;
          transform: translate(-50%, -50%);
          display: flex;
          align-items: center;
          justify-content: center;
          animation: dotAppear 0.5s ease forwards;
          opacity: 0;
        }

        .pulsating-point:nth-child(1) { animation-delay: 0.3s; }
        .pulsating-point:nth-child(2) { animation-delay: 0.6s; }
        .pulsating-point:nth-child(3) { animation-delay: 0.9s; }
        .pulsating-point:nth-child(4) { animation-delay: 1.2s; }

        @keyframes dotAppear {
          0% { opacity: 0; transform: translate(-50%, -50%) scale(0); }
          100% { opacity: 1; transform: translate(-50%, -50%) scale(1); }
        }

        .core-dot {
          width: 10px;
          height: 10px;
          background-color: var(--primary-gold);
          border-radius: 50%;
          box-shadow: 0 0 20px rgba(214, 168, 0, 0.8);
          z-index: 2;
          border: 2px solid #ffffff;
        }

        .ring-pulse {
          position: absolute;
          width: 30px;
          height: 30px;
          border: 2px solid var(--primary-gold);
          border-radius: 50%;
          animation: pulse 2s infinite ease-out;
          box-shadow: 0 0 30px rgba(214, 168, 0, 0.3);
        }

        @keyframes pulse {
          0% {
            transform: scale(0.3);
            opacity: 1;
          }
          100% {
            transform: scale(2);
            opacity: 0;
          }
        }

        /* Hotspot Labels */
        .hotspot-label {
  position: absolute;
  display: flex;
  align-items: flex-start;
  gap: 8px;
  max-width: 300px;
  background: rgba(7, 21, 74, 0.85);
  padding: 8px 12px;
  border-radius: 6px;
  backdrop-filter: blur(8px);
  border: 1px solid var(--primary-gold);
  animation: labelFadeIn 0.6s ease forwards;
  opacity: 0;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
  white-space: nowrap; /* ADD THIS LINE */
}

        .hotspot-label:hover {
          background: rgba(214, 168, 0, 0.2);
          transform: scale(1.05);
          transition: all 0.3s ease;
        }

        @keyframes labelFadeIn {
          0% { opacity: 0; transform: translateY(10px) scale(0.95); }
          100% { opacity: 1; transform: translateY(0) scale(1); }
        }

        .label-icon {
          font-size: 1.2rem;
          margin-top: 2px;
          color: var(--primary-gold);
        }

        .hotspot-label strong {
          display: block;
          font-size: 0.75rem;
          letter-spacing: 0.5px;
          text-transform: uppercase;
          color: #ffffff;
        }

        .hotspot-label span {
          display: block;
          font-size: 0.68rem;
          opacity: 0.8;
          line-height: 1.2;
          color: #ffffff;
        }

        /* ===== RESPONSIVE ===== */
        @media (max-width: 900px) {
          .diagram-layer {
            display: none;
          }
          
          .hero-content h1 {
            font-size: 2.5rem;
          }
          
          .hero-benefits {
            flex-direction: column;
            gap: 16px;
          }
        }

        @media (max-width: 576px) {
          .hero-content h1 {
            font-size: 2rem;
          }
          
          .btn-primary,
          .btn-outline {
            width: 100%;
            text-align: center;
          }
        }
      `}</style>
      </section>
    );
  };

  const categories = [
    { icon: "fas fa-home", label: "HOMEOWNERS" },
    { icon: "fas fa-building", label: "BUSINESSES" },
    { icon: "fas fa-store", label: "RETAIL STORES" },
    { icon: "fas fa-city", label: "CONDOS" },
    { icon: "fas fa-hard-hat", label: "BUILDERS & DEVELOPERS" },
  ];

  const TrustedCategories = () => {
    const categories = [
      { icon: "fas fa-home", label: "HOMES" },
      { icon: "fas fa-building", label: "BUSINESSES" },
      { icon: "fas fa-store", label: "STOREFRONTS" },
      { icon: "fas fa-city", label: "CONDOS" },
      { icon: "fas fa-crown", label: "LUXURY PROPERTIES" },
    ];

    return (
      <section className="trusted-section">
        <div className="container">
          <h3 className="trusted-heading">
            <span className="heading-line"></span>
            TRUSTED BY
            <span className="heading-line"></span>
          </h3>
          <div className="trusted-grid">
            {categories.map((item, idx) => (
              <div
                key={idx}
                className="trusted-item"
                style={{ animationDelay: `${0.2 + idx * 0.1}s` }}
              >
                <i className={item.icon}></i>
                <span>{item.label}</span>
                <span className="dot-separator"></span>
              </div>
            ))}
          </div>
        </div>

        <style>{`
        :root {
          --primary-blue: #07154a;
          --primary-gold: #d6a800;
          --dark-gold: #b89200;
          --border-color: #e8e8e8;
        }

        .trusted-section { 
          padding: 28px 0 32px; 
          background: #ffffff;
          border-bottom: 2px solid var(--primary-gold);
          position: relative;
          overflow: hidden;
        }

        .trusted-section::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 3px;
          background: linear-gradient(90deg, transparent, var(--primary-gold), transparent);
          animation: shimmerBar 3s infinite;
        }

        @keyframes shimmerBar {
          0% { left: -100%; }
          100% { left: 100%; }
        }

        .container {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 24px;
        }

        .trusted-heading { 
          text-align: center; 
          font-weight: 700; 
          letter-spacing: 3px; 
          font-size: 0.85rem; 
          margin-bottom: 24px; 
          color: var(--primary-blue);
          text-transform: uppercase;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 20px;
          position: relative;
        }

        .heading-line {
          flex: 1;
          max-width: 80px;
          height: 2px;
          background: linear-gradient(90deg, transparent, var(--primary-gold));
          display: inline-block;
        }

        .heading-line:last-child {
          background: linear-gradient(90deg, var(--primary-gold), transparent);
        }

        .trusted-grid { 
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
          gap: 0;
        }

        .trusted-item { 
          display: flex; 
          align-items: center; 
          justify-content: center;
          gap: 12px; 
          flex: 1;
          padding: 12px 16px;
          position: relative;
          animation: slideUpFade 0.6s ease forwards;
          opacity: 0;
          transition: all 0.3s ease;
          cursor: default;
        }

        @keyframes slideUpFade {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }

        .trusted-item::after {
          content: '';
          position: absolute;
          right: 0;
          top: 50%;
          transform: translateY(-50%);
          width: 1px;
          height: 35px;
          background: var(--border-color);
        }

        .trusted-item:last-child::after {
          display: none;
        }

        .trusted-item:hover {
          transform: translateY(-3px);
        }

        .trusted-item:hover i {
          transform: scale(1.2) rotate(5deg);
          color: var(--primary-gold);
        }

        .trusted-item:hover span {
          color: var(--primary-blue);
        }

        .trusted-item i { 
          color: var(--primary-blue); 
          font-size: 1.6rem; 
          flex-shrink: 0;
          transition: all 0.3s ease;
        }

        .trusted-item span {
          font-weight: 700; 
          font-size: 0.8rem; 
          color: #555555;
          letter-spacing: 0.5px;
          white-space: nowrap;
          transition: color 0.3s ease;
        }

        .dot-separator {
          display: none;
          width: 6px;
          height: 6px;
          background: var(--primary-gold);
          border-radius: 50%;
          margin-left: 4px;
          animation: pulseDot 2s infinite;
        }

        @keyframes pulseDot {
          0% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(0.8); }
          100% { opacity: 1; transform: scale(1); }
        }

        /* Responsive */
        @media (max-width: 992px) {
          .trusted-grid {
            flex-wrap: wrap;
            gap: 8px 0;
          }

          .trusted-item {
            flex: 1 1 33.33%;
            padding: 10px 12px;
          }

          .trusted-item::after {
            display: none;
          }

          .dot-separator {
            display: inline-block;
          }
        }

        @media (max-width: 768px) {
          .trusted-item {
            flex: 1 1 50%;
            justify-content: flex-start;
            padding: 8px 12px;
          }

          .trusted-item i {
            font-size: 1.3rem;
          }

          .trusted-item span {
            font-size: 0.7rem;
          }

          .heading-line {
            max-width: 40px;
          }

          .trusted-heading {
            font-size: 0.75rem;
            gap: 12px;
          }
        }

        @media (max-width: 480px) {
          .trusted-item {
            flex: 1 1 100%;
            justify-content: center;
            border-bottom: 1px solid var(--border-color);
            padding: 10px 0;
          }

          .trusted-item:last-child {
            border-bottom: none;
          }

          .trusted-item i {
            font-size: 1.2rem;
          }

          .trusted-item span {
            font-size: 0.7rem;
          }
        }
      `}</style>
      </section>
    );
  };

  const cards = [
    {
      id: 1,
      title: "PROTECT MY GLASS",
      desc: "Security film helps protect against break-ins, impacts, and accidents.",
      icon: "fas fa-shield-alt",
      img: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=400&h=250&fit=crop",
      btn: "EXPLORE SECURITY FILM →",
    },
    {
      id: 2,
      title: "REDUCE HEAT",
      desc: "Heat reduction film keeps your space cooler and reduces energy costs.",
      icon: "fas fa-sun",
      img: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=400&h=250&fit=crop",
      btn: "EXPLORE SOLAR FILM →",
    },
    {
      id: 3,
      title: "INCREASE PRIVACY",
      desc: "Add privacy to any space without sacrificing natural light or style.",
      icon: "fas fa-eye",
      img: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400&h=250&fit=crop",
      btn: "EXPLORE PRIVACY FILM →",
    },
    {
      id: 4,
      title: "PROTECT BIRDS",
      desc: "Bird safety films help reduce bird collisions with discreet dot patterns.",
      icon: "fas fa-dove",
      img: "https://images.unsplash.com/photo-1562926045-9a69b0f8f1a6?w=400&h=250&fit=crop",
      btn: "EXPLORE BIRD SAFETY →",
    },
    {
      id: 5,
      title: "COMMERCIAL SOLUTIONS",
      desc: "Improve comfort, privacy, appearance, and safety for your business.",
      icon: "fas fa-building",
      img: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=250&fit=crop",
      btn: "VIEW COMMERCIAL FILM →",
    },
  ];

  const ImprovementCards = () => {
    const cards = [
      {
        id: 1,
        title: "HEAT REJECTION",
        desc: "Blocks up to 99% of harmful UV rays and reduces solar heat gain.",
        icon: "fas fa-sun",
        btn: "LEARN MORE",
        img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400&h=250&fit=crop",
        path: "/heat-control",
      },
      {
        id: 2,
        title: "PRIVACY FILM",
        desc: "One-way or obscured views for complete privacy during daylight hours.",
        icon: "fas fa-user-shield",
        btn: "LEARN MORE",
        img: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=250&fit=crop",
        path: "/privacy-film",
      },
      {
        id: 3,
        title: "SECURITY FILM",
        desc: "Holds glass together upon impact, deterring break-ins and accidents.",
        icon: "fas fa-shield-alt",
        btn: "LEARN MORE",
        img: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=400&h=250&fit=crop",
        path: "/security-film",
      },
      {
        id: 4,
        title: "DECORATIVE FILM",
        desc: "Custom frosted, etched, or patterned designs for any interior space.",
        icon: "fas fa-paint-brush",
        btn: "LEARN MORE",
        img: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=400&h=250&fit=crop",
        path: "/decorative-tinting",
      },
      {
        id: 5,
        title: "BIRD SAFETY",
        desc: "Prevents bird collisions with visible patterns that alert birds to glass.",
        icon: "fas fa-dove",
        btn: "LEARN MORE",
        img: "https://images.unsplash.com/photo-1444464666168-49d633b86797?w=400&h=250&fit=crop",
        path: "/feather-friendly",
      },
    ];
    const navigate = useNavigate();
    return (
      <section className="improvement-section">
        <div className="container">
          <div className="section-title">
            <div className="title-decoration">
              <span className="gold-line"></span>
              <h2>WHAT WOULD YOU LIKE TO IMPROVE?</h2>
              <span className="gold-line"></span>
            </div>
            {/* <div className="underline"></div> */}
          </div>

          <div className="cards-grid">
            {cards.map((card, index) => (
              <div
                key={card.id}
                className="improvement-card"
                style={{ animationDelay: `${0.1 + index * 0.1}s` }}
              >
                <div className="card-image-wrapper">
                  <div className="card-image">
                    <img src={card.img} alt={card.title} loading="lazy" />
                    <div className="image-overlay"></div>
                  </div>
                  <div className="card-icon">
                    <i className={card.icon}></i>
                  </div>
                </div>

                <div className="card-content">
                  <h3>{card.title}</h3>
                  <p>{card.desc}</p>
                  <button
                    className="card-btn"
                    onClick={() => navigate(card.path)}
                  >
                    <span>{card.btn}</span>
                    <i className="fas fa-arrow-right"></i>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <style>{`
        :root {
          --primary-blue: #07154a;
          --primary-gold: #d6a800;
          --dark-gold: #b89200;
          --light-gray: #f0f2f5;
          --shadow-color: rgba(7, 21, 74, 0.08);
        }

        .improvement-section { 
          padding: 60px 0 80px; 
          background: linear-gradient(180deg, #fcfcfc 0%, #f8f9fa 100%);
          position: relative;
        }

        .improvement-section::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: linear-gradient(90deg, var(--primary-blue), var(--primary-gold), var(--primary-blue));
          background-size: 200% 100%;
          animation: gradientMove 4s ease infinite;
        }

        @keyframes gradientMove {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
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

        .title-decoration {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 24px;
          margin-bottom: 12px;
        }

        .gold-line {
          flex: 1;
          max-width: 80px;
          height: 1.5px;
          background: linear-gradient(90deg, transparent, var(--primary-gold));
          border-radius: 2px;
          margin-bottom: 6px;
        }

        .gold-line:last-child {
          background: linear-gradient(90deg, var(--primary-gold), transparent);
        }

        .section-title h2 {
          font-size: 1.8rem;
          font-weight: 800;
          color: var(--primary-blue);
          letter-spacing: 1.5px;
          text-transform: uppercase;
          margin: 0;
          position: relative;
          animation: titleGlow 3s ease-in-out infinite;
          white-space: nowrap;
        }

        @keyframes titleGlow {
          0%, 100% { text-shadow: 0 0 20px rgba(214, 168, 0, 0); }
          50% { text-shadow: 0 0 20px rgba(214, 168, 0, 0.1); }
        }

        .section-title .underline {
          width: 60px;
          height: 3px;
          background: var(--primary-gold);
          margin: 0 auto;
          border-radius: 2px;
          position: relative;
        }

        .section-title .underline::after {
          content: '';
          position: absolute;
          top: -3px;
          left: 50%;
          transform: translateX(-50%);
          width: 20px;
          height: 9px;
          background: var(--primary-gold);
          border-radius: 50%;
          opacity: 0.3;
          filter: blur(4px);
        }

        .cards-grid { 
          display: grid; 
          grid-template-columns: repeat(5, 1fr); 
          gap: 24px; 
        }

        .improvement-card { 
          background: #ffffff; 
          border-radius: 16px; 
          overflow: visible !important;
          box-shadow: 0 4px 20px var(--shadow-color); 
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275); 
          border: 1px solid rgba(214, 168, 0, 0.1);
          display: flex;
          flex-direction: column;
          text-align: center;
          position: relative;
          animation: cardFadeUp 0.6s ease forwards;
          opacity: 0;
        }

        @keyframes cardFadeUp {
          0% { opacity: 0; transform: translateY(30px) scale(0.95); }
          100% { opacity: 1; transform: translateY(0) scale(1); }
        }

        .improvement-card:hover { 
          transform: translateY(-8px) scale(1.02); 
          box-shadow: 0 20px 40px rgba(7, 21, 74, 0.15);
          border-color: var(--primary-gold);
        }

        .card-image-wrapper {
          position: relative;
          width: 100%;
          overflow: visible;
          padding: 0 12px;
          margin-top: -12px;
        }

        .card-image { 
          height: 190px; 
          width: 100%;
          overflow: hidden; 
          border-radius: 16px;
          position: relative;
        }

        .card-image img { 
          width: 100%; 
          height: 100%; 
          object-fit: cover; 
          transition: transform 0.6s ease; 
        }

        .improvement-card:hover .card-image img { 
          transform: scale(1.08); 
        }

        .image-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(180deg, transparent 50%, rgba(7, 21, 74, 0.2));
          border-radius: 16px;
          opacity: 0;
          transition: opacity 0.4s ease;
        }

        .improvement-card:hover .image-overlay {
          opacity: 1;
        }

        .card-icon { 
          position: absolute; 
          bottom: -24px; 
          left: 50%; 
          transform: translateX(-50%); 
          background: var(--primary-blue);
          color: var(--primary-gold);
          width: 56px; 
          height: 56px; 
          border-radius: 50%; 
          display: flex; 
          align-items: center; 
          justify-content: center; 
          font-size: 1.3rem; 
          box-shadow: 0 4px 16px rgba(7, 21, 74, 0.2);
          z-index: 10;
          transition: all 0.4s ease;
          border: 2px solid var(--primary-gold);
        }

        .improvement-card:hover .card-icon {
          background: var(--primary-gold);
          color: var(--primary-blue);
          transform: translateX(-50%) scale(1.1) rotate(10deg);
          box-shadow: 0 8px 24px rgba(214, 168, 0, 0.4);
        }

        .card-icon::before {
          content: '';
          position: absolute;
          inset: 3px;
          border: 1.5px dashed rgba(214, 168, 0, 0.3);
          border-radius: 50%;
          transition: all 0.4s ease;
        }

        .improvement-card:hover .card-icon::before {
          border-color: var(--primary-blue);
          transform: rotate(360deg);
        }

        .card-content {
          padding: 36px 16px 24px;
          display: flex;
          flex-direction: column;
          flex-grow: 1;
          justify-content: space-between;
          align-items: center;
        }

        .improvement-card h3 { 
          font-size: 0.9rem; 
          font-weight: 800; 
          color: var(--primary-blue);
          margin-bottom: 10px;
          letter-spacing: 0.5px;
          text-transform: uppercase;
          position: relative;
        }

        .improvement-card h3::after {
          content: '';
          display: block;
          width: 30px;
          height: 2px;
          background: var(--primary-gold);
          margin: 8px auto 0;
          transition: width 0.3s ease;
        }

        .improvement-card:hover h3::after {
          width: 50px;
        }

        .improvement-card p { 
          font-size: 0.78rem; 
          color: #666666; 
          line-height: 1.5;
          margin-bottom: 20px;
          max-width: 220px;
        }

        .card-btn { 
          width: 100%;
          background: transparent; 
          border: 2px solid var(--primary-blue);
          color: var(--primary-blue);
          font-weight: 700; 
          font-size: 0.72rem; 
          padding: 10px 12px;
          border-radius: 8px;
          cursor: pointer; 
          transition: all 0.3s ease; 
          letter-spacing: 0.5px;
          text-transform: uppercase;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
        }

        .card-btn i {
          font-size: 0.6rem;
          transition: transform 0.3s ease;
        }

        .card-btn:hover { 
          background: var(--primary-blue);
          color: #ffffff;
          border-color: var(--primary-blue);
          box-shadow: 0 4px 16px rgba(7, 21, 74, 0.25);
          transform: translateY(-2px);
        }

        .card-btn:hover i {
          transform: translateX(4px);
        }

        /* Responsive */
        @media (max-width: 1100px) {
          .cards-grid {
            grid-template-columns: repeat(3, 1fr);
            gap: 32px 20px;
          }

          .gold-line {
            max-width: 50px;
          }
        }

        @media (max-width: 768px) {
          .cards-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 30px 16px;
          }

          .section-title h2 {
            font-size: 1.2rem;
            white-space: normal;
          }

          .title-decoration {
            gap: 12px;
          }

          .gold-line {
            max-width: 30px;
          }
        }

        @media (max-width: 480px) {
          .cards-grid {
            grid-template-columns: 1fr;
            gap: 28px;
          }

          .section-title h2 {
            font-size: 1rem;
            letter-spacing: 0.5px;
          }

          .card-image {
            height: 160px;
          }

          .gold-line {
            max-width: 20px;
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
  const [isPlaying, setIsPlaying] = useState(true);
  const autoPlayRef = useRef(null);

  // Auto-slide effect
  useEffect(() => {
    if (isPlaying) {
      let direction = 1;
      autoPlayRef.current = setInterval(() => {
        setPosition((prev) => {
          let newPos = prev + direction * 0.5;
          if (newPos >= 95) {
            direction = -1;
            newPos = 95;
          } else if (newPos <= 5) {
            direction = 1;
            newPos = 5;
          }
          return newPos;
        });
      }, 30);
    }
    return () => clearInterval(autoPlayRef.current);
  }, [isPlaying]);

  // Handle Drag / Interaction
  const handleMove = (e) => {
    if (!isDragging) return;
    const rect = containerRef.current.getBoundingClientRect();
    const clientX = e.clientX || (e.touches && e.touches[0].clientX);
    if (!clientX) return;
    const x = ((clientX - rect.left) / rect.width) * 100;
    if (x >= 0 && x <= 100) setPosition(x);
  };

  const handleStart = (e) => {
    setIsDragging(true);
    setIsPlaying(false);
    const rect = containerRef.current.getBoundingClientRect();
    const clientX = e.clientX || (e.touches && e.touches[0].clientX);
    if (!clientX) return;
    const x = ((clientX - rect.left) / rect.width) * 100;
    if (x >= 0 && x <= 100) setPosition(x);
  };

  const handleEnd = () => {
    setIsDragging(false);
  };

  const togglePlayPause = () => {
    setIsPlaying((prev) => !prev);
  };

  const handleReset = () => {
    setIsPlaying(false);
    setPosition(50);
  };

  const showBefore = () => {
    setIsPlaying(false);
    setPosition(100);
  };

  const showAfter = () => {
    setIsPlaying(false);
    setPosition(0);
  };

  return (
    <>
      <section className="before-after-section">
        <div className="container before-after-inner">
          {/* Left Column: Compact Text */}
          <div className="before-after-text">
            <span className="eyebrow">
              <span className="gold-accent">✦</span> SEE THE DIFFERENCE{" "}
              <span className="gold-accent">✦</span>
            </span>
            <h2>
              TRANSFORM YOUR GLASS.
              <br />
              TRANSFORM YOUR SPACE.
            </h2>
            <p>
              From privacy upgrades to heat reduction and glare protection, our
              films are selected for the right problem and installed with care.
            </p>
            <button className="btn-primary">
              <span>VIEW MORE BEFORE & AFTER</span>
              <i className="fas fa-arrow-right"></i>
            </button>
          </div>

          {/* Right Column: Larger Image Slider with Controls Below */}
          <div className="slider-wrapper">
            <div
              className="before-after-slider"
              ref={containerRef}
              onMouseMove={handleMove}
              onMouseDown={handleStart}
              onMouseUp={handleEnd}
              onMouseLeave={handleEnd}
              onTouchStart={handleStart}
              onTouchEnd={handleEnd}
              onTouchMove={(e) => {
                if (!isDragging) return;
                const touch = e.touches[0];
                const rect = containerRef.current.getBoundingClientRect();
                const x = ((touch.clientX - rect.left) / rect.width) * 100;
                if (x >= 0 && x <= 100) {
                  setPosition(x);
                  setIsPlaying(false);
                }
              }}
            >
              <div className="ba-container">
                {/* Bottom layer: The "AFTER" image */}
                <div className="ba-image-after"></div>

                {/* Top layer: The "BEFORE" image */}
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

            {/* Under-Image Control Bar */}
            <div className="slider-controls">
              <button
                className={`ctrl-btn ${isPlaying ? "active" : ""}`}
                onClick={togglePlayPause}
                title={isPlaying ? "Pause Auto-Slide" : "Play Auto-Slide"}
              >
                <i className={`fas ${isPlaying ? "fa-pause" : "fa-play"}`}></i>
                <span>{isPlaying ? "PAUSE" : "PLAY"}</span>
              </button>

              <button
                className="ctrl-btn"
                onClick={handleReset}
                title="Reset to Center"
              >
                <i className="fas fa-redo-alt"></i>
                <span>RESET</span>
              </button>

              <button
                className="ctrl-btn"
                onClick={showBefore}
                title="Show Before View"
              >
                <i className="fas fa-undo"></i>
                <span>100% BEFORE</span>
              </button>

              <button
                className="ctrl-btn"
                onClick={showAfter}
                title="Show After View"
              >
                <i className="fas fa-redo"></i>
                <span>100% AFTER</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        :root {
          --primary-blue: #07154a;
          --primary-gold: #d6a800;
          --dark-gold: #b89200;
        }

        .before-after-section {
          padding: 60px 0;
          background: #0a0a0a;
          position: relative;
          overflow: hidden;
        }

        .before-after-section::before {
          content: '';
          position: absolute;
          top: -50%;
          right: -20%;
          width: 60%;
          height: 200%;
          background: radial-gradient(circle, rgba(214, 168, 0, 0.05) 0%, transparent 70%);
          pointer-events: none;
        }

        .before-after-section::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent, var(--primary-gold), transparent);
          opacity: 0.3;
        }

        .container {
          max-width: 1360px;
          margin: 0 auto;
          padding: 0 24px;
        }

        .before-after-inner {
          display: grid;
          grid-template-columns: 0.7fr 1.3fr;
          gap: 40px;
          align-items: center;
          position: relative;
          z-index: 1;
        }

        /* Text Section */
        .before-after-text .eyebrow {
          color: var(--primary-gold);
          font-weight: 700;
          letter-spacing: 2px;
          font-size: 0.8rem;
          text-transform: uppercase;
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 6px;
        }

        .gold-accent {
          color: var(--primary-gold);
          animation: spinGold 4s linear infinite;
          display: inline-block;
        }

        @keyframes spinGold {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        .before-after-text h2 {
          font-size: 2.1rem;
          font-weight: 900;
          line-height: 1.1;
          margin: 6px 0 12px;
          text-transform: uppercase;
          color: #ffffff;
        }

        .before-after-text p {
          opacity: 0.7;
          margin-bottom: 20px;
          color: #cccccc;
          font-size: 0.95rem;
          line-height: 1.45;
        }

        .btn-primary {
          background: var(--primary-gold);
          color: var(--primary-blue);
          border: 2px solid var(--primary-gold);
          padding: 12px 24px;
          border-radius: 6px;
          font-weight: 700;
          font-size: 0.8rem;
          cursor: pointer;
          transition: all 0.3s ease;
          display: inline-flex;
          align-items: center;
          gap: 10px;
          letter-spacing: 0.5px;
          text-transform: uppercase;
        }

        .btn-primary i {
          transition: transform 0.3s ease;
        }

        .btn-primary:hover {
          background: transparent;
          color: var(--primary-gold);
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(214, 168, 0, 0.2);
        }

        .btn-primary:hover i {
          transform: translateX(6px);
        }

        /* Slider Wrapper */
        .slider-wrapper {
          display: flex;
          flex-direction: column;
          gap: 14px;
          width: 100%;
        }

        .before-after-slider {
          width: 100%;
          aspect-ratio: 16 / 9;
          min-height: 400px;
          cursor: ew-resize;
          user-select: none;
          border-radius: 16px;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.8);
          border: 3px solid var(--primary-gold);
          transition: border-color 0.3s ease, box-shadow 0.3s ease;
          overflow: hidden;
        }

        .before-after-slider:hover {
          border-color: #ffffff;
          box-shadow: 0 20px 60px rgba(214, 168, 0, 0.15);
        }

        .ba-container {
          width: 100%;
          height: 100%;
          position: relative;
          border-radius: 13px;
          overflow: hidden;
          background: #000000;
        }

        /* Image placeholders - Replace with your actual images */
        .ba-image-before {
          position: absolute;
          inset: 0;
          background-image: url('../Images/Before.png');
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
        }

        .ba-image-after {
          position: absolute;
          inset: 0;
          background-image: url('../Images/After.png');
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
        }

        /* Fallback gradients if images don't load */
        // .ba-image-before {
        //   background: linear-gradient(145deg, #1a2a3a 0%, #2c4a5e 100%);
        // }

        // .ba-image-after {
        //   background: linear-gradient(145deg, #4a3520, #8b6b40);
        // }

        .ba-label {
          position: absolute;
          top: 16px;
          padding: 6px 16px;
          border-radius: 50px;
          font-weight: 800;
          font-size: 0.75rem;
          text-transform: uppercase;
          letter-spacing: 1.5px;
          z-index: 5;
          pointer-events: none;
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.4);
        }

        .ba-label.before {
          left: 16px;
          background: rgba(0, 0, 0, 0.8);
          color: #ffffff;
          backdrop-filter: blur(4px);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .ba-label.after {
          right: 16px;
          background: var(--primary-gold);
          color: var(--primary-blue);
          backdrop-filter: blur(4px);
          border: 1px solid rgba(255, 255, 255, 0.2);
        }

        .ba-handle {
          position: absolute;
          top: 0;
          width: 3px;
          height: 100%;
          background: var(--primary-gold);
          transform: translateX(-50%);
          pointer-events: none;
          z-index: 10;
          box-shadow: 0 0 30px rgba(214, 168, 0, 0.5);
          transition: box-shadow 0.3s ease;
        }

        .handle-circle {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          background: var(--primary-gold);
          width: 44px;
          height: 44px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--primary-blue);
          box-shadow: 0 4px 20px rgba(214, 168, 0, 0.4);
          font-size: 1.1rem;
          border: 3px solid #ffffff;
          transition: all 0.3s ease;
          animation: pulseHandle 2s ease-in-out infinite;
        }

        @keyframes pulseHandle {
          0%, 100% { transform: translate(-50%, -50%) scale(1); }
          50% { transform: translate(-50%, -50%) scale(1.05); }
        }

        /* Controls Bar Below Image */
        .slider-controls {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          flex-wrap: wrap;
        }

        .ctrl-btn {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(214, 168, 0, 0.3);
          color: #ffffff;
          padding: 8px 16px;
          border-radius: 6px;
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 0.8px;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 6px;
          transition: all 0.25s ease;
        }

        .ctrl-btn:hover {
          background: var(--primary-gold);
          color: var(--primary-blue);
          border-color: var(--primary-gold);
          transform: translateY(-2px);
          box-shadow: 0 4px 14px rgba(214, 168, 0, 0.25);
        }

        .ctrl-btn.active {
          background: rgba(214, 168, 0, 0.15);
          border-color: var(--primary-gold);
          color: var(--primary-gold);
        }

        .ctrl-btn i {
          font-size: 0.8rem;
        }

        /* Responsive Layout - Mobile Fix */
        @media (max-width: 992px) {
          .before-after-inner {
            grid-template-columns: 1fr;
            gap: 30px;
          }

          .before-after-text {
            text-align: center;
          }

          .before-after-text .eyebrow {
            justify-content: center;
          }

          .before-after-text h2 {
            font-size: 1.8rem;
          }

          .btn-primary {
            justify-content: center;
          }

          .before-after-slider {
            min-height: 320px;
          }
        }

        @media (max-width: 576px) {
          .before-after-section {
            padding: 40px 0;
          }

          .container {
            padding: 0 16px;
          }

          .before-after-inner {
            gap: 20px;
          }

          .before-after-text h2 {
            font-size: 1.4rem;
          }

          .before-after-text p {
            font-size: 0.85rem;
          }

          .before-after-slider {
            min-height: 250px;
            border-radius: 12px;
            border-width: 2px;
          }

          .ba-container {
            border-radius: 10px;
          }

          .handle-circle {
            width: 36px;
            height: 36px;
            font-size: 0.9rem;
          }

          .ba-label {
            font-size: 0.6rem;
            padding: 4px 10px;
          }

          .btn-primary {
            padding: 10px 16px;
            font-size: 0.75rem;
            width: 100%;
          }

          .slider-controls {
            gap: 8px;
          }

          .ctrl-btn {
            padding: 6px 12px;
            font-size: 0.68rem;
            flex: 1 1 calc(50% - 8px);
            justify-content: center;
          }

          .before-after-section {
            overflow-x: hidden;
          }

          .slider-wrapper {
            max-width: 100%;
          }
        }

        @media (max-width: 420px) {
          .container {
            padding: 0 12px;
          }

          .before-after-slider {
            min-height: 200px;
          }

          .ctrl-btn {
            font-size: 0.6rem;
            padding: 5px 8px;
            flex: 1 1 100%;
          }

          .ba-label {
            font-size: 0.5rem;
            padding: 3px 8px;
          }
        }
      `}</style>
    </>
  );
};


  const reasons = [
    {
      icon: "fas fa-shield-alt",
      title: "PROFESSIONAL ADVICE",
      desc: "We recommend the right film based on your needs, not just what's most expensive.",
    },
    {
      icon: "fas fa-award",
      title: "EXPERT INSTALLATION",
      desc: "Trained professionals with years of experience and attention to detail.",
    },
    {
      icon: "fas fa-gem",
      title: "PREMIUM PRODUCTS",
      desc: "We use high-quality window films backed by leading manufacturers.",
    },
    {
      icon: "fas fa-ribbon",
      title: "WARRANTY OPTIONS",
      desc: "Enjoy peace of mind with lifetime warranty options on select films.",
    },
    {
      icon: "fas fa-map-marker-alt",
      title: "SERVING THE GTA",
      desc: "Proudly serving Toronto and all surrounding cities and communities.",
    },
  ];

  const WhyChooseUs = () => {
    const reasons = [
      {
        icon: "fas fa-check-circle",
        title: "RIGHT PRODUCT",
        desc: "We select the exact film for your specific needs — heat, privacy, security, or design.",
      },
      {
        icon: "fas fa-tools",
        title: "EXPERT INSTALLATION",
        desc: "Professionally trained technicians ensure bubble-free, perfect finishes every time.",
      },
      {
        icon: "fas fa-users",
        title: "RIGHT PEOPLE",
        desc: "Friendly, knowledgeable team dedicated to solving your window film challenges.",
      },
      {
        icon: "fas fa-shield-alt",
        title: "QUALITY GUARANTEED",
        desc: "We stand behind our work with comprehensive warranties on products and installation.",
      },
      {
        icon: "fas fa-star",
        title: "TRUSTED EXPERTS",
        desc: "200+ 5-star reviews from satisfied customers across the Greater Toronto Area.",
      },
    ];

    return (
      <section className="why-choose-section">
        <div className="container">
          {/* Header Block */}
          <div className="why-header">
            <p className="why-eyebrow">WHY CHOOSE MAPLE LEAF WINDOW FILM</p>

            <div className="heading-with-lines">
              <span className="line-left"></span>
              <h2 className="why-main-title">
                RIGHT PRODUCT. RIGHT INSTALL. RIGHT PEOPLE.
              </h2>
              <span className="line-right"></span>
            </div>

            <p className="why-description">
              We don't just install window film — we provide the right solution
              for your space.
              <br />
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
          --primary-blue: #07154a;
          --primary-gold: #d6a800;
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
          color: var(--primary-gold);
          font-size: 0.8rem;
          font-weight: 800;
          letter-spacing: 2px;
          text-transform: uppercase;
          margin-bottom: 10px;
        }

        .heading-with-lines {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 20px;
          margin-bottom: 14px;
        }

        .line-left,
        .line-right {
          flex: 0 0 80px;
          height: 2px;
          background: linear-gradient(to right, transparent, var(--primary-gold));
        }

        .line-right {
          background: linear-gradient(to left, transparent, var(--primary-gold));
        }

        .why-main-title {
          font-size: 1.85rem;
          font-weight: 900;
          color: var(--primary-blue);
          letter-spacing: 0.5px;
          text-transform: uppercase;
          margin: 0;
          white-space: nowrap;
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

        /* Outlined Icon */
        .why-icon { 
          background: transparent; 
          color: var(--primary-blue); 
          font-size: 2.4rem; 
          margin-bottom: 20px; 
          display: flex;
          align-items: center;
          justify-content: center;
          height: 50px;
          transition: color 0.3s ease;
        }

        .why-card:hover .why-icon {
          color: var(--primary-gold);
        }

        .why-card h4 { 
          font-weight: 800; 
          font-size: 0.82rem; 
          color: var(--primary-blue);
          margin-bottom: 10px; 
          letter-spacing: 0.5px;
          text-transform: uppercase;
          transition: color 0.3s ease;
        }

        .why-card:hover h4 {
          color: var(--primary-gold);
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

          .line-left,
          .line-right {
            flex: 0 0 40px;
          }

          .why-main-title {
            font-size: 1.4rem;
            white-space: normal;
          }
        }

        @media (max-width: 600px) {
          .why-main-title {
            font-size: 1.2rem;
          }

          .why-card {
            flex: 1 1 100%;
          }

          .line-left,
          .line-right {
            flex: 0 0 20px;
          }

          .heading-with-lines {
            gap: 10px;
          }
        }
      `}</style>
      </section>
    );
  };

  const projects = [
    {
      img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400&h=300&fit=crop",
      title: "Luxury Residential",
    },
    {
      img: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=300&fit=crop",
      title: "Commercial Office",
    },
    {
      img: "https://images.unsplash.com/photo-1556906781-9a412961c28c?w=400&h=300&fit=crop",
      title: "Retail Storefront",
    },
    {
      img: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400&h=300&fit=crop",
      title: "Modern Condo",
    },
    {
      img: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=400&h=300&fit=crop",
      title: "Luxury Home",
    },
  ];

const FeaturedProjects = () => {
  const projects = [
    {
      img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400&h=300&fit=crop",
      title: "Residential Privacy Film",
    },
    {
      img: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=400&h=300&fit=crop",
      title: "Commercial Heat Control",
    },
    {
      img: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=400&h=300&fit=crop",
      title: "Storefront Security Film",
    },
    {
      img: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=400&h=300&fit=crop",
      title: "Luxury Condo Tinting",
    },
    // {
    //   img: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop",
    //   title: "Office Decorative Film",
    // },
    // {
    //   img: "https://images.unsplash.com/photo-1444464666168-49d633b86797?w=400&h=300&fit=crop",
    //   title: "Bird Safety Installation",
    // },
  ];

  return (
    <section className="projects-section">
      <div className="container">
        <div className="projects-header">
          <div className="heading-with-lines">
            <span className="line-left"></span>
            <h2>FEATURED PROJECTS</h2>
            <span className="line-right"></span>
          </div>
        </div>

        <div className="projects-grid">
          {projects.map((p, idx) => (
            <div className="project-card" key={idx}>
              <img src={p.img} alt={p.title} loading="lazy" />
              <div className="project-overlay">
                <span>{p.title}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="projects-footer">
          <button className="view-all">VIEW ALL PROJECTS →</button>
        </div>
      </div>

      <style>{`
        :root {
          --primary-blue: #07154a;
          --primary-gold: #d6a800;
          --dark-gold: #b89200;
        }

        .projects-section {
          padding: 60px 0;
          background: var(--primary-blue);
          position: relative;
        }

        .container {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 24px;
        }

        .projects-header {
          display: flex;
          justify-content: center;
          align-items: center;
          margin-bottom: 40px;
        }

        .heading-with-lines {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 24px;
          width: 100%;
          max-width: 600px;
        }

        .line-left,
        .line-right {
          flex: 1;
          max-width: 80px;
          height: 2px;
          border-radius: 2px;
        }

        .line-left {
          background: linear-gradient(90deg, transparent, var(--primary-gold));
        }

        .line-right {
          background: linear-gradient(90deg, var(--primary-gold), transparent);
        }

        .projects-header h2 {
          font-size: 1.6rem;
          font-weight: 800;
          color: #ffffff;
          letter-spacing: 1px;
          text-transform: uppercase;
          margin: 0;
          white-space: nowrap;
        }

        /* Grid Layout - Cards */
        .projects-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 24px;
        }

        .project-card {
          position: relative;
          border-radius: 10px;
          overflow: hidden;
          cursor: pointer;
          aspect-ratio: 4/3;
          background: #1a1a2e;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
          border: 2px solid rgba(214, 168, 0, 0.15);
        }

        .project-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 12px 36px rgba(214, 168, 0, 0.2);
          border-color: var(--primary-gold);
        }

        .project-card img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.4s ease;
        }

        .project-card:hover img {
          transform: scale(1.08);
        }

        .project-overlay {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          padding: 20px 16px;
          background: linear-gradient(to top, rgba(7, 21, 74, 0.92) 0%, transparent 100%);
          transition: all 0.3s ease;
        }

        .project-overlay span {
          color: white;
          font-weight: 700;
          font-size: 0.85rem;
          letter-spacing: 0.5px;
          text-transform: uppercase;
          display: block;
        }

        .project-card:hover .project-overlay {
          background: linear-gradient(to top, rgba(214, 168, 0, 0.92) 0%, transparent 100%);
        }

        .project-card:hover .project-overlay span {
          color: var(--primary-blue);
        }

        .projects-footer {
          display: flex;
          justify-content: center;
          margin-top: 40px;
        }

        .view-all {
          background: var(--primary-gold);
          color: var(--primary-blue);
          border: 2px solid var(--primary-gold);
          padding: 14px 42px;
          border-radius: 6px;
          font-weight: 700;
          font-size: 0.85rem;
          cursor: pointer;
          transition: all 0.3s ease;
          letter-spacing: 0.5px;
          text-transform: uppercase;
        }

        .view-all:hover {
          background: transparent;
          color: var(--primary-gold);
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(214, 168, 0, 0.25);
        }

        /* Responsive Grid */
        @media (max-width: 1200px) {
          .projects-grid {
            grid-template-columns: repeat(3, 1fr);
            gap: 20px;
          }
        }

        @media (max-width: 992px) {
          .projects-section {
            padding: 50px 0;
          }

          .container {
            padding: 0 20px;
          }

          .heading-with-lines {
            max-width: 500px;
            gap: 16px;
          }

          .line-left,
          .line-right {
            max-width: 50px;
          }

          .projects-header h2 {
            font-size: 1.4rem;
          }

          .projects-grid {
            grid-template-columns: repeat(1, 1fr);
            gap: 18px;
          }
        }

        @media (max-width: 768px) {
          .projects-section {
            padding: 40px 0;
          }

          .container {
            padding: 0 16px;
          }

          .projects-header {
            margin-bottom: 28px;
          }

          .heading-with-lines {
            gap: 14px;
            max-width: 100%;
          }

          .line-left,
          .line-right {
            max-width: 35px;
            min-width: 20px;
          }

          .projects-header h2 {
            font-size: 1.2rem;
            white-space: normal;
            text-align: center;
          }

          .projects-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 14px;
          }

          .project-card {
            border-radius: 8px;
            border-width: 1.5px;
          }

          .project-overlay {
            padding: 14px 12px;
          }

          .project-overlay span {
            font-size: 0.7rem;
            letter-spacing: 0.3px;
          }

          .view-all {
            padding: 12px 32px;
            font-size: 0.8rem;
            width: 100%;
            max-width: 350px;
            text-align: center;
          }

          .projects-footer {
            margin-top: 28px;
          }
        }

        @media (max-width: 480px) {
          .projects-section {
            padding: 30px 0;
          }

          .container {
            padding: 0 12px;
          }

          .projects-header {
            margin-bottom: 20px;
          }

          .heading-with-lines {
            gap: 10px;
          }

          .line-left,
          .line-right {
            max-width: 25px;
            min-width: 15px;
          }

          .projects-header h2 {
            font-size: 0.95rem;
            letter-spacing: 0.5px;
          }

          .projects-grid {
            grid-template-columns: 1fr ;
            gap: 10px;
          }

          .project-card {
            border-radius: 6px;
            aspect-ratio: 4/3;
            border-width: 1px;
          }

          .project-overlay {
            padding: 10px 10px;
          }

          .project-overlay span {
            font-size: 0.6rem;
            letter-spacing: 0.2px;
          }

          .view-all {
            padding: 10px 20px;
            font-size: 0.7rem;
            max-width: 100%;
            border-radius: 4px;
          }

          .projects-footer {
            margin-top: 20px;
          }
        }

        @media (max-width: 360px) {
          .projects-section {
            padding: 24px 0;
          }

          .container {
            padding: 0 10px;
          }

          .heading-with-lines {
            gap: 8px;
          }

          .line-left,
          .line-right {
            max-width: 18px;
            min-width: 10px;
          }

          .projects-header h2 {
            font-size: 0.8rem;
          }

          .projects-grid {
            gap: 8px;
          }

          .project-overlay {
            padding: 8px 8px;
          }

          .project-overlay span {
            font-size: 0.5rem;
          }

          .view-all {
            padding: 8px 16px;
            font-size: 0.6rem;
          }
        }

        /* Touch device optimization */
        @media (hover: none) {
          .project-card:hover {
            transform: none;
          }

          .project-card:hover img {
            transform: none;
          }

          .project-card:hover .project-overlay {
            background: linear-gradient(to top, rgba(7, 21, 74, 0.92) 0%, transparent 100%);
          }

          .project-card:hover .project-overlay span {
            color: white;
          }

          .project-card:active {
            transform: scale(0.98);
            transition: transform 0.1s ease;
          }
        }

        /* Animation */
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .project-card {
          animation: fadeInUp 0.6s ease forwards;
          opacity: 0;
        }

        .project-card:nth-child(1) { animation-delay: 0.05s; }
        .project-card:nth-child(2) { animation-delay: 0.1s; }
        .project-card:nth-child(3) { animation-delay: 0.15s; }
        .project-card:nth-child(4) { animation-delay: 0.2s; }
        .project-card:nth-child(5) { animation-delay: 0.25s; }
        .project-card:nth-child(6) { animation-delay: 0.3s; }
      `}</style>
    </section>
  );
};

  const steps = [
    {
      num: "1",
      title: "CONTACT US",
      desc: "Reach out by phone, form, or email. We'll learn about your project.",
    },
    {
      num: "2",
      title: "CONSULTATION",
      desc: "We assess your space and recommend the best film for your needs.",
    },
    {
      num: "3",
      title: "PROFESSIONAL INSTALLATION",
      desc: "Our experts install your film with precision and care.",
    },
    {
      num: "4",
      title: "ENJOY THE RESULTS",
      desc: "Enjoy more comfort, privacy, and protection for years to come.",
    },
  ];

  const HowItWorks = () => {
    const steps = [
      {
        num: "01",
        title: "CONSULTATION",
        desc: "We assess your space, discuss your goals, and recommend the perfect film solution.",
      },
      {
        num: "02",
        title: "MEASURE & QUOTE",
        desc: "Precise measurements are taken and a transparent quote is provided for approval.",
      },
      {
        num: "03",
        title: "PROFESSIONAL INSTALL",
        desc: "Our trained technicians install your film with precision and care.",
      },
      {
        num: "04",
        title: "FINAL INSPECTION",
        desc: "We review the work with you and ensure you're 100% satisfied.",
      },
    ];

    return (
      <section className="how-it-works bg-gray">
        <div className="container">
          <div className="section-title">
            <div className="heading-with-lines">
              <span className="line-left"></span>
              <h2>HOW IT WORKS</h2>
              <span className="line-right"></span>
            </div>
          </div>
          <div className="steps">
            {steps.map((step, idx) => (
              <React.Fragment key={idx}>
                <div className="step-card">
                  <div className="step-number">{step.num}</div>
                  <div className="step-icon">
                    <i className="fas fa-check-circle"></i>
                  </div>
                  <h4>{step.title}</h4>
                  <p>{step.desc}</p>
                </div>
                {idx < steps.length - 1 && (
                  <div className="step-arrow">
                    <i className="fas fa-arrow-right"></i>
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        <style>{`
        :root {
          --primary-blue: #07154a;
          --primary-gold: #d6a800;
        }

        .how-it-works { 
          padding: 60px 0; 
          background: #f8f9fa;
        }

        .container {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 24px;
        }

        .section-title {
          text-align: center;
          margin-bottom: 40px;
        }

        .heading-with-lines {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 24px;
        }

        .line-left,
        .line-right {
          flex: 1;
          max-width: 80px;
          height: 2px;
          border-radius: 1px;
        }

        .line-left {
          background: linear-gradient(90deg, transparent, var(--primary-gold));
        }

        .line-right {
          background: linear-gradient(90deg, var(--primary-gold), transparent);
        }

        .section-title h2 {
          font-size: 1.8rem;
          font-weight: 800;
          color: var(--primary-blue);
          letter-spacing: 1px;
          text-transform: uppercase;
          margin: 0;
          white-space: nowrap;
        }

        .steps { 
          display: flex; 
          align-items: center; 
          justify-content: center; 
          gap: 16px; 
          flex-wrap: wrap; 
        }

        .step-card { 
          background: white; 
          padding: 24px 20px; 
          border-radius: 8px; 
          box-shadow: 0 4px 12px rgba(0,0,0,0.04); 
          text-align: center; 
          flex: 1; 
          min-width: 160px; 
          max-width: 220px; 
          position: relative; 
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .step-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 8px 24px rgba(7, 21, 74, 0.1);
        }

        .step-number { 
          background: var(--primary-blue); 
          color: white; 
          width: 32px; 
          height: 32px; 
          border-radius: 50%; 
          display: flex; 
          align-items: center; 
          justify-content: center; 
          font-weight: 700; 
          margin: 0 auto 8px; 
          font-size: 0.8rem;
          border: 2px solid var(--primary-gold);
        }

        .step-card:hover .step-number {
          background: var(--primary-gold);
          color: var(--primary-blue);
        }

        .step-icon { 
          color: var(--primary-blue); 
          font-size: 1.4rem; 
          margin-bottom: 8px; 
          transition: color 0.3s ease;
        }

        .step-card:hover .step-icon {
          color: var(--primary-gold);
        }

        .step-card h4 { 
          font-weight: 700; 
          font-size: 0.9rem; 
          margin-bottom: 6px; 
          color: var(--primary-blue);
        }

        .step-card:hover h4 {
          color: var(--primary-gold);
        }

        .step-card p { 
          font-size: 0.8rem; 
          opacity: 0.7; 
          color: #666;
          line-height: 1.4;
        }

        .step-arrow { 
          font-size: 1.6rem; 
          color: var(--primary-gold); 
          opacity: 0.4; 
          flex-shrink: 0;
        }

        @media (max-width: 992px) {
          .line-left,
          .line-right {
            max-width: 50px;
          }

          .heading-with-lines {
            gap: 16px;
          }
        }

        @media (max-width: 768px) {
          .step-card {
            min-width: 140px;
            max-width: 180px;
            padding: 20px 16px;
          }

          .step-arrow {
            display: none;
          }

          .section-title h2 {
            font-size: 1.4rem;
            white-space: normal;
          }

          .line-left,
          .line-right {
            max-width: 30px;
          }

          .heading-with-lines {
            gap: 12px;
          }
        }

        @media (max-width: 480px) {
          .step-card {
            min-width: 100%;
            max-width: 100%;
          }

          .section-title h2 {
            font-size: 1.1rem;
          }

          .line-left,
          .line-right {
            max-width: 20px;
          }

          .heading-with-lines {
            gap: 10px;
          }
        }
      `}</style>
      </section>
    );
  };

  const testimonials = [
    {
      name: "Sarah M.",
      place: "Toronto, ON",
      text: "Amazing experience from start to finish. The team was professional, on time, and the film has made such a difference in our home. Highly recommended!",
    },
    {
      name: "Michael B.",
      place: "Vaughan, ON",
      text: "Exceptional service and quality. Our office is much more comfortable now. The installers were meticulous and courteous.",
    },
    {
      name: "David L.",
      place: "Mississauga, ON",
      text: "We love the privacy film in our condo. It's elegant and functional. The team gave great advice and delivered perfectly.",
    },
  ];

  const Testimonials = () => {
    return (
      <section className="testimonials-section bg-dark">
        <div className="container">
          <div className="testimonials-top">
            <h2>WHAT OUR CLIENTS SAY</h2>
            <div className="stars">
              ★★★★★ <span>Based on 200+ Google Reviews</span>
            </div>
          </div>
          <Swiper
            modules={[Pagination, Autoplay]}
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000 }}
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{ 768: { slidesPerView: 2 } }}
          >
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
      <section className="cta-section">
        <div className="container cta-inner">
          <div>
            <h3>READY TO IMPROVE YOUR SPACE?</h3>
            <h2>GET YOUR FREE QUOTE TODAY!</h2>
            <p>Fast response • Expert advice • No obligation</p>
          </div>
          <div>
            <button className="btn-gold">GET FREE QUOTE →</button>
            <p className="cta-phone">
              or call <a href="tel:+12265036102">226-503-6102</a>
            </p>
          </div>
        </div>
        <style>
          {`
            :root {
              --primary-blue: #07154a;
              --primary-gold: #d6a800;
              --dark-gold: #b89200;
            }

            .cta-section { 
              padding: 60px 0; 
              background: linear-gradient(135deg, var(--primary-blue) 0%, #0a1f5a 100%);
              color: white;
              position: relative;
              overflow: hidden;
            }

            .cta-section::before {
              content: '';
              position: absolute;
              top: -50%;
              right: -20%;
              width: 60%;
              height: 200%;
              background: radial-gradient(circle, rgba(214, 168, 0, 0.08) 0%, transparent 70%);
              pointer-events: none;
            }

            .cta-section::after {
              content: '';
              position: absolute;
              bottom: 0;
              left: 0;
              right: 0;
              height: 3px;
              background: linear-gradient(90deg, transparent, var(--primary-gold), transparent);
            }

            .container {
              max-width: 1280px;
              margin: 0 auto;
              padding: 0 24px;
            }

            .cta-inner { 
              display: flex; 
              justify-content: space-between; 
              align-items: center; 
              flex-wrap: wrap; 
              gap: 24px; 
              position: relative;
              z-index: 1;
            }

            .cta-inner h3 { 
              font-weight: 400; 
              font-size: 1rem; 
              opacity: 0.8; 
              margin-bottom: 4px;
              letter-spacing: 1px;
            }

            .cta-inner h2 { 
              font-size: 2.4rem; 
              font-weight: 900; 
              text-transform: uppercase; 
              letter-spacing: 1px;
              margin: 4px 0 8px;
            }

            .cta-inner p { 
              font-size: 1rem; 
              opacity: 0.7; 
            }

            .btn-gold {
              background: var(--primary-gold);
              color: var(--primary-blue);
              border: none;
              padding: 14px 32px;
              border-radius: 6px;
              font-weight: 800;
              font-size: 0.9rem;
              cursor: pointer;
              transition: all 0.3s ease;
              letter-spacing: 0.5px;
              text-transform: uppercase;
              border: 2px solid var(--primary-gold);
            }

            .btn-gold:hover {
              background: transparent;
              color: var(--primary-gold);
              transform: translateY(-3px);
              box-shadow: 0 8px 24px rgba(214, 168, 0, 0.3);
            }

            .cta-phone { 
              margin-top: 12px; 
              font-weight: 600; 
              font-size: 0.9rem;
              opacity: 0.9;
            }

            .cta-phone a { 
              color: var(--primary-gold); 
              text-decoration: none;
              font-weight: 700;
              transition: color 0.3s ease;
              border-bottom: 2px solid transparent;
            }

            .cta-phone a:hover {
              color: #ffffff;
              border-bottom-color: var(--primary-gold);
            }

            @media (max-width: 768px) {
              .cta-section { 
                padding: 40px 0; 
              }

              .cta-inner { 
                flex-direction: column;
                text-align: center;
              }

              .cta-inner h2 { 
                font-size: 1.8rem; 
              }

              .btn-gold {
                width: 100%;
                justify-content: center;
              }
            }

            @media (max-width: 480px) {
              .cta-inner h2 { 
                font-size: 1.4rem; 
              }

              .cta-inner h3 {
                font-size: 0.85rem;
              }

              .btn-gold {
                font-size: 0.8rem;
                padding: 12px 24px;
              }
            }
          `}
        </style>
      </section>
    );
  };


const Footer = () => {
  return (
    <footer className="footer bg-dark">
      <div className="container footer-grid">
        {/* Column 1: Logo */}
        <div>
          <div className="logo">
            <i>
              <FaCanadianMapleLeaf />
            </i>{" "}
            MAPLE LEAF <span>WINDOW FILM</span>
          </div>
          <p className="logo-description">
            Professional window film solutions for homes and businesses across
            the Greater Toronto Area.
          </p>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h4>Quick Links</h4>
          <Link to="/">Home</Link>
          <Link to="/residential">Residential</Link>
          <Link to="/commercial">Commercial</Link>
          <Link to="/services">Services</Link>
          <Link to="/projects">Projects</Link>
        </div>

        {/* Column 3: Services */}
        <div>
          <h4>Services</h4>
          <Link to="/services/security-film">Security Film</Link>
          <Link to="/services/solar-film">Solar / Heat Reduction</Link>
          <Link to="/services/privacy-film">Privacy Film</Link>
          <Link to="/services/decorative-film">Decorative Frost Film</Link>
          <Link to="/services/bird-safety-film">Bird Strike Protection</Link>
        </div>

        {/* Column 4: Contact */}
        <div>
          <h4>Contact</h4>
          <p>
            <i className="fas fa-phone"></i> 226-503-6102
          </p>
          <p>
            <i className="fas fa-envelope"></i> info@mapleleafwindowfilm.com
          </p>
          <p>
            <i className="fas fa-map-pin"></i> Serving Toronto & Surrounding
            Areas
          </p>
        </div>

        {/* Column 5: Hours */}
        <div>
          <h4>Hours</h4>
          <p>Mon - Fri: 8:00am - 6:00pm</p>
          <p>Saturday: 9:00am - 3:00pm</p>
          <p>Sunday: Closed</p>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <span>© 2026 Maple Leaf Window Film. All Rights Reserved.</span>
          <div>
            <Link to="/privacy">Privacy Policy</Link>{" "}
            <Link to="/terms">Terms of Service</Link>
          </div>
        </div>
      </div>

      <style>
        {`
          :root {
            --primary-blue: #07154a;
            --primary-gold: #d6a800;
            --dark-gold: #b89200;
          }

          .footer { 
            padding: 48px 0 0; 
            background: var(--primary-blue);
            color: #ffffff;
          }

          .container {
            max-width: 1280px;
            margin: 0 auto;
            padding: 0 24px;
          }

          .footer-grid { 
            display: grid; 
            grid-template-columns: 1.7fr 1fr 1fr 1fr 1fr; 
            gap: 40px; 
            padding-bottom: 40px; 
            border-bottom: 1px solid rgba(214, 168, 0, 0.15);
          }

          .footer-grid .logo { 
            font-size: 1.2rem; 
            font-weight: 800;
            display: flex;
            align-items: center;
            gap: 8px;
          }

          .footer-grid .logo i {
            color: var(--primary-gold);
            font-size: 1.4rem;
          }

          .footer-grid .logo span { 
            color: var(--primary-gold); 
          }

          .logo-description {
            margin-top: 12px;
            font-size: 0.85rem;
            opacity: 0.7;
            line-height: 1.6;
          }

          .footer-grid h4 { 
            font-weight: 700; 
            margin-bottom: 16px; 
            font-size: 0.9rem;
            color: var(--primary-gold);
            letter-spacing: 0.5px;
            text-transform: uppercase;
          }

          .footer-grid a, 
          .footer-grid p { 
            display: block; 
            font-size: 0.85rem; 
            opacity: 0.7; 
            margin-bottom: 8px; 
            transition: all 0.2s ease;
            color: #ffffff;
            text-decoration: none;
          }

          .footer-grid a:hover { 
            opacity: 1; 
            color: var(--primary-gold);
            transform: translateX(4px);
          }

          .footer-grid p i { 
            width: 20px; 
            color: var(--primary-gold); 
            margin-right: 4px;
          }

          .footer-bottom { 
            padding: 20px 0; 
            font-size: 0.8rem; 
            opacity: 0.6;
            border-top: 1px solid rgba(214, 168, 0, 0.08);
            margin-top: 0;
          }

          .footer-bottom .container { 
            display: flex; 
            justify-content: space-between; 
            flex-wrap: wrap; 
            gap: 12px; 
          }

          .footer-bottom a { 
            margin-left: 16px;
            color: #ffffff;
            text-decoration: none;
            transition: color 0.2s ease;
          }

          .footer-bottom a:hover {
            color: var(--primary-gold);
          }

          /* Responsive */
          @media (max-width: 992px) {
            .footer-grid {
              grid-template-columns: 1fr 1fr;
              gap: 30px;
            }
          }

          @media (max-width: 576px) {
            .footer-grid {
              grid-template-columns: 1fr;
              gap: 24px;
            }

            .footer-bottom .container {
              flex-direction: column;
              text-align: center;
            }

            .footer-bottom a {
              margin: 0 8px;
            }

            .footer-grid .logo {
              justify-content: center;
            }

            .logo-description {
              text-align: center;
            }
          }
        `}
      </style>
    </footer>
  );
};

  const location = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [location.key]);
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
  );
}

export default HomePage;
