import { MailtrapClient } from "mailtrap";

// Constants
const TOKEN = process.env.MAILTRAP_TOKEN || "a0537b2c6e5062ca1a132910b45e81e6";
const SENDER_EMAIL = "hello@demomailtrap.com";
const RECIPIENT_EMAIL = "sangeerthanjr@gmail.com";

// Ensure necessary data is available
if (!TOKEN) {
  throw new Error("MAILTRAP_TOKEN environment variable is not set");
}

if (!SENDER_EMAIL) {
  throw new Error("Sender email is missing");
}

if (!RECIPIENT_EMAIL) {
  throw new Error("Recipient email is missing");
}

// Initialize Mailtrap client
const client = new MailtrapClient({ token: TOKEN });
const sender = { name: "Mailtrap Test", email: SENDER_EMAIL };

// Email content with HTML styling
const subject = "Payment Server Issue Notification";
const messageHTML = `
  <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
    <p>Dear [Customer],</p>

    <p>We wanted to inform you that our payment server is currently down. If you attempted any payments recently, rest assured that the refund will be processed soon..</p>

    <p>If you have any further questions or concerns, feel free to reach out to us at.</p>

    <p>c.vidhyapathi1555@gmail.com</p>

    <p>Thank you for your understanding and patience.</p>

    <p>Thank you for your understanding and continued support. We will keep you updated on the status of our payment system and appreciate your patience as we work through this issue.</p>

    <p>Best regards,<br>Captioncraft AI</p>
  </div>
`;

// Send email
client
  .send({
    from: sender,
    to: [{ email: RECIPIENT_EMAIL }],
    subject: subject,
    html: messageHTML, // Use HTML format
  })
  .then((response) => console.log("Email sent successfully:", response))
  .catch((error) => console.error("Failed to send email:", error.message));
