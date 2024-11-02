import React from "react";
import { Heart, MessageCircle, Send, Bookmark, Copy } from "lucide-react";
import { useUser } from '@clerk/nextjs';
import { Button } from "../ui/button";
import Link from "next/link";
import { useToast } from "@/components//hooks/use-toast"

interface InstagramMockProps {
  content: string;
}

export const InstagramMock: React.FC<InstagramMockProps> = ({ content }) => {
  const { toast } = useToast()
  const { user } = useUser();
  const copyToClipboard = (text: string) => {
    
    navigator.clipboard.writeText(text);
  };

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
        <span className="text-gray-500">Image Placeholder</span>
      </div>
      <div className="flex justify-between mb-3">
        <div className="flex space-x-4">
          <Heart color="red" fill="red" size={24} />
          <MessageCircle size={24} />
          <Send size={24} />
        </div>
        <Bookmark size={24} />
      </div>
      <p className="text-sm">{content}</p>
      <div className="pt-2">
      <Button className="block px-4 py-2 ml-auto text-white bg-black rounded "
      variant="outline"
      onClick={() =>{
        toast({
          title: "Caption Copied",
        })
        copyToClipboard(content)}}
       >
        
      <Link href="https://www.instagram.com"  target="blank">Post on Instagram</Link>
      </Button>
      </div>
    </div>
  );
};
