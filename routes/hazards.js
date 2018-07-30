// Think CRUD

const express = require("express");
const router = express.Router();
const hazardsController = require("../controllers/hazards");

router.post("/", hazardsController.create);
router.get("/new", hazardsController.new);
router.get("/:id", hazardsController.show);
router.put("/:id", hazardsController.update);
router.delete("/:id", hazardsController.delete);

module.exports = router;