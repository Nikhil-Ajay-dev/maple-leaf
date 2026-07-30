const nodemailer = require("nodemailer");
const validator = require("validator");
require("dotenv").config();

const allowedOrigins = ["http://localhost:3000", /\.vercel\.app$/];

const sanitize = (str) => validator.escape(String(str).trim());

// Verifies the token with Google before we trust the submission.
// Requires RECAPTCHA_SECRET_KEY (the *secret* key, not the site key) in your env vars.
async function verifyRecaptcha(token) {
  if (!token) return false;

  const params = new URLSearchParams({
    secret: process.env.RECAPTCHA_SECRET_KEY,
    response: token,
  });

  const res = await fetch("https://www.google.com/recaptcha/api/siteverify", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: params.toString(),
  });

  const data = await res.json();
  return data.success === true;
}

module.exports = async (req, res) => {
  // CORS
  const origin = req.headers.origin;
  const allowed = allowedOrigins.some((o) =>
    o instanceof RegExp ? o.test(origin) : o === origin
  );
  if (allowed) res.setHeader("Access-Control-Allow-Origin", origin);
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") return res.status(200).end();
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed." });

  const { name, email, message } = req.body;

  if (!name || !email || !message)
    return res.status(400).json({ error: "All fields are required." });

  if (!validator.isEmail(email))
    return res.status(400).json({ error: "Invalid email address." });

  const isHuman = await verifyRecaptcha(recaptchaToken);
  if (!isHuman)
    return res.status(400).json({ error: "reCAPTCHA verification failed. Please try again." });


  const safeName = sanitize(name);
  const safeEmail = validator.normalizeEmail(email);
  const safeMessage = sanitize(message).replace(/&#x0A;/g, "<br/>");

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: `"MAPLE LEAF WINDOW FILM" <${process.env.GMAIL_USER}>`,
      to: process.env.GMAIL_USER,
      cc: process.env.GMAIL_CC ? `${process.env.GMAIL_CC},${safeEmail}` : "another@example.com",
      replyTo: safeEmail,
      subject: `✨ New Project Inquiry from ${safeName}`,
      html: `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
</head>
<body style="margin:0;padding:0;background:#f4f5f7;font-family:'Inter',Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f4f5f7;padding:40px 0;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background:#ffffff;border-radius:12px;overflow:hidden;box-shadow:0 2px 12px rgba(7,21,74,0.08);">

          <!-- Header -->
          <tr>
            <td style="background:#ffffff;padding:32px 40px;text-align:center;border-bottom:3px solid #d6a800;">
              <h1 style="margin:0;font-family:Georgia,serif;font-size:26px;font-weight:700;color:#07154a;letter-spacing:2px;">MAPLE LEAF WINDOW FILM</h1>
              <p style="margin:6px 0 0;font-size:12px;letter-spacing:3px;text-transform:uppercase;color:#d6a800;font-weight:600;">Professional window film solutions for homes and businesses.</p>
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="background:#ffffff;padding:40px;">
              <p style="margin:0 0 20px;font-size:12px;letter-spacing:2px;text-transform:uppercase;color:#d6a800;font-weight:700;">New Project Inquiry</p>
              <h2 style="margin:0 0 28px;font-family:Georgia,serif;font-size:24px;color:#07154a;font-weight:700;line-height:1.3;">You have a new message from your website.</h2>

              <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:24px;">
                <tr><td style="height:1px;background:#e8e5dd;"></td></tr>
              </table>

              <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:16px;">
                <tr>
                  <td style="background:#f7f6f2;border-radius:8px;padding:16px 20px;border-left:3px solid #d6a800;">
                    <p style="margin:0 0 4px;font-size:11px;letter-spacing:2px;text-transform:uppercase;color:#8a8578;">Full Name</p>
                    <p style="margin:0;font-size:16px;color:#07154a;font-weight:600;">${safeName}</p>
                  </td>
                </tr>
              </table>

              <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:16px;">
                <tr>
                  <td style="background:#f7f6f2;border-radius:8px;padding:16px 20px;border-left:3px solid #d6a800;">
                    <p style="margin:0 0 4px;font-size:11px;letter-spacing:2px;text-transform:uppercase;color:#8a8578;">Email Address</p>
                    <p style="margin:0;font-size:16px;"><a href="mailto:${safeEmail}" style="color:#07154a;text-decoration:none;font-weight:600;">${safeEmail}</a></p>
                  </td>
                </tr>
              </table>

              <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:28px;">
                <tr>
                  <td style="background:#f7f6f2;border-radius:8px;padding:16px 20px;border-left:3px solid #d6a800;">
                    <p style="margin:0 0 10px;font-size:11px;letter-spacing:2px;text-transform:uppercase;color:#8a8578;">Message</p>
                    <p style="margin:0;font-size:15px;color:#3a3d4a;line-height:1.8;">${safeMessage}</p>
                  </td>
                </tr>
              </table>

              <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:28px;">
                <tr><td style="height:1px;background:#e8e5dd;"></td></tr>
              </table>

              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td align="center">
                    <a href="mailto:${safeEmail}" style="display:inline-block;background:#07154a;color:#ffffff;text-decoration:none;font-size:13px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;padding:14px 34px;border-radius:6px;">Reply to ${safeName}</a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background:#f7f6f2;padding:22px 40px;text-align:center;border-top:1px solid #e8e5dd;">
              <p style="margin:0;font-size:12px;color:#6b6f80;">© ${new Date().getFullYear()} MAPLE LEAF WINDOW FILM &nbsp;·&nbsp; Serving Toronto & Surrounding Areas</p>
              <p style="margin:6px 0 0;font-size:11px;color:#9a9d9e;">This email was sent from your website contact form.</p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
      `,
    });

    res.json({ success: true });
  } catch (err) {
    console.error("Mail error:", err);
    res.status(500).json({ error: "Failed to send email." });
  }
};
