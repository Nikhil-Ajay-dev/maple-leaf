import { useRef, useState } from "react";
import Header from "./Header";
import ReCAPTCHA from "react-google-recaptcha";

const RECAPTCHA_SITE_KEY = process.env.REACT_APP_RECAPTCHA_SITE_KEY;

const COLORS = {
  navy: "#07154a",
  gold: "#d6a800",
  cream: "#f2efe6",
  teal: "#3e6a68",
  dark: "#1c1c1c",
  white: "#ffffff",
};

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "Solar film",
    message: "",
  });
  const [status, setStatus] = useState("idle");
  const [captchaToken, setCaptchaToken] = useState(null);
  const [captchaError, setCaptchaError] = useState(false);
  const recaptchaRef = useRef(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!captchaToken) {
      setCaptchaError(true);
      return;
    }
    setCaptchaError(false);
    setStatus("sending");
    try {
      const res = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, recaptchaToken: captchaToken }),
      });
      if (!res.ok) throw new Error();
      setStatus("success");
      setForm({ name: "", email: "", phone: "", service: "Solar film", message: "" });
    } catch (err) {
      console.error(err);
      setStatus("error");
    } finally {
      // Tokens are single-use — reset the widget after every attempt
      recaptchaRef.current?.reset();
      setCaptchaToken(null);
    }
  };

  return (
    <div style={styles.page}>
      {/* ---------- HERO ---------- */}
      <section style={styles.hero}>
        <Header />
        <div style={styles.heroImage}>
          <div style={styles.heroOverlay} />
          <h1 style={styles.heroTitle}>Contact</h1>

          <div style={styles.callBox}>
            <p style={styles.callLabel}>Call Today</p>
            <p style={styles.callNumber}>226-503-6102</p>
          </div>
        </div>
      </section>

      {/* ---------- CONTACT FORM ---------- */}
      <section style={styles.contactSection}>
        {/* Left: info panel */}
        <div style={styles.leftPanel}>
          <h2 style={styles.sectionHeading}>Contact Us</h2>
          <p style={styles.sectionText}>
            We're happy to hear from you and welcome any inquiries, feedback, or
            questions you may have.
          </p>

          <div style={styles.infoGrid}>
            <div style={styles.infoItem}>
              <span style={styles.iconCircle}>&#9733;</span>
              <span style={styles.infoText}>
                8 Gennela Square,
                <br />
                Scarborough, M1B 5A9
              </span>
            </div>
            <div style={styles.infoItem}>
              <span style={styles.iconCircle}>&#128197;</span>
              <span style={styles.infoText}>
                Weekdays ...... 9AM to 7PM
                <br />
                Weekends ...... Off
              </span>
            </div>
            <div style={styles.infoItem}>
              <span style={styles.iconCircle}>&#128222;</span>
              <span style={styles.infoText}>226-503-6102</span>
            </div>
            <div style={styles.infoItem}>
              <span style={styles.iconCircle}>&#9993;</span>
              <span style={styles.infoText}>info@mapleleafwindowfilm.com</span>
            </div>
          </div>

          <div style={styles.followWrap}>
            <h3 style={styles.followHeading}>Follow Us</h3>
            <a href="#" style={styles.socialCircle} aria-label="Instagram">
              &#128247;
            </a>
          </div>
        </div>

        {/* Right: enquiry form */}
        <div style={styles.rightPanel}>
          <h2 style={styles.enquiryHeading}>Make an Enquiry</h2>

          <form onSubmit={handleSubmit} style={styles.form}>
            <input
              type="text"
              name="name"
              placeholder="Name*"
              value={form.name}
              onChange={handleChange}
              style={styles.input}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email*"
              value={form.email}
              onChange={handleChange}
              style={styles.input}
              required
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone*"
              value={form.phone}
              onChange={handleChange}
              style={styles.input}
              required
            />
            <select
              name="service"
              value={form.service}
              onChange={handleChange}
              style={styles.select}
            >
              <option>Solar film</option>
              <option>Security film</option>
              <option>Decorative film</option>
              <option>Privacy film</option>
            </select>
            <textarea
              name="message"
              placeholder="Additional Message*"
              value={form.message}
              onChange={handleChange}
              style={styles.textarea}
              required
            />

            {/* Placeholder — swap for a real reCAPTCHA widget (e.g. react-google-recaptcha) */}
            <div>
              <ReCAPTCHA
                ref={recaptchaRef}
                sitekey={RECAPTCHA_SITE_KEY}
                onChange={(token) => {
                  setCaptchaToken(token);
                  setCaptchaError(false);
                }}
                onExpired={() => setCaptchaToken(null)}
              />
              {captchaError && (
                <p style={styles.errorMsg}>Please verify you're not a robot.</p>
              )}
            </div>

            <button
              type="submit"
              style={{
                ...styles.button,
                opacity: status === "sending" ? 0.7 : 1,
                cursor: status === "sending" ? "not-allowed" : "pointer",
              }}
              disabled={status === "sending"}
            >
              {status === "sending" ? "Sending..." : "Send Message"}
            </button>

            {status === "success" && (
              <p style={styles.success}>Message sent successfully!</p>
            )}
            {status === "error" && (
              <p style={styles.errorMsg}>Something went wrong. Please try again.</p>
            )}
          </form>
        </div>
      </section>
    </div>
  );
}

