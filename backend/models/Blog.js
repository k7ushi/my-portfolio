import mongoose from 'mongoose';

const blogSchema = new mongoose.Schema({
  title: { type: String, required: true },
  summary: String,
  content: { type: String, required: true },
  author: String,
  createdAt: { type: Date, default: Date.now },
  customDate: Date,
  coverImage: String,
});

export default mongoose.model('Blog', blogSchema);
