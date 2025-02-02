import React from "react";
import { Image, Check, Trash2 } from "lucide-react";

interface ImageUploadProps {
  image: File | null;
  uploadedImages: File[];
  onImageUpload: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onRemoveImage: (index: number) => void;
  onShowImage: (img: File) => void;
}

export function ImageUpload({
  image,
  uploadedImages,
  onImageUpload,
  onRemoveImage,
  onShowImage,
}: ImageUploadProps) {
  return (
    <div className="p-4 bg-gray-700/30 rounded-xl">
      <label className="block text-sm font-medium text-gray-300 mb-3">
        Upload Image
      </label>
      <div className="flex flex-col sm:flex-row items-center gap-4">
        <input
          type="file"
          accept="image/*"
          onChange={onImageUpload}
          className="hidden"
          id="image-upload"
          multiple
        />
        <label
          htmlFor="image-upload"
          className="flex items-center gap-2 px-4 py-2 bg-gray-700/50 rounded-xl cursor-pointer hover:bg-gray-700/70 transition-all duration-200"
        >
          <Image className="w-5 h-5" />
          <span>Choose Images</span>
        </label>
        {image && (
          <span className="flex items-center text-sm text-gray-400">
            <Check className="w-4 h-4 mr-2 text-green-500" />
            Image Selected
          </span>
        )}
      </div>

      {/* Image Preview Grid */}
      {uploadedImages.length > 0 && (
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-4">
          {uploadedImages.map((img, index) => (
            <div key={index} className="relative group">
              <img
                src={URL.createObjectURL(img)}
                alt={`Upload ${index + 1}`}
                className="w-full h-32 object-cover rounded-lg"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-200 rounded-lg flex items-center justify-center gap-2">
                <button
                  onClick={() => onShowImage(img)}
                  className="p-2 bg-blue-500/80 rounded-full hover:bg-blue-500"
                >
                  <Image className="w-4 h-4" />
                </button>
                <button
                  onClick={() => onRemoveImage(index)}
                  className="p-2 bg-red-500/80 rounded-full hover:bg-red-500"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
} 