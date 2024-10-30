import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  TwitterIcon,
  InstagramIcon,
  LinkedinIcon,
  ArrowRightIcon,
  CheckCircleIcon,
  SparklesIcon,
  TrendingUpIcon,
  ZapIcon,
  RocketIcon,
} from "lucide-react";
import { auth } from "@clerk/nextjs/server";
import { SignInButton, SignUpButton } from "@clerk/nextjs";
import { Navbar } from "@/components/Navbar";
import { Cover } from "@/components/ui/cover";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import { FollowerPointerCard } from "@/components/ui/following-pointer";

interface AuthResult {
  userId: string | null; // Define the type for userId
}

export default function Home() {
  const { userId }: AuthResult = auth(); // Explicitly type userId

  return (
    <div className="min-h-screen pt-20 overflow-hidden text-gray-200 bg-gradient-to-b from-gray-900 to-black">
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
        <div className="relative py-20 text-center lg:py-32">
          <RocketIcon className="w-16 h-16 mx-auto mb-6 text-purple-400 animate-bounce" />
          <h1 className="mb-6 text-4xl font-extrabold text-transparent sm:text-5xl lg:text-6xl bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
            <Cover>AI-Powered Social Media Content Generator</Cover>
          </h1>
          <p className="max-w-2xl mx-auto mb-10 text-xl text-gray-300">
            Create engaging content for Twitter, Instagram, and LinkedIn with
            cutting-edge AI technology.
          </p>
          {userId ? (
            <div className="flex justify-center space-x-4">
            
              <Button
                asChild
                className="px-8 py-3 text-lg text-white transition duration-300 ease-in-out transform bg-[#3355cf] rounded-full hover:bg-[#3355cf] hover:scale-105"
              ><HoverBorderGradient>
                <Link href="/generate">Start Creating</Link>
                </HoverBorderGradient>
              </Button>
              <Button
                asChild
                 className="px-8 py-3 text-lg text-[#869cea] transition duration-300 ease-in-out bg-transparent border border-[#869cea] rounded-full hover:bg-[#869cea] hover:text-black"
              >
                <HoverBorderGradient>
                <Link href="#features">Learn More</Link>
                </HoverBorderGradient>
              </Button>
            </div>
          ) : (
            <div className="flex justify-center space-x-4">
              <SignInButton mode="modal">
                <Button
                  asChild
                  className="px-8 py-3 text-lg text-white transition duration-300 ease-in-out transform bg-[#3355cf] rounded-full hover:bg-[#3355cf] hover:scale-105"
                >
                  <Link href="/generate">Start Creating</Link>
                </Button>
              </SignInButton>
              <Button
                asChild
                className="px-8 py-3 text-lg text-[#869cea] transition duration-300 ease-in-out bg-transparent border border-[#869cea] rounded-full hover:bg-[#869cea] hover:text-black"
              >
                <Link href="#features">Learn More</Link>
              </Button>
            </div>
          )}
        </div>

        {/* Features Section */}
        <div className="py-20" id="features">
          <h2 className="mb-16 text-3xl font-bold text-center text-white">
            Supercharge Your Social Media Presence
          </h2>
          <div className="grid max-w-5xl grid-cols-1 gap-10 mx-auto md:grid-cols-3">
            {[{title: "Twitter Threads", icon: <TwitterIcon className="w-10 h-10 mb-4 text-blue-400" />, description: "Generate compelling Twitter threads that engage your audience and boost your reach."}, {title: "Instagram Captions", icon: <InstagramIcon className="w-10 h-10 mb-4 text-pink-400" />, description: "Create catchy captions for your Instagram posts that increase engagement and followers."}, {title: "LinkedIn Posts", icon: <LinkedinIcon className="w-10 h-10 mb-4 text-blue-600" />, description: "Craft professional content for your LinkedIn network to establish thought leadership."}].map((feature, index) => (
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
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden rounded-3xl">
            <svg
              className="absolute w-full h-full"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
            >
              <path d="M0,0 L100,0 L100,100 L0,100 Z" fill="url(#grid-pattern)" />
            </svg>
            <defs>
              <pattern
                id="grid-pattern"
                width="10"
                height="10"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M 10 0 L 0 0 0 10"
                  fill="none"
                  stroke="rgba(255,255,255,0.05)"
                  strokeWidth="0.5"
                />
              </pattern>
            </defs>
          </div>
          <div className="relative z-10">
            <h2 className="mb-12 text-3xl font-bold text-center text-white">
              Why Choose Our AI Content Generator?
            </h2>
            <div className="grid max-w-4xl grid-cols-1 gap-8 mx-auto md:grid-cols-2">
              {["Save time and effort on content creation", "Consistently produce high-quality posts", "Increase engagement across all platforms", "Stay ahead of social media trends", "Customize content to match your brand voice", "Scale your social media presence effortlessly"].map((benefit, index) => (
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
          <div className="absolute top-10 right-10 animate-spin-slow">
            <svg
              className="w-20 h-20 text-blue-300 opacity-20"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12 6V12L16 14"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <h2 className="mb-8 text-4xl font-bold text-white">
            Ready to revolutionize your social media strategy?
          </h2>
          <Button
            asChild
            className="px-8 py-4 text-lg text-white transition duration-300 ease-in-out transform bg-[#3355cf] rounded-full hover:bg-[#292886] hover:scale-105"
          >
            <Link href="#features">Get Started Now!</Link>
          </Button>
        </div>
      </main>
    </div>
  );
}
