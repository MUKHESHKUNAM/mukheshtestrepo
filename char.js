const { defFilePath } = require("./constants/deffilepath");
const { readjson } = require("./utilities/util.json");

const characters = readjson(defFilePath);

module.exports = {
  characters,
};
