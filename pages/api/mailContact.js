// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from "axios";

export default (req, res) => {
  if (req.method === "POST") {
    console.log(req.body);
    let config = {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded; charset=utf-8",
      },
    };
    axios
      .post(
        "https://www.google.com/recaptcha/api/siteverify?secret=6Ld6W7MZAAAAANX78hgKffGvsPuMGromS-n0nb6K&response=" +
          req.body.token,
        {},
        config
      )
      .then((googleResp) => {
        if (googleResp.data.success) {
          res.statusCode = 200;
          res.end("On a bien reçu le POST avec ça dedans : ", req.body);
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
