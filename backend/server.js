import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import blogRoutes from './routes/blogRoutes.js';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Connect to MongoDB once using .env
// Define schema and model just after successful connection
mongoose.connect(process.env.MONGO_URL)
  .then(async () => {
    console.log("MongoDB Connected ✅");

    // 🔥 TEMPORARY TEST BLOG INSERT
    const blogSchema = new mongoose.Schema({
      title: String,
      summary: String,
      author: String,
    });

    const Blog = mongoose.model("Blog", blogSchema);

    const existing = await Blog.findOne({ title: "Sample Blog" });
    if (!existing) {
      await Blog.create({
        title: "Sample Blog",
        summary: "This is a sample blog entry for testing.",
        author: "Khushi Anand",
      });
      console.log("✅ Test blog added!");
    } else {
      console.log("⚠️ Sample blog already exists.");
    }

    // 👉 Remove this after first run
  })
  .catch((err) => console.error("MongoDB Error:", err));


// Routes
app.use('/api/blogs', blogRoutes);

// Start Server
app.listen(process.env.PORT || 5000, () => {
  console.log(`Server started on port ${process.env.PORT || 5000}`);
});
