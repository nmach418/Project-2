const express = require("express");
const router = express.Router();
const commentsController = require("../controllers/comments");

router.post("/", commentsController.create);  // Need to think/work thru the rest of comments - routes and controllers