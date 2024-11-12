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
import {  Menu, X } from "lucide-react";
import { throttle } from "lodash";
import AnimatedShinyText from "@/components/ui/animated-shiny-text";


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

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-gray-900/80 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <nav className="container px-4 py-4 mx-auto sm:px-8 sm:py-6">
        <div className="flex flex-wrap items-center justify-between max-w-6xl mx-auto">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <img
                src="/icons/logo.svg"
                className="w-8 h-8 text-blue-800"
                aria-hidden="true"
              />
              <span className="text-xl font-bold text-white sm:text-2xl">
                CaptionCraft AI
              </span>
            </Link>
          </div>
          <button
            className="text-white sm:hidden focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 transition-transform duration-200" />
            ) : (
              <Menu className="w-6 h-6 transition-transform duration-200" />
            )}
          </button>
          <div
            className={`w-full sm:w-auto ${
              isMenuOpen ? "block" : "hidden"
            } sm:block mt-4 sm:mt-0`}
          >
            <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-8">
              {["Support", "Resources", "Pricing", "Docs"].map((item) => (
                <Link
                  key={item}
                  href={`/${item.toLowerCase()}`}
                  className="relative py-2 text-gray-300 transition-colors hover:text-white sm:py-0 group"
                  aria-label={`Go to ${item} page`}
                >
                  {item}
                  <span className="absolute left-0 right-0 bottom-0 h-0.5 bg-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
                </Link>
              ))}
              {userId ? (
                <Link
                  href="/generate"
                  className="relative py-2 text-gray-300 transition-colors hover:text-white sm:py-0 group"
                >
                  <AnimatedShinyText>✨Dashboard</AnimatedShinyText>
                  <span className="absolute left-0 right-0 bottom-0 h-0.5 bg-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
                </Link>
              ) : null}
              <SignedOut>
                <SignInButton mode="modal">
                  <button
                    className="mt-2 text-gray-300 transition-colors hover:text-white sm:mt-0"
                    aria-label="Sign In"
                  >
                    Sign In
                  </button>
                </SignInButton>
                <SignUpButton mode="modal">
                  <button
                    className="px-4 py-2 mt-2 text-white transition-colors bg-blue-600 rounded-full hover:bg-blue-700 sm:mt-0"
                    aria-label="Sign Up"
                  >
                    Sign Up
                  </button>
                </SignUpButton>
              </SignedOut>
              <SignedIn>
                <UserButton
                  appearance={{
                    elements: {
                      avatarBox: "w-10 h-10",
                    },
                  }}
                  aria-label="User Menu"
                />
              </SignedIn>
            </div>
          </div>
         
        </div>
      </nav>
    </header>
  );
}
