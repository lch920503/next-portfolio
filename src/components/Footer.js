import Link from "next/link";

export default function Footer() {
  return (
    <footer className="body-font">
      <div className="container px-5 py-6 mx-auto flex items-center sm:flex-row flex-col">
        <Link href="/" passHref legacyBehavior>
          <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
            <span className="ml-3 text-xl">Frontend</span>
          </a>
        </Link>
        <p className="text-sm text-gray-500 sm:ml-6 sm:mt-0 mt-4">
          © 2023 LeeChaeHyeon - All right reserved
        </p>
        <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start text-sm break-keep">
          본 사이트는 상업적 목적이 아닌 개인 포트폴리오 사이트로
          제작되었습니다.
        </span>
      </div>
    </footer>
  );
}
