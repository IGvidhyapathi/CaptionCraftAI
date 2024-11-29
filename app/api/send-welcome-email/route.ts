import { NextResponse } from "next/server";
import { MailtrapClient } from "mailtrap";

const TOKEN = process.env.MAILTRAP_API_TOKEN!;

const client = new MailtrapClient({ token: TOKEN });

export async function POST(req: Request) {
  try {
    const { email, name } = await req.json();

    if (!email || !name) {
      return NextResponse.json(
        { error: "Email and name are required" },
        { status: 400 }
      );
    }

    const sender = { name: "CaptionCraft AI", email: "hello@demomailtrap.com" };
    const recipients = [{ email }]; // Assuming the variable 'email' is defined elsewhere
    
    await client.send({
      from: sender,
      to: recipients,
      subject: "Welcome to CaptionCraft AI!",
      html: `
        <h1>Welcome to CaptionCraft AI, ${name}!</h1>
        <p>We’re thrilled to have you join the CaptionCraft AI community! 🎉</p>
        <p>Here’s what you can do next:</p>
        <ul>
          <li><strong>Generate Captions:</strong> Create personalized captions for your posts in just a few clicks.</li>
          <li><strong>Earn Free Points:</strong> As a new user, you get 50 free points to get started!</li>
          <li><strong>Engage & Share:</strong> Connect with fellow users, explore new features, and boost your social media presence.</li>
        </ul>
        <p>If you have any questions or need help, feel free to reach out to us. We’re here to assist you!</p>
        <p>Looking forward to seeing your creative captions!</p>
        <p>Warm regards,<br/>The CaptionCraft AI Team</p>
      `,
      category: "Welcome Email",
    });
    
    return NextResponse.json({ message: "Welcome email sent successfully" });
  } catch (error) {
    console.error("Error sending welcome email:", error);
    return NextResponse.json(
      { error: "Failed to send welcome email" },
      { status: 500 }
    );
  }
}