const styles = {
  page: {
    fontFamily: "'Poppins', 'Segoe UI', Arial, sans-serif",
    color: COLORS.dark,
  },

  /* ---------- HERO / NAV ---------- */
  hero: {
    position: "relative",
  },
  nav: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 10,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "18px 60px",
    background: "rgba(255,255,255,0.92)",
  },
  logoWrap: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
  },
  logoCircle: {
    width: 46,
    height: 46,
    borderRadius: "50%",
    background: COLORS.navy,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 20,
  },
  logoText: {
    fontWeight: 800,
    fontSize: 15,
    letterSpacing: "1px",
    color: COLORS.navy,
    lineHeight: 1.2,
  },
  logoSub: {
    fontSize: 10,
    letterSpacing: "2px",
    color: COLORS.gold,
    fontWeight: 600,
  },
  navLinks: {
    display: "flex",
    alignItems: "center",
    gap: "28px",
  },
  navPhone: {
    fontWeight: 700,
    color: COLORS.navy,
    fontSize: 15,
  },
  navLink: {
    color: COLORS.navy,
    textDecoration: "none",
    fontSize: 15,
    fontWeight: 500,
  },
  navSearch: {
    color: COLORS.gold,
    cursor: "pointer",
    fontSize: 16,
  },
  heroImage: {
    position: "relative",
    minHeight: 380,
    backgroundImage:
      "linear-gradient(to right, rgba(7,21,74,0.55), rgba(7,21,74,0.25)), url('https://images.unsplash.com/photo-1756155129837-4291ad0e89c0?fm=jpg&q=80&w=2400&auto=format&fit=crop')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    display: "flex",
    alignItems: "flex-end",
    paddingLeft: 60,
    paddingBottom: 90,
  },
  heroOverlay: {
    position: "absolute",
    inset: 0,
  },
  heroTitle: {
    position: "relative",
    color: COLORS.white,
    fontSize: 64,
    fontWeight: 800,
    margin: 0,
    zIndex: 2,
  },
  callBox: {
    position: "absolute",
    right: 60,
    bottom: 0,
    background: COLORS.gold,
    color: COLORS.primaryBlue, // or "var(--primary-blue)" if you're using CSS variables
    padding: "36px 48px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    boxShadow: "-4px 4px 20px rgba(0, 0, 0, 0.3)",
    borderTopLeftRadius: "4px",
    borderTopRightRadius: "4px",
    marginRight: "40px",
    zIndex: 3,
  },
  callLabel: {
    color: COLORS.white,
    margin: 0,
    fontSize: 15,
    fontWeight: 600,
  },
  callNumber: {
    color: COLORS.white,
    margin: "6px 0 0",
    fontSize: 28,
    fontWeight: 800,
  },

  /* ---------- CONTACT SECTION ---------- */
  contactSection: {
    display: "flex",
    flexWrap: "wrap",
    marginTop: 40,
  },
  leftPanel: {
    flex: "1 1 460px",
    background: COLORS.cream,
    padding: "80px 60px",
  },
  sectionHeading: {
    fontSize: 30,
    fontWeight: 800,
    color: COLORS.dark,
    margin: "0 0 16px",
  },
  sectionText: {
    fontSize: 15,
    color: "#4a4d56",
    lineHeight: 1.7,
    maxWidth: 420,
    marginBottom: 40,
  },
  infoGrid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "28px 40px",
    marginBottom: 48,
  },
  infoItem: {
    display: "flex",
    alignItems: "flex-start",
    gap: 14,
  },
  iconCircle: {
    width: 40,
    height: 40,
    minWidth: 40,
    borderRadius: "50%",
    background: COLORS.gold,
    color: COLORS.white,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 15,
  },
  infoText: {
    fontSize: 14,
    fontWeight: 700,
    color: COLORS.dark,
    lineHeight: 1.5,
  },
  followWrap: {
    borderTop: "1px solid #ddd8c9",
    paddingTop: 28,
  },
  followHeading: {
    fontSize: 18,
    fontWeight: 700,
    color: COLORS.dark,
    margin: "0 0 14px",
  },
  socialCircle: {
    width: 38,
    height: 38,
    borderRadius: "50%",
    background: COLORS.dark,
    color: COLORS.white,
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    textDecoration: "none",
  },

  rightPanel: {
    flex: "1 1 460px",
    background: COLORS.teal,
    padding: "80px 60px",
  },
  enquiryHeading: {
    color: COLORS.white,
    fontSize: 26,
    fontWeight: 700,
    margin: "0 0 28px",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: 16,
    maxWidth: 440,
  },
  input: {
    padding: "16px 18px",
    border: "none",
    borderRadius: 4,
    fontSize: 15,
    outline: "none",
    background: COLORS.white,
  },
  select: {
    padding: "16px 18px",
    border: "none",
    borderRadius: 4,
    fontSize: 15,
    outline: "none",
    background: COLORS.white,
    color: "#555",
  },
  textarea: {
    padding: "16px 18px",
    border: "none",
    borderRadius: 4,
    fontSize: 15,
    outline: "none",
    background: COLORS.white,
    minHeight: 120,
    resize: "vertical",
    fontFamily: "inherit",
  },
  recaptcha: {
    display: "flex",
    alignItems: "center",
    background: COLORS.white,
    padding: "14px 18px",
    borderRadius: 4,
    fontSize: 14,
    color: "#555",
  },
  button: {
    alignSelf: "flex-start",
    background: COLORS.gold,
    color: COLORS.white,
    border: "none",
    padding: "14px 36px",
    borderRadius: 24,
    fontSize: 15,
    fontWeight: 700,
    marginTop: 6,
  },
  success: {
    color: "#1e7a34",
    fontWeight: 600,
    margin: 0,
  },
  errorMsg: {
    color: "#c0392b",
    fontWeight: 600,
    margin: 0,
  },
};