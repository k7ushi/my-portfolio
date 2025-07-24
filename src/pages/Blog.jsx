import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Blog = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    axios
      .get("https://my-portfolio-lznq.onrender.com/api/blogs")
      .then((res) => {
        console.log("Fetched Blogs:", res.data);
        setBlogs(res.data);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="px-4 sm:px-6 md:px-12 py-10 md:py-16 max-w-screen-xl mx-auto">
      <h1 className="text-3xl sm:text-4xl font-bold mb-8 sm:mb-12">Blog & Bytes</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
        {blogs.map((blog) => (
          <Link
            to={`/blogs/${blog._id}`}
            key={blog._id}
            className="border p-4 sm:p-5 md:p-6 rounded-md shadow-sm hover:shadow-lg transition block bg-white"
          >
            {blog.coverImage && (
              <img
                src={blog.coverImage}
                alt={blog.title}
                className="w-full h-48 sm:h-52 md:h-56 object-cover mb-4 rounded"
              />
            )}
            <h2 className="text-xl sm:text-2xl font-semibold mb-2">{blog.title}</h2>
            <div className="text-sm text-gray-500 mb-2">
              {new Date(blog.customDate || blog.createdAt).toDateString()} by {blog.author || "Unknown"}
            </div>
            <p className="text-gray-700 text-sm sm:text-base">{blog.summary}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Blog;
