import React from "react";
import { ThumbsUp, MessageSquare, Repeat, Send } from "lucide-react";
import { useUser } from '@clerk/nextjs';
import { Button } from "../ui/button";
import Link from "next/link";
import { useToast } from "@/components//hooks/use-toast"

interface LinkedInMockProps {
  content: string;
}

export const LinkedInMock: React.FC<LinkedInMockProps> = ({ content }) => {
  const { user } = useUser();
  const { toast } = useToast()
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
        
        <div>
        <p className="font-bold">{user?.username || user?.firstName || "Guest"}</p>
          <p className="text-sm text-gray-500">{user?.firstName}• 1st</p>
        </div>
      </div>
      <p className="mb-4">{content}</p>
      <div className="flex justify-between text-gray-500">
        <ThumbsUp color="#0081FB" fill="#0081FB" size={18} />
        <MessageSquare size={18} />
        <Repeat size={18} />
        <Send size={18} />
      </div>
      <div className="pt-3">
      <Button className="block px-4 py-2 ml-auto text-white bg-black rounded "
      variant="outline"
      onClick={() =>{
        toast({
          title: "Thread Copied",
        })
        copyToClipboard(content)}}
       >
      <Link href="https://www.linkedin.com/feed/">Share on Linkedin</Link>
      </Button>
      </div>
    </div>
  );
};
