import React, { useEffect, useRef } from 'react';
import Header from './Header';

// ============================================
// 1. HERO BANNER COMPONENT
// ============================================
const AboutHero = () => {
    return (
        <>
            <section className="about-hero">
                <div className="about-hero-overlay"></div>
                <div className="about-hero-container">
                    <div className="about-hero-title">
                        <h1>About The Company</h1>
                    </div>

                    <div className="about-callout-box">
                        <span className="callout-label">Call Today</span>
                        <a href="tel:226-503-6102" className="callout-phone">
                            226-503-6102
                        </a>
                    </div>
                </div>
            </section>

            {/* Hero Styles */}
            <style>{`
        .about-hero {
          position: relative;
          background: url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1600&h=700&fit=crop&crop=center') center/cover no-repeat;
          min-height: 380px;
          display: flex;
          align-items: flex-end;
          overflow: hidden;
        }

        .about-hero-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(90deg, rgba(18, 22, 25, 0.92) 0%, rgba(18, 22, 25, 0.75) 50%, rgba(18, 22, 25, 0.5) 100%);
          z-index: 1;
        }

        .about-hero-container {
          position: relative;
          z-index: 2;
          max-width: 1280px;
          width: 100%;
          margin: 0 auto;
          padding: 0 24px;
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          height: 100%;
        }

        .about-hero-title {
          padding-bottom: 70px;
        }

        .about-hero-title h1 {
          color: #ffffff;
          font-size: 3.5rem;
          font-weight: 800;
          letter-spacing: -0.5px;
          margin: 0;
          line-height: 1.1;
        }

        .about-callout-box {
          background: #d32f2f;
          color: #ffffff;
          padding: 36px 48px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          box-shadow: -4px 4px 20px rgba(0, 0, 0, 0.3);
          border-top-left-radius: 4px;
          border-top-right-radius: 4px;
          margin-right: 40px;
        }

        .callout-label {
          font-size: 1.1rem;
          font-weight: 600;
          color: #ffffff;
          margin-bottom: 8px;
          letter-spacing: 0.5px;
        }

        .callout-phone {
          font-size: 2.2rem;
          font-weight: 900;
          color: #ffffff;
          text-decoration: none;
          letter-spacing: 1px;
          transition: opacity 0.2s ease;
        }

        .callout-phone:hover {
          opacity: 0.9;
        }

        @media (max-width: 992px) {
          .about-hero {
            min-height: 320px;
          }
          .about-hero-title h1 {
            font-size: 2.6rem;
          }
          .about-callout-box {
            padding: 24px 32px;
            margin-right: 0;
          }
          .callout-phone {
            font-size: 1.75rem;
          }
        }

        @media (max-width: 768px) {
          .about-hero-container {
            flex-direction: column;
            align-items: flex-start;
            gap: 24px;
          }
          .about-hero-title {
            padding-bottom: 0;
            padding-top: 60px;
          }
          .about-hero-title h1 {
            font-size: 2.2rem;
          }
          .about-callout-box {
            width: 100%;
            border-radius: 4px 4px 0 0;
            padding: 20px 24px;
          }
          .callout-phone {
            font-size: 1.5rem;
          }
        }

        @media (max-width: 480px) {
          .about-hero {
            min-height: 280px;
          }
          .about-hero-title h1 {
            font-size: 1.8rem;
          }
          .about-hero-title {
            padding-top: 40px;
          }
          .callout-phone {
            font-size: 1.3rem;
          }
        }
      `}</style>
        </>
    );
};

