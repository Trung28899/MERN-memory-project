const express = require("express");
const postController = require("../controllers/posts");

const router = express.Router();

router.get("/", postController.getPosts);
router.post("/", postController.createPost);

// router.get("/", getPosts);
// router.post("/", createPost);
// router.get("/:id", getPost);
// router.patch("/:id", updatePost);
// router.delete("/:id", deletePost);
// router.patch("/:id/likePost", likePost);

module.exports = router;
