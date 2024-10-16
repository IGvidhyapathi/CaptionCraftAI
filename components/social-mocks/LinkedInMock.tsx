import React from "react";
import { ThumbsUp, MessageSquare, Repeat, Send } from "lucide-react";
import { useUser } from '@clerk/nextjs';

interface LinkedInMockProps {
  content: string;
}

export const LinkedInMock: React.FC<LinkedInMockProps> = ({ content }) => {
  const { user } = useUser();
  return (
    <div className="max-w-md p-4 mx-auto text-black bg-white rounded-lg">
      <div className="flex items-center mb-3">
      <img
          src={user?.imageUrl || "/default-avatar.png"}  // Fallback to a default avatar if imageUrl is not available
          alt="Profile"
          className="w-8 h-8 mr-3 bg-gray-300 rounded-full"
        />
        
        <div>
        <p className="font-bold">{user?.username || user?.firstName || "Guest"}</p>
          <p className="text-sm text-gray-500">{user?.firstName}• 1st</p>
        </div>
      </div>
      <p className="mb-4">{content}</p>
      <div className="flex justify-between text-gray-500">
        <ThumbsUp size={18} />
        <MessageSquare size={18} />
        <Repeat size={18} />
        <Send size={18} />
      </div>
    </div>
  );
};
