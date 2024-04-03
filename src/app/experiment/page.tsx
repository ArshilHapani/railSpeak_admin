//@ts-nocheck

"use client";

import { useRef } from "react";

const Testing = () => {
  const recognition = useRef<SpeechRecognition | null>(null);
  const textOutputRef = useRef<HTMLParagraphElement>(null);

  // Function to handle speech recognition
  const startSpeechRecognition = () => {
    // Check if speech recognition is available in the browser
    if ("SpeechRecognition" in window || "webkitSpeechRecognition" in window) {
      recognition.current = new (window.SpeechRecognition ||
        window.webkitSpeechRecognition)();

      // Event listener for when speech is recognized
      recognition.current.onresult = (event: any) => {
        // Get the recognized text from the event
        const transcript = event.results[0][0].transcript;

        // Update the output element with the recognized text
        if (textOutputRef.current) {
          textOutputRef.current.textContent = transcript;
        }
      };

      // Start speech recognition
      recognition.current.start();
    } else {
      // Speech recognition not supported, handle accordingly
      console.error("Speech recognition not supported in this browser");
    }
  };
  return (
    <div>
      <div>
        <h1>Speech to Text Example</h1>
        <button onClick={startSpeechRecognition}>
          Start Speech Recognition
        </button>
        <p>
          Recognized Text: <span ref={textOutputRef}></span>
        </p>
      </div>
    </div>
  );
};

export default Testing;
