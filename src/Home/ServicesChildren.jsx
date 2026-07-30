import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Header from "./Header";

function ServicesChildren() {
  const location = useLocation();
  const path = location.pathname;

  // Rich Data Map with Titles, Carousel Images, Descriptions, and Features Lists
  const serviceData = {
    "/anti-graffiti": {
      title: "Anti-Graffiti Window Films",
      images: [
        "https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1541888946425-d0fbb186a5b7?q=80&w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop",
      ],
      description:
        "Protect your property from vandalism and graffiti damage with our durable anti-graffiti window films. A cost-effective shield that keeps your glass looking clean and brand new.",
      features: [
        "Protects glass surfaces from scratches, tags, and vandalism",
        "Easy and affordable film replacement instead of costly glass repair",
        "Resistant to chemicals, etching, and abrasive damage",
      ],
    },
    "/blinds": {
      title: "Blinds",
      images: [
        "https://images.unsplash.com/photo-1618220179428-22790b461013?q=80&w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=800&auto=format&fit=crop",
      ],
      description:
        "Premium quality blinds offering superior light control, privacy, and aesthetic appeal for both residential and commercial spaces.",
      features: [
        "Customizable options to match any decor",
        "Durable materials for long-lasting performance",
        "Available in various styles and colors",
      ],
    },
    "/custom-printed-plotted-film": {
      title: "Custom Printed & Plotted Film",
      images: [
        "https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1541888946425-d0fbb186a5b7?q=80&w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop",
      ],
      description:
        "Add a unique and eye-catching touch to your space with customized and plotted window film. Create one of a kind designs that will set your space apart.",
      features: [
        "Fully customizable designs and patterns",
        "High-quality printing with vibrant colors",
        "Perfect for branding, signage, and decorative applications",
      ],
    },
    "/daylight-redirection": {
      title: "Daylight Redirection Films",
      images: [
        "https://images.unsplash.com/photo-1506157786151-b8491531f063?q=80&w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?q=80&w=800&auto=format&fit=crop",
      ],
      description:
        "Redirect natural light deeper into your building to reduce artificial lighting needs and improve workplace productivity. Designed to maximize daylighting benefits while minimizing glare.",
      features: [
        "Redirects up to 80% of sunlight towards the ceiling",
        "Reduces reliance on artificial electric lighting",
        "Improves occupant comfort and visual ergonomics",
      ],
    },
    "/decorative-tinting": {
      title: "Decorative Window Tinting",
      images: [
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=800&auto=format&fit=crop",
      ],
      description:
        "Enhance privacy and aesthetics with elegant frosted, patterned, and textured window films tailored to commercial offices and residential spaces.",
      features: [
        "Custom patterns, textures, and opacity options",
        "Cost-effective alternative to etched or sandblasted glass",
        "Maintains ambient natural light while providing privacy",
      ],
    },
    "/feather-friendly": {
      title: "Feather Friendly Film",
      images: [
        "https://images.unsplash.com/photo-1444464666168-49d633b86797?q=80&w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop",
      ],
      description:
        "Protect birds from window collisions with our feather-friendly film. Visible patterns alert birds to glass surfaces, preventing fatal collisions.",
      features: [
        "Helps prevent bird collisions with glass",
        "Nearly invisible to the human eye",
        "Easy to apply and remove",
      ],
    },
    "/heat-control": {
      title: "Heat Control Window Films",
      images: [
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=800&auto=format&fit=crop",
      ],
      description:
        "Reduce solar heat gain and improve energy efficiency with our advanced heat control window films. Stay comfortable year-round while reducing energy costs.",
      features: [
        "Blocks up to 99% of harmful UV rays",
        "Reduces solar heat gain by up to 80%",
        "Helps protect furniture and flooring from fading",
      ],
    },
    "/privacy-film": {
      title: "Privacy Film",
      images: [
        "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=800&auto=format&fit=crop",
      ],
      description:
        "Create a private sanctuary with our privacy window films. Choose from one-way mirror films or frosted designs for complete privacy during daylight hours.",
      features: [
        "One-way mirror effect during daylight hours",
        "Frosted and opaque options for total privacy",
        "Maintains natural light while blocking views",
      ],
    },
    "/security-film": {
      title: "Security Film",
      images: [
        "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=800&auto=format&fit=crop",
      ],
      description:
        "Enhance the security of your property with our high-strength security window films. Holds glass together upon impact, deterring break-ins and accidents.",
      features: [
        "Holds glass fragments together on impact",
        "Provides protection against break-ins and accidents",
        "Shatter-resistant and impact-resistant",
      ],
    },
    "/solar-film": {
      title: "Solar Film",
      images: [
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1541888946425-d0fbb186a5b7?q=80&w=800&auto=format&fit=crop",
      ],
      description:
        "Advanced solar window films that block harmful UV rays, reduce heat, and protect your interior from sun damage. Energy-efficient solutions for any space.",
      features: [
        "Blocks up to 99.9% of harmful UV radiation",
        "Significantly reduces cooling costs",
        "Protects furniture, artwork, and fabrics from fading",
      ],
    },
    "/wall-graphics": {
      title: "Wall Graphics",
      images: [
        "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=800&auto=format&fit=crop",
      ],
      description:
        "Transform any wall into a stunning visual experience with our custom wall graphics. Perfect for branding, education, and creating inspiring environments.",
      features: [
        "Fully customizable designs and sizes",
        "Easy to install and remove without damage",
        "Ideal for offices, schools, retail, and events",
      ],
    },
    "/way-finding": {
      title: "Way Finding Signage",
      images: [
        "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=800&auto=format&fit=crop",
      ],
      description:
        "Guide visitors and employees with professional way finding signage. Customizable solutions for any environment, from corporate offices to retail spaces.",
      features: [
        "Clear and professional design for easy navigation",
        "Custom shapes, sizes, and finishes available",
        "Durable materials for long-term use",
      ],
    },
  };

  // Default fallback item if path doesn't match key
  const currentService = serviceData[path] || {
    title: "Features & Benefits",
    images: [
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1541888946425-d0fbb186a5b7?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop",
    ],
    description:
      "High-quality window film solutions for residential and commercial applications. Explore our range of products and find the perfect solution for your needs.",
    features: [
      "Premium quality products",
      "Professional installation services",
      "Satisfaction guaranteed",
    ],
  };

  // Carousel active index state
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-advance carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide(
        (prevIndex) => (prevIndex + 1) % currentService.images.length,
      );
    }, 4000);
    return () => clearInterval(timer);
  }, [currentService.images.length]);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [path]);
  return (
    <>
      {/* Title / Hero Section */}
      <Header />
      <section className="service-hero-section">
        <div className="hero-overlay"></div>
        <div className="hero-container">
          <h1 className="service-hero-title">{currentService.title}</h1>
        </div>
      </section>

      {/* Features & Benefits Carousel Section */}
      <section className="features-section">
        <div className="features-container">
          {/* Left Column - Content */}
          <div className="features-left">
            <h2 className="features-heading">
              Features <br /> & Benefits
            </h2>

            <p className="features-description">{currentService.description}</p>

            <ul className="features-list">
              {currentService.features.map((item, index) => (
                <li key={index} className="features-item">
                  <span className="target-icon">◎</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <button className="quote-btn">REQUEST A FREE QUOTE</button>
          </div>

          {/* Right Column - Image Carousel */}
          <div className="features-right">
            <div className="carousel-card">
              <div className="carousel-slider">
                {currentService.images.map((imgUrl, index) => (
                  <div
                    key={index}
                    className={`carousel-slide ${index === currentSlide ? "active" : ""}`}
                  >
                    <img
                      src={imgUrl}
                      alt={`${currentService.title} preview ${index + 1}`}
                    />
                  </div>
                ))}
              </div>

              {/* Carousel Indicators */}
              <div className="carousel-dots">
                {currentService.images.map((_, index) => (
                  <button
                    key={index}
                    className={`dot ${index === currentSlide ? "active" : ""}`}
                    onClick={() => setCurrentSlide(index)}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Commitment Section with Parallax Effect */}
      <section className="commitment-section">
        <div className="commitment-background"></div>
        <div className="commitment-overlay"></div>
        <div className="commitment-container">
          <div className="commitment-content">
            <h2 className="commitment-title">Our Commitment</h2>
            <p className="commitment-text">
              At Maple Leaf Window Film Inc., we believe that our clients
              deserve the best. This is why we are committed to only using the
              highest quality materials and latest technology to ensure our
              products meet and exceed our client's expectations. Our team of
              experts is always available to help you choose the right window
              film for your needs and to provide professional installation
              services. We understand that every client's needs are unique,
              which is why we offer a wide range of customizable options to suit
              any project. Our commitment to excellence and customer
              satisfaction is what sets us apart from the competition.
            </p>
          </div>
        </div>
      </section>

      <style>{`

             :root {
          --primary-blue: #07154a;
          --primary-gold: #d6a800;
          --dark-gold: #b89200;
        }


                /* Hero Section Styles */
                .service-hero-section {
                    position: relative;
                    width: 100%;
                    min-height: 450px;
                    display: flex;
                    align-items: flex-end;
                    background-image: url('https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1600&auto=format&fit=crop');
                    background-size: cover;
                    background-position: center;
                    background-repeat: no-repeat;
                }

                .hero-overlay {
                    position: absolute;
                    inset: 0;
                    background: rgba(30, 37, 50, 0.75);
                    z-index: 1;
                }

                .hero-container {
                    position: relative;
                    z-index: 2;
                    max-width: 1280px;
                    width: 100%;
                    margin: 0 auto;
                    padding: 0 40px 50px 40px;
                }

                .service-hero-title {
                    color: #ffffff;
                    font-size: 3.2rem;
                    font-weight: 800;
                    margin: 0;
                    display: flex;
                    letter-spacing: -0.5px;
                }

                /* Features Section Styles */
                .features-section {
                    background-color: #ffffff;
                    padding: 90px 0;
                    text-align: left;
                }

                .features-container {
                    max-width: 1240px;
                    margin: 0 auto;
                    padding: 0 40px;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    gap: 60px;
                }

                /* Left Content Column */
                .features-left {
                    flex: 1;
                    max-width: 540px;
                }

                .features-heading {
                    font-family: serif;
                    font-size: 3.2rem;
                    font-weight: 800;
                    color: #122b5c;
                    line-height: 1.1;
                    margin-bottom: 24px;
                    letter-spacing: -0.5px;
                }

                .features-description {
                    font-size: 0.95rem;
                    line-height: 1.7;
                    color: #777777;
                    margin-bottom: 30px;
                }

                .features-list {
                    list-style: none;
                    padding: 0;
                    margin: 0 0 36px 0;
                }

                .features-item {
                    display: flex;
                    align-items: flex-start;
                    gap: 12px;
                    font-size: 0.93rem;
                    color: #555555;
                    margin-bottom: 14px;
                    line-height: 1.5;
                }

                .target-icon {
                    color: #444444;
                    font-size: 1.1rem;
                    line-height: 1;
                }

                .quote-btn {
                    background-color: #122b5c;
                    color: #ffffff;
                    border: none;
                    padding: 14px 28px;
                    font-size: 0.82rem;
                    font-weight: 700;
                    letter-spacing: 0.8px;
                    border-radius: 4px;
                    cursor: pointer;
                    transition: background-color 0.25s ease;
                }

                .quote-btn:hover {
                    background-color: #0d1e42;
                }

                /* Right Column & Carousel */
                .features-right {
                    flex: 1.1;
                    display: flex;
                    justify-content: flex-end;
                }

                .carousel-card {
                    position: relative;
                    width: 100%;
                    max-width: 580px;
                    background: #ffffff;
                    border-radius: 8px;
                    overflow: hidden;
                    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.08);
                }

                .carousel-slider {
                    position: relative;
                    width: 100%;
                    height: 380px;
                }

                .carousel-slide {
                    position: absolute;
                    inset: 0;
                    opacity: 0;
                    transition: opacity 0.6s ease-in-out;
                }

                .carousel-slide.active {
                    opacity: 1;
                }

                .carousel-slide img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }

                .carousel-dots {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    gap: 8px;
                    padding: 16px 0;
                    background-color: #ffffff;
                }

                .dot {
                    width: 7px;
                    height: 7px;
                    border-radius: 50%;
                    background-color: #cccccc;
                    border: none;
                    padding: 0;
                    cursor: pointer;
                    transition: all 0.3s ease;
                }

                .dot.active {
                    background-color: #222222;
                    transform: scale(1.2);
                }

                /* Our Commitment Section with Parallax Effect */
                .commitment-section {
                    position: relative;
                    width: 100%;
                    min-height: 480px;
                    display: flex;
                    align-items: center;
                    overflow: hidden;
                }

                /* The background image with parallax effect */
                .commitment-background {
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background-image: url('https://images.unsplash.com/photo-1518837695005-2083093ee35b?q=80&w=1600&auto=format&fit=crop');
                    background-size: cover;
                    background-position: center;
                    background-repeat: no-repeat;
                    background-attachment: fixed;
                    transform: scale(1.1);
                    z-index: 0;
                }

                /* For browsers that don't support background-attachment: fixed */
                @supports not (background-attachment: fixed) {
                    .commitment-background {
                        background-attachment: scroll;
                        transform: none;
                    }
                }

                .commitment-overlay {
                    position: absolute;
                    inset: 0;
                    background: rgba(30, 37, 48, 0.75);
                    z-index: 1;
                }

                .commitment-container {
                    position: relative;
                    z-index: 2;
                    max-width: 1240px;
                    width: 100%;
                    margin: 0 auto;
                    padding: 60px 40px;
                    display: flex;
                    justify-content: flex-end;
                }

                .commitment-content {
                    max-width: 580px;
                    text-align: left;
                }

                .commitment-title {
                    color: var(--primary-gold);
                    font-size: 2.5rem;
                    font-weight: 800;
                    margin-bottom: 24px;
                    letter-spacing: -0.5px;
                }

                .commitment-text {
                    color: #e0e0e0;
                    font-size: 0.95rem;
                    line-height: 1.8;
                    margin: 0;
                }

                /* Responsive Breakpoints */
                @media (max-width: 992px) {
                    .features-container {
                        flex-direction: column;
                        gap: 40px;
                    }

                    .features-left, 
                    .features-right {
                        max-width: 100%;
                        width: 100%;
                    }

                    .carousel-slider {
                        height: 320px;
                    }

                    .commitment-container {
                        justify-content: center;
                    }

                    .commitment-content {
                        max-width: 100%;
                    }

                    .commitment-background {
                        background-attachment: scroll;
                        transform: none;
                    }
                }

                @media (max-width: 768px) {
                    .service-hero-title {
                        font-size: 2.3rem;
                    }

                    .features-heading {
                        font-size: 2.4rem;
                    }

                    .carousel-slider {
                        height: 260px;
                    }

                    .commitment-title {
                        font-size: 2rem;
                    }

                    .commitment-text {
                        font-size: 0.9rem;
                    }

                    .commitment-section {
                        min-height: 400px;
                    }
                }
            `}</style>
    </>
  );
}

export default ServicesChildren;
