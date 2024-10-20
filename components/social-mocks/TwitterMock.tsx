import React from "react";
import { Twitter, Heart, MessageCircle, Repeat, Share } from "lucide-react";
import { useUser } from '@clerk/nextjs';
import { Button } from "../ui/button";
import Link from "next/link";


interface TwitterMockProps {
  content: string[];
}

export const TwitterMock: React.FC<TwitterMockProps> = ({ content }) => {
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
          <p className="text-gray-500">@{user?.firstName}</p>
          </div>
      </div>
      {content.map((tweet, index) => (
        <div key={index} className="pb-4 mb-4 border-b border-gray-200">
          <p>{tweet}</p>
          <div className="flex justify-between mt-3 text-gray-500">
            <MessageCircle size={18} />
            <Repeat size={18} />
            <Heart  color="red" fill="red"size={18} />
            <Share size={18} />
          </div>
          <div className="pt-3">
      <Button className="block px-4 py-2 ml-auto text-white bg-black rounded ">
      <Link href="https://x.com/">Share</Link>
      </Button>
      </div>
        </div>
      ))}
    </div>
  );
};
