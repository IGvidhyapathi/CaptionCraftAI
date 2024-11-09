// components/VoiceTyper.tsx

import React, { useState, useEffect } from 'react';
import { Mic } from 'lucide-react'; // Import the microphone icon from Lucide

interface VoiceTyperProps {
  setPrompt: (text: string) => void; // Function to set the prompt
}

const VoiceTyper: React.FC<VoiceTyperProps> = ({ setPrompt }) => {
  const [isListening, setIsListening] = useState<boolean>(false);
  const recognition = typeof window !== 'undefined' ? new (window as any).webkitSpeechRecognition() : null;

  useEffect(() => {
    if (recognition) {
      recognition.interimResults = true;
      recognition.lang = 'en-US';

      recognition.onresult = (event: SpeechRecognitionEvent) => {
        const lastResultIndex = event.results.length - 1;
        const spokenText = event.results[lastResultIndex][0].transcript;
        setPrompt(spokenText); // Call setPrompt with the recognized text
      };

      recognition.onerror = (event: SpeechRecognitionError) => {
        console.error('Error occurred in recognition: ', event.error);
      };
    }
  }, [recognition, setPrompt]);

  const startListening = () => {
    if (recognition) {
      setIsListening(true);
      recognition.start();
    }
  };

  const stopListening = () => {
    if (recognition) {
      setIsListening(false);
      recognition.stop();
    }
  };

  return (
    <button
      onClick={isListening ? stopListening : startListening}
      className={`absolute right-3 top-3 text-gray-400 ${isListening ? 'text-green-500' : ''}`} // Adjust position and style
      aria-label={isListening ? 'Stop Listening' : 'Start Listening'}
    >
      <Mic size={24} />
    </button>
  );      
};

export default VoiceTyper;
