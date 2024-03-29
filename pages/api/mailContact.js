// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from "axios";
import mailing from "../../server/mailing";

export default (req, res) => {
  let userData;
  if (req.method === "POST") {
    userData = req.body;
    console.log(req.body);
    let config = {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded; charset=utf-8",
      },
    };
    axios
      .post(
        "https://www.google.com/recaptcha/api/siteverify?secret=" +
          process.env.SERVERSIDE_RECAPTCHA_KEY +
          "&response=" +
          req.body.token,
        {},
        config
      )
      .then((googleResp) => {
        if (googleResp.data.success) {
          //On envoie le mail ici
          mailing.mailLeadToAdmin(userData);
          res.statusCode = 200;
          res.end();
        } else {
          console.log(googleResp);
          res.statusCode = 500;
          res.end("Message couldn't be posted.");
        }
      });
  } else {
    res.statusCode = 404;
    res.end("This endpoint doesn't exist.");
  }
};
