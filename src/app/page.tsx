"use client";

import { questionsAtom, topicAtom } from "@/atoms/interviewAtom";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Spinner } from "@/components/ui/spinner";
import { generateInterviewQuestions } from "@/lib/gemini";
import clsx from "clsx";
import { useAtom, useSetAtom } from "jotai";
import { useRouter } from "next/navigation";
import { useState } from "react";

type SelectListProps<T extends string | number> = {
  options: T[];
  selected: T | null;
  onSelect: (value: T) => void;
  renderLabel?: (value: T) => string;
};

const SelectList = <T extends string | number>({
  options,
  selected,
  onSelect,
  renderLabel,
}: SelectListProps<T>) => (
  <div className="flex flex-col gap-4">
    {options.map((item) => (
      <Button
        key={item}
        className={clsx(
          "h-14 font-bold text-lg",
          selected === item && "border-2 border-primary"
        )}
        variant="outline"
        onClick={() => onSelect(item)}
      >
        {renderLabel ? renderLabel(item) : item}
      </Button>
    ))}
  </div>
);

const Home = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedCount, setSelectedCount] = useState<number | null>(null);
  const [selectedTopic, setSelectedTopic] = useAtom(topicAtom);
  const setQuestions = useSetAtom(questionsAtom);

  const isFirstStep = 0 >= currentStep;
  const isNextDisabled =
    (isFirstStep && !selectedTopic) || (!isFirstStep && !selectedCount);

  const handlePrev = () => {
    setCurrentStep(0);
    setSelectedCount(null);
  };

  const handleNext = async () => {
    if (selectedTopic && selectedCount) {
      setLoading(true);

      const questions = await generateInterviewQuestions(
        selectedTopic,
        selectedCount
      );
      setLoading(false);

      if (questions) {
        setQuestions(questions);

        router.push("/interview");
      }
    } else {
      setCurrentStep(1);
    }
  };

  return (
    <div className="flex flex-col min-h-dvh">
      <div className="flex-1">
        <div className="pt-6 pb-8 bg-white">
          <Progress className="mb-8" value={isFirstStep ? 50 : 100} />

          <p className="font-bold text-2xl break-keep">
            {isFirstStep
              ? "면접 주제를 선택해 주세요."
              : "질문 개수를 선택해 주세요."}
          </p>
        </div>

        <div className="flex flex-col gap-4">
          {isFirstStep ? (
            <SelectList
              options={["공통", "React", "Next.js"]}
              selected={selectedTopic}
              onSelect={setSelectedTopic}
            />
          ) : (
            <SelectList
              options={[10, 20, 30]}
              selected={selectedCount}
              onSelect={setSelectedCount}
              renderLabel={(value) => `${value}개`}
            />
          )}
        </div>
      </div>

      <div className="flex gap-4 py-8 bg-white">
        {!isFirstStep && (
          <Button
            className="flex-1 h-14 font-bold text-lg"
            onClick={handlePrev}
          >
            이전
          </Button>
        )}

        <Button
          className="flex-1 h-14 font-bold text-lg"
          disabled={isNextDisabled || loading}
          onClick={handleNext}
        >
          {isFirstStep ? "다음" : "면접 시작"}
        </Button>
      </div>

      {loading && (
        <div className="fixed inset-0 flex items-center justify-center bg-white/70 z-50">
          <Spinner className="w-12 h-12" />
        </div>
      )}
    </div>
  );
};

export default Home;
