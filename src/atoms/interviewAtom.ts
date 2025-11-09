import { Question } from "@/types/interview";
import { atom } from "jotai";

export const topicAtom = atom<string | null>(null);
export const questionsAtom = atom<Question[] | null>(
  // null
  [
    {
      question:
        "자바스크립트의 이벤트 루프(Event Loop)에 대해 설명하고, 비동기 처리가 어떻게 동작하는지 설명해주세요.",
      answer:
        "이벤트 루프는 콜 스택, 힙, 태스크 큐 등을 활용하여 JS의 비동기 단일 스레드 실행을 관리합니다. 비동기 함수는 태스크 큐로 이동했다가 콜 스택이 비면 실행됩니다.",
      keyword: "이벤트 루프, 콜 스택, 태스크 큐, 비동기",
    },
    {
      question:
        "CSS의 특정성(Specificity) 개념에 대해 설명하고, 박스 모델(Box Model)의 구성 요소는 무엇인가요?",
      answer:
        "특정성은 어떤 CSS 규칙이 요소에 적용될지 결정하는 우선순위입니다. 박스 모델은 Content, Padding, Border, Margin으로 구성됩니다.",
      keyword: "CSS 특정성, 박스 모델, Content, Padding, Border, Margin",
    },
    {
      question:
        "웹 접근성(Web Accessibility)이 왜 중요하며, 이를 개선하기 위한 실제적인 방법 몇 가지를 제시해주세요.",
      answer:
        "모든 사용자가 웹 콘텐츠에 동등하게 접근할 수 있도록 하기 위함입니다. 시맨틱 HTML, ARIA 속성, 키보드 내비게이션 지원, 명확한 포커스 표시 등으로 개선합니다.",
      keyword: "웹 접근성, 시맨틱 HTML, ARIA, 키보드 내비게이션",
    },
    {
      question:
        "프론트엔드 성능 최적화를 위해 어떤 노력을 해보셨고, 주요 지표들은 무엇이라고 생각하시나요?",
      answer:
        "이미지 최적화, 코드 스플리팅, 레이지 로딩, 브라우저 캐싱 활용 등을 시도했습니다. 주요 지표로는 LCP, FID, CLS 같은 Core Web Vitals가 있습니다.",
      keyword: "성능 최적화, Core Web Vitals, 이미지 최적화, 코드 스플리팅",
    },
    {
      question:
        "SPA(Single Page Application)에서 상태 관리(State Management)의 중요성에 대해 설명하고, 어떤 상태 관리 라이브러리나 패턴을 사용해보셨나요?",
      answer:
        "앱 전체의 일관된 데이터 흐름을 유지하고 컴포넌트 간 데이터 공유를 용이하게 합니다. React Context API, Redux 등을 사용해봤습니다.",
      keyword: "상태 관리, SPA, Context API, Redux",
    },
    {
      question:
        "웹 브라우저에서 데이터를 저장하는 방법에는 어떤 것들이 있으며, 각각의 특징과 사용 사례에 대해 설명해주세요.",
      answer:
        "LocalStorage, SessionStorage, Cookie 등이 있습니다. LocalStorage는 영구 저장, SessionStorage는 세션 기간 저장, Cookie는 서버 통신에 사용됩니다.",
      keyword: "LocalStorage, SessionStorage, Cookie, 데이터 저장",
    },
    {
      question:
        "CORS(Cross-Origin Resource Sharing)는 무엇이며, 개발 시 CORS 에러를 마주쳤을 때 어떻게 해결하셨는지 경험을 공유해주세요.",
      answer:
        "다른 Origin의 리소스 요청을 허용/제한하는 메커니즘입니다. 백엔드 설정 변경 (Allow-Origin 헤더), 프록시 서버 설정 등으로 해결했습니다.",
      keyword: "CORS, Origin, 프록시, Access-Control-Allow-Origin",
    },
    {
      question:
        "자바스크립트의 이벤트 위임(Event Delegation) 패턴에 대해 설명하고, 이를 언제 사용하는 것이 효과적인가요?",
      answer:
        "부모 요소에 이벤트 핸들러를 하나만 등록하여 자식 요소들의 이벤트를 처리하는 방식입니다. 동적으로 추가되는 요소나 많은 요소에 이벤트를 바인딩할 때 효과적입니다.",
      keyword: "이벤트 위임, 이벤트 핸들러, DOM, 성능 최적화",
    },
    {
      question:
        "반응형 웹 디자인(Responsive Web Design)을 구현하기 위한 핵심 기술과 고려사항은 무엇인가요?",
      answer:
        "미디어 쿼리, 유연한 그리드 시스템, 가변 이미지 사용이 핵심 기술입니다. 모바일 우선 접근, 성능 최적화, 터치 인터페이스 고려 등이 중요합니다.",
      keyword: "반응형 웹, 미디어 쿼리, 모바일 우선, 유연한 그리드",
    },
    {
      question:
        "프론트엔드 프로젝트에서 번들러(Bundler)를 사용하는 주된 이유는 무엇이며, 어떤 번들러를 사용해보셨나요?",
      answer:
        "여러 파일들을 하나로 묶어 브라우저가 이해할 수 있는 형태로 변환하고, 성능 최적화, 모듈 관리, 개발 생산성 향상을 위해 사용합니다. Webpack, Vite 등을 사용했습니다.",
      keyword: "번들러, Webpack, Vite, 모듈 번들링, 성능 최적화",
    },
  ]
);
