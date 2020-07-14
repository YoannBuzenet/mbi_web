import Head from "next/head";
import Navbar from "../components/Navbar";

export default function Home() {
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

      <main>
        <div className="container">Let's build</div>
        <div className="first-liner blue">
          <div className="container">
            <div className="main-title">
              <div className="left-content">
                <h1 className="main-punchline">
                  Buying cards has never been so easy
                </h1>
              </div>
              <div className="right-content"></div>
            </div>
          </div>
        </div>
        <div className="second-liner">
          <div className="container">Yeah</div>
        </div>
      </main>

      <footer></footer>
    </>
  );
}
