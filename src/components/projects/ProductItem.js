import Image from "next/image";

export default function ProductItem({ data }) {
  const title = data.properties.이름.title[0].plain_text;
  const tags = data.properties.태그.multi_select;
  const description = data.properties.이름.title[0].text.content;
  const imgSrc = data.cover.file?.url || data.cover.external.url;
  const url = data.properties.URL.url;
  console.log(url);

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
        <strong>{title}</strong>
        <p>{description}</p>
        <span>
          배포주소 <a href={url}>{url}</a>
        </span>
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
      </div>
    </li>
  );
}
