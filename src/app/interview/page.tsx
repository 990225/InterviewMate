"use client";

import { questionsAtom } from "@/atoms/interviewAtom";
import { useAtomValue } from "jotai";
import { useEffect } from "react";

const InterviewPage = () => {
  const questions = useAtomValue(questionsAtom);

  useEffect(() => {
    console.log(questions);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <div>Interview Page</div>;
};

export default InterviewPage;
