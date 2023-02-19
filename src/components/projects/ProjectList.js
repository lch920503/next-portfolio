import ProductItem from "./ProductItem";

export default function ProjectList({ data }) {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen pt-4">
      <h2 className="text-4xl font-bold sm:text-6xl">
        총 프로젝트: {data.results.length}
      </h2>
      <strong className="mt-4 text-center break-keep">
        Next.js 1개, React.js 1개, Javascript & jQuery 4개
      </strong>
      <ul className="max-w-screen-sm sm:max-w-screen-lg lg:w-3/4 grid grid-cols-1 gap-8 p-8 m-4 lg:grid-cols-2">
        {data.results.map((project) => (
          <ProductItem key={project.id} data={project} />
        ))}
      </ul>
    </section>
  );
}
