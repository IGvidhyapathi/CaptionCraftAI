import React, { useEffect, useState } from "react";
import { HistoryItem } from "../types";
import { TwitterMock } from "@/components/social-mocks/TwitterMock";
import { InstagramMock } from "@/components/social-mocks/InstagramMock";
import { LinkedInMock } from "@/components/social-mocks/LinkedInMock";
import { PinterestMock } from "@/components/social-mocks/PinterestMock";
import { YoutubeMock } from "@/components/social-mocks/YoutubeMock";
import { InstagramStoryMock } from "./InstagramStoryMock";
import { motion, AnimatePresence } from "framer-motion";
import dynamic from "next/dynamic";
import { Sparkles } from "lucide-react";

const ReactConfetti = dynamic(() => import("react-confetti"), {
  ssr: false
});

interface GeneratedContentProps {
  selectedHistoryItem: HistoryItem | null;
  generatedContent: string[];
  contentType: string;
}

const variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 }
};

export function GeneratedContent({
  selectedHistoryItem,
  generatedContent,
  contentType,
}: GeneratedContentProps) {
  const [showConfetti, setShowConfetti] = useState(false);

  useEffect(() => {
    if (generatedContent.length > 0 && !selectedHistoryItem) {
      setShowConfetti(true);
      const timer = setTimeout(() => setShowConfetti(false), 5000);
      return () => clearTimeout(timer);
    }
  }, [generatedContent, selectedHistoryItem]);
  const renderContentMock = () => {
    if (generatedContent.length === 0) return null;

    switch (contentType) {
      case "twitter":
        return <TwitterMock content={generatedContent} />;
      case "instagram":
        return <InstagramMock content={generatedContent[0]} />;
      case "instagram_story":
        return <InstagramStoryMock content={generatedContent[0]} />;
      case "linkedin":
        return <LinkedInMock content={generatedContent[0]} />;
      case "pinterest":
        return <PinterestMock content={generatedContent[0]} />;
      case "youtube":
        return <YoutubeMock content={generatedContent[0]} />;
      default:
        return null;
    }
  };

  if (!selectedHistoryItem && generatedContent.length === 0) return null;

  return (
    <AnimatePresence mode="wait">
      <motion.div
        variants={variants}
        initial="hidden"
        animate="visible"
        exit="exit"
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="group bg-gray-800/30 backdrop-blur-md rounded-2xl p-4 sm:p-6 border border-gray-700/50 
                  relative overflow-hidden hover:bg-gray-800/40 transition-all duration-300
                  hover:border-gray-600/50 hover:shadow-lg hover:shadow-blue-500/10"
      >
        {/* Background gradient effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-pink-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
        />
        {showConfetti && (
          <ReactConfetti
            width={window.innerWidth}
            height={window.innerHeight}
            recycle={false}
            numberOfPieces={200}
            gravity={0.2}
            colors={["#60A5FA", "#A78BFA", "#34D399", "#F472B6"]}
          />
        )}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="flex items-center gap-2 mb-4 relative z-10 group-hover:scale-105 transition-transform duration-300"
        >
          <Sparkles className="w-5 h-5 text-blue-400" />
          <h2 className="text-lg sm:text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
            {selectedHistoryItem ? "History Item" : "Generated Content"}
          </h2>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="relative z-10 bg-gray-700/30 backdrop-blur-md rounded-xl p-3 sm:p-4 shadow-xl 
                    border border-gray-600/30 hover:border-gray-500/30 transition-all duration-300
                    hover:shadow-lg hover:shadow-purple-500/10 group-hover:bg-gray-700/40"
        >
          {renderContentMock()}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
} 