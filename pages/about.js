import AboutMe from "@/src/components/about/AboutMe";
import Layout from "@/src/components/Layout";
import Head from "next/head";

export default function aboutPage() {
  return (
    <Layout>
      <Head>
        <title>채현's 포트폴리오</title>
        <meta name="description" content="데일리 코딩!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AboutMe />
    </Layout>
  );
}
