import { atom } from "jotai";

export const topicAtom = atom<string | null>(null);
export const questionsAtom = atom<
  { question: string; answer: string; keyword: string }[] | null
>(null);
