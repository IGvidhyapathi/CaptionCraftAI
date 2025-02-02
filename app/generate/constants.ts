import {
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  FileText,
  Layout,
} from "lucide-react";
import { FaPinterest, FaTiktok, FaFacebook } from "react-icons/fa";

interface ContentType {
  value: string;
  label: string;
  icon: any; // Using any for icon type as it can be from different libraries
}

interface ToneOption {
  value: string;
  label: string;
}

export const POINTS_PER_GENERATION = 5;

export const contentTypes: ContentType[] = [
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

export const toneOptions: ToneOption[] = [
  { value: "professional", label: "Professional" },
  { value: "casual", label: "Casual" },
  { value: "humorous", label: "Humorous" },
  { value: "formal", label: "Formal" },
  { value: "inspirational", label: "Inspirational" },
  { value: "educational", label: "Educational" },
  { value: "storytelling", label: "Storytelling" },
  { value: "promotional", label: "Promotional" },
];

export const PLATFORM_LIMITS: { [key: string]: number } = {
  twitter: 280,
  instagram: 2200,
  instagram_story: 2200,
  linkedin: 3000,
  facebook: 63206,
  tiktok: 2200,
  pinterest: 500,
  blog: 100000,
  youtube: 5000,
}; 