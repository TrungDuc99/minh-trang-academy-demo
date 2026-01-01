
import { GoogleGenAI, Type } from "@google/genai";
import { CareerPath } from "../types";

// Always initialize with the exact process.env.API_KEY variable as per guidelines.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const analyzeCareerPath = async (userInput: string) => {
  // Using gemini-3-pro-preview for complex reasoning task of career path analysis.
  const response = await ai.models.generateContent({
    model: 'gemini-3-pro-preview',
    contents: `Bạn là AI Mentor của Minh Trang Academy - Học viện đào tạo nghề làm đẹp uy tín với triết lý "Tâm - Tầm - Tài".
    Nhiệm vụ: Phân tích thông tin người dùng và tư vấn 1 trong 5 lộ trình tối ưu 102™: 
    1. PROFESSIONAL_START: Làm nghề chuyên nghiệp (Cho người chưa có nghề hoặc muốn làm lại từ đầu).
    2. ADVANCED_SKILLS: Nâng cao tay nghề & chuyên sâu (Cho người đã có nghề, muốn giỏi hơn & đúng hơn).
    3. SPA_STARTUP: Mở tiệm an toàn & bền vững (Tôi muốn mở tiệm).
    4. INVESTMENT: Đầu tư & đồng hành hệ thống (Tôi muốn đầu tư, không cần làm nghề).
    5. INTERNATIONAL: Nghề làm đẹp quốc tế (Tôi muốn đi làm ở nước ngoài/XKLĐ).
    
    Thông tin người dùng: ${userInput}`,
    config: {
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.OBJECT,
        properties: {
          recommendedPath: {
            type: Type.STRING,
            description: "The enum value of the career path.",
          },
          reasoning: {
            type: Type.STRING,
            description: "A detailed explanation in Vietnamese focusing on the user's situation and why this path fits.",
          },
          summary: {
            type: Type.STRING,
            description: "A motivating short message in Vietnamese.",
          }
        },
        required: ["recommendedPath", "reasoning", "summary"],
      }
    }
  });

  // Extracting text from response using the .text property as recommended.
  return JSON.parse(response.text || '{}');
};

export const createMentorChat = (systemInstruction: string) => {
  return ai.chats.create({
    model: 'gemini-3-flash-preview',
    config: {
      systemInstruction: systemInstruction,
    },
  });
};
