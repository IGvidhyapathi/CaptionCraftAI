import React from "react";
import { Heart, MessageCircle, Send, Bookmark } from "lucide-react";
import { useUser } from "@clerk/nextjs";
import { Button } from "../ui/button";
import Link from "next/link";
import { useToast } from "@/components/hooks/use-toast";

interface InstagramMockProps {
  content: string;
  image?: string; // Optional image prop
}

export const InstagramMock: React.FC<InstagramMockProps> = ({ content, image }) => {
  const { toast } = useToast();
  const { user } = useUser();

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    toast({
      title: "Caption Copied!",
      description: "Your caption has been copied to the clipboard.",
    });
  };

  return (
    <div className="max-w-md p-4 mx-auto text-black bg-white rounded-lg shadow-md">
      {/* Header */}
      <div className="flex items-center mb-3">
        <img
          src={user?.imageUrl || "/default-avatar.png"}
          alt="Profile"
          className="w-8 h-8 mr-3 bg-gray-300 rounded-full"
        />
        <p className="font-bold text-gray-800">
          {user?.username || user?.firstName || "Guest"}
        </p>
      </div>

      {/* Image Section */}
      <div className="mb-3">
        {image ? (
          <img
            src={image}
            alt="Post"
            className="object-cover w-full h-64 rounded-lg"
          />
        ) : (
          <div className="flex items-center justify-center w-full h-64 bg-gray-200 rounded-lg">
            <span className="text-gray-500">Image Placeholder</span>
          </div>
        )}
       

      </div>

      {/* Action Icons */}
      <div className="flex justify-between mb-3">
        <div className="flex space-x-4">
          <Heart color="red" fill="red" size={24} />
          <MessageCircle size={24} />
          <Send size={24} />
        </div>
        <Bookmark size={24} />
      </div>

      {/* Content */}
      <p className="text-sm text-gray-800">{content}</p>

      {/* Copy and Post Button */}
      <div className="pt-3">
        <Button
          className="w-full px-4 py-2 text-white bg-black rounded-lg"
          onClick={() => copyToClipboard(content)}
        >
          Copy Caption & Post on Instagram
        </Button>
        <Link
          href="https://www.instagram.com"
          target="_blank"
          className="block mt-2 text-sm text-center text-blue-600 underline"
        >
          Go to Instagram
        </Link>
      </div>
    </div>
  );
};
