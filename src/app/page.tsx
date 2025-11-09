"use client";

import { questionsAtom, topicAtom } from "@/atoms/interviewAtom";
import { loadingAtom } from "@/atoms/uiAtom";
import { Button } from "@/components/ui/button";
import { generateInterviewQuestions } from "@/lib/gemini";
import clsx from "clsx";
import { useAtom, useSetAtom } from "jotai";
import { useRouter } from "next/navigation";

const Home = () => {
  const router = useRouter();
  const [loading, setLoading] = useAtom(loadingAtom);
  const [selectedTopic, setSelectedTopic] = useAtom(topicAtom);
  const setQuestions = useSetAtom(questionsAtom);

  const handleStartInterview = async () => {
    setLoading(true);

    const questions = await generateInterviewQuestions(selectedTopic!);
    if (questions) {
      setQuestions(questions);
      router.push("/interview");
    }

    setLoading(false);
  };

  return (
    <div className="flex flex-col py-8 min-h-dvh">
      <div className="flex-1 mb-8">
        <p className="mb-8 font-bold text-2xl break-keep">
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
        className="h-14 font-bold text-lg"
        disabled={!selectedTopic || loading}
        onClick={handleStartInterview}
      >
        면접 시작
      </Button>
    </div>
  );
};

export default Home;
