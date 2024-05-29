const express = require("express");
const router = express.Router();

const SorterController = require("../controllers/SorterController");

router.get("/", SorterController.sort);
router.get("/sort", SorterController.sorter);
router.get("/list", SorterController.list);

module.exports = router;
