import { GoogleGenAI } from "@google/genai";
import { RESUME_DATA } from "../types";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY || "" });

const SYSTEM_INSTRUCTION = `
You are the AI assistant for Amit Raj's personal portfolio. 
Your goal is to answer questions about Amit Raj strictly based on his resume data provided below.
If a question is asked that is not covered by the resume data, politely inform the user that you only have information about Amit's professional background and resume.

RESUME DATA:
Name: ${RESUME_DATA.name}
Role: ${RESUME_DATA.role}
Education: ${RESUME_DATA.education}
Career Goal: ${RESUME_DATA.goal}

SKILLS:
${RESUME_DATA.skills.map(s => `- ${s.name} (${s.category})`).join('\n')}

PROJECTS:
${RESUME_DATA.projects.map(p => `- ${p.title}: ${p.description} (Tech: ${p.tags.join(', ')})`).join('\n')}

CONTACT:
Email: ${RESUME_DATA.contact.email}
GitHub: ${RESUME_DATA.contact.github}
LinkedIn: ${RESUME_DATA.contact.linkedin}

Keep your responses professional, concise, and helpful.
`;

export async function getChatResponse(message: string, history: { role: 'user' | 'model', parts: { text: string }[] }[]) {
  const model = "gemini-3-flash-preview";
  
  const chat = ai.chats.create({
    model,
    config: {
      systemInstruction: SYSTEM_INSTRUCTION,
    },
    history: history
  });

  const result = await chat.sendMessage({ message });
  return result.text;
}
