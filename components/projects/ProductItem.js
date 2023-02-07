import Image from "next/image";

export default function ProductItem({ data }) {
  const title = data.properties.이름.title[0].plain_text;
  const tags = data.properties.태그.multi_select;
  const description = data.properties.이름.title[0].text.content;
  const imgSrc = data.cover.file?.url || data.cover.external.url;

  return (
    <li className="mb-3 bg-slate-400 rounded-xl overflow-hidden">
      <Image
        className="rounded-t-xl w-full max-h-80 object-cover"
        src={imgSrc}
        width={100}
        height={100}
        alt="Cover Image"
      />
      <div className="p-4">
        <strong>{title}</strong>
        <p>{description}</p>
        <span>
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
