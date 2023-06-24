const express = require("express");
const cors = require("cors");
const bodyparser = require("body-parser");

const sendMail = require("./controller/sendmail");
const app = express();
app.use(bodyparser.json());
app.use(
  bodyparser.urlencoded({
    extended: false,
  })
);
app.use(cors());
app.use(express.json());

app.post("/mailApi", sendMail);

app.listen(process.env.PORT || "3000", () => {
  // console.log(`server is running in port ${process.env.PORT || "3000"}`);
});
