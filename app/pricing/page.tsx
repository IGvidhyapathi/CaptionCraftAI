"use client";
import { Button } from "@/components/ui/button";
import { CheckIcon, Star, X, Zap } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { useUser } from "@clerk/nextjs";
import { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CanvasRevealEffect } from "@/components/ui/canvas-reveal-effect";
import { toast } from "@/components/hooks/use-toast";
import Link from "next/link";
import { BorderBeam } from "@/components/magicui/border-beam";



const pricingPlans = [
  {
    name: "Basic",
    price: "99",
    priceId: "price_1Q9Nn8KwC82kR8GZfE62TaFO",
    features: [
      { name: "20 AI-generated posts per month", available: true },
      { name: "Twitter, Instagram, and LinkedIn content", available: true },
      { name: "Basic analytics", available: true },
      { name: "Priority support", available: false },
      { name: "Advanced analytics", available: false },
    ],
  },
  {
    name: "Pro",
    price: "399",
    priceId: "price_1Q9OBZKwC82kR8GZvI6ofAcS",
    features: [
      { name: "60 AI-generated posts per month", available: true },
      { name: "Twitter, Instagram, and LinkedIn content", available: true },
      { name: "Advanced analytics", available: true },
      { name: "Priority support", available: true },
      { name: "Custom AI model training", available: false },
      { name: "Dedicated account manager", available: false },
    ],
  },
  {
    name: "Enterprise",
    price: "3999",
    priceId: "price_1Q9liVKwC82kR8GZl6tkDoOM",
    features: [
      { name: "Unlimited AI-generated posts", available: true },
      { name: "All social media platforms", available: true },
      { name: "Custom AI model training", available: true },
      { name: "Enhanced Captions", available: true },
      { name: "Complete Support ", available: true },
      { name: "Dedicated account manager", available: true },
    ],
  },
];

export default function PricingPage() {
  const { isSignedIn, user } = useUser();
  const [isLoading, setIsLoading] = useState(false);

  const handleSubscribe = async (priceId: string | null) => {
    if (!isSignedIn) {
      toast({
        variant:"destructive",
        title: "Uh oh! Something went wrong.",
        description: " Please Log in to Subscribe",
      })
      return;
    }

    setIsLoading(true);
    try {
      const response = await fetch("/api/create-checkout-session", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          priceId,
          userId: user?.id,
        }),
      });
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to create checkout session");
      }

      const { sessionId } = await response.json();
      const stripe = await loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);
      if (!stripe) {
        throw new Error("Failed to load Stripe");
      }
      await stripe.redirectToCheckout({ sessionId });
    } catch (error) {
      console.error("Error creating checkout session:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    
    <div className="min-h-screen text-gray-100 bg-slate-950">
      
      <Navbar />
      <main className="container px-8 py-20 mx-auto">
        <h1 className="mb-12 text-5xl font-bold text-center text-white">
          Pricing Plans
        </h1>
        <div className="grid max-w-6xl grid-cols-1 gap-8 mx-auto md:grid-cols-3">
          {pricingPlans.map((plan, index) => {
            const [hovered, setHovered] = useState(false);

            return (
              <div
                key={index}
                className="relative flex flex-col p-8 overflow-hidden border border-gray-800 rounded-lg group"
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
              >
                {/* Text and Features */}
                <BorderBeam/>
                <div className="relative z-20">
                  
                  <h2 className="mb-4 text-2xl font-bold text-white">
                    {plan.name}
                  </h2>
                  <p className="mb-6 text-4xl font-bold text-white">
                    ₹{plan.price}
                    <span className="text-lg font-normal text-gray-400">
                      {plan.name === "Enterprise" ? "/year" : "/month"}
                    </span>
                  </p>
                  <ul className="flex-grow mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-center mb-3 text-gray-300"
                      >
                        {!feature.available ? (
                          <X className="w-5 h-5 mr-2 text-red-500" />
                        ) : (
                          <CheckIcon className="w-5 h-5 mr-2 text-green-500" />
                        )}
                        {feature.name}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Hover Background Effect */}
                <AnimatePresence>
                  {hovered && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="absolute inset-0 z-10 w-full h-full"
                    >
                      <CanvasRevealEffect
                        animationSpeed={5}
                        containerClassName="bg-transparent"
                        colors={[
                          [59, 130, 246],
                          [139, 92, 246],
                        ]}
                        opacities={[0.2, 0.2, 0.2, 0.2, 0.2, 0.4, 0.4, 0.4, 0.4, 1]}
                        dotSize={2}
                      />
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Button */}
                <Button
                  onClick={() => plan.priceId && handleSubscribe(plan.priceId)}
                  disabled={isLoading || !plan.priceId}
                  className="relative z-30 w-full text-black bg-white hover:bg-gray-200"
                >
                  {isLoading ? "Processing..." : "Choose Plan"}
                </Button>
              </div>
            );
          })}
        </div>
        <div className="flex justify-end">
  <Link href="/support">
    <div className="px-6 py-2 text-base font-bold text-white transition duration-300 rounded-md hover:underline ">
      Need Help? Contact Support
    </div>
  </Link>
</div>
 
      </main>
      </div>
  );
}



