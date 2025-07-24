import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
const Blog = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
  axios.get("http://localhost:5000/api/blogs")
    .then((res) => {
      console.log("Fetched Blogs:", res.data); // 👈 This will show each blog's data
      setBlogs(res.data);
    })
    .catch((err) => console.error(err));
}, []);

  return (
    <div className="px-6 py-12">
      <h1 className="text-4xl font-bold mb-10">Blog & Bytes</h1>
      <div className="grid gap-10 md:grid-cols-3">
        {blogs.map((blog) => (
          <Link
            to={`/blogs/${blog._id}`}
            key={blog._id}
            className="border p-6 rounded-md shadow-sm hover:shadow-lg transition block"
          >
            {blog.coverImage && (
              <img
                src={blog.coverImage}
                alt={blog.title}
                className="w-full h-52 object-cover mb-4 rounded"
              />
            )}
            <h2 className="text-2xl font-semibold mb-2">{blog.title}</h2>
            <div className="text-sm text-gray-500 mb-2">
              {new Date(blog.customDate || blog.createdAt).toDateString()} by {blog.author || 'Unknown'}
            </div>
            <p className="text-gray-700">{blog.summary}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};
export default Blog;
