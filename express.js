const express = require("express");
const { characters } = require("./char");
const { charvalidation, delvalidation } = require("./validation/validations");
const { charcontroller } = require("./controller/createchar.controller");
const { delcharcontroller } = require("./controller/delchar.controller");
const app = express();
app.use(express.json());

app.get("/getcharcters", (req, res) => {
  const charItems = characters.items;
  res.status(200).json(charItems);
});
app.post("/createcharacter", charvalidation, charcontroller);
app.post("/delcharacter", delvalidation, delcharcontroller);

const PORT = 8000;

app.listen(PORT, () => {
  console.log(`server started!!!!! on PORT: ${PORT}`);
});
