"use client";

import { questionsAtom } from "@/atoms/interviewAtom";
import { loadingAtom } from "@/atoms/uiAtom";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Textarea } from "@/components/ui/textarea";
import { useAtom } from "jotai";
import { useState } from "react";

const InterviewPage = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [loading, setLoading] = useAtom(loadingAtom);
  const [questions, setQuestions] = useAtom(questionsAtom);

  const handlePrev = () => {
    setCurrentStep((prev) => prev - 1);
  };

  const handleNext = async () => {
    if (9 > currentStep) {
      setCurrentStep((prev) => prev + 1);
    } else {
      setLoading(true);

      await new Promise((resolve) => setTimeout(resolve, 2000));

      setLoading(false);
    }
  };

  if (!questions) {
    return null;
  }

  return (
    <div className="flex flex-col py-8 min-h-dvh">
      <Progress className="mb-8" value={(currentStep + 1) * 10} />

      <p className="mb-8 font-bold text-2xl break-keep">
        {questions[currentStep].question}
      </p>

      <Textarea
        className="flex-1 mb-8 resize-none"
        placeholder="답변을 입력해 주세요."
      />

      <div className="flex gap-4 mb-4">
        <Button
          className="flex-1 h-14 font-bold text-lg"
          onClick={() => alert(questions[currentStep].keyword)}
        >
          키워드 힌트
        </Button>

        <Button
          className="flex-1 h-14 font-bold text-lg"
          onClick={() => alert(questions[currentStep].answer)}
        >
          예시 정답
        </Button>
      </div>

      <div className="flex gap-4">
        {currentStep > 0 && (
          <Button
            className="flex-1 h-14 font-bold text-lg"
            onClick={handlePrev}
          >
            이전
          </Button>
        )}

        <Button
          className="flex-1 h-14 font-bold text-lg"
          disabled={loading}
          onClick={handleNext}
        >
          {9 > currentStep ? "다음" : "결과 보기"}
        </Button>
      </div>
    </div>
  );
};

export default InterviewPage;
