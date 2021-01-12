const express = require("express");

const {
  getAll,
  createHamster,
  updateHamster,
  deleteHamster,
} = require("../controllers/hamster.controller");

const router = express.Router();

router.get("/", getAll);
router.post("/", createHamster);
router.patch("/:id", updateHamster);
router.delete("/:id", deleteHamster);

module.exports = router;
