"use client";

import { Button } from "@/components/ui/button";
import { CheckIcon } from "@radix-ui/react-icons";
import { QuestionMarkCircledIcon } from "@radix-ui/react-icons";
import { Navbar } from "@/components/Navbar";
import { useUser } from "@clerk/nextjs";
import { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Switch } from "@/components/ui/switch";
import { toast } from "@/components/hooks/use-toast";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface Feature {
  name: string;
  available: boolean;
  tooltip?: string;
}

interface PricingPlan {
  name: string;
  description: string;
  monthlyPrice: number;
  yearlyPrice: number;
  monthlyPriceId: string | null;
  yearlyPriceId: string | null;
  features: Feature[];
  isPopular?: boolean;
}

const pricingPlans: PricingPlan[] = [
  {
    name: "Free",
    description: "Jump in and create something",
    monthlyPrice: 0,
    yearlyPrice: 0,
    monthlyPriceId: null,
    yearlyPriceId: null,
    features: [
      { name: "5 AI-generated posts per month", available: true },
      { name: "Basic social media platforms", available: true },
      { name: "720p caption quality", available: true },
      { name: "Basic analytics dashboard", available: true, tooltip: "View basic engagement metrics" },
      { name: "Community support", available: true },
    ],
  },
  {
    name: "Pro",
    description: "The full studio experience",
    monthlyPrice: 399,
    yearlyPrice: 3588, // 299 per month when paid yearly
    monthlyPriceId: "price_1Q9OBZKwC82kR8GZvI6ofAcS",
    yearlyPriceId: "price_1QQVtEKwC82kR8GZSC6DJYM6",
    isPopular: true,
    features: [
      { name: "Unlimited AI-generated posts", available: true },
      { name: "All social media platforms", available: true },
      { name: "4K caption quality", available: true },
      { name: "Advanced analytics suite", available: true, tooltip: "Detailed metrics, trends, and insights" },
      { name: "Priority email & chat support", available: true },
      { name: "Custom brand voice training", available: true },
      { name: "Bulk caption generation", available: true },
      { name: "API access", available: true },
    ],
  },
  {
    name: "Business",
    description: "Fit for business, dressed in a tux",
    monthlyPrice: 999,
    yearlyPrice: 9588, // 799 per month when paid yearly
    monthlyPriceId: "price_1Q9liVKwC82kR8GZl6tkDoOM",
    yearlyPriceId: "price_1QQVvaKwC82kR8GZ1XMjrOiw",
    features: [
      { name: "Everything in Pro, plus:", available: true },
      { name: "Dedicated account manager", available: true },
      { name: "Custom AI model deployment", available: true },
      { name: "Advanced team collaboration", available: true },
      { name: "Enterprise SSO", available: true },
      { name: "Custom contracts", available: true },
      { name: "SLA guarantees", available: true },
      { name: "White-label options", available: true },
    ],
  },
];

