import React from 'react';
import Header from './Header';

// ============================================
// SERVICES PAGE HERO COMPONENT
// ============================================
const ServicesHero = () => {
    return (
        <>
            <section className="services-hero">
                <div className="services-hero-overlay"></div>
                <div className="services-hero-container">
                    <div className="services-hero-content">
                        <span className="services-hero-breadcrumb">Home / Services</span>
                        <h1 className="services-hero-title">Services</h1>
                        <p className="services-hero-text">
                            Professional window film solutions for your residential and commercial needs
                        </p>
                    </div>

                    <div className="services-hero-callout">
                        <span className="services-callout-label">Call Today</span>
                        <a href="tel:226-503-6102" className="services-callout-phone">
                            226-503-6102
                        </a>
                    </div>
                </div>
            </section>

            {/* Styles */}
            <style>{`
        /* ============================================
           SERVICES HERO SECTION
           ============================================ */
        .services-hero {
          position: relative;
          background: url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1600&h=600&fit=crop&crop=center') center/cover no-repeat;
          min-height: 380px;
          display: flex;
          align-items: flex-end;
          overflow: hidden;
        }

        .services-hero-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(90deg, rgba(18, 22, 25, 0.92) 0%, rgba(18, 22, 25, 0.75) 50%, rgba(18, 22, 25, 0.5) 100%);
          z-index: 1;
        }

        .services-hero-container {
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
          padding-bottom: 0;
        }

        .services-hero-content {
          flex: 1;
          padding: 60px 0 40px;
        }

        .services-hero-breadcrumb {
          font-size: 0.85rem;
          color: rgba(255, 255, 255, 0.6);
          font-weight: 500;
          letter-spacing: 1px;
          text-transform: uppercase;
          margin-bottom: 12px;
          display: block;
        }

        .services-hero-breadcrumb span {
          color: #d32f2f;
        }

        .services-hero-title {
          color: #ffffff;
          font-size: 3.5rem;
          font-weight: 800;
          letter-spacing: -0.5px;
          margin: 0 0 12px 0;
          line-height: 1.1;
          text-transform: uppercase;
        }

        .services-hero-title::after {
          content: '';
          display: block;
          width: 60px;
          height: 4px;
          background: #d32f2f;
          margin-top: 16px;
          border-radius: 2px;
        }

        .services-hero-text {
          font-size: 1.1rem;
          color: rgba(255, 255, 255, 0.8);
          max-width: 500px;
          line-height: 1.6;
          margin-top: 8px;
        }

        .services-hero-callout {
          background: #d32f2f;
          color: #ffffff;
          padding: 32px 40px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          box-shadow: -4px -4px 20px rgba(0, 0, 0, 0.3);
          border-top-left-radius: 4px;
          border-top-right-radius: 4px;
          flex-shrink: 0;
          min-width: 200px;
          align-self: flex-end;
          margin-bottom: 0;
        }

        .services-callout-label {
          font-size: 1rem;
          font-weight: 600;
          color: #ffffff;
          margin-bottom: 8px;
          letter-spacing: 0.5px;
          text-transform: uppercase;
        }

        .services-callout-phone {
          font-size: 2rem;
          font-weight: 900;
          color: #ffffff;
          text-decoration: none;
          letter-spacing: 1px;
          transition: opacity 0.2s ease;
        }

        .services-callout-phone:hover {
          opacity: 0.9;
        }

        /* ============================================
           RESPONSIVE BREAKPOINTS
           ============================================ */

        @media (max-width: 992px) {
          .services-hero {
            min-height: 320px;
          }

          .services-hero-title {
            font-size: 2.8rem;
          }

          .services-hero-callout {
            padding: 24px 32px;
            min-width: 160px;
          }

          .services-callout-phone {
            font-size: 1.6rem;
          }
        }

        @media (max-width: 768px) {
          .services-hero {
            min-height: 300px;
          }

          .services-hero-container {
            flex-direction: column;
            align-items: flex-start;
            gap: 0;
            padding: 0 20px;
          }

          .services-hero-content {
            padding: 40px 0 20px;
            width: 100%;
          }

          .services-hero-title {
            font-size: 2.2rem;
          }

          .services-hero-title::after {
            width: 45px;
            height: 3px;
          }

          .services-hero-text {
            font-size: 1rem;
            max-width: 100%;
          }

          .services-hero-callout {
            width: 100%;
            padding: 20px 24px;
            border-radius: 4px 4px 0 0;
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
            gap: 16px;
            min-width: auto;
            box-shadow: 0 -4px 20px rgba(0, 0, 0, 0.2);
          }

          .services-callout-label {
            font-size: 0.9rem;
            margin-bottom: 0;
          }

          .services-callout-phone {
            font-size: 1.4rem;
          }
        }

        @media (max-width: 480px) {
          .services-hero {
            min-height: 260px;
          }

          .services-hero-content {
            padding: 30px 0 16px;
          }

          .services-hero-title {
            font-size: 1.8rem;
          }

          .services-hero-title::after {
            width: 35px;
            height: 3px;
          }

          .services-hero-text {
            font-size: 0.9rem;
          }

          .services-hero-callout {
            padding: 16px 20px;
            flex-direction: column;
            align-items: flex-start;
            gap: 4px;
          }

          .services-callout-label {
            font-size: 0.8rem;
          }

          .services-callout-phone {
            font-size: 1.2rem;
          }

          .services-hero-breadcrumb {
            font-size: 0.75rem;
          }
        }
      `}</style>
        </>
    );
};
// ============================================
// CUSTOM DESIGNS SECTION
// ============================================
const CustomDesigns = () => {
    return (
        <>
            <section className="custom-designs-section">
                <div className="custom-designs-container">
                    {/* LEFT CONTENT */}
                    <div className="custom-designs-content">
                        <span className="custom-designs-tag">Services</span>
                        <h2 className="custom-designs-heading">
                            Transform your space
                            <br />
                            with window film
                        </h2>
                        <p className="custom-designs-description">
                            Whether you are looking to protect your home or office from vandalism using security film,
                            reduce heat and glare with solar film, or reduce visibility with privacy film - our
                            knowledgeable team is here to help.
                        </p>
                    </div>

                    {/* MIDDLE ACCORDION */}
                    <div className="custom-designs-accordion">
                        <div className="custom-designs-accordion-header">
                            <span>Custom Designs</span>
                        </div>
                        <div className="custom-designs-accordion-body">
                            Struggling to find the perfect design?
                            <br />
                            Our team is here to assist you with all
                            <br />
                            your project design requirements.
                        </div>
                    </div>

                    {/* RIGHT IMAGE */}
                    <div className="custom-designs-image">
                        <img
                            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1000&h=800&fit=crop&crop=center"
                            alt="Modern interior with large windows"
                            loading="lazy"
                        />
                    </div>
                </div>
            </section>

            <style>{`
        .custom-designs-section {
          width: 100%;
          background: #f3f2ef;
          overflow: hidden;
          text-align: left
        }

        .custom-designs-container {
          max-width: 1500px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1.15fr 1fr 0.95fr;
          align-items: start;
        }

        /* LEFT CONTENT */
        .custom-designs-content {
          padding: 60px 40px 60px 60px;
          display: flex;
          flex-direction: column;
          min-height: 550px;
        }

        .custom-designs-tag {
          display: block;
          margin-bottom: 35px;
          color: #111f2d;
          font-size: 16px;
          font-weight: 700;
        }

        .custom-designs-heading {
          margin: 0 0 30px;
          color: #10283d;
          font-size: 1.8rem;
          font-weight: 700;
          line-height: 1.35;
          letter-spacing: -1px;
        }

        .custom-designs-description {
          max-width: 500px;
          margin: 0;
          color: #294967;
          font-size: 16px;
          line-height: 1.9;
        }

        .custom-designs-btn {
          margin-top: 45px;
          padding: 0;
          width: fit-content;
          display: inline-flex;
          align-items: center;
          gap: 5px;
          background: transparent;
          border: none;
          color: #203f5c;
          font-size: 16px;
          font-weight: 400;
          cursor: pointer;
          transition: color 0.3s ease, transform 0.3s ease;
        }

        .custom-designs-btn i {
          font-size: 12px;
          transition: transform 0.3s ease;
        }

        .custom-designs-btn:hover {
          color: #d32f2f;
          transform: translateX(4px);
        }

        .custom-designs-btn:hover i {
          transform: translateX(3px);
        }

        /* ACCORDION */
        .custom-designs-accordion {
          width: calc(100% - 30px);
          margin-top: 60px;
          background: #ffffff;
          align-self: start;
          box-shadow: 0 1px 8px rgba(0,0,0,0.02);
        }

        .custom-designs-accordion-header {
          min-height: 70px;
          padding: 0 20px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          color: #344f68;
          font-size: 18px;
          font-weight: 700;
        }

        .custom-designs-accordion-header i {
          color: #000;
          font-size: 12px;
        }

        .custom-designs-accordion-body {
          padding: 0 20px 35px;
          color: #000;
          font-size: 18px;
          line-height: 1.9;
          font-weight: 400;
        }

        /* RIGHT IMAGE */
        .custom-designs-image {
          width: 71%;
          height: 350px;
          overflow: hidden;
        }

        .custom-designs-image img {
          width: 100%;
          height: 100%;
          display: block;
          object-fit: cover;
          object-position: center;
          transition: transform 0.6s ease;
        }

        .custom-designs-image:hover img {
          transform: scale(1.03);
        }

        /* RESPONSIVE */
        @media (max-width: 1200px) {
          .custom-designs-container {
            grid-template-columns: 1fr 1fr;
          }

          .custom-designs-content {
            padding: 50px 35px;
            min-height: auto;
          }

          .custom-designs-image {
            grid-column: 2;
            grid-row: 1 / span 2;
            height: 100%;
          }

          .custom-designs-accordion {
            margin: 0 35px 50px;
            width: calc(100% - 70px);
          }
        }

        @media (max-width: 768px) {
          .custom-designs-container {
            display: flex;
            flex-direction: column;
          }

          .custom-designs-content {
            padding: 45px 25px 35px;
            min-height: auto;
          }

          .custom-designs-tag {
            margin-bottom: 25px;
            font-size: 14px;
          }

          .custom-designs-heading {
            margin-bottom: 25px;
            font-size: 1.6rem;
          }

          .custom-designs-description {
            font-size: 15px;
            line-height: 1.8;
          }

          .custom-designs-btn {
            margin-top: 35px;
            font-size: 15px;
          }

          .custom-designs-accordion {
            width: calc(100% - 50px);
            margin: 0 25px 35px;
          }

          .custom-designs-accordion-header {
            min-height: 60px;
            font-size: 16px;
          }

          .custom-designs-accordion-body {
            padding: 0 20px 25px;
            font-size: 16px;
            line-height: 1.7;
          }

          .custom-designs-image {
            height: 400px;
          }
        }

        @media (max-width: 480px) {
          .custom-designs-content {
            padding: 35px 18px 25px;
          }

          .custom-designs-heading {
            font-size: 1.3rem;
          }

          .custom-designs-description {
            font-size: 14px;
          }

          .custom-designs-accordion {
            width: calc(100% - 36px);
            margin: 0 18px 25px;
          }

          .custom-designs-accordion-body {
            font-size: 14px;
            padding: 0 16px 20px;
          }

          .custom-designs-image {
            height: 300px;
          }
        }
      `}</style>
        </>
    );
};




