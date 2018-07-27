// Think CRUD

const express = require("express");
const router = express.Router();
const hazardsController = require("../controllers/hazards");

router.post("/", hazardsController.requireAuth, hazardsController.create);
router.get("/new", hazardsController.requireAuth, hazardsController.new);
router.get("/:id", hazardsController.show);
router.put("/:id", hazardsController.requireAuth, hazardsController.update);

module.exports = router;