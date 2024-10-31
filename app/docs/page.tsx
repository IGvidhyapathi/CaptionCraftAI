import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/Navbar";

const docsSections = [
  {
    title: "Getting Started",
    description:
      "Learn how to set up your account and create your first AI-generated content.",
    link: "/docs/getting-started",
  },
  {
    title: "Twitter Threads",
    description:
      "Discover how to create engaging Twitter threads using our AI technology.",
    link: "/docs/twitter-threads",
  },
  {
    title: "Instagram Captions",
    description:
      "Learn the best practices for generating Instagram captions that boost engagement.",
    link: "/docs/instagram-captions",
  },
  {
    title: "LinkedIn Posts",
    description:
      "Explore techniques for crafting professional LinkedIn content with AI assistance.",
    link: "/docs/linkedin-posts",
  },
  {
    title: "Youtube Descriptions",
    description:
      "Create a detailed Descriptions for you amazing youtube videos with AI assisstances",
    link: "/docs/youtube-descriptions",
  },
  {
    title: "API Reference",
    description:
      "Detailed documentation for integrating our AI content generation into your applications.",
    link: "/docs/api-reference",
  },
];

export default function DocsPage() {
  return (
    <div className="min-h-screen text-gray-100 bg-black">
      <Navbar />
      <main className="container px-8 py-20 mx-auto">
        <h1 className="mb-12 text-5xl font-bold text-center text-white">
          Documentation
        </h1>
        <div className="grid max-w-4xl grid-cols-1 gap-8 mx-auto md:grid-cols-2">
          {docsSections.map((section, index) => (
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
                <Link href={section.link}>Read More</Link>
              </Button>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