// ============================================
// 2. ABOUT CONTENT COMPONENT
// ============================================
const AboutContent = () => {
    return (
        <>
            <section className="about-content-section">
                <div className="about-content-container">
                    <div className="about-text-column">
                        <h2 className="about-heading">About Us</h2>

                        <h3 className="about-subheading">
                            Maple Leaf Window Film Inc. is Canada's premier window film business.
                        </h3>

                        <p className="about-paragraph">
                            Maple Leaf Window Film Inc. is a leading provider of window film solutions based in
                            London, Ontario. Our team is dedicated to delivering quality products and exceptional
                            service to our clients.
                        </p>

                        <p className="about-paragraph">
                            With years of experience in the industry, we specialize in providing customized solutions
                            for residential and commercial properties. Our range of window films offers energy
                            efficiency, UV protection, privacy, and security benefits. Trust us to enhance the comfort
                            and safety of your space.
                        </p>
                    </div>

                    <div className="about-image-column">
                        <img
                            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop"
                            alt="Low angle view of modern glass skyscraper"
                            loading="lazy"
                        />
                    </div>
                </div>
            </section>

            <style>{`
        .about-content-section {
          background-color: #f5f4f0;
          padding: 90px 0;
          text-align: left
        }

        .about-content-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 32px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 60px;
        }

        .about-text-column {
          flex: 1.2;
        }

        .about-heading {
          font-size: 2.5rem;
          font-weight: 800;
          color: #222222;
          margin-bottom: 28px;
          letter-spacing: -0.5px;
        }

        .about-subheading {
          font-size: 1.2rem;
          font-weight: 800;
          color: #222222;
          margin-bottom: 24px;
          line-height: 1.35;
          max-width: 580px;
        }

        .about-paragraph {
          font-size: 0.92rem;
          color: #555555;
          line-height: 1.65;
          margin-bottom: 20px;
          max-width: 580px;
        }

        .about-paragraph:last-child {
          margin-bottom: 0;
        }

        .about-image-column {
          flex: 1;
          display: flex;
          justify-content: flex-end;
        }

        .about-image-column img {
        //   width: 100%;
          width: 600px;
          height: auto;
          aspect-ratio: 4 / 3;
          object-fit: cover;
          border-radius: 2px;
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
        }

        @media (max-width: 992px) {
          .about-content-section {
            padding: 60px 0;
          }
          .about-content-container {
            flex-direction: column;
            gap: 40px;
          }
          .about-text-column,
          .about-image-column {
            flex: unset;
            width: 100%;
          }
          .about-image-column img {
            max-width: 100%;
          }
        }

        @media (max-width: 768px) {
          .about-heading {
            font-size: 2rem;
            margin-bottom: 20px;
          }
          .about-subheading {
            font-size: 1.05rem;
            max-width: 100%;
          }
          .about-paragraph {
            max-width: 100%;
          }
          .about-content-section {
            padding: 40px 0;
          }
          .about-content-container {
            padding: 0 20px;
            gap: 30px;
          }
        }

        @media (max-width: 480px) {
          .about-heading {
            font-size: 1.6rem;
          }
          .about-subheading {
            font-size: 0.95rem;
          }
          .about-paragraph {
            font-size: 0.85rem;
          }
        }
      `}</style>
        </>
    );
};

// ============================================
// 3. COMMITMENT COMPONENT (with Parallax)
// ============================================

const OurCommitment = () => {
    return (
        <>
            <section className="commitment-section">
                {/* Dark semi-transparent overlay for text readability */}
                <div className="commitment-overlay"></div>

                {/* Content Container */}
                <div className="commitment-container">
                    <div className="commitment-content-wrapper">
                        <h2 className="commitment-heading">Our Commitment</h2>

                        <p className="commitment-paragraph">
                            At Maple Leaf Window Film Inc., we believe that our clients deserve the best.
                            This is why we are committed to only using the highest quality materials and
                            latest technology to ensure our products meet and exceed our client's expectations.
                            Our team of experts is always available to help you choose the right window film
                            for your needs and to provide professional installation services. We understand
                            that every client's needs are unique, which is why we offer a wide range of
                            customizable options to suit any project. Our commitment to excellence and
                            customer satisfaction is what sets us apart from the competition.
                        </p>

                        <button className="commitment-btn">
                            Get a Free Estimate
                        </button>
                    </div>
                </div>
            </section>

            {/* Embedded CSS */}
            <style>{`
        .commitment-section {
          position: relative;
          width: 100%;
          min-height: 500px;
          display: flex;
          align-items: center;
          justify-content: flex-end;
          padding: 100px 0;
          overflow: hidden;

          /* --- PARALLAX EFFECT --- */
          /* Sticky background image while text scrolls over it */
          background-image: url('https://images.unsplash.com/photo-1554469384-e58fac16e23a?q=80&w=1600&auto=format&fit=crop');
          background-attachment: fixed;
          background-position: center;
          background-repeat: no-repeat;
          background-size: cover;
        }

        /* Overlay for subtle tinting & readability */
        .commitment-overlay {
          position: absolute;
          inset: 0;
          background: rgba(0, 0, 0, 0.45);
          z-index: 1;
        }

        .commitment-container {
          position: relative;
          z-index: 2;
          max-width: 1280px;
          width: 100%;
          margin: 0 auto;
          padding: 0 40px;
          display: flex;
          justify-content: flex-end; /* Align content to the right side as shown in screenshot */
        }

        .commitment-content-wrapper {
          max-width: 580px;
          color: #ffffff;
          text-align: left;
        }

        .commitment-heading {
          font-size: 3rem;
          font-weight: 800;
          color: #ffffff;
          margin-bottom: 24px;
          letter-spacing: -0.5px;
          line-height: 1.1;
        }

        .commitment-paragraph {
          font-size: 0.95rem;
          line-height: 1.7;
          color: #f0f0f0;
          margin-bottom: 32px;
          font-weight: 400;
          letter-spacing: 0.2px;
        }

        /* Pill CTA Button (Matches Golden/Amber accent from mockup) */
        .commitment-btn {
          background-color: #d32f2f; 
          color: #ffffff;
          border: none;
          padding: 14px 36px;
          font-size: 0.95rem;
          font-weight: 700;
          border-radius: 30px;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
        }

        .commitment-btn:hover {
           background: #b71c1c;
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(211, 47, 47, 0.35);
        }

        .commitment-btn:active {
          transform: translateY(0);
        }

        /* Responsive Styles */
        @media (max-width: 992px) {
          .commitment-section {
            min-height: 500px;
            padding: 80px 0;
          }

          .commitment-heading {
            font-size: 2.4rem;
          }
        }

        @media (max-width: 768px) {
          .commitment-section {
            /* Touch screens (iOS) sometimes disable attachment: fixed; fallback smoothly */
            background-attachment: scroll; 
            padding: 60px 0;
            justify-content: center;
          }

          .commitment-container {
            justify-content: center;
            padding: 0 24px;
          }

          .commitment-content-wrapper {
            max-width: 100%;
          }

          .commitment-heading {
            font-size: 2rem;
          }

          .commitment-paragraph {
            font-size: 0.9rem;
          }

          .commitment-btn {
            width: 100%;
            text-align: center;
          }
        }
      `}</style>
        </>
    );
};


