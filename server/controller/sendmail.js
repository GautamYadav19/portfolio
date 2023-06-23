const nodemailer = require("nodemailer");

const sendMail = async (req, res) => {
  const transporter = await nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: "gautamyadav1992002@gmail.com",
      pass: "gkyy2002",
    },
  });
  let info = await transporter.sendMail({
    from: "pygcommunication@gmail.com", // sender address
    to: "gautamyadav1992002@gmail.com", // list of receivers
    subject: "test", // Subject line
    text: "haan bhai chnage hai bhai gaya?", // plain text body
    html: "<b>Hello world?</b>", // html body
  });
  console.log("message send : %s", info.messageId);
  res.json(info);
};

module.exports = sendMail;