const PricingCard = ({
  plan,
  isYearly,
  onSubscribe,
  isLoading,
}: {
  plan: PricingPlan;
  isYearly: boolean;
  onSubscribe: (priceId: string | null) => void;
  isLoading: boolean;
}) => {
  const price = isYearly ? plan.yearlyPrice : plan.monthlyPrice;
  const priceId = isYearly ? plan.yearlyPriceId : plan.monthlyPriceId;
  
  return (
    <div
      className={cn(
        "relative flex flex-col p-8 overflow-hidden rounded-xl",
        plan.isPopular
          ? "border-2 border-purple-500 bg-slate-900"
          : "border border-gray-800 bg-slate-950"
      )}
    >
      {plan.isPopular && (
        <div className="absolute top-0 right-0 px-3 py-1 text-xs font-medium text-white transform translate-y-0 bg-purple-500 rounded-bl-lg">
          Most Popular
        </div>
      )}
      
      <div className="mb-6">
        <h3 className="text-xl font-medium text-white">{plan.name}</h3>
        <p className="mt-2 text-sm text-gray-400">{plan.description}</p>
      </div>
      
      <div className="mb-6">
        <div className="flex items-baseline">
          <span className="text-4xl font-bold text-white">₹{price}</span>
          <span className="ml-2 text-sm text-gray-400">
            /{isYearly ? "year" : "month"}
          </span>
        </div>
        {isYearly && (
          <p className="mt-1 text-sm text-purple-400">
            ₹{Math.round(price / 12)}/month when paid yearly
          </p>
        )}
      </div>
      
      <ul className="flex-1 mb-6 space-y-4">
        {plan.features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <CheckIcon className="w-5 h-5 mr-3 text-green-500 shrink-0" />
            <span className="text-sm text-gray-300">{feature.name}</span>
            {feature.tooltip && (
              <Tooltip>
                <TooltipTrigger>
                  <QuestionMarkCircledIcon className="w-4 h-4 ml-2 text-gray-500" />
                </TooltipTrigger>
                <TooltipContent>{feature.tooltip}</TooltipContent>
              </Tooltip>
            )}
          </li>
        ))}
      </ul>
      
      <Button
        onClick={() => onSubscribe(priceId)}
        disabled={isLoading || !priceId}
        className={cn(
          "w-full py-6",
          plan.isPopular
            ? "bg-purple-500 text-white hover:bg-purple-600"
            : "bg-white text-black hover:bg-gray-100"
        )}
      >
        {isLoading ? "Processing..." : plan.name === "Free" ? "Get Started" : "Subscribe Now"}
      </Button>
    </div>
  );
};

const BillingToggle = ({
  isYearly,
  onChange,
}: {
  isYearly: boolean;
  onChange: (checked: boolean) => void;
}) => {
  return (
    <div className="flex items-center justify-center gap-3 mb-8">
      <span className={cn(
        "text-sm",
        !isYearly ? "text-white font-medium" : "text-gray-400"
      )}>
        Monthly
      </span>
      <Switch
        checked={isYearly}
        onCheckedChange={onChange}
        className="data-[state=checked]:bg-purple-500"
      />
      <span className={cn(
        "text-sm",
        isYearly ? "text-white font-medium" : "text-gray-400"
      )}>
        Yearly
        <span className="ml-1.5 text-xs text-purple-400">(Save up to 25%)</span>
      </span>
    </div>
  );
};





export default function PricingPage() {
  const { isSignedIn, user } = useUser();
  const [isLoading, setIsLoading] = useState(false);
  const [isYearly, setIsYearly] = useState(false);

  const handleSubscribe = async (priceId: string | null) => {
    if (!isSignedIn) {
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: "Please Log in to Subscribe",
      });
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
      if (!stripe) throw new Error("Failed to load Stripe");

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
      <TooltipProvider>
        <main className="container px-8 py-20 mx-auto">
          <div className="max-w-3xl mx-auto mb-12 text-center">
            <h1 className="mb-4 text-5xl font-bold text-white">There's a plan for every story.</h1>
            <p className="text-xl text-gray-400">Easily start creating unlimited AI-powered captions in high-quality</p>
          </div>
          
          <BillingToggle isYearly={isYearly} onChange={setIsYearly} />
          
          <div className="grid max-w-6xl grid-cols-1 gap-8 mx-auto md:grid-cols-3">
            {pricingPlans.map((plan) => (
              <PricingCard
                key={plan.name}
                plan={plan}
                isYearly={isYearly}
                onSubscribe={handleSubscribe}
                isLoading={isLoading}
              />
            ))}
          </div>
          <div className="flex justify-end mt-8">
            <Link href="/support">
              <div className="px-6 py-2 text-base font-bold text-white transition duration-300 rounded-md hover:underline">
                Need Help? Contact Support
              </div>
            </Link>
          </div>
        </main>
      </TooltipProvider>
    </div>
  );
}
