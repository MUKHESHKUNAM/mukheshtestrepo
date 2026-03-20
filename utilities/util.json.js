const fs = require("fs");
const { defFilePath } = require("../constants/deffilepath");

const readjson = (filepath) => {
  const fileread = fs.readFileSync(filepath);
  const parseddata = JSON.parse(fileread);
  return parseddata;
};

const writejson = (filepath, data) => {
  fs.writeFileSync(filepath, JSON.stringify(data));
};
module.exports = { readjson, writejson };
