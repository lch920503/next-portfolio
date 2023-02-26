import ProjectItem from "./ProjectItem";

export default function ProjectList({ data }) {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen pt-4">
      <h2 className="text-4xl font-bold sm:text-6xl">
        총 프로젝트: {data.results.length}개
      </h2>
      <span className="block mt-4 dark:text-white">
        아래의 프로젝트 모두 <strong className="underline">참여도 100%</strong>
        의 작업물입니다.
      </span>
      <strong className="mt-4 text-center break-keep dark:text-white">
        Next.js 1개, React.js 2개, Javascript 3개, jQuery 1개
      </strong>
      <ul className="max-w-screen-sm sm:max-w-screen-lg lg:w-3/4 grid grid-cols-1 gap-8 p-8 m-4 lg:grid-cols-2">
        {data.results.map((project) => (
          <ProjectItem key={project.id} data={project} />
        ))}
      </ul>
    </section>
  );
}
