export default function AboutMe() {
  return (
    <>
      <section className="text-gray-600 body-font w-5/6 mx-auto">
        <div className="text-center w-full py-5">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
            경력사항
          </h1>
        </div>
        <ol className="container px-5 py-6 pb-24 mx-auto">
          <li className="flex items-center border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
            <div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center bg-indigo-100 text-indigo-500 flex-shrink-0 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="sm:w-16 sm:h-16 w-10 h-10"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 8.25V18a2.25 2.25 0 002.25 2.25h13.5A2.25 2.25 0 0021 18V8.25m-18 0V6a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 6v2.25m-18 0h18M5.25 6h.008v.008H5.25V6zM7.5 6h.008v.008H7.5V6zm2.25 0h.008v.008H9.75V6z"
                />
              </svg>
            </div>
            <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
              <h2 className="text-gray-900 text-lg title-font font-medium mb-2">
                (주)디프라이 <sub>2021. 11 ~ 2022. 11 (1년 1개월)</sub>
              </h2>
              <p className="leading-relaxed text-base">
                사원/팀원
                <br />
                웹, 웹앱 퍼블리싱 진행 (스크롤 모션, javascript, 반응형 등)
                <br />
                주요직무: 웹퍼블리싱, 앱퍼블리싱, 인터랙션 구현 등
              </p>
            </div>
          </li>
          <li className="flex items-center border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
            <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
              <h2 className="text-gray-900 text-lg title-font font-medium mb-2">
                (주)이브리지코리아 <sub>2017. 07 ~ 2020. 07 (3년 1개월)</sub>
              </h2>
              <p className="leading-relaxed text-base">
                관리부 주임/계장
                <br />
                제품 발주, 입고 상황 체크, 입고 단가와 수량 파악, 3~6개월 분
                예상 소요량 파악, 월별/분기별 매출액 등 파악 및 정리.
                <br />
                주요직무: 상품입출고, 자재구매, 구매관리
              </p>
            </div>
            <div className="sm:w-32 sm:order-none order-first sm:h-32 h-20 w-20 sm:ml-10 inline-flex items-center justify-center bg-indigo-100 text-indigo-500 flex-shrink-0 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="sm:w-16 sm:h-16 w-10 h-10"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.666 3.888A2.25 2.25 0 0013.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 01-.75.75H9a.75.75 0 01-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 01-2.25 2.25H6.75A2.25 2.25 0 014.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 011.927-.184"
                />
              </svg>
            </div>
          </li>
          <li className="flex items-center sm:flex-row flex-col">
            <div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center bg-indigo-100 text-indigo-500 flex-shrink-0 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="sm:w-16 sm:h-16 w-10 h-10"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.666 3.888A2.25 2.25 0 0013.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 01-.75.75H9a.75.75 0 01-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 01-2.25 2.25H6.75A2.25 2.25 0 014.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 011.927-.184"
                />
              </svg>
            </div>
            <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
              <h2 className="text-gray-900 text-lg title-font font-medium mb-2">
                한국쥬맥스 <sub>2016. 01 ~ 2017. 03 (1년 3개월)</sub>
              </h2>
              <p className="leading-relaxed text-base">
                영업1팀 사원(연구원)/팀원
                <br />
                백화점 채널 (롯데백화점/ AK백화점/ 갤러리아 백화점) 발주 담당,
                월 별 매입/매출 마감, 재고 확인, 상품 입/출고 관리.
                <br />
                주요직무: 영업지원, 영업관리
              </p>
            </div>
          </li>
        </ol>
      </section>

      <section className="text-gray-600 body-font w-5/6 mx-auto">
        <div className="container px-5 py-5 pb-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
              SKILLS
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              능숙하거나 생소한 개념은 찾아서 사용할 수 있는 수준의
              기술들입니다.
            </p>
          </div>
          <ul className="flex flex-wrap -m-2">
            <li className="p-2 lg:w-1/3 md:w-1/2 w-full">
              <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                <img
                  alt="html"
                  className="w-16 h-16 object-cover object-center flex-shrink-0 mr-4"
                  src="./images/html.png"
                />
                <div className="flex-grow">
                  <h2 className="text-gray-900 title-font font-medium">
                    HTML5
                  </h2>
                  <p className="text-gray-500 break-keep">
                    웹표준, 시멘틱 마크업을 이용한 다양한 레이아웃 구현 가능
                  </p>
                </div>
              </div>
            </li>
            <li className="p-2 lg:w-1/3 md:w-1/2 w-full">
              <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                <img
                  alt="css"
                  className="w-16 h-16 object-cover object-center flex-shrink-0 mr-4"
                  src="./images/css.png"
                />
                <div className="flex-grow">
                  <h2 className="text-gray-900 title-font font-medium">CSS3</h2>
                  <p className="text-gray-500 break-keep">
                    반응형 구현 가능
                    <br />
                    animation/transition 등 다양한 인터랙션 구현 가능
                  </p>
                </div>
              </div>
            </li>
            <li className="p-2 lg:w-1/3 md:w-1/2 w-full">
              <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                <img
                  alt="javascript"
                  className="w-16 h-16 object-cover object-center flex-shrink-0 mr-4"
                  src="./images/javascript.png"
                />
                <div className="flex-grow">
                  <h2 className="text-gray-900 title-font font-medium">
                    Javascript ES6
                  </h2>
                  <p className="text-gray-500 break-keep">
                    DOM 조작 가능
                    <br />
                    기본적인 문법 숙지
                    <br />
                    동적인 페이지 구현 가능
                  </p>
                </div>
              </div>
            </li>
            <li className="p-2 lg:w-1/3 md:w-1/2 w-full">
              <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                <img
                  alt="greensock"
                  className="w-16 h-16 object-cover object-center flex-shrink-0 mr-4"
                  src="./images/greensock.png"
                />
                <div className="flex-grow">
                  <h2 className="text-gray-900 title-font font-medium">GSAP</h2>
                  <p className="text-gray-500 break-keep">
                    기본적인 사용법 숙지
                    <br />
                    스크롤 모션 구현 가능
                    <br />
                    반응형 작업 구현 가능
                  </p>
                </div>
              </div>
            </li>
            <li className="p-2 lg:w-1/3 md:w-1/2 w-full">
              <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                <img
                  alt="Tailwind CSS"
                  className="w-16 h-16 object-cover object-center flex-shrink-0 mr-4"
                  src="./images/tailwind.png"
                />
                <div className="flex-grow">
                  <h2 className="text-gray-900 title-font font-medium">
                    Tailwind CSS
                  </h2>
                  <p className="text-gray-500 break-keep">
                    기본적인 사용법 숙지
                    <br />
                    다양한 스타일링 가능
                  </p>
                </div>
              </div>
            </li>
            <li className="p-2 lg:w-1/3 md:w-1/2 w-full">
              <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                <img
                  alt="React"
                  className="w-16 h-16 object-cover object-center flex-shrink-0 mr-4"
                  src="./images/react.png"
                />
                <div className="flex-grow">
                  <h2 className="text-gray-900 title-font font-medium">
                    React
                  </h2>
                  <p className="text-gray-500">
                    React Router를 이용하여 SPA 구현 가능
                    <br />
                    CSR에 대한 이해 <br />
                    함수형 컴포넌트 사용 가능
                    <br />
                    React Hooks에 대한 이해
                  </p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </section>

      <section className="text-gray-600 body-font w-5/6 mx-auto">
        <div className="container px-5 py-5 pb-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
              STUDY
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              꾸준히 공부중이거나 배우고 싶은 것들입니다.
            </p>
          </div>
          <ul className="flex flex-wrap -m-2">
            <li className="p-2 lg:w-1/3 md:w-1/2 w-full">
              <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                <img
                  alt="React"
                  className="w-16 h-16 object-cover object-center flex-shrink-0 mr-4"
                  src="./images/react.png"
                />
                <div className="flex-grow">
                  <h2 className="text-gray-900 title-font font-medium">
                    React
                  </h2>
                  <p className="text-gray-500 break-keep">
                    다수의 프로젝트를 경험하여 능숙해지는 것을 목표로 하고
                    있습니다.
                  </p>
                </div>
              </div>
            </li>
            <li className="p-2 lg:w-1/3 md:w-1/2 w-full">
              <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                <img
                  alt="NextJS"
                  className="w-16 h-16 object-cover object-center flex-shrink-0 mr-4"
                  src="./images/nextjs.png"
                />
                <div className="flex-grow">
                  <h2 className="text-gray-900 title-font font-medium">
                    NextJS
                  </h2>
                  <p className="text-gray-500 break-keep">
                    SSR에 대한 기본적인 이해도는 있습니다. 다수의 프로젝트를
                    경험하여 능숙해지는 것을 목표로 하고 있습니다.
                  </p>
                </div>
              </div>
            </li>
            <li className="p-2 lg:w-1/3 md:w-1/2 w-full">
              <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                <img
                  alt="Typescript"
                  className="w-16 h-16 object-cover object-center flex-shrink-0 mr-4"
                  src="./images/typescript.png"
                />
                <div className="flex-grow">
                  <h2 className="text-gray-900 title-font font-medium">
                    Typescript
                  </h2>
                  <p className="text-gray-500 break-keep">
                    더 크고 안정적인 프로젝트 구현을 위해 프로젝트에 적용하며
                    지속적으로 사용하는 것이 목표입니다.
                  </p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}
