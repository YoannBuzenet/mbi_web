// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default (req, res) => {
  if (req.method === "POST") {
    console.log(req.body);
    res.statusCode = 200;
    res.end("On a bien reçu le POST avec ça dedans : ", req.body);
  } else {
    res.statusCode = 404;
    res.end("This endpoint doesn't exist.");
  }
};

// axios
//   .post("https://www.google.com/recaptcha/api/siteverify", {
//     secret: process.env.NEXT_PUBLIC_CLIENTSIDE_RECAPTCHA_KEY,
//     response: token,
//   })
//   .then((googleResp) => console.log(googleResp));
