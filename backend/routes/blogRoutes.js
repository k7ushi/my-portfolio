import express from 'express';
import Blog from '../models/Blog.js';

const router = express.Router();

// Get all blogs
router.get('/', async (req, res) => {
  const blogs = await Blog.find().sort({ customDate: -1 });
  res.json(blogs);
});

// Get single blog by ID
router.get('/:id', async (req, res) => {
  const blog = await Blog.findById(req.params.id);
  res.json(blog);
});

// Create a new blog
router.post('/', async (req, res) => {
  const newBlog = new Blog(req.body);
  const saved = await newBlog.save();
  res.json(saved);
});

// Update blog
router.put('/:id', async (req, res) => {
  const updated = await Blog.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updated);
});

// Delete blog
router.delete('/:id', async (req, res) => {
  await Blog.findByIdAndDelete(req.params.id);
  res.json({ message: 'Deleted' });
});

export default router;
