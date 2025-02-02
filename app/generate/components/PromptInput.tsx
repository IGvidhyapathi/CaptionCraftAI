import React from "react";
import { Button } from "@/components/ui/button";
import { Loader2, Sparkles, Hash, Mic, AlertCircle } from "lucide-react";
import VoiceTyper from "@/components/voice/voicetyper";
import { PLATFORM_LIMITS } from "../constants";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

interface PromptInputProps {
  prompt: string;
  contentType: string;
  characterCount: number;
  isGeneratingSuggestions: boolean;
  isGeneratingHashtags: boolean;
  placeholderText: string;
  onPromptChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onGetSuggestions: () => void;
  onGenerateHashtags: () => void;
}

export function PromptInput({
  prompt,
  contentType,
  characterCount,
  isGeneratingSuggestions,
  isGeneratingHashtags,
  placeholderText,
  onPromptChange,
  onGetSuggestions,
  onGenerateHashtags,
}: PromptInputProps) {
  const isOverCharacterLimit = characterCount > (PLATFORM_LIMITS[contentType] || 280);
  const characterPercentage = (characterCount / (PLATFORM_LIMITS[contentType] || 280)) * 100;

  const handlePromptChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const text = e.target.value;
    if (text.length <= (PLATFORM_LIMITS[contentType] || 280)) {
      onPromptChange(e);
    }
  };

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <label className="flex items-center text-sm font-medium text-gray-300">
          Your Prompt
          {isOverCharacterLimit && (
            <div className="flex items-center ml-2 text-red-400">
              <AlertCircle className="w-4 h-4 mr-1" />
              <span className="text-xs">Character limit exceeded</span>
            </div>
          )}
        </label>
        <div className="flex items-center gap-2">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <div className="text-xs text-gray-400">
                  {characterCount} / {PLATFORM_LIMITS[contentType] || 280}
                </div>
              </TooltipTrigger>
              <TooltipContent>
                <p>Character limit for {contentType}</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </div>

      <div className="relative">
        <textarea
          placeholder={placeholderText}
          value={prompt}
          onChange={handlePromptChange}
          rows={4}
          maxLength={PLATFORM_LIMITS[contentType] || 280}
          className={`w-full p-4 pr-12 bg-gray-800/50 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none ${
            isOverCharacterLimit ? 'border-red-400' : 'border-gray-600'
          }`}
        />
        <div className="absolute right-3 bottom-3">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <div className="p-2 transition-colors rounded-lg hover:bg-gray-700/50">
                  <VoiceTyper 
                    setPrompt={(value) => onPromptChange({ target: { value } } as React.ChangeEvent<HTMLTextAreaElement>)}
                    className="text-gray-400 hover:text-gray-200"
                  />
                </div>
              </TooltipTrigger>
              <TooltipContent>
                <p>Voice input</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
        
        {/* Character limit progress bar */}
        <div className="h-1 mt-1 overflow-hidden bg-gray-700 rounded-full">
          <div
            className={`h-full transition-all duration-300 ${
              characterPercentage > 90
                ? 'bg-red-500'
                : characterPercentage > 70
                ? 'bg-yellow-500'
                : 'bg-blue-500'
            }`}
            style={{ width: `${Math.min(characterPercentage, 100)}%` }}
          />
        </div>
      </div>

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-end">
        <Button
          variant="ghost"
          onClick={onGetSuggestions}
          disabled={!prompt || isGeneratingSuggestions}
          className="relative group px-4 py-2 h-auto bg-purple-500/10 hover:bg-purple-500/20 text-purple-400 hover:text-purple-300 rounded-xl"
        >
          <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
          <div className="relative flex items-center justify-center">
            {isGeneratingSuggestions ? (
              <>
                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                <span className="text-sm">Getting Suggestions...</span>
              </>
            ) : (
              <>
                <Sparkles className="w-4 h-4 mr-2" />
                <span className="text-sm">Get AI Suggestions</span>
              </>
            )}
          </div>
        </Button>

        <Button
          variant="ghost"
          onClick={onGenerateHashtags}
          disabled={!prompt || isGeneratingHashtags}
          className="relative group px-4 py-2 h-auto bg-blue-500/10 hover:bg-blue-500/20 text-blue-400 hover:text-blue-300 rounded-xl"
        >
          <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
          <div className="relative flex items-center justify-center">
            {isGeneratingHashtags ? (
              <>
                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                <span className="text-sm">Generating Hashtags...</span>
              </>
            ) : (
              <>
                <Hash className="w-4 h-4 mr-2" />
                <span className="text-sm">Generate Hashtags</span>
              </>
            )}
          </div>
        </Button>
      </div>
    </div>
  );
} 