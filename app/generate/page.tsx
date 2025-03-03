"use client";
import React, { useState, useEffect } from "react";
import { FeedbackDialog } from "@/components/FeedbackDialog";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import GenerateLayout from "@/app/generate/components/GenerateLayout";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Loader2,
  Upload,
  Copy,
  Twitter,
  Instagram,
  Linkedin,
  Clock,
  Zap,
  Verified,
  Youtube,
  Check,
  TicketIcon,
  Image,
  FileText,
  Sparkles,
  Trash2,
  X,
  Layout,
  ChevronDown,
} from "lucide-react";
import { GoogleGenerativeAI, Part } from "@google/generative-ai";
import ReactMarkdown from "react-markdown";
import { Navbar } from "@/components/Navbar";
import { SignInButton, useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import {
  getUserPoints,
  saveGeneratedContent,
  updateUserPoints,
  getGeneratedContentHistory,
  createOrUpdateUser,
  getUserSubscription,
} from "@/utils/db/actions";
import { TwitterMock } from "@/components/social-mocks/TwitterMock";
import { InstagramMock } from "@/components/social-mocks/InstagramMock";
import { LinkedInMock } from "@/components/social-mocks/LinkedInMock";
import { PinterestMock } from "@/components/social-mocks/PinterestMock";
import { YoutubeMock } from "@/components/social-mocks/YoutubeMock";
import Link from "next/link";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { toast } from "@/components/hooks/use-toast";
import { FaPinterest, FaTiktok, FaFacebook } from "react-icons/fa";
import VoiceTyper from "@/components/voice/voicetyper";
import { RainbowButton } from "@/components/magicui/rainbow-button";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { HistorySidebar } from "./components/HistorySidebar";
import { PointsDisplay } from "./components/PointsDisplay";
import { ContentTypeSelector } from "./components/ContentTypeSelector";
import { PromptInput } from "./components/PromptInput";
import { ImageUpload } from "./components/ImageUpload";
import { GeneratedContent } from "./components/GeneratedContent";
import { POINTS_PER_GENERATION } from "./constants";

const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
const genAI = apiKey ? new GoogleGenerativeAI(apiKey) : null;

const contentTypes = [
  { value: "twitter", label: "Twitter Thread", icon: Twitter },
  { value: "instagram", label: "Instagram Caption", icon: Instagram },
  { value: "instagram_story", label: "Instagram Story", icon: Layout },
  { value: "linkedin", label: "LinkedIn Post", icon: Linkedin },
  { value: "youtube", label: "Youtube Description", icon: Youtube },
  { value: "pinterest", label: "Pinterest", icon: FaPinterest },
  { value: "tiktok", label: "TikTok Caption", icon: FaTiktok },
  { value: "facebook", label: "Facebook Post", icon: FaFacebook },
  { value: "blog", label: "Blog Post", icon: FileText },
];

const toneOptions = [
  { value: "professional", label: "Professional" },
  { value: "casual", label: "Casual" },
  { value: "humorous", label: "Humorous" },
  { value: "formal", label: "Formal" },
  { value: "inspirational", label: "Inspirational" },
  { value: "educational", label: "Educational" },
  { value: "storytelling", label: "Storytelling" },
  { value: "promotional", label: "Promotional" },
];

const MAX_TWEET_LENGTH = 280;

const PLATFORM_LIMITS = {
  twitter: 280,
  instagram: 2200,
  instagram_story: 2200,
  linkedin: 3000,
  facebook: 63206,
  tiktok: 2200,
  pinterest: 500,
  blog: 100000,
  youtube: 5000
};

interface HistoryItem {
  id: number;
  contentType: string;
  prompt: string;
  content: string;
  createdAt: Date;
  imageUrl?: string;
}

export default function GenerateContent() {
  const { isLoaded, isSignedIn, user } = useUser();
  const router = useRouter();

  const [contentType, setContentType] = useState(contentTypes[0].value);
  const [prompt, setPrompt] = useState("");
  const [isGenerateDialogOpen, setIsGenerateDialogOpen] = useState(false);
  const [placeholderText, setPlaceholderText] = useState("Write Something to Create Wonders!");
  const [generatedContent, setGeneratedContent] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);
  const [estimatedTime, setEstimatedTime] = useState(0);
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const [image, setImage] = useState<File | null>(null);
  const [uploadedImages, setUploadedImages] = useState<File[]>([]);
  const [userPoints, setUserPoints] = useState<number | null>(null);
  const [history, setHistory] = useState<HistoryItem[]>([]);
  const [showFeedback, setShowFeedback] = useState(false);
  const [hasShownFeedback, setHasShownFeedback] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  
  const [selectedHistoryItem, setSelectedHistoryItem] =
    useState<HistoryItem | null>(null);
  const [selectedTone, setSelectedTone] = useState(toneOptions[0].value);
  const [characterCount, setCharacterCount] = useState(0);
  const [suggestedHashtags, setSuggestedHashtags] = useState<string[]>([]);
  const [selectedHashtags, setSelectedHashtags] = useState<string[]>([]);
  const [isGeneratingHashtags, setIsGeneratingHashtags] = useState(false);
  const [promptSuggestions, setPromptSuggestions] = useState<string[]>([]);
  const [isGeneratingSuggestions, setIsGeneratingSuggestions] = useState(false);
  const [showMobileHistory, setShowMobileHistory] = useState(false);
  const [subscription, setSubscription] = useState<{
    plan: string;
    status: string;
    currentPeriodEnd?: Date;
    cancelAtPeriodEnd?: boolean;
  }>({ plan: 'free', status: 'active' });

  useEffect(() => {
    if (!apiKey) {
      console.error("Gemini API key is not set");
    }
  }, []);

  useEffect(() => {
    if (isLoaded && !isSignedIn) {
      router.push("/");
    } else if (isSignedIn && user) {
      console.log("User loaded:", user);
      fetchUserPoints();
      fetchUserSubscription();
      fetchContentHistory();
    }
  }, [isLoaded, isSignedIn, user, router]);

  const fetchUserSubscription = async () => {
    if (user?.id) {
      const sub = await getUserSubscription(user.id);
      setSubscription(sub);
    }
  };

  const fetchUserPoints = async () => {
    if (user?.id) {
      console.log("Fetching points for user:", user.id);
      const points = await getUserPoints(user.id);
      console.log("Fetched points:", points);
      setUserPoints(points);
      if (points === 0) {
        console.log("User has 0 points. Attempting to create/update user.");
        const updatedUser = await createOrUpdateUser(
          user.id,
          user.emailAddresses[0].emailAddress,
          user.fullName || ""
        );
        console.log("Updated user:", updatedUser);
        if (updatedUser) {
          setUserPoints(updatedUser.points);
        }
      }
    }
  };
  const placeholderOptions = [
    "Write an Instagram caption for an Independence Day flag image...",
    "Create a Twitter post about your favorite summer vacation...",
    "Generate a YouTube description for a cooking tutorial video...",
    "Write a LinkedIn story about your career journey...",
    "Describe your creative idea for the next viral Instagram post...",
    "Craft a Twitter post about a recent tech event you attended...",
    "Write a YouTube description for a workout routine video...",
    "Create an Instagram caption for a motivational quote with a sunset image...",
    "Write a LinkedIn article summarizing the latest industry trends...",
    "Generate a YouTube description for a gaming walkthrough video...",
    "Write an Instagram caption for a new product launch with a stylish photo...",
    "Create a Twitter post sharing your thoughts on a trending news story...",
    "Generate a YouTube description for an educational video on data science...",
    "Write a LinkedIn post about a recent project you completed at work...",
    "Craft a creative Instagram caption for a food recipe post...",
    "Create a Twitter post about a recent personal achievement...",
    "Write a YouTube description for a vlog about your travel experiences...",
    "Generate a LinkedIn story about a professional milestone in your career...",
    "Write an Instagram caption for a fitness transformation journey...",
    "Craft a Twitter post celebrating World Environment Day..."
  ];
  useEffect(() => {
    // Change placeholder every 3 seconds
    const interval = setInterval(() => {
      setPlaceholderText((prevText) => {
        const nextIndex = (placeholderOptions.indexOf(prevText) + 1) % placeholderOptions.length;
        return placeholderOptions[nextIndex];
      });
    }, 2000); // Updated to 3000ms for 3 seconds

    return () => clearInterval(interval); // Clean up interval on unmount
  }, []);

  const fetchContentHistory = async () => {
    if (user?.id) {
      const contentHistory = await getGeneratedContentHistory(user.id);
      setHistory(contentHistory);
    }
  };
  const handleClear = () => {
    
    setSelectedHistoryItem(null);
    setGeneratedContent([]);
    setPrompt(""); 
    console.log("Cleared selected history content and typed prompt");
    toast({
      variant: "default",
      title: "Prompt Cleared",
    });
    setIsDialogOpen(false);
  };

  const generateHashtags = async () => {
    if (!prompt || !genAI) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Please enter a prompt first.",
      });
      return;
    }

    setIsGeneratingHashtags(true);
    try {
      const model = genAI.getGenerativeModel({ model: "gemini-1.5-pro" });
      const result = await model.generateContent(`
        Generate 8 relevant, trending, and engaging hashtags for the following content: "${prompt}"
        Consider the platform: ${contentType}
        Make them specific and targeted.
        Return ONLY the hashtags, separated by spaces, without any additional text or explanation.
        Format: #hashtag1 #hashtag2 #hashtag3
      `);
      
      const response = result.response.text();
      const hashtags = response.split(" ").filter(tag => tag.startsWith("#") && tag.length > 1);
      
      if (hashtags.length > 0) {
        setSuggestedHashtags(hashtags);
        toast({
          title: "Hashtags Generated",
          description: "Click on hashtags to add them to your content.",
        });
      } else {
        throw new Error("No valid hashtags generated");
      }
    } catch (error) {
      console.error("Error generating hashtags:", error);
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to generate hashtags. Please try again.",
      });
    } finally {
      setIsGeneratingHashtags(false);
    }
  };

  const getPromptSuggestions = async () => {
    if (!prompt || !genAI) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Please enter a prompt first.",
      });
      return;
    }

    setIsGeneratingSuggestions(true);
    try {
      const model = genAI.getGenerativeModel({ model: "gemini-1.5-pro" });
      const result = await model.generateContent(`
        Based on this prompt: "${prompt}"
        Platform: ${contentType}
        Tone: ${selectedTone}
        
        Suggest 3 ways to make it more engaging and effective.
        Focus on:
        1. Adding emotional appeal
        2. Improving clarity and impact
        3. Increasing engagement potential
        
        Return only the suggestions, separated by | without any numbering or additional text.
        Each suggestion should be a complete, actionable sentence.
      `);
      
      const suggestions = result.response.text()
        .split("|")
        .map(s => s.trim())
        .filter(s => s.length > 0);
      
      if (suggestions.length > 0) {
        setPromptSuggestions(suggestions);
        toast({
          title: "Suggestions Generated",
          description: "Click on a suggestion to use it.",
        });
      } else {
        throw new Error("No valid suggestions generated");
      }
    } catch (error) {
      console.error("Error generating suggestions:", error);
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to generate suggestions. Please try again.",
      });
    } finally {
      setIsGeneratingSuggestions(false);
    }
  };

  const handlePromptChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const text = e.target.value;
    setPrompt(text);
    setCharacterCount(text.length);
  };

  const toggleHashtag = (hashtag: string) => {
    setSelectedHashtags(prev =>
      prev.includes(hashtag)
        ? prev.filter(h => h !== hashtag)
        : [...prev, hashtag]
    );
  };

  // Countdown timer effect
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isGenerating && estimatedTime > 0) {
      timer = setInterval(() => {
        setEstimatedTime(prev => Math.max(0, prev - 1));
      }, 1000);
    }
    return () => {
      if (timer) clearInterval(timer);
    };
  }, [isGenerating, estimatedTime]);

  // Countdown timer effect
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isGenerating && estimatedTime > 0) {
      timer = setInterval(() => {
        setEstimatedTime(prev => Math.max(0, prev - 1));
      }, 1000);
    }
    return () => {
      if (timer) clearInterval(timer);
    };
  }, [isGenerating, estimatedTime]);

  const handleGenerate = async () => {
    // Set initial estimated time based on content type
    const baseTime = 15; // Base time for any generation
    const timePerPlatform = {
      twitter: 20,
      instagram: 15,
      instagram_story: 15,
      linkedin: 18,
      pinterest: 15,
      youtube: 25
    };
    setEstimatedTime(timePerPlatform[contentType as keyof typeof timePerPlatform] || baseTime);
    setIsGenerating(true);

    if (!genAI) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "AI service is not initialized. Please try again later.",
      });
      return;
    }

    if (!user?.id) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Please sign in to generate content.",
      });
      return;
    }

    if (userPoints === null || userPoints < POINTS_PER_GENERATION) {
      toast({
        variant: "destructive",
        title: "Insufficient Points",
        description: "You need more points to generate content. Please purchase more points.",
      });
      return;
    }

    setIsLoading(true);
    setIsGenerateDialogOpen(false);

    try {
      const model = genAI.getGenerativeModel({ model: "gemini-1.5-pro" });

      let promptText = `Generate creative and engaging ${contentType} content about "${prompt}" using a ${selectedTone} tone. Make it natural, authentic, and optimized for the platform.`;
      
      if (selectedHashtags.length > 0) {
        promptText += ` Include these hashtags naturally in the content: ${selectedHashtags.join(" ")}`;
      }

      // Platform-specific prompting
      switch (contentType) {
        case "instagram_story":
          promptText = `Create 5 engaging Instagram Story ideas about "${prompt}" using a ${selectedTone} tone. For each story idea, include:
            1. Story format (poll, quiz, slider, question, countdown)
            2. Visual description
            3. Text overlay suggestion
            4. Interactive element
            5. Call-to-action

            Format each story idea with clear separators and bullet points.`;
          break;
        case "twitter":
          promptText += " Create a thread of 5 tweets, each under 280 characters. Make them engaging and shareable.";
          break;
        case "instagram":
          promptText += " Create an engaging Instagram caption that drives engagement. Include line breaks for readability and a call-to-action.";
          break;
        case "youtube":
          promptText += " Create a complete YouTube description with timestamps, key points, and relevant links. Format it for maximum readability.";
          break;
      }

      // Handle image if present
      let imagePart: Part | null = null;
      if ((contentType === "instagram" || contentType === "pinterest") && image) {
        try {
          const imageData = await new Promise<string>((resolve, reject) => {
            const reader = new FileReader();
            reader.onload = (e) => {
              if (e.target?.result && typeof e.target.result === "string") {
                resolve(e.target.result);
              } else {
                reject(new Error("Failed to read image"));
              }
            };
            reader.onerror = () => reject(new Error("Failed to read image"));
            reader.readAsDataURL(image);
          });

          const base64Data = imageData.split(",")[1];
          imagePart = {
            inlineData: {
              data: base64Data,
              mimeType: image.type,
            },
          };
          promptText += " Analyze the uploaded image and incorporate its description naturally into the caption.";
        } catch (error) {
          console.error("Error processing image:", error);
          toast({
            variant: "destructive",
            title: "Error",
            description: "Failed to process the image. Generating content without image analysis.",
          });
        }
      }

      // Generate content
      const parts: (string | Part)[] = [promptText];
      if (imagePart) parts.push(imagePart);

      const result = await model.generateContent(parts);
      const generatedText = result.response.text();

      let content: string[];
      if (contentType === "twitter") {
        content = generatedText.split("\n\n").filter((tweet) => tweet.trim() !== "");
      } else {
        content = [generatedText];
      }

      setGeneratedContent(content);

      // Update points
      const updatedUser = await updateUserPoints(user.id, -POINTS_PER_GENERATION);
      if (updatedUser) {
        setUserPoints(updatedUser.points);
      }

      // Save generated content with image
      let imageData = null;
      if (image) {
        try {
          const reader = new FileReader();
          const imageDataUrl = await new Promise<string>((resolve, reject) => {
            reader.onload = () => resolve(reader.result as string);
            reader.onerror = reject;
            reader.readAsDataURL(image);
          });
          imageData = imageDataUrl;
          console.log('Image converted to data URL successfully');
        } catch (error) {
          console.error('Error converting image to data URL:', error);
        }
      }

      console.log('Saving content with image:', imageData ? 'Image present' : 'No image');
      
      const savedContent = await saveGeneratedContent(
        user.id,
        content.join("\n\n"),
        prompt,
        contentType,
        imageData
      );

      if (savedContent) {
        console.log('Content saved successfully:', savedContent);
        if (savedContent.images) {
          console.log('Image URL from saved content:', savedContent.images);
          setPreviewImage(savedContent.images);
        }
      }

      if (savedContent) {
        const isFirstGeneration = history.length === 0;
        setHistory((prevHistory) => [savedContent, ...prevHistory]);

        // Show feedback dialog after first successful generation
        if (isFirstGeneration && !hasShownFeedback) {
          setShowFeedback(true);
          setHasShownFeedback(true);
        }
      }

      toast({
        title: "Content Generated",
        description: "Your content has been generated successfully!",
      });

    } catch (error) {
      console.error("Error generating content:", error);
      toast({
        variant: "destructive",
        title: "Error",
        description: "An error occurred while generating content. Please try again.",
      });
    } finally {
      setIsLoading(false);
      setIsGenerating(false);
      setEstimatedTime(0);
    }
  };
  

  const handleHistoryItemClick = (item: HistoryItem) => {
    setSelectedHistoryItem(item);
    setContentType(item.contentType);
    setPrompt(item.prompt);
    setGeneratedContent(
      item.contentType === "twitter"
        ? item.content.split("\n\n")
        : [item.content]
    );
    if (item.imageUrl) {
      setPreviewImage(item.imageUrl); // Set image preview
    } else {
      setPreviewImage(null);
    }
  };
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  const InstagramStoryMock = ({ content }: { content: string }) => {
    const storyIdeas = content.split('\n\n').filter(idea => idea.trim() !== '');
    
    return (
      <div className="space-y-4">
        {storyIdeas.map((idea, index) => (
          <div key={index} className="bg-gray-800/50 rounded-xl p-4 border border-purple-500/20">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-6 h-6 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-xs font-bold">
                {index + 1}
              </div>
              <h3 className="text-sm font-medium text-purple-400">Story Idea {index + 1}</h3>
            </div>
            <div className="space-y-2 text-sm text-gray-300">
              {idea.split('\n').map((line, lineIndex) => (
                <p key={lineIndex} className="pl-4 border-l-2 border-purple-500/20">
                  {line}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
    );
  };

  const renderContentMock = () => {
    if (generatedContent.length === 0) return null;

    // Get the image URL from different sources in order of priority
    let imageUrl: string | undefined;
    
    if (selectedHistoryItem?.images) {
      // If viewing history item, use its saved image
      imageUrl = selectedHistoryItem.images;
    } else if (image) {
      // If there's a newly uploaded image, create an object URL
      imageUrl = URL.createObjectURL(image);
    } else if (previewImage) {
      // Fallback to any preview image
      imageUrl = previewImage;
    }

    // Log the image URL for debugging
    console.log('Using image URL:', imageUrl);

    switch (contentType) {
      case "twitter":
        return <TwitterMock content={generatedContent} image={imageUrl} />;
      case "instagram":
        return <InstagramMock content={generatedContent[0]} image={imageUrl} />;
      case "instagram_story":
        return <InstagramStoryMock content={generatedContent[0]} image={imageUrl} />;
      case "linkedin":
        return <LinkedInMock content={generatedContent[0]} image={imageUrl} />;
      case "pinterest":
        return <PinterestMock content={generatedContent[0]} image={imageUrl} />;
      case "youtube":
        return <YoutubeMock content={generatedContent[0]} image={imageUrl} />;
      default:
        return null;
    }
  };

  const isOverCharacterLimit = characterCount > (PLATFORM_LIMITS[contentType as keyof typeof PLATFORM_LIMITS] || Infinity);

  const clearPromptSuggestions = () => {
    setPromptSuggestions([]);
  };

  const clearHashtagSuggestions = () => {
    setSuggestedHashtags([]);
    setSelectedHashtags([]);
  };

  if (!isLoaded) {
    return (
      <>
        <Navbar />
        <GenerateLayout>
          <div className="flex items-center justify-center min-h-[50vh]">
            <Loader2 className="w-8 h-8 animate-spin text-blue-500" />
          </div>
        </GenerateLayout>
      </>
    );
  }

  if (!isSignedIn) {
    return (
      <>
        <Navbar />
        <GenerateLayout>
        <div className="container mx-auto px-4 min-h-[50vh] flex items-center justify-center">
          <div className="w-full max-w-md">
            <div className="relative bg-gray-800/50 p-8 rounded-2xl backdrop-blur-lg border border-gray-700/50 shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 rounded-2xl" />
              <div className="relative">
                <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 text-center mb-4">
                  Welcome to CaptionCraft AI
                </h1>
                <p className="text-gray-300 text-center mb-8">
                  Create engaging content across all social platforms with the power of AI
                </p>
                <SignInButton mode="modal">
                  <button className="w-full py-3 px-6 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-xl font-medium hover:from-blue-600 hover:to-purple-600 transition-all duration-200 transform hover:scale-105">
                    Get Started
                  </button>
                </SignInButton>
                <p className="mt-6 text-sm text-gray-400 text-center">
                  By signing in, you agree to our Terms of Service and Privacy Policy
                </p>
              </div>
            </div>
          </div>
        </div>
        </GenerateLayout>
      </>
    );
  }

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const newImages = Array.from(event.target.files);

      // Set the last uploaded image for AI processing
      setImage(newImages[newImages.length - 1]);

      // Add all uploaded images to the list
      setUploadedImages((prevImages) => [...prevImages, ...newImages]);
    }
  };

  const handleRemoveImage = (index: number) => {
    setUploadedImages((prevImages) => {
      const updatedImages = [...prevImages];
      updatedImages.splice(index, 1);
      return updatedImages;
    });

    // Update AI image if the removed image was the latest one
    if (uploadedImages[index] === image) {
      setImage(null);
    }
  };

  const handleShowImage = (img: File) => {
    const imageUrl = URL.createObjectURL(img);
    setPreviewImage(imageUrl); // Set the image URL for modal preview
  };

  const handleCloseModal = () => {
    setPreviewImage(null); // Close the modal by clearing the preview image
  };

  return (
    <>
      <Navbar />
      <GenerateLayout>
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="container mx-auto px-4 py-4 sm:py-8">
        {/* Mobile History Toggle Button */}
        <div className="lg:hidden mb-4 mt-14">
          <button
            onClick={() => setShowMobileHistory(!showMobileHistory)}
            className="w-full py-3 px-4 bg-gray-800/50 rounded-xl flex items-center justify-between"
          >
            <span className="text-gray-300 font-medium flex items-center gap-2">
              <Clock className="w-4 h-4" />
              History
            </span>
            <ChevronDown className={`w-4 h-4 text-gray-400 transform transition-transform ${showMobileHistory ? 'rotate-180' : ''}`} />
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mt-4 lg:mt-14">
          {/* Mobile History Sidebar */}
          <div className={`lg:hidden ${showMobileHistory ? 'block' : 'hidden'} mb-6`}>
            <div className="flex flex-col space-y-4">
              <div className="flex items-center space-x-2 bg-gray-800/50 px-3 py-2 rounded-xl border border-gray-700/50">
                <span className="text-sm font-medium text-gray-300">Plan:</span>
                <span className="px-2 py-1 text-xs font-medium rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white">
                  {subscription.plan === 'free' ? 'Free' : 
                   subscription.plan === 'pro' ? 'Pro' : 
                   subscription.plan === 'premium' ? 'Premium' : 
                   'Enterprise'}
                </span>
                {subscription.cancelAtPeriodEnd && subscription.currentPeriodEnd && (
                  <span className="text-xs text-gray-400">
                    (Expires: {new Date(subscription.currentPeriodEnd).toLocaleDateString()})
                  </span>
                )}
              </div>
              <HistorySidebar 
                history={history}
                onHistoryItemClick={(item) => {
                  handleHistoryItemClick(item);
                  setShowMobileHistory(false);
                }}
              />
            </div>
          </div>

          {/* Desktop History Sidebar */}
          <div className="hidden lg:block lg:col-span-3">
            <div className="flex flex-col space-y-4">
              <div className="flex items-center space-x-2 bg-gray-800/50 px-3 py-2 rounded-xl border border-gray-700/50">
                <span className="text-sm font-medium text-gray-300">Plan:</span>
                <span className="px-2 py-1 text-xs font-medium rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white">
                  {subscription.plan === 'free' ? 'Free' : 
                   subscription.plan === 'pro' ? 'Pro' : 
                   subscription.plan === 'premium' ? 'Premium' : 
                   'Enterprise'}
                </span>
                {subscription.cancelAtPeriodEnd && subscription.currentPeriodEnd && (
                  <span className="text-xs text-gray-400">
                    (Expires: {new Date(subscription.currentPeriodEnd).toLocaleDateString()})
                  </span>
                )}
              </div>
              <HistorySidebar 
                history={history}
                onHistoryItemClick={handleHistoryItemClick}
              />
            </div>
          </div>

          <div className="lg:col-span-9 space-y-4 sm:space-y-6">
            <PointsDisplay userPoints={userPoints} />

            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-gray-700/50">
              <ContentTypeSelector
                contentType={contentType}
                selectedTone={selectedTone}
                onContentTypeChange={setContentType}
                onToneChange={setSelectedTone}
              />

              <div className="space-y-4">
                <PromptInput
                  prompt={prompt}
                  contentType={contentType}
                  characterCount={characterCount}
                  isGeneratingSuggestions={isGeneratingSuggestions}
                  isGeneratingHashtags={isGeneratingHashtags}
                  placeholderText={placeholderText}
                  onPromptChange={handlePromptChange}
                  onGetSuggestions={getPromptSuggestions}
                  onGenerateHashtags={generateHashtags}
                />

                {/* AI Suggestions Display */}
                {promptSuggestions.length > 0 && (
                  <div className="bg-gray-700/30 rounded-xl p-3 sm:p-4">
                    <div className="flex items-center justify-between mb-2 sm:mb-3">
                      <h3 className="text-sm font-medium text-purple-400">AI Suggestions</h3>
                      <button
                        onClick={clearPromptSuggestions}
                        className="p-1 hover:bg-gray-600 rounded-lg transition-colors"
                      >
                        <X className="w-4 h-4 text-gray-400" />
                      </button>
                    </div>
                    <div className="space-y-2">
                      {promptSuggestions.map((suggestion, index) => (
                        <div
                          key={index}
                          onClick={() => setPrompt(suggestion)}
                          className="p-2 sm:p-3 bg-gray-800/50 rounded-lg cursor-pointer hover:bg-gray-700/50 transition-all duration-200"
                        >
                          <p className="text-sm text-gray-300">{suggestion}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Hashtags Display */}
                {suggestedHashtags.length > 0 && (
                  <div className="bg-gray-700/30 rounded-xl p-3 sm:p-4">
                    <div className="flex items-center justify-between mb-2 sm:mb-3">
                      <h3 className="text-sm font-medium text-blue-400">Generated Hashtags</h3>
                      <button
                        onClick={clearHashtagSuggestions}
                        className="p-1 hover:bg-gray-600 rounded-lg transition-colors"
                      >
                        <X className="w-4 h-4 text-gray-400" />
                      </button>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {suggestedHashtags.map((hashtag, index) => (
                        <button
                          key={index}
                          onClick={() => toggleHashtag(hashtag)}
                          className={`px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm transition-all duration-200 ${
                            selectedHashtags.includes(hashtag)
                              ? 'bg-blue-500 text-white'
                              : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50'
                          }`}
                        >
                          {hashtag}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {(contentType === "instagram" || contentType === "pinterest") && (
                  <ImageUpload
                    image={image}
                    uploadedImages={uploadedImages}
                    onImageUpload={handleImageUpload}
                    onRemoveImage={handleRemoveImage}
                    onShowImage={handleShowImage}
                  />
                )}

                <AlertDialog open={isGenerateDialogOpen} onOpenChange={setIsGenerateDialogOpen}>
                  <AlertDialogTrigger asChild>
                    <button
                      disabled={!prompt.trim() || isLoading}
                      className="w-full py-4 sm:py-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl font-medium text-white hover:from-blue-600 hover:to-purple-600 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base"
                    >
                      {isLoading || isGenerating ? (
                        <>
                          <Loader2 className="w-4 h-4 sm:w-5 sm:h-5 mr-2 inline animate-spin" />
                          {isGenerating && estimatedTime > 0 ? 
                            `Generating (~${estimatedTime}s)` : 
                            'Generating...'}
                        </>
                      ) : (
                        `Generate Content (${POINTS_PER_GENERATION} points)`
                      )}
                    </button>
                  </AlertDialogTrigger>
                  <AlertDialogContent className="bg-gray-800 border border-gray-700 w-[90%] sm:w-full max-w-lg mx-auto">
                    <AlertDialogHeader>
                      <AlertDialogTitle className="text-white">Generate Content</AlertDialogTitle>
                      <AlertDialogDescription className="text-gray-400">
                        This will use {POINTS_PER_GENERATION} points from your account. Do you want to continue?
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter className="sm:space-x-2">
                      <AlertDialogCancel className="bg-gray-700 text-white hover:bg-gray-600 w-full sm:w-auto">Cancel</AlertDialogCancel>
                      <AlertDialogAction
                        onClick={handleGenerate}
                        className="bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:from-blue-600 hover:to-purple-600 w-full sm:w-auto"
                      >
                        {isGenerating ? (
                          <span className="flex items-center justify-center space-x-2">
                            <span>Generating{estimatedTime > 0 ? ` (~${estimatedTime}s)` : '...'}</span>
                            <div className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent"></div>
                          </span>
                        ) : (
                          "Generate"
                        )}
                      </AlertDialogAction>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
              </div>
            </div>

            <GeneratedContent
              selectedHistoryItem={selectedHistoryItem}
              generatedContent={generatedContent}
              contentType={contentType}
            />
          </div>
        </div>
      </motion.div>
      </GenerateLayout>

      {/* Feedback Dialog */}
      <FeedbackDialog
        isOpen={showFeedback}
        onClose={() => setShowFeedback(false)}
      />
    </>
  );
}