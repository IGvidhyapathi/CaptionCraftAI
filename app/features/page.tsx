import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/Navbar";

const featuresSections = [
  {
    title: "AI-Powered Caption Generation",
    description:
      "Utilize advanced AI algorithms to generate creative captions that resonate with your audience.",
    link: "/features/ai-powered-caption-generation",
  },
  {
    title: "Platform Integration",
    description:
      "Seamlessly integrate with social media platforms like Twitter, Instagram, and LinkedIn.",
    link: "/features/platform-integration",
  },
  {
    title: "Customizable Templates",
    description:
      "Choose from a variety of templates to personalize your content and match your brand voice.",
    link: "/features/customizable-templates",
  },
  {
    title: "Performance Analytics",
    description:
      "Track the performance of your captions and optimize future posts based on real-time data.",
    link: "/features/performance-analytics",
  },
  {
    title: "User-Friendly Interface",
    description:
      "Experience an intuitive and user-friendly interface that makes caption creation easy and efficient.",
    link: "/features/user-friendly-interface",
  },
];

export default function FeaturesPage() {
  return (
    <div className="min-h-screen text-gray-100 bg-black">
      <Navbar />
      <main className="container px-8 py-20 mx-auto">
        <h1 className="mb-12 text-5xl font-bold text-center text-white">
          Features of CaptionCraft AI
        </h1>
        <div className="grid max-w-4xl grid-cols-1 gap-8 mx-auto md:grid-cols-2">
          {featuresSections.map((section, index) => (
            <div
              key={index}
              className="flex flex-col p-6 border border-gray-800 rounded-lg"
            >
              <h2 className="mb-3 text-2xl font-bold text-white">
                {section.title}
              </h2>
              <p className="flex-grow mb-4 text-gray-400">
                {section.description}
              </p>
              <Button
                asChild
                className="w-full text-black bg-white hover:bg-gray-200"
              >
                <Link href={section.link}>Learn More</Link>
              </Button>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
