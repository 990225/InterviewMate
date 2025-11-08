import { Question } from "@/types/interview";
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.NEXT_PUBLIC_GEMINI_API_KEY });

export const generateInterviewQuestions = async (
  topic: string
): Promise<Question[] | null> => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: `나는 프론트엔드 개발자고, 너는 면접관이야. 주제는 ${topic}, 총 10개의 질문을 반드시 \`\`\`json 같은 Markdown 표시나 주석, 설명문 등 추가 텍스트 없이 순수한 JSON 배열로만 [{ "question": "질문", "answer": "간략한 예시 답변", "keyword": "필수 키워드" }] 형식으로 출력해줘.`,
    });

    return JSON.parse(response.text!.replace(/```json|```/g, "").trim());
  } catch {
    alert("문제가 발생하였습니다.\n잠시 후 다시 시도해 주세요.");

    return null;
  }
};
