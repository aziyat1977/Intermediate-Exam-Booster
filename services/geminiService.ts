import { GoogleGenAI } from "@google/genai";

const getAIClient = () => {
  if (!process.env.API_KEY) {
    console.warn("API_KEY not found in environment variables.");
    return null;
  }
  return new GoogleGenAI({ apiKey: process.env.API_KEY });
};

export const askTutor = async (context: string, question: string): Promise<string> => {
  const ai = getAIClient();
  if (!ai) return "AI services are currently unavailable. Please check your configuration.";

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `Context of the lesson slide: ${context}\n\nStudent Question: ${question}\n\nProvide a helpful, encouraging, and concise answer suitable for a language learner. Use the "Surgical" persona: precise, clear, and professional.`,
    });
    return response.text || "I couldn't generate a response. Please try again.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "An error occurred while contacting the AI tutor.";
  }
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
        model: 'gemini-2.5-flash-native-audio-preview-09-2025',
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