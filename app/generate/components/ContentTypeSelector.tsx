import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { contentTypes, toneOptions } from "../constants";
import { ContentType, ToneOption } from "../types";

interface ContentTypeSelectorProps {
  contentType: string;
  selectedTone: string;
  onContentTypeChange: (value: string) => void;
  onToneChange: (value: string) => void;
}

export function ContentTypeSelector({
  contentType,
  selectedTone,
  onContentTypeChange,
  onToneChange,
}: ContentTypeSelectorProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
      {/* Content Type Selector */}
      <div>
        <label className="block text-sm font-medium text-gray-300 mb-2">
          Content Type
        </label>
        <Select onValueChange={onContentTypeChange} value={contentType}>
          <SelectTrigger className="w-full bg-gray-700/50 border-gray-600 rounded-xl">
            <SelectValue placeholder="Select content type" />
          </SelectTrigger>
          <SelectContent>
            {contentTypes.map((type: ContentType) => (
              <SelectItem key={type.value} value={type.value}>
                <div className="flex items-center">
                  {React.createElement(type.icon, { className: "w-4 h-4 mr-2" })}
                  {type.label}
                </div>
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Tone Selector */}
      <div>
        <label className="block text-sm font-medium text-gray-300 mb-2">
          Content Tone
        </label>
        <Select onValueChange={onToneChange} value={selectedTone}>
          <SelectTrigger className="w-full bg-gray-700/50 border-gray-600 rounded-xl">
            <SelectValue placeholder="Select content tone" />
          </SelectTrigger>
          <SelectContent>
            {toneOptions.map((tone: ToneOption) => (
              <SelectItem key={tone.value} value={tone.value}>
                {tone.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </div>
  );
} 