// ============================================
// 4. NUMBERS & TESTIMONIALS COMPONENT
// ============================================
const NumbersAndTestimonials = () => {
    return (
        <>
            <section className="numbers-section">
                <div className="numbers-container">
                    {/* Heading */}
                    <h2 className="numbers-heading">Numbers Speak for Themselves</h2>

                    {/* Stats Grid */}
                    <div className="stats-grid">
                        <div className="stat-item">
                            <span className="stat-number">900+</span>
                            <span className="stat-label">Satisfied Clients</span>
                        </div>
                        <div className="stat-item">
                            <span className="stat-number">7+</span>
                            <span className="stat-label">Years of Experience</span>
                        </div>
                        <div className="stat-item">
                            <span className="stat-number">1,500+</span>
                            <span className="stat-label">Completed Projects</span>
                        </div>
                    </div>

                    {/* Mission Statement */}
                    <div className="mission-statement">
                        <p>
                            Knowledge, dependability, and diligence are the main focuses at
                            Maple Leaf Window Film Inc.
                        </p>
                    </div>

                    {/* Google Reviews Section */}
                    <div className="google-reviews-section">
                        <div className="google-reviews-header">
                            <div className="google-logo">
                                <span className="google-icon">G</span>
                                <span className="google-text">Maple Leaf Window film</span>
                            </div>
                            <div className="google-rating">
                                <span className="rating-stars">★★★★★</span>
                                <span className="rating-text">5.0</span>
                                <span className="rating-count">Based on 6 reviews</span>
                            </div>
                            <div className="google-links">
                                <a href="#" className="google-link">powered by Google</a>
                                <span className="link-separator">|</span>
                                <a href="#" className="google-link">review us on</a>
                            </div>
                        </div>

                        {/* Testimonials Grid */}
                        <div className="testimonials-grid">
                            {/* Testimonial 1 */}
                            <div className="testimonial-card">
                                <div className="testimonial-author">
                                    <div className="author-avatar">
                                        <span>A</span>
                                    </div>
                                    <div className="author-info">
                                        <span className="author-name">A Flynn</span>
                                        <span className="author-date">3 years ago</span>
                                    </div>
                                </div>
                                <div className="testimonial-stars">★★★★★</div>
                                <p className="testimonial-text">
                                    We had solar film installed in the front windows of the house.
                                    Shiv's product knowledge is extensive and he is professional
                                    to work with. We
                                </p>
                            </div>

                            {/* Testimonial 2 */}
                            <div className="testimonial-card">
                                <div className="testimonial-author">
                                    <div className="author-avatar">
                                        <span>G</span>
                                    </div>
                                    <div className="author-info">
                                        <span className="author-name">Asif Akhtar</span>
                                        <span className="author-date">3 years ago</span>
                                    </div>
                                </div>
                                <div className="testimonial-stars">★★★★★</div>
                                <p className="testimonial-text">
                                    I worked on a wall graphic project with Maple Leaf Window Film Inc.
                                    They were easy to work with, responsive, and professional. The
                                </p>
                            </div>

                            {/* Testimonial 3 */}
                            <div className="testimonial-card">
                                <div className="testimonial-author">
                                    <div className="author-avatar">
                                        <span>G</span>
                                    </div>
                                    <div className="author-info">
                                        <span className="author-name">Joe C</span>
                                        <span className="author-date">3 years ago</span>
                                    </div>
                                </div>
                                <div className="testimonial-stars">★★★★★</div>
                                <p className="testimonial-text">
                                    Very happy with the work performed by Shiv and would highly
                                    recommend Maple Leaf Window film. My wife wanted to install a
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Numbers & Testimonials Styles */}
            <style>{`
        /* ============================================
           NUMBERS & TESTIMONIALS SECTION
           ============================================ */
        .numbers-section {
          background: #ffffff;
          padding: 80px 0 100px;
        }

        .numbers-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 24px;
        }

        /* Heading */
        .numbers-heading {
          text-align: center;
          font-size: 2.8rem;
          font-weight: 800;
          color: #222222;
          margin-bottom: 48px;
          letter-spacing: -0.5px;
          text-transform: uppercase;
        }

        .numbers-heading::after {
          content: '';
          display: block;
          width: 60px;
          height: 4px;
          background: #d32f2f;
          margin: 12px auto 0;
          border-radius: 2px;
        }

        /* Stats Grid */
        .stats-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 40px;
          margin-bottom: 48px;
          padding: 0 20px;
        }

        .stat-item {
          text-align: center;
          padding: 24px 16px;
          border-radius: 8px;
          background: #f5f4f0;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .stat-item:hover {
          transform: translateY(-4px);
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
        }

        .stat-number {
          display: block;
          font-size: 3.2rem;
          font-weight: 900;
          color: #d32f2f;
          margin-bottom: 8px;
          letter-spacing: -1px;
        }

        .stat-label {
          display: block;
          font-size: 1rem;
          font-weight: 600;
          color: #555555;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        /* Mission Statement */
        .mission-statement {
          max-width: 850px;
          margin: 0 auto 56px;
          text-align: center;
          padding: 0 20px;
        }

        .mission-statement p {
          font-size: 1.2rem;
          font-weight: 600;
          color: #222222;
          line-height: 1.7;
          letter-spacing: 0.3px;
        }

        /* Google Reviews Section */
        .google-reviews-section {
          background: #f8f8f8;
          border-radius: 12px;
          padding: 40px 48px;
          border: 1px solid #e8e8e8;
        }

        .google-reviews-header {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 16px 24px;
          padding-bottom: 24px;
          border-bottom: 2px solid #e8e8e8;
          margin-bottom: 32px;
        }

        .google-logo {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .google-icon {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 32px;
          height: 32px;
          background: #4285f4;
          color: #ffffff;
          font-weight: 700;
          font-size: 1.2rem;
          border-radius: 50%;
        }

        .google-text {
          font-size: 1.1rem;
          font-weight: 700;
          color: #222222;
        }

        .google-rating {
          display: flex;
          align-items: center;
          gap: 8px;
          flex-wrap: wrap;
        }

        .rating-stars {
          color: #fbbc04;
          font-size: 1.2rem;
          letter-spacing: 2px;
        }

        .rating-text {
          font-weight: 800;
          font-size: 1.1rem;
          color: #222222;
        }

        .rating-count {
          font-size: 0.9rem;
          color: #777777;
        }

        .google-links {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-left: auto;
        }

        .google-link {
          font-size: 0.85rem;
          color: #4285f4;
          text-decoration: none;
          font-weight: 500;
          transition: color 0.2s;
        }

        .google-link:hover {
          color: #1a73e8;
          text-decoration: underline;
        }

        .link-separator {
          color: #cccccc;
        }

        /* Testimonials Grid */
        .testimonials-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }

        .testimonial-card {
          background: #ffffff;
          padding: 24px;
          border-radius: 8px;
          border: 1px solid #e8e8e8;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .testimonial-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.06);
        }

        .testimonial-author {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 12px;
        }

        .author-avatar {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: #d32f2f;
          color: #ffffff;
          font-weight: 700;
          font-size: 1rem;
          flex-shrink: 0;
        }

        .author-info {
          display: flex;
          flex-direction: column;
        }

        .author-name {
          font-weight: 700;
          font-size: 0.95rem;
          color: #222222;
        }

        .author-date {
          font-size: 0.8rem;
          color: #888888;
        }

        .testimonial-stars {
          color: #fbbc04;
          font-size: 0.95rem;
          margin-bottom: 10px;
          letter-spacing: 1px;
        }

        .testimonial-text {
          font-size: 0.92rem;
          color: #555555;
          line-height: 1.6;
          margin: 0;
          display: -webkit-box;
          -webkit-line-clamp: 4;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        /* ============================================
           RESPONSIVE BREAKPOINTS
           ============================================ */

        @media (max-width: 992px) {
          .numbers-heading {
            font-size: 2.2rem;
          }

          .stats-grid {
            grid-template-columns: repeat(3, 1fr);
            gap: 20px;
          }

          .stat-number {
            font-size: 2.6rem;
          }

          .google-reviews-section {
            padding: 32px 28px;
          }

          .testimonials-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .google-links {
            margin-left: 0;
            width: 100%;
          }
        }

        @media (max-width: 768px) {
          .numbers-section {
            padding: 60px 0 70px;
          }

          .numbers-heading {
            font-size: 1.8rem;
            margin-bottom: 32px;
          }

          .stats-grid {
            grid-template-columns: 1fr;
            gap: 16px;
            padding: 0;
          }

          .stat-item {
            padding: 20px 16px;
          }

          .stat-number {
            font-size: 2.4rem;
          }

          .mission-statement p {
            font-size: 1rem;
          }

          .google-reviews-section {
            padding: 24px 20px;
          }

          .google-reviews-header {
            flex-direction: column;
            align-items: flex-start;
            gap: 12px;
          }

          .google-links {
            justify-content: flex-start;
          }

          .testimonials-grid {
            grid-template-columns: 1fr;
            gap: 16px;
          }

          .testimonial-card {
            padding: 20px;
          }

          .testimonial-text {
            -webkit-line-clamp: 3;
          }
        }

        @media (max-width: 480px) {
          .numbers-section {
            padding: 40px 0 50px;
          }

          .numbers-heading {
            font-size: 1.5rem;
          }

          .numbers-heading::after {
            width: 40px;
          }

          .stat-number {
            font-size: 2rem;
          }

          .stat-label {
            font-size: 0.85rem;
          }

          .google-reviews-section {
            padding: 20px 16px;
          }

          .google-text {
            font-size: 0.95rem;
          }

          .rating-stars {
            font-size: 1rem;
          }

          .testimonial-card {
            padding: 16px;
          }

          .testimonial-text {
            font-size: 0.85rem;
          }
        }
      `}</style>
        </>
    );
};


