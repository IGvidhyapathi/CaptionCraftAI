let client: any;

export const initMailtrap = async () => {
  if (typeof window === "undefined") {
    const { MailtrapClient } = await import("mailtrap");
    client = new MailtrapClient({
      token: process.env.MAILTRAP_API_TOKEN!,
    });
  }
};

export const sendWelcomeEmail = async (toEmail: string, name: string) => {
  if (typeof window !== "undefined") {
    console.error("sendWelcomeEmail should only be called on the server side");
    return;
  }

  if (!client) {
    await initMailtrap();
  }

  const sender = { name: "CaptioncraftAI", email: "hello@demomailtrap.com" };

  await client.send({
    from: sender,
    to: [{ email: toEmail }],
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
  });
};
