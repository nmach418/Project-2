const express = require("express");
const router = express.Router();
const commentsController = require("../controllers/comments");


router.get("/", commentsController.index);
router.get("/new", commentsController.new);
router.post("/", commentsController.create);
router.get("/:id", commentsController.show);
router.put("/:id", hazardsController.update);