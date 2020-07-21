import Navbar from "../components/Navbar";
import Head from "next/head";
import Link from "next/link";
import { TextField } from "@material-ui/core";
import Footer from "../components/Footer";
import { useEffect } from "react";

const GetStarted = () => {
  function onSubmit(token) {
    document.getElementById("demo-form").submit();
  }

  useEffect(() => {
    const script = document.createElement("script");

    script.src = "https://www.google.com/recaptcha/api.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);
  return (
    <>
      <Head>
        <title>Contact us</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;531;600;700;800;900&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <Navbar />
      <div className="container">
        <div className="getStarted">
          <div className="container768">
            <h1>Contact us - We'll get back to you in 24 hours</h1>
          </div>
          <div className="container768">
            <div className="form-background">
              <form autoComplete="off">
                <div>
                  <TextField
                    id="outlined-basic"
                    label="Complete Name"
                    variant="outlined"
                    required
                    autoFocus
                    style={{ backgroundColor: "white" }}
                    InputProps={{
                      style: { padding: "1rem", fontSize: "2rem" },
                    }}
                    fullWidth
                  />
                </div>
                <div>
                  <TextField
                    id="outlined-basic"
                    label="Phone Number"
                    variant="outlined"
                    required
                    style={{ backgroundColor: "white" }}
                    InputProps={{
                      style: { padding: "1rem", fontSize: "2rem" },
                    }}
                    fullWidth
                  />
                </div>
                <div>
                  <TextField
                    id="outlined-basic"
                    label="Email"
                    variant="outlined"
                    required
                    style={{ backgroundColor: "white" }}
                    InputProps={{
                      style: { padding: "1rem", fontSize: "2rem" },
                    }}
                    fullWidth
                  />
                </div>

                <div>
                  <TextField
                    id="outlined-basic"
                    label="Name of your shop"
                    variant="outlined"
                    required
                    style={{ backgroundColor: "white" }}
                    InputProps={{
                      style: { padding: "1rem", fontSize: "2rem" },
                    }}
                    fullWidth
                  />
                </div>
                <div>
                  <TextField
                    id="outlined-basic"
                    label="Country"
                    variant="outlined"
                    required
                    style={{ backgroundColor: "white" }}
                    InputProps={{
                      style: { padding: "1rem", fontSize: "2rem" },
                    }}
                    fullWidth
                  />
                </div>
                <div>
                  <TextField
                    placeholder="Your Message (optional)"
                    multiline
                    rows={2}
                    rowsMax={4}
                    variant="outlined"
                    style={{ backgroundColor: "white" }}
                    InputProps={{
                      style: { padding: "1rem", fontSize: "1.35rem" },
                    }}
                    fullWidth
                  />
                </div>
                <button
                  data-sitekey="6Ld6W7MZAAAAANX78hgKffGvsPuMGromS-n0nb6K"
                  data-callback="onSubmit"
                  data-action="submit"
                  className="CTA-button"
                  onClick={onSubmit}
                >
                  Send
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default GetStarted;
