interface InstagramStoryMockProps {
  content: string;
}

export function InstagramStoryMock({ content }: InstagramStoryMockProps) {
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
} 