// ============================================
// WHAT PEOPLE SAY - TESTIMONIALS COMPONENT
// Side by Side Layout
// ============================================
const WhatPeopleSay = () => {
    return (
        <>
            <section className="testimonials-featured-section">
                <div className="testimonials-featured-container">
                    {/* Section Heading */}
                    <h2 className="testimonials-featured-heading">What people say?</h2>

                    {/* Testimonials Grid - Side by Side */}
                    <div className="testimonials-featured-grid">
                        {/* Featured Testimonial 1 */}
                        <div className="testimonial-featured-card">
                            <div className="testimonial-featured-quote">
                                <i className="fas fa-quote-left"></i>
                            </div>
                            <p className="testimonial-featured-text">
                                "We have worked on multiple projects with Maple Leaf Film Inc. All the jobs
                                they have completed for us were done to the highest quality standards,
                                on time, and on budget. Shiv's commitment to getting the job done is
                                exceptional - even working over a long weekend to meet the schedule.
                                His expertise, professionalism, and dedication resulted in a flawless
                                installation that exceeded our expectations. We highly recommend
                                Maple Leaf Window Film Inc. for any window film project."
                            </p>
                            <div className="testimonial-featured-author">
                                <div className="testimonial-featured-avatar">
                                    <span>E</span>
                                </div>
                                <div className="testimonial-featured-info">
                                    <span className="testimonial-featured-name">
                                        Eco Architectural Glass Inc.
                                    </span>
                                    <span className="testimonial-featured-location">
                                        LONDON, ON
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Featured Testimonial 2 */}
                        <div className="testimonial-featured-card">
                            <div className="testimonial-featured-quote">
                                <i className="fas fa-quote-left"></i>
                            </div>
                            <p className="testimonial-featured-text">
                                "Maple Leaf Window Film Inc. provided exceptional service. The team was
                                professional and knowledgeable, and the window film they installed
                                looks amazing! I am so happy with the results and highly recommend
                                their services to anyone in need of high quality window film."
                            </p>
                            <div className="testimonial-featured-author">
                                <div className="testimonial-featured-avatar">
                                    <span>J</span>
                                </div>
                                <div className="testimonial-featured-info">
                                    <span className="testimonial-featured-name">
                                        Jennifer L.
                                    </span>
                                    <span className="testimonial-featured-location">
                                        LONDON, ON
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Styles */}
            <style>{`
        /* ============================================
           WHAT PEOPLE SAY - FEATURED TESTIMONIALS
           Side by Side Layout
           ============================================ */
        .testimonials-featured-section {
          background: #f5f4f0;
          padding: 80px 0 100px;
        }

        .testimonials-featured-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 24px;
        }

        /* Heading */
        .testimonials-featured-heading {
          text-align: center;
          font-size: 2.8rem;
          font-weight: 800;
          color: #222222;
          margin-bottom: 48px;
          letter-spacing: -0.5px;
          text-transform: uppercase;
          position: relative;
        }

        .testimonials-featured-heading::after {
          content: '';
          display: block;
          width: 60px;
          height: 4px;
          background: #d32f2f;
          margin: 12px auto 0;
          border-radius: 2px;
        }

        /* Testimonials Grid - Side by Side */
        .testimonials-featured-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 32px;
        }

        /* Featured Testimonial Cards */
        .testimonial-featured-card {
          background: #ffffff;
          padding: 36px 40px;
          border-radius: 12px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.06);
          border: 1px solid #e8e8e8;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          position: relative;
          display: flex;
          flex-direction: column;
          height: 100%;
        }

        .testimonial-featured-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 12px 40px rgba(0, 0, 0, 0.10);
        }

        /* Quote Icon */
        .testimonial-featured-quote {
          color: #d32f2f;
          font-size: 1.8rem;
          margin-bottom: 14px;
          opacity: 0.5;
          flex-shrink: 0;
        }

        .testimonial-featured-quote i {
          display: inline-block;
        }

        /* Testimonial Text */
        .testimonial-featured-text {
          font-size: 1rem;
          line-height: 1.8;
          color: #444444;
          margin-bottom: 24px;
          font-style: italic;
          letter-spacing: 0.2px;
          flex: 1;
        }

        /* Author Section */
        .testimonial-featured-author {
          display: flex;
          align-items: center;
          gap: 16px;
          padding-top: 20px;
          border-top: 2px solid #f0f0f0;
          flex-shrink: 0;
        }

        .testimonial-featured-avatar {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 48px;
          height: 48px;
          border-radius: 50%;
          background: #d32f2f;
          color: #ffffff;
          font-weight: 700;
          font-size: 1.2rem;
          flex-shrink: 0;
        }

        .testimonial-featured-info {
          display: flex;
          flex-direction: column;
        }

        .testimonial-featured-name {
          font-weight: 700;
          font-size: 1rem;
          color: #222222;
          margin-bottom: 2px;
        }

        .testimonial-featured-location {
          font-size: 0.85rem;
          color: #888888;
          font-weight: 500;
          letter-spacing: 0.5px;
        }

        /* ============================================
           RESPONSIVE BREAKPOINTS
           ============================================ */

        @media (max-width: 992px) {
          .testimonials-featured-section {
            padding: 60px 0 70px;
          }

          .testimonials-featured-heading {
            font-size: 2.2rem;
            margin-bottom: 36px;
          }

          .testimonials-featured-grid {
            gap: 24px;
          }

          .testimonial-featured-card {
            padding: 28px 28px;
          }

          .testimonial-featured-text {
            font-size: 0.95rem;
          }
        }

        @media (max-width: 768px) {
          .testimonials-featured-section {
            padding: 50px 0 60px;
          }

          .testimonials-featured-heading {
            font-size: 1.8rem;
            margin-bottom: 28px;
          }

          .testimonials-featured-heading::after {
            width: 45px;
            height: 3px;
          }

          /* Stack vertically on mobile */
          .testimonials-featured-grid {
            grid-template-columns: 1fr;
            gap: 24px;
          }

          .testimonial-featured-card {
            padding: 24px 24px;
          }

          .testimonial-featured-quote {
            font-size: 1.5rem;
          }

          .testimonial-featured-text {
            font-size: 0.92rem;
            line-height: 1.7;
          }

          .testimonial-featured-author {
            padding-top: 16px;
          }

          .testimonial-featured-avatar {
            width: 40px;
            height: 40px;
            font-size: 1rem;
          }

          .testimonial-featured-name {
            font-size: 0.92rem;
          }

          .testimonial-featured-location {
            font-size: 0.8rem;
          }
        }

        @media (max-width: 480px) {
          .testimonials-featured-section {
            padding: 40px 0 50px;
          }

          .testimonials-featured-heading {
            font-size: 1.5rem;
            margin-bottom: 24px;
          }

          .testimonials-featured-heading::after {
            width: 35px;
            height: 3px;
          }

          .testimonial-featured-card {
            padding: 20px 18px;
          }

          .testimonial-featured-quote {
            font-size: 1.3rem;
            margin-bottom: 10px;
          }

          .testimonial-featured-text {
            font-size: 0.85rem;
            line-height: 1.6;
          }

          .testimonial-featured-author {
            gap: 12px;
            padding-top: 14px;
          }

          .testimonial-featured-avatar {
            width: 36px;
            height: 36px;
            font-size: 0.9rem;
          }

          .testimonial-featured-name {
            font-size: 0.85rem;
          }

          .testimonial-featured-location {
            font-size: 0.75rem;
          }
        }
      `}</style>
        </>
    );
};
// ============================================
// WORRY AND HASSLE FREE SOLUTIONS COMPONENT
// ============================================
const WorryFreeSolutions = () => {
    return (
        <>
            <section className="worry-free-section">
                <div className="worry-free-container">
                    <div className="worry-free-content">
                        <h2 className="worry-free-heading">
                            Worry and Hassle Free Solutions
                        </h2>

                        <p className="worry-free-text">
                            Expert installation of high quality window film that provides privacy,
                            reduces heat and glare, and enhances the appearance of your building.
                            Our team of skilled professionals will ensure a flawless application
                            that lasts for years to come.
                        </p>

                        <div className="worry-free-features">
                            <div className="worry-free-feature">
                                <div className="worry-free-icon">
                                    <i className="fas fa-shield-alt"></i>
                                </div>
                                <div className="worry-free-feature-text">
                                    <span className="worry-free-feature-title">Privacy</span>
                                    <span className="worry-free-feature-desc">Enhanced privacy without sacrificing light</span>
                                </div>
                            </div>

                            <div className="worry-free-feature">
                                <div className="worry-free-icon">
                                    <i className="fas fa-sun"></i>
                                </div>
                                <div className="worry-free-feature-text">
                                    <span className="worry-free-feature-title">Heat & Glare Reduction</span>
                                    <span className="worry-free-feature-desc">Stay comfortable with reduced heat and glare</span>
                                </div>
                            </div>

                            <div className="worry-free-feature">
                                <div className="worry-free-icon">
                                    <i className="fas fa-building"></i>
                                </div>
                                <div className="worry-free-feature-text">
                                    <span className="worry-free-feature-title">Enhanced Appearance</span>
                                    <span className="worry-free-feature-desc">Improve the look of your building</span>
                                </div>
                            </div>
                        </div>

                        <button className="worry-free-btn">
                            Get Free Estimate <i className="fas fa-arrow-right"></i>
                        </button>
                    </div>

                    {/* Right Image Column */}
                    <div className="worry-free-image">
                        <img
                            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop&crop=center"
                            alt="Modern glass building with window film"
                            loading="lazy"
                        />
                        <div className="worry-free-image-overlay">
                            <div className="worry-free-badge">
                                <i className="fas fa-check-circle"></i>
                                <span>100% Satisfaction Guaranteed</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Styles */}
            <style>{`
        /* ============================================
           WORRY AND HASSLE FREE SOLUTIONS
           ============================================ */
        .worry-free-section {
          background: #ffffff;
          padding: 80px 0;
          position: relative;
          overflow: hidden;
        }

        /* Decorative background element */
        .worry-free-section::before {
          content: '';
          position: absolute;
          top: -50%;
          right: -20%;
          width: 600px;
          height: 600px;
          background: radial-gradient(circle, rgba(211, 47, 47, 0.03) 0%, transparent 70%);
          border-radius: 50%;
          pointer-events: none;
        }

        .worry-free-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 24px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: center;
          position: relative;
          z-index: 1;
        }

        /* Content */
        .worry-free-content {
          display: flex;
          flex-direction: column;
        }

        .worry-free-heading {
          font-size: 2.8rem;
          font-weight: 800;
          color: #222222;
          margin-bottom: 20px;
          letter-spacing: -0.5px;
          line-height: 1.2;
          text-transform: uppercase;
        }

        .worry-free-heading::after {
          content: '';
          display: block;
          width: 60px;
          height: 4px;
          background: #d32f2f;
          margin-top: 16px;
          border-radius: 2px;
        }

        .worry-free-text {
          font-size: 1.05rem;
          line-height: 1.8;
          color: #555555;
          margin-bottom: 32px;
          max-width: 540px;
        }

        /* Features */
        .worry-free-features {
          display: flex;
          flex-direction: column;
          gap: 16px;
          margin-bottom: 36px;
        }

        .worry-free-feature {
          display: flex;
          align-items: center;
          gap: 16px;
          padding: 12px 16px;
          border-radius: 8px;
          transition: background 0.3s ease, transform 0.3s ease;
          cursor: default;
          max-width: 480px;
        }

        .worry-free-feature:hover {
          background: #f5f4f0;
          transform: translateX(6px);
        }

        .worry-free-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: #d32f2f;
          color: #ffffff;
          font-size: 1.1rem;
          flex-shrink: 0;
          transition: transform 0.3s ease;
        }

        .worry-free-feature:hover .worry-free-icon {
          transform: scale(1.1);
        }

        .worry-free-feature-text {
          display: flex;
          flex-direction: column;
          text-align: left
        }

        .worry-free-feature-title {
          font-weight: 700;
          font-size: 0.95rem;
          color: #222222;
        }

        .worry-free-feature-desc {
          font-size: 0.85rem;
          color: #777777;
          margin-top: 2px;
        }

        /* Button */
        .worry-free-btn {
          background: #d32f2f;
          color: #ffffff;
          border: none;
          padding: 16px 40px;
          font-size: 1rem;
          font-weight: 700;
          border-radius: 4px;
          cursor: pointer;
          transition: all 0.3s ease;
          display: inline-flex;
          align-items: center;
          gap: 12px;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          align-self: flex-start;
        }

        .worry-free-btn i {
          font-size: 1.1rem;
          transition: transform 0.3s ease;
        }

        .worry-free-btn:hover {
          background: #b71c1c;
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(211, 47, 47, 0.35);
        }

        .worry-free-btn:hover i {
          transform: translateX(6px);
        }

        .worry-free-btn:active {
          transform: translateY(0);
        }

        /* Image */
        .worry-free-image {
          position: relative;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.10);
        }

        .worry-free-image img {
          width: 100%;
          height: 100%;
          aspect-ratio: 4 / 3;
          object-fit: cover;
          display: block;
          transition: transform 0.5s ease;
        }

        .worry-free-image:hover img {
          transform: scale(1.03);
        }

        .worry-free-image-overlay {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          padding: 30px;
          background: linear-gradient(transparent, rgba(0, 0, 0, 0.6));
        }

        .worry-free-badge {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: rgba(255, 255, 255, 0.95);
          padding: 12px 24px;
          border-radius: 50px;
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.10);
          backdrop-filter: blur(8px);
        }

        .worry-free-badge i {
          color: #d32f2f;
          font-size: 1.2rem;
        }

        .worry-free-badge span {
          font-weight: 700;
          font-size: 0.9rem;
          color: #222222;
        }

        /* ============================================
           RESPONSIVE BREAKPOINTS
           ============================================ */

        @media (max-width: 992px) {
          .worry-free-section {
            padding: 60px 0;
          }

          .worry-free-container {
            grid-template-columns: 1fr;
            gap: 40px;
          }

          .worry-free-heading {
            font-size: 2.2rem;
          }

          .worry-free-text {
            font-size: 1rem;
            max-width: 100%;
          }

          .worry-free-feature {
            max-width: 100%;
          }

          .worry-free-image {
            order: -1;
          }

          .worry-free-image img {
            aspect-ratio: 16 / 10;
          }

          .worry-free-btn {
            align-self: stretch;
            justify-content: center;
          }
        }

        @media (max-width: 768px) {
          .worry-free-section {
            padding: 50px 0;
          }

          .worry-free-heading {
            font-size: 1.8rem;
          }

          .worry-free-heading::after {
            width: 45px;
            height: 3px;
          }

          .worry-free-text {
            font-size: 0.95rem;
            line-height: 1.7;
          }

          .worry-free-features {
            gap: 12px;
          }

          .worry-free-feature {
            padding: 10px 12px;
          }

          .worry-free-feature:hover {
            transform: none;
          }

          .worry-free-icon {
            width: 38px;
            height: 38px;
            font-size: 0.95rem;
          }

          .worry-free-feature-title {
            font-size: 0.9rem;
          }

          .worry-free-feature-desc {
            font-size: 0.8rem;
          }

          .worry-free-btn {
            padding: 14px 32px;
            font-size: 0.9rem;
          }

          .worry-free-image-overlay {
            padding: 20px;
          }

          .worry-free-badge {
            padding: 10px 18px;
          }

          .worry-free-badge span {
            font-size: 0.8rem;
          }
        }

        @media (max-width: 480px) {
          .worry-free-section {
            padding: 40px 0;
          }

          .worry-free-heading {
            font-size: 1.5rem;
          }

          .worry-free-heading::after {
            width: 35px;
            height: 3px;
          }

          .worry-free-text {
            font-size: 0.88rem;
          }

          .worry-free-feature {
            padding: 8px 10px;
          }

          .worry-free-icon {
            width: 34px;
            height: 34px;
            font-size: 0.85rem;
          }

          .worry-free-feature-title {
            font-size: 0.85rem;
          }

          .worry-free-feature-desc {
            font-size: 0.75rem;
          }

          .worry-free-btn {
            padding: 12px 24px;
            font-size: 0.8rem;
            width: 100%;
            justify-content: center;
          }

          .worry-free-image-overlay {
            padding: 16px;
          }

          .worry-free-badge {
            padding: 8px 14px;
            width: 100%;
            justify-content: center;
          }

          .worry-free-badge i {
            font-size: 1rem;
          }

          .worry-free-badge span {
            font-size: 0.75rem;
          }
        }
      `}</style>
        </>
    );
};
// ============================================
// 5. MAIN ABOUT COMPONENT
// ============================================
function About() {
    return (
        <div>
            <Header />
            <AboutHero />
            <AboutContent />
            <OurCommitment />
            <NumbersAndTestimonials />
            <WhatPeopleSay />
            <WorryFreeSolutions />
        </div>
    );
}

export default About;