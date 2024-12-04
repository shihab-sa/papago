// src/App.js
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const VoiceTalk = () => {
  const navigate = useNavigate();
  const [transcription, setTranscription] = useState("");
  const [translatedText, setTranslatedText] = useState("");
  const [isListening, setIsListening] = useState(false);

  // Speech Recognition Setup
  const startListening = () => {
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;
    const recognition = new SpeechRecognition();
    recognition.lang = "bn-BD"; // Set the language to Bengali
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;

    recognition.start();

    recognition.onstart = () => {
      setIsListening(true);
      console.log("Voice recognition started.");
    };

    recognition.onresult = (event) => {
      const spokenText = event.results[0][0].transcript;
      setTranscription(spokenText);
      translateText(spokenText);
    };

    recognition.onerror = (event) => {
      console.error("Speech recognition error:", event.error);
    };

    recognition.onend = () => {
      setIsListening(false);
      console.log("Voice recognition ended.");
    };
  };

  // Translation API Request (replace with your preferred translation API)
  const translateText = async (text) => {
    try {
      const response = await axios.get(
        "https://api.mymemory.translated.net/get",
        {
          params: {
            q: text,
            langpair: "bn|en", // Translate from Bengali to English
          },
        }
      );
      const translated = response.data.responseData.translatedText;
      setTranslatedText(translated);
      speakTranslation(translated);
    } catch (error) {
      console.error("Error during translation:", error);
    }
  };

  // Speech Synthesis for Translation
  const speakTranslation = (text) => {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "en-US";
    window.speechSynthesis.speak(utterance);
  };

  return (
    <div>
      <button
        onClick={() => navigate(-1)}
        className="btn btn-secondary ml-36 mt-10"
      >
        <ArrowLeft />
        Go back
      </button>
      <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
        <span className="loading loading-ring loading-lg"></span>
        <button
          onClick={startListening}
          className={` mt-20 px-6 py-3 rounded-sm text-white  ${
            isListening ? " bg-indigo-500" : "bg-blue-500"
          } transition-all duration-300 ease-in-out hover:bg-blue-600`}
        >
          {isListening ? "Listening..." : "Press to Speak Bengali"}
        </button>

        <div className="mt-8 p-6 bg-white shadow-md rounded-lg w-96">
          <p className="text-lg font-semibold text-gray-700 mb-2">
            Transcribed Bengali:
          </p>
          <p className="text-gray-600 mb-4">
            {transcription || "Your transcribed text will appear here..."}
          </p>
          <p className="text-lg font-semibold text-gray-700 mb-2">
            Translated English:
          </p>
          <p className="text-gray-600">
            {translatedText || "Your translated text will appear here..."}
          </p>
        </div>
      </div>
    </div>
  );
};

export default VoiceTalk;
