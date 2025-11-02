import type { Metadata } from "next";
import "@/styles/globals.css";
import { ReactNode } from "react";
import { Providers } from "@/components";
import { Nanum_Gothic } from "next/font/google";

const nanumGothic = Nanum_Gothic({ weight: ["400"] });

export const metadata: Metadata = {
  title: "Interview Mate",
  description: "AI 면접 코치",
};

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html lang="ko">
      <body className={nanumGothic.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
};

export default RootLayout;
