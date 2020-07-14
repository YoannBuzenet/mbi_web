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
        <div className="first-liner">
          <div className="container">
            <div className="first-liner">
              <div className="software-image">
                <img src="/images/software_front.png" />
              </div>
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
        </div>
        <div className="second-liner">
          <div className="container">
            <div className="cards-container">
              <div className="card">
                <span className="card-title">Adjective 1</span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Mollitia ex modi fugit at expedita, fuga laboriosam doloribus in
                quos optio!
              </div>
              <div className="card">
                <span className="card-title">Adjective 2</span>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos
                veniam quasi rerum. Ipsum ipsa corrupti odit natus beatae
                perspiciatis libero?
              </div>
              <div className="card">
                <span className="card-title">Adjective 3</span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Laudantium odit error voluptatum exercitationem, harum incidunt
                facere a assumenda ipsa minus.
              </div>
            </div>
          </div>
        </div>
        <div className="third-liner">
          <div className="container">
            <h2 className="punchline">
              Fix your prices. Let the customers come.
            </h2>
            <p>
              MTG Interface enables you to fix all your buying prices for any
              MTG card : regular, foil, signed, in any condition or language.
              Your customers just have to connect, check your prices, and sell
              you their cards.
            </p>
          </div>
        </div>
      </main>

      <footer></footer>
    </>
  );
}
