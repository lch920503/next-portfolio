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
                꾸준히 학습해 나가야 하는 개발 생태계를 좋아합니다!
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-center sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
            <p className="leading-relaxed text-lg mb-4">
              Meggings portland fingerstache lyft, post-ironic fixie man bun
              banh mi umami everyday carry hexagon locavore direct trade art
              party. Locavore small batch listicle gastropub farm-to-table
              lumbersexual salvia messenger bag. Coloring book flannel truffaut
              craft beer drinking vinegar sartorial, disrupt fashion axe
              normcore meh butcher. Portland 90's scenester vexillologist forage
              post-ironic asymmetrical, chartreuse disrupt butcher paleo
              intelligentsia pabst before they sold out four loko. 3 wolf moon
              brooklyn.
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
