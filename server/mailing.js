async function mailLeadToAdmin(userData) {
  let transporter = nodemailer.createTransport({
    host: process.env.SMTP_PORT,
    port: process.env.SMTP_PORT,
    secure: true, // true for 465, false for other ports
    auth: {
      user: process.env.SMTP_USER, // generated ethereal user
      pass: process.env.SMTP_PASS, // generated ethereal password
    },
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: '"Yoann" <ybuzenet@gmail.com>', // sender address
    to: "ybuzenet@gmail.com", // list of receivers
    subject: "A new person wants to be contacted about MTG Interface", // Subject line
    text: `Hey ! ${userData.complete_name} wants to be contacted. The email is ${userData.email} and the phone number is ${userData.phone_number}. Name of the shop is ${userData.shop_name}, from the country ${userData.country}. Message box did contain the following ${userData.message}. Let's go !`, // plain text body
    html: `<h1>Hey !</h1> <p>${userData.complete_name} wants to be contacted. </p><p>The email is ${userData.email} and the phone number is ${userData.phone_number}. </p><p>Name of the shop is ${userData.shop_name}, from the country ${userData.country}. </p><p>Message box did contain the following ${userData.message}.</p><p>Let's go !</p>`, // html body
  });
}

module.exports = { mailLeadToAdmin };