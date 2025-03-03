import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  TwitterIcon, InstagramIcon, LinkedinIcon, CheckCircleIcon,
  SparklesIcon, TrendingUpIcon, ZapIcon, RocketIcon,
  LucideExternalLink, StarIcon, BrainCircuitIcon, FlameIcon
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
    <div className="min-h-screen overflow-hidden text-gray-200 bg-gradient-to-b from-black via-slate-950 to-purple-950">
      {/* Animated background elements */}
      <div className="fixed inset-0">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
        <div className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm" />
      </div>

      <div className="absolute top-0 right-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-purple-500/30 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-blue-500/20 rounded-full blur-3xl" />
      
      <Navbar />
      
      <main className="container relative mx-auto">
        {/* Hero Section */}
        <div className="relative flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] px-4 sm:px-6 lg:px-8 py-16 md:py-32 -mt-20">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute w-64 md:w-96 h-64 md:h-96 -top-10 -left-10 bg-purple-500/30 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob" />
            <div className="absolute w-64 md:w-96 h-64 md:h-96 -top-10 -right-10 bg-blue-500/30 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000" />
            <div className="absolute w-64 md:w-96 h-64 md:h-96 bottom-10 left-20 bg-pink-500/30 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000" />
          </div>

          <div className="relative space-y-8 text-center max-w-[90rem] mx-auto w-full px-4 sm:px-6">
            <div className="inline-block p-2 mb-2 md:mb-4 text-xs md:text-sm font-medium transition-all bg-gray-900 border border-gray-800 rounded-full hover:scale-105">
              <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
                ✨ Revolutionizing Social Media Content Creation
              </span>
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-7xl font-extrabold tracking-tight">
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">
                <Cover>Transform Your Social</Cover>
              </span>
              <span className="block mt-2 text-white">
                <Cover>Presence with AI</Cover>
              </span>
            </h1>

            <p className="max-w-2xl mx-auto text-lg md:text-xl lg:text-2xl leading-relaxed text-gray-400">
              Create scroll-stopping content that captivates your audience. Let AI craft your perfect social media narrative.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
            <div className="relative z-10 w-[280px] sm:w-[260px]">
  <Link href="/generate" passHref>
    <RainbowButton className="w-full transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] relative z-20">
      
        <span className="inline-flex items-center justify-center whitespace-nowrap px-8 py-4 text-base md:text-lg font-semibold text-black">
          Start Crafting
          <LucideExternalLink className="w-4 h-4 md:w-5 md:h-5 ml-2" strokeWidth={2.5} />
        </span>
      
    </RainbowButton>
  </Link>
</div>
              
<div className="relative z-10 w-[280px] sm:w-[260px]">
  <Link href="/docs" passHref>
    <Button 
      variant="outline" 
      className="pointer-events-auto w-full hover:no-underline transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] whitespace-nowrap px-8 py-4 text-base md:text-lg font-semibold bg-white/5 backdrop-blur-sm border-purple-500/30 hover:bg-purple-500/10 relative z-20"
    >
      View Examples
    </Button>
  </Link>