const FilmSolutions = () => {
    // ============================================
    // FILM DATA
    // Add more film objects here
    // ============================================

    const filmData = [
        {
            id: 1,
            title: "Energy Saving Film",
            description:
                "Reduce energy consumption and save costs on cooling expenses with our energy efficient window film solutions. Our energy saving window films can help reduce energy consumption by up to 30% by reflecting sunrays back and preventing heat from escaping during winter months.",
            image:
                "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800&h=600&fit=crop&crop=center",
            alt: "Energy saving window film",
        },

        {
            id: 2,
            title: "Decorative Film",
            description:
                "Looking for a way to dress up your storefront or interior? Our decorative film options allow you to add a touch of style to your commercial or residential space without breaking the bank.",
            image:
                "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800&h=600&fit=crop&crop=center",
            alt: "Decorative window film",
        },

        {
            id: 3,
            title: "Safety and Security Film",
            description:
                "Discover how our safety and security films can protect against forced entry burglaries, reduce the risk of serious glass-impact injuries, and protect building occupants from flying glass fragments in the event of a blast or serious weather event.",
            image:
                "https://images.unsplash.com/photo-1558008258-3256797b43f3?w=800&h=600&fit=crop&crop=center",
            alt: "Safety and security window film",
        },

        {
            id: 4,
            title: "Privacy Film",
            description:
                "Our window film provides an added layer of privacy and security for your commercial space while still allowing for natural light to flow through.",
            image:
                "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&h=600&fit=crop&crop=center",
            alt: "Privacy window film",
        },

        {
            id: 5,
            title: "Installation",
            description:
                "Our skilled team of installers are committed to providing you with a quick and flawless installation. We pledge to complete the job to your full satisfaction.",
            image:
                "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&h=600&fit=crop&crop=center",
            alt: "Professional window film installation",
        },

        {
            id: 6,
            title: "Service & Repair",
            description:
                "Issue with your window film? Our knowledgeable experts are happy to return to the site to inspect the issue and provide a resolution.",
            image:
                "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&h=600&fit=crop&crop=center",
            alt: "Window film service and repair",
        },
    ];

    return (
        <>
            <section className="film-solutions-section">
                <div className="film-solutions-container">

                    {filmData.map((film) => (
                        <article
                            className="film-solution-item"
                            key={film.id}
                        >

                            {/* ==================================
                  IMAGE
              ================================== */}

                            <div className="film-solution-image">
                                <img
                                    src={film.image}
                                    alt={film.alt}
                                    loading="lazy"
                                />
                            </div>


                            {/* ==================================
                  CONTENT
              ================================== */}

                            <div className="film-solution-content">

                                <h2 className="film-solution-title">
                                    {film.title}
                                </h2>

                                <p className="film-solution-description">
                                    {film.description}
                                </p>

                            </div>

                        </article>
                    ))}

                </div>
            </section>


            {/* ============================================
          STYLES
      ============================================ */}

            <style>{`

        /* ============================================
           MAIN SECTION
        ============================================ */

        .film-solutions-section {
          width: 100%;
          background: #f4f3f0;
          padding: 60px 0 80px;
          overflow: hidden;
          text-align: left
        }


        /* ============================================
           MAIN CONTAINER
        ============================================ */

        .film-solutions-container {
          width: 100%;
          max-width: 1100px;
          margin: 0 auto;
          padding: 0 20px;
        }


        /* ============================================
           SINGLE FILM ITEM
        ============================================ */

        .film-solution-item {
          width: 100%;

          display: grid;

          grid-template-columns:
            350px
            minmax(0, 1fr);

          column-gap: 55px;

          align-items: start;

          margin-bottom: 100px;
        }


        /* Remove margin from last item */

        .film-solution-item:last-child {
          margin-bottom: 0;
        }


        /* ============================================
           IMAGE
        ============================================ */

        .film-solution-image {
          width: 100%;
          height: 230px;

          overflow: hidden;

          position: relative;

          background: #e8e7e4;
        }


        .film-solution-image img {
          width: 100%;
          height: 100%;

          display: block;

          object-fit: cover;
          object-position: center;

          transition:
            transform 0.5s ease;
        }


        /* ============================================
           IMAGE HOVER
        ============================================ */

        .film-solution-item:hover
        .film-solution-image img {
          transform: scale(1.03);
        }


        /* ============================================
           CONTENT
        ============================================ */

        .film-solution-content {
          padding-top: 5px;
        }


        /* ============================================
           TITLE
        ============================================ */

        .film-solution-title {
          margin: 0 0 22px;

          color: #10283d;

          font-size: 2rem;

          font-weight: 700;

          line-height: 1.25;

          letter-spacing: -0.5px;
        }


        /* ============================================
           DESCRIPTION
        ============================================ */

        .film-solution-description {
          max-width: 620px;

          margin: 0;

          color: #294967;

          font-size: 16px;

          font-weight: 400;

          line-height: 1.9;

          letter-spacing: 0.2px;
        }


        /* ============================================
           TABLET
        ============================================ */

        @media (max-width: 992px) {

          .film-solutions-section {
            padding:
              50px 0
              70px;
          }


          .film-solutions-container {
            max-width:
              900px;
          }


          .film-solution-item {
            grid-template-columns:
              300px
              minmax(0, 1fr);

            column-gap:
              35px;

            margin-bottom:
              75px;
          }


          .film-solution-image {
            height:
              200px;
          }


          .film-solution-title {
            font-size:
              1.7rem;

            margin-bottom:
              16px;
          }


          .film-solution-description {
            font-size:
              15px;

            line-height:
              1.8;
          }

        }


        /* ============================================
           MOBILE
        ============================================ */

        @media (max-width: 768px) {

          .film-solutions-section {
            padding:
              40px 0
              60px;
          }


          .film-solutions-container {
            padding:
              0 20px;
          }


          .film-solution-item {
            display:
              flex;

            flex-direction:
              column;

            gap:
              25px;

            margin-bottom:
              60px;
          }


          .film-solution-image {
            width:
              100%;

            height:
              220px;
          }


          .film-solution-content {
            padding:
              0;
          }


          .film-solution-title {
            font-size:
              1.6rem;

            line-height:
              1.25;

            margin-bottom:
              18px;
          }


          .film-solution-description {
            font-size:
              14px;

            line-height:
              1.75;
          }

        }


        /* ============================================
           SMALL MOBILE
        ============================================ */

        @media (max-width: 480px) {

          .film-solutions-container {
            padding:
              0 16px;
          }


          .film-solution-item {
            gap:
              24px;

            margin-bottom:
              60px;
          }


          .film-solution-image {
            height:
              190px;
          }


          .film-solution-title {
            font-size:
              1.4rem;
          }


          .film-solution-description {
            font-size:
              14px;

            line-height:
              1.75;
          }

        }

      `}</style>
        </>
    );
};


