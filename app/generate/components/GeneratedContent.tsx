import React from "react";
import { HistoryItem } from "../types";
import { TwitterMock } from "@/components/social-mocks/TwitterMock";
import { InstagramMock } from "@/components/social-mocks/InstagramMock";
import { LinkedInMock } from "@/components/social-mocks/LinkedInMock";
import { PinterestMock } from "@/components/social-mocks/PinterestMock";
import { YoutubeMock } from "@/components/social-mocks/YoutubeMock";
import { InstagramStoryMock } from "./InstagramStoryMock";

interface GeneratedContentProps {
  selectedHistoryItem: HistoryItem | null;
  generatedContent: string[];
  contentType: string;
}

export function GeneratedContent({
  selectedHistoryItem,
  generatedContent,
  contentType,
}: GeneratedContentProps) {
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
    <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50">
      <h2 className="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 mb-4">
        {selectedHistoryItem ? "History Item" : "Generated Content"}
      </h2>
      <div className="bg-gray-700/30 rounded-xl p-4">
        {renderContentMock()}
      </div>
    </div>
  );
} 