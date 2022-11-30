const express = require("express");
const {
  postController,
  postsController,
  postpageController
} = require("../controllers/postControllers");
const router = express.Router();

router.get("/", postController);
router.get("/posts", postsController);
router.get("/post/:id", postpageController);

module.exports = router;
