import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  TwitterIcon,
  InstagramIcon,
  LinkedinIcon,
  CheckCircleIcon,
  SparklesIcon,
  TrendingUpIcon,
  ZapIcon,
  RocketIcon,
  LucideExternalLink,
} from "lucide-react";
import { auth } from "@clerk/nextjs/server";
import { Navbar } from "@/components/Navbar";
import { Cover } from "@/components/ui/cover";
import { RainbowButton } from "@/components/magicui/rainbow-button";

interface AuthResult {
  userId: string | null;
}

export default function Home() {
  const { userId }: AuthResult = auth();

  return (
    <div className="min-h-screen pt-20 overflow-hidden text-gray-200 bg-slate-950">
      <Navbar />

      <main className="container relative px-4 mx-auto sm:px-6 lg:px-8">
        {/* Decorative elements */}
        <div className="absolute top-20 left-10 animate-float">
          <SparklesIcon className="w-8 h-8 text-yellow-300 opacity-50" />
        </div>
        <div className="absolute top-40 right-20 animate-float animation-delay-2000">
          <ZapIcon className="w-10 h-10 text-blue-300 opacity-50" />
        </div>
        <div className="absolute bottom-20 left-1/4 animate-float animation-delay-4000">
          <TrendingUpIcon className="w-12 h-12 text-green-300 opacity-50" />
        </div>

        {/* Hero Section */}
        <div className="relative py-20 mt-5 text-center lg:py-32">
          <RocketIcon className="w-16 h-16 mx-auto mb-6 text-purple-400 animate-bounce" />
          <h1 className="mb-6 text-4xl font-extrabold text-transparent sm:text-5xl lg:text-6xl bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
            <Cover>Effortless, Engaging Captions Powered by AI.</Cover>
          </h1>
          <p className="max-w-2xl mx-auto mb-10 text-lg text-gray-300 sm:text-xl">
            Create engaging, high-quality content with the power of AI. CaptionCraft AI helps you craft personalized and impactful captions.
          </p>
          {userId ? (
            <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
              <RainbowButton>
                <Link
                  href="/generate"
                  className="flex items-center px-4 py-3 text-base text-black transition duration-300 ease-in-out transform sm:px-6 sm:py-3 sm:text-lg"
                >
                  Try now
                  <LucideExternalLink className="w-5 h-5 ml-2" />
                </Link>
              </RainbowButton>
              <RainbowButton>
                <Link
                  href="/features"
                  className="px-4 py-3 text-base text-black transition duration-300 ease-in-out transform sm:px-7 sm:text-lg"
                >
                  Learn More
                </Link>
              </RainbowButton>
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
              <RainbowButton>
                <Link
                  href="/generate"
                  className="flex items-center px-4 py-3 text-base text-black transition duration-300 ease-in-out transform sm:px-6 sm:py-3 sm:text-lg"
                >
                  Try now
                  <LucideExternalLink className="w-5 h-5 ml-2" />
                </Link>
              </RainbowButton>
              <RainbowButton>
                <Link
                  href="/features"
                  className="px-4 py-3 text-base text-black transition duration-300 ease-in-out transform sm:px-7 sm:text-lg"
                >
                  Learn More
                </Link>
              </RainbowButton>
            </div>
          )}
        </div>

        {/* Features Section */}
        <div className="py-20" id="features">
          <h2 className="mb-16 text-3xl font-bold text-center text-white">
            Supercharge Your Social Media Presence
          </h2>
          <div className="grid max-w-5xl grid-cols-1 gap-10 mx-auto md:grid-cols-3">
            {[
              {
                title: "Twitter Threads",
                icon: <TwitterIcon className="w-10 h-10 mb-4 text-blue-400" />,
                description:
                  "Generate compelling Twitter threads that engage your audience and boost your reach.",
              },
              {
                title: "Instagram Captions",
                icon: <InstagramIcon className="w-10 h-10 mb-4 text-pink-400" />,
                description:
                  "Create catchy captions for your Instagram posts that increase engagement and followers.",
              },
              {
                title: "LinkedIn Posts",
                icon: <LinkedinIcon className="w-10 h-10 mb-4 text-blue-600" />,
                description:
                  "Craft professional content for your LinkedIn network to establish thought leadership.",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="p-8 transition duration-300 ease-in-out transform shadow-lg rounded-2xl bg-gradient-to-br from-gray-800 to-gray-700 hover:shadow-xl hover:-translate-y-1"
              >
                <div className="flex flex-col items-center text-center">
                  {feature.icon}
                  <h3 className="mb-3 text-2xl font-semibold text-white">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits Section */}
        <div className="relative py-20 my-20 bg-gray-800 rounded-3xl">
          <div className="relative z-10">
            <h2 className="mb-12 text-3xl font-bold text-center text-white">
              Why Choose Our AI Content Generator?
            </h2>
            <div className="grid max-w-4xl grid-cols-1 gap-8 mx-auto md:grid-cols-2">
              {[
                "Save time and effort on content creation",
                "Consistently produce high-quality posts",
                "Increase engagement across all platforms",
                "Stay ahead of social media trends",
                "Customize content to match your brand voice",
                "Scale your social media presence effortlessly",
              ].map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircleIcon className="flex-shrink-0 w-6 h-6 text-green-400" />
                  <span className="text-gray-300">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="relative py-20 text-center">
          <h2 className="mb-8 text-4xl font-bold text-white">
            Ready to revolutionize your social media strategy?
          </h2>
          <Button
            asChild
            className="px-8 py-4 text-lg text-white transition duration-300 ease-in-out transform bg-[#3355cf] rounded-full hover:bg-[#292886] hover:scale-105"
          >
            <Link href="/generate">Get Started Now!</Link>
          </Button>
        </div>
      </main>
    </div>
  );
}
