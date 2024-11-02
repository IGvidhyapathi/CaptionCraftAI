import React from "react";
import { Pin, MessageCircle, Send, Bookmark, Copy, Download, MoreHorizontal } from "lucide-react"; // Replace Heart with Pin
import { useUser } from '@clerk/nextjs';
import { Button } from "../ui/button";
import Link from "next/link";
import { useToast } from "@/components/hooks/use-toast";

interface PinterestMockProps {
  content: string;
}

export const PinterestMock: React.FC<PinterestMockProps> = ({ content }) => {
  const { toast } = useToast();
  const { user } = useUser();

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    toast({
      title: "Caption Copied",
    });
  };

 

  return (
    <div className="flex flex-col max-w-md p-4 mx-auto text-black transition-transform duration-300 transform bg-white rounded-lg shadow-md hover:scale-105">
      <div className="flex items-center mb-3">
        <img
          src={user?.imageUrl || "/default-avatar.png"}  // Fallback to a default avatar if imageUrl is not available
          alt="Profile"
          className="w-8 h-8 mr-3 bg-gray-300 rounded-full"
        />
        <p className="font-bold">{user?.username || user?.firstName || "Guest"}</p>
      </div>
      <div className="flex items-center justify-center mb-3">
        <div className="relative w-full h-64 overflow-hidden bg-gray-200 rounded-lg">
          <span className="absolute inset-0 flex items-center justify-center text-gray-500">Pinterest Placeholder</span>
        </div>
      </div>
      <div className="flex justify-between mb-3">
        <div className="flex space-x-4">
          <Pin color="red" fill="red" size={24} /> {/* Pinterest Pin icon */}
          <MessageCircle size={24} />
          <Send size={24} />
          <Copy size={24} onClick={() => copyToClipboard(content)} className="cursor-pointer" />
        </div>
        <Bookmark size={24} />
      </div>
      <p className="text-sm">{content}</p>
      <div className="flex justify-between pt-2">
        <Button className="px-4 py-2 text-white bg-black rounded"
         onClick={() =>{
          toast({
            title: "Caption Copied",
          })
          copyToClipboard(content)}}
         >
        
          <Link href="https://in.pinterest.com/"  target="blank">
          Pin This.
          </Link>
        </Button>
        <div className="flex space-x-2">
          <button  className="flex items-center p-2 text-gray-600 rounded hover:bg-gray-100">
            <Download size={20} />
          </button>
          <button  className="flex items-center p-2 text-gray-600 rounded hover:bg-gray-100">
            <MoreHorizontal size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};
