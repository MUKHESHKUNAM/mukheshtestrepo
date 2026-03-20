const express = require("express");
const { characters } = require("./char");
const { charvalidation } = require("./validation/createchar.validation");
const { charcontroller } = require("./controller/createchar.controller");
app = express();
app.use(express.json());

app.get("/getcharcters", (req, res) => {
  res.status(200).json(characters);
});
app.post("/createcharacter", charvalidation, charcontroller);

app.listen(8000, () => {
  console.log("server started!!!!!");
});
