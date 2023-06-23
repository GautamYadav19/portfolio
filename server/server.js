const express = require("express");

const sendMail = require("./controller/sendmail");
const app = express();

app.get("/", (req, res) => {
  res.send("<h1>test</h1>");
});
app.get("/mail", sendMail);

app.listen(process.env.PORT || "3000", () => {
  console.log(`server is running in port ${process.env.PORT || "3000"}`);
});
