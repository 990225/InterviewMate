import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

const Home = () => {
  return (
    <div className="flex flex-col min-h-dvh">
      <div className="flex-1">
        <div className="pt-6 pb-8 bg-white">
          <Progress className="mb-8" value={50} />

          <p className="font-bold text-2xl break-keep">
            면접 주제를 선택해 주세요.
            {/* 질문 개수를 선택해 주세요. */}
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <Button
            className="h-14 font-bold text-lg border-2 border-primary"
            variant="outline"
          >
            공통
          </Button>

          <Button className="h-14 font-bold text-lg" variant="outline">
            React
          </Button>

          <Button className="h-14 font-bold text-lg" variant="outline">
            Next.js
          </Button>

          {/* <Button className="h-14 font-bold text-lg" variant="outline">
            10개
          </Button>

          <Button className="h-14 font-bold text-lg" variant="outline">
            20개
          </Button>

          <Button className="h-14 font-bold text-lg" variant="outline">
            30개
          </Button> */}
        </div>
      </div>

      <div className="pt-8 pb-8 bg-white">
        <Button className="w-full h-14 font-bold text-lg" disabled={false}>
          다음
          {/* 면접 시작 */}
        </Button>
      </div>
    </div>
  );
};

export default Home;
