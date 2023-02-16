import Link from "next/link";
import Animation from "./Animation";

export default function Intro() {
  return (
    <div className="container px-5 py-2 pb-24 mx-auto flex flex-col">
      <div className="lg:w-5/6 mx-auto">
        <div className="flex flex-col sm:flex-row mt-10">
          <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
            <Animation />
            <div className="flex flex-col items-center text-center justify-center">
              <h2 className="font-bold title-font mt-4 text-gray-900 text-lg">
                Frontend, 이채현
              </h2>
              <div className="w-12 h-1 bg-indigo-500 rounded mt-2 mb-4"></div>
              <p className="text-base break-keep">
                안녕하세요. 프론트엔드 개발자 이채현입니다. <br />
                노력하는 만큼 성장할 수 있는 개발 생태계를 좋아합니다!
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-center sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
            <p className="leading-relaxed text-lg mb-4 break-keep">
              힘들고, 어렵지만 문제를 해결한 만큼 큰 성취감을 느낄 수 있는 일,
              눈에 보이는 피드백을 얻을 수 있는 일이기 때문에 흥미를 느끼고
              있습니다. 포기하지 않고 도전하며 목표를 달성해 온 경험을 통해
              지금도 성장하고 있습니다. 지치지 않고 앞으로 나아갈 준비된
              개발자입니다. 노력하는 만큼 성장할 수 있는 개발 생태계를
              좋아합니다!
            </p>
            <Link href="/projects" passHref legacyBehavior>
              <a className="w-max px-4 py-2 rounded inline-flex items-center bg-indigo-500 text-white">
                프로젝트 보러가기
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
