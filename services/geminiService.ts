import { GoogleGenAI } from "@google/genai";

const getAIClient = () => {
  if (!process.env.API_KEY) {
    console.warn("API_KEY not found in environment variables.");
    return null;
  }
  return new GoogleGenAI({ apiKey: process.env.API_KEY });
};

export const checkAudio = async (audioBlob: Blob, prompt: string): Promise<string> => {
  const ai = getAIClient();
  if (!ai) return "AI services unavailable.";

  try {
    // Convert blob to base64
    const reader = new FileReader();
    const base64Promise = new Promise<string>((resolve, reject) => {
      reader.onloadend = () => {
        if (typeof reader.result === 'string') {
           const base64String = reader.result.split(',')[1];
           resolve(base64String);
        } else {
           reject(new Error("Failed to convert blob to string"));
        }
      };
      reader.onerror = reject;
    });
    reader.readAsDataURL(audioBlob);
    const base64Audio = await base64Promise;

    const response = await ai.models.generateContent({
        model: 'gemini-flash-latest',
        contents: {
            parts: [
                {
                    inlineData: {
                        mimeType: audioBlob.type || 'audio/webm', // Use the actual mime type of the recording
                        data: base64Audio
                    }
                },
                {
                    text: `Analyze this student's speech response for the prompt: "${prompt}". 
                    1. Transcribe what they said. 
                    2. Give brief feedback on grammar and pronunciation related to the target grammar topic.
                    Keep it encouraging.`
                }
            ]
        }
    });

    return response.text || "Analysis failed.";

  } catch (error) {
    console.error("Audio Analysis Error:", error);
    return "Could not analyze audio. Please try again.";
  }
};