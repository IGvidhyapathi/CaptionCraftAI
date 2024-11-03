import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function GettingStarted() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#030307] py-16 px-4">
      <Navbar />
      <main className="container px-8 py-20 mx-auto">
        <h1 className="mb-12 text-3xl font-bold text-center text-white">
          Getting Started with Captioncraft AI
        </h1>
        <section className="max-w-4xl mx-auto space-y-12">
          <div>
            <h2 className="mb-4 text-3xl font-semibold text-white">
              Step 1: Create an Account
            </h2>
            <p className="text-gray-400">
              To get started, you’ll need to sign up for an account on our platform. Visit the{" "}
              <span className="text-blue-400"><strong>sign-up page</strong></span> and provide the required information such as your email, username, and a secure password.
              Once you've submitted your details, check your inbox for a confirmation email to verify your account. Follow these sub-steps:
            </p>
            <ul className="ml-5 text-gray-400 list-disc">
              <li>Fill in all required fields, ensuring that your email is valid and accessible.</li>
              <li>Create a strong password, ideally using a combination of letters, numbers, and special characters.</li>
              <li>After submission, look for a verification email in your inbox (or spam folder) and click the verification link.</li>
              <li>Log in to the platform using your new credentials.</li>
            </ul>
            <img src="/account.png" alt="Creating an Account" className="mt-4 rounded shadow" />
          </div>

          <div>
            <h2 className="mb-4 text-3xl font-semibold text-white">
              Step 2: Configure Your AI
            </h2>
            <p className="text-gray-400">
              After verifying your account, log in and navigate to your <span className="text-blue-400"><strong>dashboard</strong></span>.
              In the dashboard, click on "Threads Section." You'll be prompted to give your Description and choose the appropriate settings, such as content type. This step is <strong>crucial</strong> for tailoring your content to your specific needs. Here’s how to proceed:
            </p>
            <ul className="ml-5 text-gray-400 list-disc">
              <li>Choose a descriptive title for your thread that reflects the content you plan to create.</li>
              <li>Select the type of content you want to generate (e.g., social media posts, blog articles, etc.).</li>
              <li>Provide specific details about your desired output, including tone, style, and any relevant keywords.</li>
              <li>Review the settings to ensure everything is configured correctly before saving.</li>
            </ul>
            <img src="/dashboard.png" alt="Setting Up Project" className="mt-4 rounded shadow" />
          </div>

          <div>
            <h2 className="mb-4 text-3xl font-semibold text-white">
              Step 3: Generate Your First AI Content Using Gemini AI
            </h2>
            <p className="text-gray-400">
              Now that your project is set up, you’re ready to start creating content. Head over to the "Content Creation" section in your dashboard.
              Use the available AI tools to generate content for platforms like Twitter, Instagram, or LinkedIn. Here are the steps to follow:
            </p>
            <ul className="ml-5 text-gray-400 list-disc">
              <li>Select the platform for which you want to create content.</li>
              <li>Input prompts that clearly define what you want the AI to generate. Be specific to get the best results.</li>
              <li>Choose themes and styles that align with your brand's voice (e.g., formal, casual, humorous).</li>
              <li>Review the generated content, making adjustments as necessary to fit your needs.</li>
              <li>Save or publish the content directly to your chosen platform.</li>
            </ul>
            <img src="/gemini1.5.png" alt="Generating Content" className="mt-4 rounded shadow" />
          </div>

          <div>
            <h2 className="mb-4 text-3xl font-semibold text-white">
              Step 4: Explore Advanced Features
            </h2>
            <p className="text-gray-400">
              Once you're comfortable with the basics, take time to explore advanced features. These include scheduling posts directly from your dashboard,
              analyzing post engagement metrics, and integrating our API into your existing workflows for automation. Follow these steps:
            </p>
            <ul className="ml-5 text-gray-400 list-disc">
              <li>Visit the scheduling feature in your dashboard to plan future posts.</li>
              <li>Access analytics to track engagement metrics such as likes, shares, and comments on your posts.</li>
              <li>Explore the API integration options to automate tasks and connect with other tools you use.</li>
              <li>Read through the detailed documentation available in the <span className="text-blue-400"><strong>API Reference</strong></span> section to maximize your use of these features.</li>
            </ul>
            <div className="flex justify-start">
              <Link href="/docs/api-reference">
              <Button className="px-4 py-2 m-4 text-white transition duration-300 bg-blue-600 rounded hover:bg-blue-500">API Reference</Button>
           </Link>
            </div>
          </div>
        </section>

        {/* Move Next Page button to the right */}
        <div className="flex justify-between mt-10">
          {/* Next Page button */}
          <Link href="/docs">
            <Button className="px-4 py-2 text-white transition duration-300 bg-blue-600 rounded hover:bg-blue-500">Go to Docs</Button>
          </Link>
          {/* Docs page button aligned to steps */}
          <div className="flex justify-end w-full">
            <Link href="/docs/twitter-threads">
              <Button className="px-4 py-2 text-white transition duration-300 bg-green-600 rounded hover:bg-green-500">Next Page</Button>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}