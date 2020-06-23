import Container from "@/components/container";
import Layout from "@/components/layout";
import { getData } from "@/lib/data-fetch";
import Head from "next/head";
import { PROJECT_TITLE } from "@/lib/constants";
import Home from "@/components/page-home";

export default function Index({ data, headerData, preview }) {
  return (
    <>
      <Layout headerData={headerData} preview={preview}>
        <Head>
          <title>{PROJECT_TITLE}</title>
          <link rel="shortcut icon" href="/favicon.png" />
        </Head>
        <Container>
          <Home data={data} />
        </Container>
      </Layout>
    </>
  );
}

export async function getServerSideProps() {
  const data = await getData("home");
  const headerData = await getData("header");

  return {
    props: { data, headerData },
  };
}
