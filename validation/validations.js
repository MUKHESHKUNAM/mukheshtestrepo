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

const delvalidation = (req, res, next) => {
  const { id } = req.body;
  if (!id) {
    res.status(400).json({
      code: "9999",
      message: "id not found",
    });
    return;
  }
  next();
};

module.exports = {
  delvalidation,
  charvalidation,
};
