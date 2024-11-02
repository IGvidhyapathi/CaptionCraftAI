    import React from "react";
    import { Pin, MessageCircle, Send, Bookmark, Copy } from "lucide-react";
    import { useUser } from '@clerk/nextjs';
    import { Button } from "../ui/button";
    import Link from "next/link";
    import { useToast } from "@/components/hooks/use-toast";

    interface YoutubeMockProps {
    content: string; // Add a prop for the video description
    }

    export const YoutubeMock: React.FC<YoutubeMockProps> = ({ content }) => {
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
            src={user?.imageUrl || "/default-avatar.png"} // Fallback to a default avatar if imageUrl is not available
            alt="Profile"
            className="w-8 h-8 mr-3 bg-gray-300 rounded-full"
            />
            <p className="font-bold">{user?.username || user?.firstName || "Guest"}</p>
        </div>
        <div className="flex items-center justify-center mb-3">
            <div className="relative w-full h-64 overflow-hidden bg-gray-200 rounded-lg">
            <video 
                className="absolute inset-0 object-cover w-full h-full"
                controls
            />
            </div>
        </div>
        <div className="flex justify-between mb-3">
            <div className="flex space-x-4">
            <Pin color="red" fill="red" size={24} />
            <MessageCircle size={24} />
            <Send size={24} />
            <Copy size={24} onClick={() => copyToClipboard(content)} className="cursor-pointer" />
            </div>
            <Bookmark size={24} />
        </div>

        {/* Subscriber Count and Channel Information */}
        <div className="flex items-center mb-2">
            <img
            src={user?.imageUrl || "/default-avatar.png"} // Fallback to a default avatar if imageUrl is not available
            alt="Profile"
            className="w-8 h-8 mr-3 bg-gray-300 rounded-full"
            />
            <div className="flex flex-col">
            <p className="font-bold">{user?.username || user?.firstName || "Guest"}</p>
            <p className="text-sm text-gray-500">Subscribers: 100k</p>
            </div>
        </div>

        {/* Description Section */}
        <div className="p-2 mb-4 border-t">
            <h3 className="font-semibold">Description</h3>
            <p className="text-sm">{content}</p> {/* Video description */}
        </div>
    <Link href="https://studio.youtube.com/channel/UCchx7K5Qi7KOjM6HUi7QiIQ/videos/upload?d=ud&filter=%5B%5D&sort=%7B%22columnType%22%3A%22date%22%2C%22sortOrder%22%3A%22DESCENDING%22%7D" target="blank" >
        <Button 
            className="px-4 py-2 ml-auto text-white bg-black rounded hover:bg-black hover:text-white"
            onClick={() => {
            toast({
                title: "Caption Copied",
            });
            copyToClipboard(content);
            }}
        >
            
            Share on Youtube
            
        </Button>
        </Link>
        </div>
    );
    };
