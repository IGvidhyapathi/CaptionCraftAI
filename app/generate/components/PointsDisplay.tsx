import { Zap } from "lucide-react";
import Link from "next/link";

interface PointsDisplayProps {
  userPoints: number | null;
}

export function PointsDisplay({ userPoints }: PointsDisplayProps) {
  return (
    <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="p-3 bg-yellow-500/10 rounded-xl">
            <Zap className="w-6 h-6 text-yellow-400" />
          </div>
          <div>
            <p className="text-sm text-gray-400">Available Points</p>
            <p className="text-2xl font-bold text-yellow-400">
              {userPoints !== null ? userPoints : "Loading..."}
            </p>
          </div>
        </div>
        <Link href="/pricing">
          <button className="px-6 py-3 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl font-medium text-white hover:from-purple-600 hover:to-blue-600 transition-all duration-200 transform hover:scale-105">
            Get More Points
          </button>
        </Link>
      </div>
    </div>
  );
} 