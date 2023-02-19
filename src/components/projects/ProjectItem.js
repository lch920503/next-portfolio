import Image from "next/image";

export default function ProjectItem({ data }) {
  const title = data.properties.name.title[0].plain_text;
  const tags = data.properties.tags.multi_select;
  const imgSrc = data.cover.file?.url || data.cover.external.url;
  const url = data.properties.URL.url;
  const github = data.properties.github.url;
  const filelist = data.properties.filelist.url;
  const skills = data.properties.skills.rich_text[0]?.plain_text;
  const layout = data.properties.layout.rich_text[0]?.plain_text;

  return (
    <li className="project-card mb-3 rounded-xl overflow-hidden">
      <Image
        className="rounded-t-xl w-full h-60 object-cover"
        src={imgSrc}
        width="500"
        height="500"
        alt="Cover Image"
        quality={100}
      />
      <div className="p-4">
        <strong className="block mb-2">{title}</strong>
        {github && (
          <span className="block mb-1">
            <a
              href={github}
              className="inline-block font-bold dark:text-white text-slate-500 dark:bg-slate-400 bg-slate-200 px-2 py-1 rounded-lg"
              target="_blank"
            >
              Repository 보러가기
            </a>
          </span>
        )}
        <span className="block mb-1">
          <a
            href={url}
            className="inline-block font-bold dark:text-white text-slate-500 dark:bg-slate-400 bg-slate-200 px-2 py-1 rounded-lg"
            target="_blank"
          >
            프로젝트 보러가기
          </a>
        </span>
        {filelist && (
          <span className="block mb-1">
            <a
              href={filelist}
              className="inline-block font-bold dark:text-white text-slate-500 dark:bg-slate-400 bg-slate-200 px-2 py-1 rounded-lg"
              target="_blank"
            >
              filelist 보러가기 (원본, 링크연결 x)
            </a>
          </span>
        )}
        <span>{skills}</span>
        <span className="tags flex flex-wrap">
          {tags.map((tag) => (
            <span
              key={tag.id}
              className={tag.name.split(".").join("").toLowerCase()}
            >
              {tag.name}
            </span>
          ))}
        </span>
        <span className="block mt-1">{layout}</span>
      </div>
    </li>
  );
}
