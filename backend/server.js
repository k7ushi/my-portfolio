import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import blogRoutes from './routes/blogRoutes.js';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URL)
  .then(async () => {
    console.log("MongoDB Connected ✅");
  })
  .catch((err) => console.error("MongoDB Error:", err));

app.use('/api/blogs', blogRoutes);

app.listen(process.env.PORT || 5000, () => {
  console.log(`Server started on port ${process.env.PORT || 5000}`);
});