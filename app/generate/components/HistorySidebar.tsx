import { Clock, Twitter, Instagram, Linkedin, Youtube } from "lucide-react";
import { FaPinterest } from "react-icons/fa";

interface HistoryItem {
  id: number;
  contentType: string;
  prompt: string;
  content: string;
  createdAt: Date;
  imageUrl?: string;
}

interface HistorySidebarProps {
  history: HistoryItem[];
  onHistoryItemClick: (item: HistoryItem) => void;
}

export function HistorySidebar({ history, onHistoryItemClick }: HistorySidebarProps) {
  const getIcon = (contentType: string) => {
    switch (contentType) {
      case "twitter":
        return <Twitter className="w-4 h-4 text-blue-400" />;
      case "instagram":
        return <Instagram className="w-4 h-4 text-pink-400" />;
      case "linkedin":
        return <Linkedin className="w-4 h-4 text-blue-600" />;
      case "youtube":
        return <Youtube className="w-4 h-4 text-red-600" />;
      case "pinterest":
        return <FaPinterest className="w-4 h-4 text-red-600" />;
      default:
        return null;
    }
  };

  return (
    <div className="lg:col-span-3">
      <div className="sticky top-24">
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              History
            </h2>
            <Clock className="w-5 h-5 text-gray-400" />
          </div>
          <div className="space-y-3 max-h-[calc(100vh-200px)] overflow-y-auto">
            {history.map((item) => (
              <div
                key={item.id}
                onClick={() => onHistoryItemClick(item)}
                className="group p-4 bg-gray-700/30 rounded-xl cursor-pointer hover:bg-gray-700/50 transition-all duration-200"
              >
                <div className="flex items-center gap-2 mb-2">
                  {getIcon(item.contentType)}
                  <span className="text-sm font-medium text-gray-300">
                    {item.contentType}
                  </span>
                </div>
                <p className="text-sm text-gray-400 line-clamp-2 group-hover:text-gray-200">
                  {item.prompt}
                </p>
                {item.imageUrl && (
                  <img
                    src={item.imageUrl}
                    alt="Content"
                    className="mt-2 rounded-lg w-full h-20 object-cover"
                  />
                )}
                <div className="flex items-center mt-2 text-xs text-gray-500">
                  <Clock className="w-3 h-3 mr-1" />
                  {new Date(item.createdAt).toLocaleDateString()}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 