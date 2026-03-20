const missingrequired = (requiredfileds, reqbody) => {
  const missingfileds = [];
  requiredfileds.map((eachitem) => {
    if (!reqbody[eachitem]) {
      missingfileds.push(eachitem);
    }
  });
  if (missingfileds.length > 0) {
    return missingfileds;
  }
};
module.exports = {
  missingrequired,
};
