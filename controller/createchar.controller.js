const { characters } = require("../char");
const { defFilePath } = require("../constants/deffilepath");
const { writejson } = require("../utilities/util.json");

const charcontroller = (req, res) => {
  const payload = req.body;
  characters.items.push(payload);
  writejson(defFilePath, characters);
  res.status(200).json({
    code: "000",
    message: "created sucessfully!!",
    details: characters,
  });
};
module.exports = {
  charcontroller,
};
