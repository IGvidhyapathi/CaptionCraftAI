import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/Navbar";
import { LucideExternalLink, LucideCode, LucideLayout,  LucideDatabase ,Brain} from "lucide-react";

const featuresSections = [
  {
    title: "Next JS",
    description:
      "Next.js enables seamless routing and server-side rendering for building dynamic web applications efficiently.",
    link: "https://nextjs.org/docs",
    icon: <LucideCode className="w-6 h-6 text-white" />,
  },
  {
    title: "Tailwind CSS",
    description:
      "Tailwind CSS provides utility-first styling, allowing rapid and responsive design customization for developers.",
    link: "https://tailwindcss.com/docs/installation",
    icon: <LucideLayout className="w-6 h-6 text-white" />,
  },
  {
    title: "Gemini AI",
    description:
      "Gemini leverages AI for natural language processing, enhancing document analysis and user interactions.",
    link: "https://ai.google.dev/gemini-api/docs",
    icon: <Brain className="w-6 h-6 text-white" />,
  },
  {
    title: "Neon",
    description:
      "Neon offers a scalable, serverless PostgreSQL database solution with real-time data management capabilities.",
    link: "https://neon.tech/docs/introduction",
    icon: <LucideDatabase className="w-6 h-6 text-white" />,
  },
];

export default function FeaturesPage() {
  return (
    <div className="min-h-screen text-gray-100 bg-black">
      <Navbar />
      <main className="container px-8 py-20 mx-auto">
        <h1 className="mb-12 text-2xl font-bold text-center text-white">
          Tech Stacks used in CaptionCraft AI
        </h1>
        <div className="grid max-w-4xl grid-cols-1 gap-8 mx-auto md:grid-cols-2">
          {featuresSections.map((section, index) => (
            <div
              key={index}
              className="flex flex-col p-6 border border-gray-800 rounded-lg"
            >
              <div className="flex items-center mb-3">
                {section.icon}
                <h2 className="ml-2 text-2xl font-bold text-white">
                  {section.title}
                </h2>
              </div>
              <p className="flex-grow mb-4 text-gray-400">
                {section.description}
              </p>
              <Button
                asChild
                className="w-full text-black bg-white hover:bg-gray-200"
              >
                <Link href={section.link} target="_blank">
                  Learn More
                  <LucideExternalLink className="w-5 h-5 ml-2" />
                </Link>
              </Button>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
