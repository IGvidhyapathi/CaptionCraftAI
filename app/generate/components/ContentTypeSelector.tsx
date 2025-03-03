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
import { motion } from "framer-motion";
import { Sparkles, Wand2 } from "lucide-react";

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
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6"
    >
      {/* Content Type Selector */}
      <motion.div
        initial={{ x: -20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="group"
      >
        <label className="flex items-center gap-2 text-sm font-medium text-gray-300 mb-2 group-hover:text-blue-400 transition-colors duration-200">
          <Sparkles className="w-4 h-4" />
          Content Type
        </label>
        <Select onValueChange={onContentTypeChange} value={contentType}>
          <SelectTrigger 
            className="w-full bg-gray-700/50 border-gray-600 hover:border-blue-500/50 rounded-xl 
                       shadow-lg transition-all duration-300 hover:shadow-blue-500/10 hover:bg-gray-700/70
                       focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50"
          >
            <SelectValue placeholder="Select content type" />
          </SelectTrigger>
          <SelectContent className="bg-gray-800/95 backdrop-blur-lg border-gray-700">
            {contentTypes.map((type: ContentType) => (
              <SelectItem 
                key={type.value} 
                value={type.value}
                className="hover:bg-blue-500/10 focus:bg-blue-500/10 transition-colors duration-200"
              >
                <motion.div 
                  className="flex items-center"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  {React.createElement(type.icon, { 
                    className: "w-4 h-4 mr-2 text-blue-400" 
                  })}
                  {type.label}
                </motion.div>
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </motion.div>

      {/* Tone Selector */}
      <motion.div
        initial={{ x: 20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="group"
      >
        <label className="flex items-center gap-2 text-sm font-medium text-gray-300 mb-2 group-hover:text-purple-400 transition-colors duration-200">
          <Wand2 className="w-4 h-4" />
          Content Tone
        </label>
        <Select onValueChange={onToneChange} value={selectedTone}>
          <SelectTrigger 
            className="w-full bg-gray-700/50 border-gray-600 hover:border-purple-500/50 rounded-xl 
                       shadow-lg transition-all duration-300 hover:shadow-purple-500/10 hover:bg-gray-700/70
                       focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50"
          >
            <SelectValue placeholder="Select content tone" />
          </SelectTrigger>
          <SelectContent className="bg-gray-800/95 backdrop-blur-lg border-gray-700">
            {toneOptions.map((tone: ToneOption) => (
              <SelectItem 
                key={tone.value} 
                value={tone.value}
                className="hover:bg-purple-500/10 focus:bg-purple-500/10 transition-colors duration-200"
              >
                <motion.div
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  {tone.label}
                </motion.div>
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </motion.div>
    </motion.div>
  );
} 