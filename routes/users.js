const express = require("express");
const router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.json("all users sent");
});

/*GET specific user */
router.get("/:id", function (req, res, next) {
  if (req.params.id === "U001") {
    return res.json("user U001 found");
  }
  return res.status(404).json("user not found");
});

/*Add a new user */
router.post("/", function (req, res, next) {
  let content = req.body;
  if (content.id) {
    return res.status(201).json("user created");
  }
  return res.status(400).json("user not created");
});

module.exports = router;
