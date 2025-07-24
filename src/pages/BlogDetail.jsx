// src/pages/BlogDetail.jsx
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const BlogDetail = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    axios
      .get(`https://my-portfolio-lznq.onrender.com/api/blogs/${id}`)
      .then((res) => setBlog(res.data))
      .catch((err) => console.error(err));
  }, [id]);

  if (!blog) return <p className="p-10 text-center text-lg">Loading...</p>;

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8 py-10 sm:py-14">
      {blog.coverImage && (
        <img
          src={blog.coverImage}
          alt={blog.title}
          className="w-full max-h-[450px] object-cover rounded-xl mb-8"
        />
      )}
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 leading-tight">
        {blog.title}
      </h1>
      <p className="text-sm sm:text-base text-gray-500 mb-6">
        {new Date(blog.customDate || blog.createdAt).toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })}{" "}
        by {blog.author || "Unknown"}
      </p>
      <p className="text-base sm:text-lg leading-relaxed whitespace-pre-line text-gray-800">
        {blog.content}
      </p>
    </div>
  );
};

export default BlogDetail;
