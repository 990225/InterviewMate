import type { Metadata } from "next";
import { ReactNode } from "react";
import { Nanum_Gothic } from "next/font/google";
import { Providers } from "@/components";
import "@/styles/globals.css";

const nanumGothic = Nanum_Gothic({ weight: ["400", "700"] });

export const metadata: Metadata = {
  title: "Interview Mate",
  description: "AI 면접 코치",
};

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html lang="ko">
      <body className={nanumGothic.className}>
        <main className="mx-auto px-4 w-full max-w-3xl min-h-dvh">
          <Providers>{children}</Providers>
        </main>
      </body>
    </html>
  );
};

export default RootLayout;
