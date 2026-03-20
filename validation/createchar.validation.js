const { missingrequired } = require("../utilities/missing");

const charvalidation = (req, res, next) => {
  const requiredfileds = [
    "id",
    "name",
    "ki",
    "maxKi",
    "race",
    "gender",
    "description",
    "image",
    "affiliation",
  ];
  const missingfileds = missingrequired(requiredfileds, req.body);
  if (missingfileds) {
    res.status(400).json({
      code: "999",
      message: "detailes required",
      details: missingfileds,
    });
    return;
  }
  next();
};
module.exports = {
  charvalidation,
};