// ============================================
// FREE ESTIMATE CTA SECTION
// ============================================
const FreeEstimateSection = () => {
    return (
        <>
            <section className="free-estimate-section">
                {/* Online Background Image */}
                <div className="free-estimate-bg"></div>

                {/* Dark Overlay */}
                <div className="free-estimate-overlay"></div>

                {/* Content */}
                <div className="free-estimate-container">
                    <div className="free-estimate-content">
                        <h2 className="free-estimate-heading">
                            See How Window Film Can
                            <br />
                            Benefit Your Space
                        </h2>

                        <p className="free-estimate-description">
                            Contact us today to discuss your ideas for your space. Our
                            skilled staff are available to answer your questions and
                            determine what window film is best suited for you.
                        </p>

                        <button className="free-estimate-btn">
                            <span>Get a Free Estimate</span>
                            <i className="fas fa-arrow-right"></i>
                        </button>
                    </div>
                </div>
            </section>

            <style>{`
        /* ============================================
           FREE ESTIMATE CTA SECTION
           ============================================ */

        .free-estimate-section {
          position: relative;
          width: 100%;
          min-height: 500px;
          display: flex;
          align-items: center;
          overflow: hidden;
          background: #1c292e;
        }

        /* Online Background Image */
        .free-estimate-bg {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;

          background-image: url(
            'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1800&auto=format&fit=crop&q=85'
          );

          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;

          z-index: 1;

          transition: transform 0.8s ease;
        }

        /* Dark Overlay */
        .free-estimate-overlay {
          position: absolute;
          inset: 0;

          background: linear-gradient(
            90deg,
            rgba(10, 20, 24, 0.92) 0%,
            rgba(10, 20, 24, 0.84) 35%,
            rgba(10, 20, 24, 0.65) 65%,
            rgba(10, 20, 24, 0.72) 100%
          );

          z-index: 2;
        }

        /* Main Container */
        .free-estimate-container {
          position: relative;
          z-index: 3;

          width: 100%;
          max-width: 1200px;

          margin: 0 auto;
          padding: 80px 24px;
        }

        /* Content */
        .free-estimate-content {
          max-width: 760px;
          color: #ffffff;
        }

        /* Heading */
        .free-estimate-heading {
          margin: 0 0 40px;

          font-size: 3.2rem;
          line-height: 1.2;
          font-weight: 800;

          color: #ffffff;

          letter-spacing: -1px;
        }

        /* Description */
        .free-estimate-description {
          max-width: 850px;

          margin: 0 0 50px;

          color: #ffffff;

          font-size: 1.15rem;
          line-height: 1.9;
          font-weight: 400;
        }

        /* ============================================
           BUTTON
           ============================================ */

        .free-estimate-btn {
          position: relative;

          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 14px;

          min-width: 270px;

          padding: 16px 32px;

          border: 2px solid #d32f2f;
          border-radius: 4px;

          background: #d32f2f;
          color: #ffffff;

          font-size: 1rem;
          font-weight: 700;

          cursor: pointer;

          overflow: hidden;

          transition:
            background 0.3s ease,
            color 0.3s ease,
            transform 0.3s ease,
            box-shadow 0.3s ease;
        }

        .free-estimate-btn i {
          font-size: 0.9rem;

          transition: transform 0.3s ease;
        }

        /* Button Hover */
        .free-estimate-btn:hover {
          background: #b71c1c;
          border-color: #b71c1c;

          transform: translateY(-3px);

          box-shadow:
            0 8px 20px rgba(211, 47, 47, 0.35),
            0 0 0 4px rgba(211, 47, 47, 0.12);
        }

        .free-estimate-btn:hover i {
          transform: translateX(6px);
        }

        .free-estimate-btn:active {
          transform: translateY(-1px);
          box-shadow:
            0 4px 12px rgba(211, 47, 47, 0.3);
        }

        /* ============================================
           BACKGROUND HOVER EFFECT
           ============================================ */

        .free-estimate-section:hover .free-estimate-bg {
          transform: scale(1.03);
        }


        /* ============================================
           TABLET
           ============================================ */

        @media (max-width: 992px) {

          .free-estimate-section {
            min-height: 480px;
          }

          .free-estimate-container {
            padding: 70px 30px;
          }

          .free-estimate-heading {
            font-size: 2.7rem;
            margin-bottom: 35px;
          }

          .free-estimate-description {
            font-size: 1.05rem;
            line-height: 1.8;
            margin-bottom: 45px;
          }
        }


        /* ============================================
           MOBILE
           ============================================ */

        @media (max-width: 768px) {

          .free-estimate-section {
            min-height: 500px;
          }

          .free-estimate-bg {
            background-position: 65% center;
          }

          .free-estimate-overlay {
            background: linear-gradient(
              90deg,
              rgba(10, 20, 24, 0.94) 0%,
              rgba(10, 20, 24, 0.82) 100%
            );
          }

          .free-estimate-container {
            padding: 60px 24px;
          }

          .free-estimate-content {
            max-width: 100%;
          }

          .free-estimate-heading {
            font-size: 2.2rem;
            line-height: 1.25;
            letter-spacing: -0.5px;
            margin-bottom: 30px;
          }

          .free-estimate-description {
            font-size: 0.95rem;
            line-height: 1.75;
            margin-bottom: 40px;
          }

          .free-estimate-btn {
            width: 100%;
            max-width: 280px;
            padding: 15px 25px;
            font-size: 0.95rem;
          }
        }


        /* ============================================
           SMALL MOBILE
           ============================================ */

        @media (max-width: 480px) {

          .free-estimate-section {
            min-height: 520px;
          }

          .free-estimate-container {
            padding: 50px 20px;
          }

          .free-estimate-heading {
            font-size: 1.8rem;
          }

          .free-estimate-description {
            font-size: 0.88rem;
            line-height: 1.7;
          }

          .free-estimate-btn {
            max-width: 100%;
          }
        }
      `}</style>
        </>
    );
};

// ============================================
// SERVICES PAGE COMPONENT
// ============================================
function Services() {
    return (
        <>
            <Header />
            <ServicesHero />
            <CustomDesigns />
            <FilmSolutions />
            <FreeEstimateSection />
            {/* Add more sections here as needed */}
        </>
    );
}

export default Services;