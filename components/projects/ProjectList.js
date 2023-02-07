import ProductItem from "./ProductItem";

export default function ProjectList({ data }) {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen pt-4">
      <h2 className="text-4xl font-bold sm:text-6xl">
        총 프로젝트: {data.results.length}
      </h2>
      <ul className="w-full grid lg:grid-cols-3 gap-8 p-12 m-4 md:grid-cols-2 sm:grid-cols-1">
        {data.results.map((project) => (
          <ProductItem key={project.id} data={project} />
        ))}
      </ul>
    </section>
  );
}
