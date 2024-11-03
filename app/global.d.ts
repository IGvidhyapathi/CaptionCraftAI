interface Window {
  webkitSpeechRecognition: any; // or use a more specific type if you can define one
}

interface SpeechRecognitionResult {
  transcript: string;
  confidence: number; // confidence score of the result
}

interface SpeechRecognitionEvent {
  results: SpeechRecognitionResult[];
}

interface SpeechRecognitionError {
  error: string; // error type
}