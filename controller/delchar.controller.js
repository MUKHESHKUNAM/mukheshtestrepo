const { characters } = require("../char");
const { defFilePath } = require("../constants/deffilepath");
const { writejson } = require("../utilities/util.json");

const delcharcontroller = (req, res) => {
  const { id } = req.body;
  const characterItems = characters.items;

  const finaldata = characterItems.filter((character) => character.id != id);
  characters.items = finaldata;
  writejson(defFilePath, characters);
  res.status(200).json(characters);
};

module.exports = {
  delcharcontroller,
};
