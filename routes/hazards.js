// Think CRUD

const express = require("express");
const router = express.Router();
const hazardsController = require("../controllers/hazards");

router.post("/", hazardsController.create);
router.get("/new", hazardsController.new);
router.get("/:id", hazardsController.show);
router.put("/", hazardsController.update);
router.put("/:id", hazardsController.update);

module.exports = router;


// !!!! Refer to Twitter View not the final solution!!! REMOVE requireAuth

const express = require("express");
const router = express.Router();
const tweetController = require("../controllers/tweet");

router.post("/", tweetController.create);
router.get("/new", tweetController.new);
router.get("/:id", tweetController.show);
router.put("/", tweetController.update);
router.put("/:id", tweetController.update);

module.exports = router;