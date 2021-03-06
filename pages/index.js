import Head from 'next/head';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Results from '../components/Results';

export default function Home({ results }) {
  return (
    <div>
      <Head>
        <title>NEWS API</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Navbar />
      <Results key={results} results={results} />
      <Footer />
    </div>
  );
}

export async function getServerSideProps(context) {
  const url = `https://newsapi.org/v2/top-headlines?country=id&apiKey=3973066b06bc4a10b3b1348bfc00abd5`;

  const res = await fetch(url);
  const data = await res.json();
  return {
    props: {
      results: data.articles,
    },
  };
}
