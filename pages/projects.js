import Head from "next/head";
import Layout from "@/components/Layout";
import axios from "axios";
import ProjectList from "@/components/projects/ProjectList";

export default function ProjectsPage({ data }) {
  console.log(data);
  return (
    <Layout>
      <Head>
        <title>채현's 포트폴리오</title>
        <meta name="description" content="데일리 코딩!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ProjectList data={data} />
    </Layout>
  );
}

export async function getServerSideProps(context) {
  const options = {
    method: "POST",
    headers: {
      accept: "application/json",
      "Notion-Version": "2022-06-28",
      "content-type": "application/json",
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_NOTION_TOKEN}`,
    },
    body: JSON.stringify({
      sorts: [
        {
          property: "이름",
          direction: "ascending",
        },
      ],
      page_size: 100,
    }),
  };

  const res = await fetch(
    `https://api.notion.com/v1/databases/${process.env.NEXT_PUBLIC_NOTION_DATABASE_ID}/query`,
    options
  );

  const data = await res.json();

  const items = data.results.map(
    (itemId) => itemId.properties.이름.title[0].plain_text
  );

  return {
    props: {
      data,
    }, // will be passed to the page component as props
  };
}
