"use client";
import Link from "next/link";
import {
  SignInButton,
  SignUpButton,
  UserButton,
  SignedOut,
  SignedIn,
  useAuth,
} from "@clerk/nextjs";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { throttle } from "lodash";
import AnimatedShinyText from "@/components/ui/animated-shiny-text";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const { userId } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = throttle(() => {
      setIsScrolled(window.scrollY > 10);
    }, 100);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Support", href: "/support" },
    { name: "Resources", href: "/resources" },
    { name: "Pricing", href: "/pricing" },
    { name: "Docs", href: "/docs" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-black/70 backdrop-blur-xl border-b border-white/[0.08] shadow-lg"
          : "bg-transparent"
      }`}
    >
      <nav className="container px-4 mx-auto">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2 group">
              <img
                src="/icons/logo.svg"
                className="w-8 h-8 transition-transform duration-300 group-hover:scale-110"
                aria-hidden="true"
              />
              <span className="text-xl font-bold bg-gradient-to-r from-white via-white to-white/70 bg-clip-text text-transparent sm:text-2xl">
                CaptionCraft AI
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-1">
            <div className="flex items-center space-x-1">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="relative px-3 py-2 text-sm text-white/80 transition-colors hover:text-white rounded-lg hover:bg-white/[0.08] active:bg-white/[0.12]"
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {userId && (
              <AnimatedShinyText>
                <Link
                  href="/generate"
                  className="px-3 py-2 text-sm text-white/90 transition-colors hover:text-white rounded-lg hover:bg-white/[0.08] active:bg-white/[0.12] ml-1"
                >
                  ✨Dashboard
                </Link>
              </AnimatedShinyText>
            )}

            <div className="flex items-center space-x-2 ml-4">
              <SignedOut>
                <SignInButton mode="modal">
                  <Button
                    variant="ghost"
                    className="text-white/80 hover:text-white transition-colors px-4 py-2 text-sm rounded-lg hover:bg-white/[0.08] active:bg-white/[0.12]"
                  >
                    Sign In
                  </Button>
                </SignInButton>
                <SignUpButton mode="modal">
                  <Button className="bg-blue-600/90 hover:bg-blue-600 text-white transition-colors px-4 py-2 text-sm rounded-lg">
                    Sign Up
                  </Button>
                </SignUpButton>
              </SignedOut>
              <SignedIn>
                <UserButton
                  appearance={{
                    elements: {
                      avatarBox: "w-8 h-8",
                    },
                  }}
                  afterSignOutUrl="/"
                />
              </SignedIn>
            </div>
          </div>

          {/* Mobile menu button */}
          <button
            className="inline-flex items-center justify-center p-2 text-white/70 rounded-lg md:hidden hover:text-white hover:bg-white/[0.08] active:bg-white/[0.12] focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span className="sr-only">Open main menu</span>
            {isMenuOpen ? (
              <X className="w-6 h-6" aria-hidden="true" />
            ) : (
              <Menu className="w-6 h-6" aria-hidden="true" />
            )}
          </button>
        </div>

        {/* Mobile menu - Updated */}
        <div
          className={`fixed left-0 right-0 min-h-screen md:hidden bg-black/95 backdrop-blur-md transition-all duration-300 ease-in-out ${
            isMenuOpen 
              ? "opacity-100 top-[64px]" 
              : "opacity-0 top-[-100%] pointer-events-none"
          }`}
        >
          <div className="container px-4 mx-auto py-4">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="px-4 py-3 text-base text-white/80 hover:text-white transition-colors rounded-lg hover:bg-white/[0.08] active:bg-white/[0.12]"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              {userId && (
                <Link
                  href="/generate"
                  className="px-4 py-3 text-base text-white/80 hover:text-white transition-colors rounded-lg hover:bg-white/[0.08] active:bg-white/[0.12]"
                  onClick={() => setIsMenuOpen(false)}
                >
                  ✨Dashboard
                </Link>
              )}
              <div className="pt-4 space-y-3">
                <SignedOut>
                  <SignInButton mode="modal">
                    <Button
                      variant="ghost"
                      className="w-full text-white/80 hover:text-white transition-colors hover:bg-white/[0.08] active:bg-white/[0.12] h-12"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Sign In
                    </Button>
                  </SignInButton>
                  <SignUpButton mode="modal">
                    <Button 
                      className="w-full bg-blue-600/90 hover:bg-blue-600 text-white transition-colors h-12"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Sign Up
                    </Button>
                  </SignUpButton>
                </SignedOut>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
