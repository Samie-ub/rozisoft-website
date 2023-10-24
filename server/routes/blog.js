const express = require("express");
const router = express.Router();
const Blog = require("../models/Blog");

router.post("/", async (req, res) => {
  const { title, coverImageUrl, content } = req.body;

  try {
    const newBlogPost = new Blog({
      title,
      coverImageUrl,
      content,
    });
    const savedBlogPost = await newBlogPost.save();
    res.status(201).json(savedBlogPost);
  } catch (error) {
    console.error("Error saving blog post:", error);
    res.status(500).json({ error: "Failed to save blog post" });
  }
});

router.get("/", async (req, res) => {
  try {
    const blogPosts = await Blog.find().sort({ date: -1 });
    res.json(blogPosts);
  } catch (error) {
    console.error("Error retrieving blog posts:", error);
    res.status(500).json({ error: "Failed to retrieve blog posts" });
  }
});
router.get("/:blogId", async (req, res) => {
  const { blogId } = req.params;

  try {
    const blogPost = await Blog.findById(blogId);
    if (!blogPost) {
      return res.status(404).json({ error: "Blog post not found" });
    }
    res.json(blogPost);
  } catch (error) {
    console.error("Error retrieving blog post by ID:", error);
    res.status(500).json({ error: "Failed to retrieve blog post" });
  }
});

router.delete("/:blogId", async (req, res) => {
  const { blogId } = req.params;

  try {
    const deletedBlogPost = await Blog.findByIdAndDelete(blogId);

    if (!deletedBlogPost) {
      return res.status(404).json({ error: "Blog post not found" });
    }

    res.status(204).end();
  } catch (error) {
    console.error("Error deleting blog post:", error);
    res.status(500).json({ error: "Failed to delete blog post" });
  }
});

router.put("/:blogId", async (req, res) => {
  const { blogId } = req.params;
  const { title, coverImageUrl, content } = req.body;

  try {
    const updatedBlogPost = await Blog.findByIdAndUpdate(
      blogId,
      { title, coverImageUrl, content },
      { new: true }
    );

    if (!updatedBlogPost) {
      return res.status(404).json({ error: "Blog post not found" });
    }

    res.status(200).json(updatedBlogPost);
  } catch (error) {
    console.error("Error updating blog post:", error);
    res.status(500).json({ error: "Failed to update blog post" });
  }
});

module.exports = router;
