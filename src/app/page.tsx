"use client";

import { questionsAtom, topicAtom } from "@/atoms/interviewAtom";
import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";
import { generateInterviewQuestions } from "@/lib/gemini";
import clsx from "clsx";
import { useAtom, useSetAtom } from "jotai";
import { useRouter } from "next/navigation";
import { useState } from "react";

const Home = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [selectedTopic, setSelectedTopic] = useAtom(topicAtom);
  const setQuestions = useSetAtom(questionsAtom);

  const handleStartInterview = async () => {
    setLoading(true);
    const questions = await generateInterviewQuestions(selectedTopic!);
    setLoading(false);

    if (questions) {
      setQuestions(questions);
      router.push("/interview");
    }
  };

  return (
    <>
      <div className="flex flex-col min-h-dvh">
        <div className="flex-1">
          <p className="my-8 font-bold text-2xl break-keep">
            면접 주제를 선택해 주세요.
          </p>

          <div className="flex flex-col gap-4">
            {["공통", "React", "Next.js"].map((topic) => (
              <Button
                key={topic}
                className={clsx(
                  "h-14 font-bold text-lg",
                  selectedTopic === topic && "border-2 border-primary"
                )}
                variant="outline"
                onClick={() => setSelectedTopic(topic)}
              >
                {topic}
              </Button>
            ))}
          </div>
        </div>

        <Button
          className="my-8 h-14 font-bold text-lg"
          disabled={!selectedTopic || loading}
          onClick={handleStartInterview}
        >
          면접 시작
        </Button>
      </div>

      {loading && (
        <div className="fixed inset-0 flex items-center justify-center bg-white/70 z-50">
          <Spinner className="w-12 h-12" />
        </div>
      )}
    </>
  );
};

export default Home;
