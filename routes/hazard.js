// Think CRUD

const express = require("express");
const router = express.Router();
const hazardController = require("../controllers/hazard");



/*
Routes

HAZARD ROUTES

router.get("/", hazardController.index);
router.post("/", hazardController.create);
router.get("/new", hazardController.new);
router.get("/:id", hazardController.show);
router.put("/:id", hazardController.update);
router.delete("/:id", hazardController.delete);


*/

router.get("/", hazardController.index);
router.post("/", hazardController.create);
router.get("/new", hazardController.new);
// router.get("/:id", hazardController.show);
router.put("/:id", hazardController.update);



module.exports = router;