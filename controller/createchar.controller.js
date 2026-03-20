const { characters } = require("../char");
const { defFilePath } = require("../constants/deffilepath");
const { writejson } = require("../utilities/util.json");

const charcontroller = (req, res) => {
  const charres = characters;
  charitems = charres.items;
  const paylode = req.body;
  charitems.push(paylode);
  writejson(defFilePath, charitems);
  res.status(200).json({
    code: "000",
    message: "created sucessfully!!",
    details: characters,
  });
};
module.exports = {
  charcontroller,
};
