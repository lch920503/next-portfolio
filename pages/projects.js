import Head from "next/head";
import axios from "axios";
import Layout from "@/src/components/Layout";
import ProjectList from "@/src/components/projects/ProjectList";

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

export async function getStaticProps(context) {
  const options = {
    method: "POST",
    url: `https://api.notion.com/v1/databases/${process.env.NEXT_PUBLIC_NOTION_DATABASE_ID}/query`,
    headers: {
      accept: "application/json",
      "Notion-Version": "2022-06-28",
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_NOTION_TOKEN}`,
    },
    data: {
      sorts: [
        {
          property: "name",
          direction: "ascending",
        },
      ],
      page_size: 100,
    },
  };

  const res = await axios.request(options);

  // console.log(res.data);

  return {
    props: {
      data: res.data,
    }, // will be passed to the page component as props
    revalidate: 1,
  };
}
