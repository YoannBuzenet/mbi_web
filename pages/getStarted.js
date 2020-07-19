import Navbar from "../components/Navbar";
import Head from "next/head";

const GetStarted = () => {
  return (
    <>
      <Head>
        <title>MTG Interface</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;531;600;700;800;900&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <Navbar />
      <p>Get Started</p>
    </>
  );
};

export default GetStarted;
