import Navbar from "../components/Navbar";
import Head from "next/head";
import Footer from "../components/Footer";
import Link from "next/link";

const AboutUs = () => {
  return (
    <>
      <Head>
        <title>About Us</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;531;600;700;800;900&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <Navbar />

      <div className="aboutUs">
        <p>The MTG Interface team</p>
        <div className="profiles-container">
          <div className="profiles container768">
            <div className="yoann">
              <div className="picture">
                <img src="/images/profiles/Yoann.png" alt="" />
              </div>
              <div className="description">
                <p>Yoann Buzenet</p>
                <p>
                  Yoann worked for years in the MTG Industry. Former top seller
                  on MKM, he then worked for one of the biggest European MTG
                  shop as a buying manager and GP manager.
                </p>
              </div>
            </div>
            <div className="thomas">
              <div className="picture">
                <img src="/images/profiles/Thomas.jpg" alt="" />
              </div>
              <div className="description">
                <p>Thomas Guillot</p>
                <p>
                  Playing MTG since childhood, Thomas is also passionate about
                  technology and networks. He built several software
                  architectures around MTG projects and more.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="mkm-section">
          <div className="container768">
            <p>
              MKM Approved <span>&#10004;</span>
            </p>
            <p>
              MTG Interface is registered on{" "}
              <a href="https://www.cardmarket.com/en/Magic" target="_blank">
                MKM
              </a>{" "}
              as a 3rd party Application, which means that :{" "}
              <ul>
                <li>
                  Any transaction made with our API is registered on their
                  server.
                </li>
                <li>You can always retrace what has been made on the API.</li>
              </ul>
            </p>
          </div>
        </div>
        <div className="container768">
          <div className="contact">
            <Link href="/getStarted">
              <a type="button" className="CTA-button">
                Book a phone call and get a demo
              </a>
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default AboutUs;
