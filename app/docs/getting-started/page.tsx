import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ChevronLeft, ChevronRight, User, Settings, Wand2, Rocket } from 'lucide-react';

const steps = [
  {
    title: "Create an Account",
    icon: <User className="w-6 h-6" />,
    description: "Sign up for an account on our platform. Visit the sign-up page and provide the required information such as your email, username, and a secure password.",
    subSteps: [
      "Fill in all required fields, ensuring that your email is valid and accessible.",
      "Create a strong password using a combination of letters, numbers, and special characters.",
      "Look for a verification email and click the verification link.",
      "Log in to the platform using your new credentials."
    ],
    image: "/account.png"
  },
  {
    title: "Configure Your AI",
    icon: <Settings className="w-6 h-6" />,
    description: "After verifying your account, log in and navigate to your dashboard. In the dashboard, click on 'Threads Section.' You'll be prompted to give your Description and choose the appropriate settings.",
    subSteps: [
      "Choose a descriptive title for your thread that reflects the content you plan to create.",
      "Select the type of content you want to generate.",
      "Provide specific details about your desired output, including tone and style.",
      "Review the settings before saving."
    ],
    image: "/dashboard.png"
  },
  {
    title: "Generate Your First AI Content Using Gemini AI",
    icon: <Wand2 className="w-6 h-6" />,
    description: "Now that your project is set up, you're ready to start creating content. Head over to the 'Content Creation' section in your dashboard.",
    subSteps: [
      "Select the platform for which you want to create content.",
      "Input prompts that clearly define what you want the AI to generate.",
      "Choose themes and styles that align with your brand's voice.",
      "Review the generated content and make adjustments as necessary.",
      "Save or publish the content directly to your chosen platform."
    ],
    image: "/gemini1.5.png"
  },
  {
    title: "Explore Advanced Features",
    icon: <Rocket className="w-6 h-6" />,
    description: "Once you're comfortable with the basics, take time to explore advanced features. These include scheduling posts, analyzing engagement metrics, and API integration.",
    subSteps: [
      "Visit the scheduling feature in your dashboard to plan future posts.",
      "Access analytics to track engagement metrics.",
      "Explore the API integration options to automate tasks.",
      "Read through the detailed documentation in the API Reference section."
    ]
  }
];

export default function GettingStarted() {
  return (
    <div className="min-h-screen text-gray-100 bg-slate-950">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-900/20 via-slate-950 to-slate-950"></div>
      <Navbar />
      
      <main className="container relative px-4 py-24 mx-auto sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight text-transparent sm:text-5xl lg:text-6xl bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
            Getting Started
          </h1>
          <p className="text-lg text-gray-400 sm:text-xl">
            Follow these steps to begin your journey with CaptionCraft AI
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-16">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative p-8 transition-all duration-300 border border-gray-800 rounded-lg bg-slate-900/50 backdrop-blur-sm group hover:border-gray-700"
            >
              <div className="absolute inset-0 transition-opacity duration-300 rounded-lg opacity-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 group-hover:opacity-100"></div>
              
              <div className="relative">
                <div className="flex items-center mb-6">
                  <div className="flex items-center justify-center w-12 h-12 text-white rounded-lg bg-gradient-to-r from-blue-500 to-purple-600">
                    {step.icon}
                  </div>
                  <h2 className="ml-4 text-2xl font-bold text-white">
                    Step {index + 1}: {step.title}
                  </h2>
                </div>

                <p className="mb-6 text-gray-400">
                  {step.description}
                </p>

                <ul className="mb-6 space-y-3">
                  {step.subSteps.map((subStep, subIndex) => (
                    <li key={subIndex} className="flex items-start">
                      <div className="flex-shrink-0 w-1.5 h-1.5 mt-2 bg-blue-500 rounded-full"></div>
                      <span className="ml-4 text-gray-400">{subStep}</span>
                    </li>
                  ))}
                </ul>

                {step.image && (
                  <div className="overflow-hidden transition-transform duration-300 rounded-lg group-hover:scale-[1.02]">
                    <img
                      src={step.image}
                      alt={step.title}
                      className="object-cover w-full transition-transform duration-300 rounded-lg shadow-lg group-hover:scale-105"
                    />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-between max-w-4xl px-4 mx-auto mt-16">
          <Link href="/docs">
            <Button
              variant="outline"
              className="flex items-center px-6 py-3 space-x-2 text-white transition-colors border border-gray-700 rounded-lg hover:bg-gray-800"
            >
              <ChevronLeft className="w-4 h-4" />
              <span>Back to Docs</span>
            </Button>
          </Link>
          
          <Link href="/docs/twitter-threads">
            <Button
              className="flex items-center px-6 py-3 space-x-2 text-white transition-colors rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500"
            >
              <span>Twitter Threads</span>
              <ChevronRight className="w-4 h-4" />
            </Button>
          </Link>
        </div>
      </main>
    </div>
  );
}