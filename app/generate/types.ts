export interface ContentType {
  value: string;
  label: string;
  icon: any; // Using any for icon type as it can be from different libraries
}

export interface ToneOption {
  value: string;
  label: string;
}

export interface HistoryItem {
  id: number;
  contentType: string;
  prompt: string;
  content: string;
  createdAt: Date;
  imageUrl?: string;
}

export interface GeneratedContent {
  content: string[];
  type: string;
} 