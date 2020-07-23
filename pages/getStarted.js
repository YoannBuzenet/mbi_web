import Navbar from "../components/Navbar";
import Head from "next/head";
import Link from "next/link";
import { TextField } from "@material-ui/core";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";
import axios from "axios";
import PopUp from "../components/PopUp";

const GetStarted = () => {
  const [formData, setFormData] = useState({
    complete_name: "",
    phone_number: "",
    email: "",
    shop_name: "",
    country: "",
    message: "",
  });

  const [isPopUpDisplayed, setIsPopUpDisplayed] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    formData[name] = value;
    setFormData({ ...formData });
  };

  function checkCaptcha(e) {
    e.preventDefault();
    grecaptcha.ready(function () {
      grecaptcha
        .execute(process.env.NEXT_PUBLIC_CLIENTSIDE_RECAPTCHA_KEY, {
          action: "form_submission",
        })
        .then(function (token) {
          console.log(token);
          //Adding token to state
          formData["token"] = token;
          axios
            .post("api/mailContact", formData)
            .then((respServer) => setIsPopUpDisplayed(true))
            .catch((error) => console.log(error));
        });
    });
  }

  useEffect(() => {
    const script = document.createElement("script");

    script.src =
      "https://www.google.com/recaptcha/api.js?render=" +
      process.env.NEXT_PUBLIC_CLIENTSIDE_RECAPTCHA_KEY;
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
      {isPopUpDisplayed && (
        <PopUp
          setIsPopUpDisplayed={setIsPopUpDisplayed}
          setFormData={setFormData}
        />
      )}
      <Navbar />
      <div className="container">
        <div className="getStarted">
          <div className="container768">
            <h1>Contact us - We'll get back to you in 24 hours</h1>
          </div>
          <div className="container768">
            <div className="form-background">
              <form autoComplete="off" onSubmit={(e) => checkCaptcha(e)}>
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
                    name="complete_name"
                    value={formData.complete_name}
                    onChange={handleChange}
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
                    name="phone_number"
                    value={formData.phone_number}
                    onChange={handleChange}
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
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
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
                    name="shop_name"
                    value={formData.shop_name}
                    onChange={handleChange}
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
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
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
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                  />
                </div>
                <button className="CTA-button" type="submit">
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
