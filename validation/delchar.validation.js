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
