import React from "react";
import { Heart, MessageCircle, Send, Bookmark } from "lucide-react";
import { useUser } from '@clerk/nextjs';

interface InstagramMockProps {
  content: string;
  imageUrl: string | null; // Updated to include imageUrl
}

export const InstagramMock: React.FC<InstagramMockProps> = ({ content, imageUrl }) => {
  const { user } = useUser();

  return (
    <div className="max-w-md p-4 mx-auto text-black bg-white rounded-lg">
      <div className="flex items-center mb-3">
        <img
          src={user?.imageUrl || "/default-avatar.png"}  // Fallback to a default avatar if imageUrl is not available
          alt="Profile"
          className="w-8 h-8 mr-3 bg-gray-300 rounded-full"
        />
        <p className="font-bold">{user?.username || user?.firstName || "Guest"}</p>
      </div>
      <div className="flex items-center justify-center h-64 mb-3 bg-gray-200">
        {imageUrl ? (
          <img src={imageUrl} alt="Uploaded" className="object-cover w-full h-full" />
        ) : (
          <span className="text-gray-500">Image Placeholder</span>
        )}
      </div>
      <div className="flex justify-between mb-3">
        <div className="flex space-x-4">
          <Heart size={24} />
          <MessageCircle size={24} />
          <Send size={24} />
        </div>
        <Bookmark size={24} />
      </div>
      <p className="text-sm">{content}</p>
    </div>
  );
};