</div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="w-full px-4 sm:px-6 lg:px-8 py-16 md:py-24 space-y-12 md:space-y-20">
          <div className="text-center max-w-[90rem] mx-auto px-4 sm:px-6">
            <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold tracking-tight">
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
                One Platform, Endless Possibilities
              </span>
            </h2>
            <p className="mt-4 text-base md:text-lg text-gray-400">
              Craft perfect content for every social platform
            </p>
          </div>

          <div className="grid max-w-[90rem] grid-cols-1 gap-6 md:gap-8 mx-auto md:grid-cols-3 px-4 sm:px-6">
            {[
              {
                title: "Twitter Magic",
                icon: <TwitterIcon className="w-8 h-8 md:w-10 md:h-10" />,
                description: "Viral threads & engaging tweets that spark conversations",
                gradient: "from-blue-600 to-blue-800",
                iconBg: "bg-blue-500/10"
              },
              {
                title: "Instagram Perfect",
                icon: <InstagramIcon className="w-8 h-8 md:w-10 md:h-10" />,
                description: "Captivating captions that stop the scroll",
                gradient: "from-pink-600 to-purple-800",
                iconBg: "bg-pink-500/10"
              },
              {
                title: "LinkedIn Pro",
                icon: <LinkedinIcon className="w-8 h-8 md:w-10 md:h-10" />,
                description: "Professional content that builds authority",
                gradient: "from-blue-800 to-blue-900",
                iconBg: "bg-blue-500/10"
              }
            ].map((feature, index) => (
              <div
                key={index}
                className="relative p-6 md:p-8 transition-all duration-300 bg-gray-900/50 backdrop-blur-sm rounded-2xl hover:scale-105 group mx-auto w-full max-w-[350px] md:max-w-none"
              >
                <div className="absolute inset-0 transition-all duration-300 bg-gradient-to-br opacity-0 group-hover:opacity-10 rounded-2xl from-purple-600 to-blue-600" />
                <div className={`p-4 mb-6 rounded-xl ${feature.iconBg} flex justify-center md:justify-start`}>
                  {feature.icon}
                </div>
                <h3 className="mb-4 text-xl md:text-2xl font-bold text-white text-center md:text-left">
                  {feature.title}
                </h3>
                <p className="text-sm md:text-base text-gray-400 text-center md:text-left">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits Section */}
        <div className="w-full px-4 sm:px-6 lg:px-8 py-16 md:py-24 space-y-12 md:space-y-20">
          <div className="text-center max-w-[90rem] mx-auto px-4 sm:px-6">
            <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold tracking-tight">
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
                Why Creators Choose Us
              </span>
            </h2>
          </div>

          <div className="grid max-w-[90rem] grid-cols-1 gap-6 md:gap-8 mx-auto sm:grid-cols-2 px-4 sm:px-6">
            {[
              {
                icon: <FlameIcon className="w-5 h-5 md:w-6 md:h-6 text-orange-400" />,
                title: "10x Faster Creation",
                description: "Generate weeks of content in minutes"
              },
              {
                icon: <BrainCircuitIcon className="w-5 h-5 md:w-6 md:h-6 text-purple-400" />,
                title: "AI-Powered Insights",
                description: "Data-driven content optimization"
              },
              {
                icon: <StarIcon className="w-5 h-5 md:w-6 md:h-6 text-yellow-400" />,
                title: "Brand Voice Match",
                description: "Maintains your unique style"
              },
              {
                icon: <TrendingUpIcon className="w-5 h-5 md:w-6 md:h-6 text-green-400" />,
                title: "Engagement Boost",
                description: "Proven to increase interactions"
              }
            ].map((benefit, index) => (
              <div key={index} className="p-6 transition-all duration-300 bg-gray-900/50 backdrop-blur-sm rounded-xl hover:bg-gray-800/50 mx-auto w-full max-w-[350px] sm:max-w-none">
                <div className="flex items-center gap-4 justify-center sm:justify-start">
                  <div className="p-3 bg-gray-800 rounded-lg">
                    {benefit.icon}
                  </div>
                  <div>
                    <h3 className="text-lg md:text-xl font-semibold text-white">{benefit.title}</h3>
                    <p className="mt-1 text-sm md:text-base text-gray-400">{benefit.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="w-full px-4 sm:px-6 lg:px-8 py-16 md:py-24 mb-10 md:mb-20">
          <div className="absolute inset-0 bg-gradient-to-t from-purple-500/10 via-transparent to-transparent blur-3xl" />
          <div className="relative max-w-[90rem] mx-auto px-6 py-16 text-center bg-gray-900/50 backdrop-blur-sm rounded-3xl border border-gray-800/50">
            <h2 className="max-w-3xl mx-auto mb-8 text-2xl md:text-4xl lg:text-5xl font-bold tracking-tight">
              Ready to transform your
              <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
                social media game?
              </span>
            </h2>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <div className="w-[280px] sm:w-[260px]">
                <Button
                  asChild
                  className="w-full p-0 overflow-hidden"
                >
                  <Link href="/generate">
                    <RainbowButton className="w-full transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]">
                      <span className="inline-flex items-center justify-center whitespace-nowrap px-8 py-4 text-base md:text-lg font-semibold text-black">
                        Start Crafting
                        <LucideExternalLink className="w-4 h-4 md:w-5 md:h-5 ml-2" strokeWidth={2.5} />
                      </span>
                    </RainbowButton>
                  </Link>
                </Button>
              </div>
            </div>
            
            <p className="mt-6 text-sm md:text-base text-gray-400">
              Free to get started • No credit card required
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}