import { Question } from "@/types/interview";
import { atom } from "jotai";

export const topicAtom = atom<string | null>(null);
export const questionsAtom = atom<Question[] | null>(null);
