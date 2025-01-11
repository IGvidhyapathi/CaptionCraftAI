import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  TwitterIcon, InstagramIcon, LinkedinIcon, CheckCircleIcon,
  SparklesIcon, TrendingUpIcon, ZapIcon, RocketIcon,
  LucideExternalLink
} from "lucide-react";
import { auth } from "@clerk/nextjs/server";
import { Navbar } from "@/components/Navbar";
import { Cover } from "@/components/ui/cover";
import { RainbowButton } from "@/components/magicui/rainbow-button";
import { SignInButton } from "@clerk/nextjs";

interface AuthResult {
  userId: string | null;
}

export default function Home() {
  const { userId }: AuthResult = auth();

  return (
    <div className="min-h-screen pt-20 overflow-hidden text-gray-200 bg-slate-950">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-purple-900/20 via-slate-950 to-slate-950"></div>
      
      <Navbar />
      <main className="container relative px-4 mx-auto sm:px-6 lg:px-8">
        {/* Enhanced decorative elements */}
        <div className="absolute top-20 left-10 animate-float">
          <SparklesIcon className="w-8 h-8 text-yellow-300/80 filter blur-[1px]" />
        </div>
        <div className="absolute top-40 right-20 animate-float animation-delay-2000">
          <ZapIcon className="w-10 h-10 text-blue-300/80 filter blur-[1px]" />
        </div>
        <div className="absolute bottom-20 left-1/4 animate-float animation-delay-4000">
          <TrendingUpIcon className="w-12 h-12 text-green-300/80 filter blur-[1px]" />
        </div>

        {/* Enhanced Hero Section */}
        <div className="relative py-24 mt-5 text-center lg:py-32">
          <div className="absolute inset-0 bg-gradient-to-b from-purple-500/10 via-transparent to-transparent blur-3xl"></div>
          <RocketIcon className="w-20 h-20 mx-auto mb-8 text-purple-400 animate-float" />
          <h1 className="mb-6 text-2xl font-extrabold text-transparent sm:text-6xl lg:text-6xl bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">
            <Cover>Effortless, Engaging Captions Powered by AI.</Cover>
          </h1>
          <p className="max-w-2xl mx-auto mb-12 text-xl leading-relaxed text-gray-300/90 sm:text-2xl">
            Create engaging, high-quality content with the power of AI. CaptionCraft AI helps you craft personalized and impactful captions.
          </p>
          <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-y-0 sm:space-x-6">
            <SignInButton mode="modal">
              <RainbowButton className="scale-105">
                <span className="flex items-center px-8 py-4 text-lg font-medium text-black transition duration-300">
                  Try now
                  <LucideExternalLink className="w-5 h-5 ml-2" />
                </span>
              </RainbowButton>
            </SignInButton>
            
            <Link href="/docs">
              <Button variant="outline" className="px-8 py-4 text-lg border-2 border-purple-500/30 hover:bg-purple-500/10">
                Learn More
              </Button>
            </Link>
          </div>
        </div>

        {/* Enhanced Features Section */}
        <div className="py-24" id="features">
          <h2 className="mb-20 text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
            Supercharge Your Social Media Presence
          </h2>
          <div className="grid max-w-6xl grid-cols-1 gap-8 mx-auto md:grid-cols-3">
            {[
              {
                title: "Twitter Threads",
                icon: <TwitterIcon className="w-12 h-12 mb-6 text-blue-400" />,
                description: "Generate compelling Twitter threads that engage your audience and boost your reach.",
                gradient: "from-blue-600/20 to-blue-800/20"
              },
              {
                title: "Instagram Captions",
                icon: <InstagramIcon className="w-12 h-12 mb-6 text-pink-400" />,
                description: "Create catchy captions for your Instagram posts that increase engagement and followers.",
                gradient: "from-pink-600/20 to-purple-800/20"
              },
              {
                title: "LinkedIn Posts",
                icon: <LinkedinIcon className="w-12 h-12 mb-6 text-blue-600" />,
                description: "Craft professional content for your LinkedIn network to establish thought leadership.",
                gradient: "from-blue-800/20 to-blue-900/20"
              },
            ].map((feature, index) => (
              <div
                key={index}
                className={`p-8 transition duration-500 ease-out transform shadow-lg rounded-2xl bg-gradient-to-br ${feature.gradient} hover:scale-105 hover:shadow-2xl border border-gray-800/50`}
              >
                <div className="flex flex-col items-center text-center">
                  <div className="p-4 mb-2 rounded-full bg-gradient-to-br from-gray-800 to-gray-900">
                    {feature.icon}
                  </div>
                  <h3 className="mb-4 text-2xl font-bold text-white">
                    {feature.title}
                  </h3>
                  <p className="text-lg text-gray-300/90">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Enhanced Benefits Section */}
        <div className="relative py-16 my-20 border bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-3xl border-gray-800/50">
          <div className="relative z-10 px-8">
            <h2 className="mb-16 text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
              Why Choose Our AI Content Generator?
            </h2>
            <div className="grid max-w-5xl grid-cols-1 gap-8 mx-auto sm:grid-cols-2">
              {[
                "Save time and effort on content creation",
                "Consistently produce high-quality posts",
                "Increase engagement across all platforms",
                "Stay ahead of social media trends",
                "Customize content to match your brand voice",
                "Scale your social media presence effortlessly",
              ].map((benefit, index) => (
                <div key={index} className="flex items-center p-6 space-x-4 transition duration-300 rounded-xl hover:bg-white/5">
                  <CheckCircleIcon className="flex-shrink-0 w-8 h-8 text-green-400" />
                  <span className="text-lg font-medium text-gray-200">
                    {benefit}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Enhanced CTA Section */}
        <div className="relative py-24 text-center">
          <div className="absolute inset-0 bg-gradient-to-t from-purple-500/10 via-transparent to-transparent blur-3xl"></div>
          <h2 className="mb-8 text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
            Ready to revolutionize your social media strategy?
          </h2>
          
          <RainbowButton className="scale-110">
            <Link href="/generate" className="block px-8 py-4 text-xl font-medium text-black">
              Get Started Now!
            </Link>
          </RainbowButton>
          <p className="mt-6 text-lg text-gray-400">No Credit Card Required</p>
        </div>
      </main>
    </div>
  );
}