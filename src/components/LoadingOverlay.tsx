"use client";

import { loadingAtom } from "@/atoms/uiAtom";
import { useAtomValue } from "jotai";
import { Spinner } from "./ui/spinner";

const LoadingOverlay = () => {
  const loading = useAtomValue(loadingAtom);

  if (!loading) {
    return null;
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white/70 z-50">
      <Spinner className="w-12 h-12" />
    </div>
  );
};

export default LoadingOverlay;
