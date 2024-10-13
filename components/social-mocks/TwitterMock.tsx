import React from "react";
import { Twitter, Heart, MessageCircle, Repeat, Share } from "lucide-react";

interface TwitterMockProps {
  content: string[];
  imageUrl: string | null; 
}

export const TwitterMock: React.FC<TwitterMockProps> = ({ content }) => {
  return (
    <div className="max-w-md p-4 mx-auto text-black bg-white rounded-lg">
      <div className="flex items-center mb-3">
        <div className="w-12 h-12 mr-3 bg-gray-300 rounded-full"></div>
        <div>
          <p className="font-bold">Your Name</p>
          <p className="text-gray-500">@yourhandle</p>
        </div>
      </div>
      {content.map((tweet, index) => (
        <div key={index} className="pb-4 mb-4 border-b border-gray-200">
          <p>{tweet}</p>
          <div className="flex justify-between mt-3 text-gray-500">
            <MessageCircle size={18} />
            <Repeat size={18} />
            <Heart size={18} />
            <Share size={18} />
          </div>
        </div>
      ))}
    </div>
  );
};
