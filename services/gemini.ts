
import { GoogleGenAI, Type } from "@google/genai";
import { Language } from "../types";

const SYSTEM_PROMPT = `
You are DIVINEVERSE AI, an advanced spiritual knowledge and storytelling AI.
Your mission is to provide an ABSOLUTE PIN-TO-PIN, MICROSCOPIC, and EXHAUSTIVE narrative of the Ithihasas and 18 Mahā Purāṇas.

CRITICAL RULES:
- NEVER SUMMARIZE. Every dialogue, every minor character, every subtle omen, and every ritual detail must be included.
- "Pin-to-pin" means you do not skip a single micro-event from the original Sanskrit scriptures.
- Provide the story in a sequence of 8 to 12 highly detailed panels to ensure total narrative fidelity.
- If a story is long, do not compress it. Tell it in full, point-by-point.
- Each panel must contain:
    1. 'content': The microscopic narrative text.
    2. 'sloka': The original Sanskrit verse for that specific incident.
    3. 'meaning': A word-by-word and philosophical explanation in the selected language.
    4. 'visualPrompt': A prompt for an AI artist to create a 'Realistic Epic Comic Masterpiece' image.

Visual Style for prompts:
- Cinematic realism blended with high-end graphic novel art. 
- Dramatic lighting (Chiaroscuro), vibrant divine colors, intricate traditional Indian jewelry and architecture.
- Realism in faces and anatomy, but epic in composition and scale.
`;

export const getGeminiResponse = async (prompt: string, language: Language, history: {role: 'user' | 'model', text: string}[]) => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
  const chat = ai.chats.create({
    model: 'gemini-3-flash-preview',
    config: { systemInstruction: SYSTEM_PROMPT + `\n\nCURRENT LANGUAGE: ${language}` }
  });
  const response = await chat.sendMessage({ message: prompt });
  return response.text;
};

export const getChapters = async (bookId: string, language: Language) => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
  const response = await ai.models.generateContent({
    model: "gemini-3-flash-preview",
    contents: `List all specific episodes/chapters of ${bookId} in ${language}. Return JSON: { chapters: [{id, title, summary}] }.`,
    config: {
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.OBJECT,
        properties: {
          chapters: {
            type: Type.ARRAY,
            items: {
              type: Type.OBJECT,
              properties: {
                id: { type: Type.STRING },
                title: { type: Type.STRING },
                summary: { type: Type.STRING }
              }
            }
          }
        }
      }
    }
  });
  try {
    const data = JSON.parse(response.text);
    return data.chapters || [];
  } catch (e) {
    return [];
  }
};

export const getChapterContent = async (bookId: string, chapterId: string, language: Language) => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
  const response = await ai.models.generateContent({
    model: "gemini-3-flash-preview",
    contents: `Provide an EXHAUSTIVE PIN-TO-PIN narrative of '${chapterId}' from ${bookId} in ${language}. 
    Follow the original scriptures microscopic details. No summarization.
    Return JSON: { title: string, panels: [{id, content, sloka, meaning, visualPrompt}] }.
    Include 8-12 panels.`,
    config: {
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.OBJECT,
        properties: {
          title: { type: Type.STRING },
          panels: {
            type: Type.ARRAY,
            items: {
              type: Type.OBJECT,
              properties: {
                id: { type: Type.STRING },
                content: { type: Type.STRING },
                sloka: { type: Type.STRING },
                meaning: { type: Type.STRING },
                visualPrompt: { type: Type.STRING }
              },
              required: ["id", "content", "visualPrompt"]
            }
          }
        }
      }
    }
  });
  try {
    return JSON.parse(response.text);
  } catch (e) {
    return { title: "Error", panels: [] };
  }
};

export const generateSpiritualImage = async (prompt: string) => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash-image',
      contents: {
        parts: [{ text: `Hyper-realistic spiritual masterpiece, cinematic epic comic style, mythological realism, 8k resolution, intricate details, divine lighting, ancient Indian aesthetic: ${prompt}` }]
      },
      config: { imageConfig: { aspectRatio: "16:9" } }
    });
    
    const imagePart = response.candidates?.[0]?.content?.parts.find(p => p.inlineData);
    if (imagePart) {
      return `data:image/png;base64,${imagePart.inlineData.data}`;
    }
  } catch (e) {
    console.error("Image generation failed", e);
  }
  return null;
};

export const getDailyQuote = async (language: Language) => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
  const response = await ai.models.generateContent({
    model: "gemini-3-flash-preview",
    contents: `Provide a Daily Divine Quote in ${language}. Return JSON: {text, author, meaning}.`,
    config: { responseMimeType: "application/json" }
  });
  return JSON.parse(response.text);
};
