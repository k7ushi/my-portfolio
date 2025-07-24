// src/pages/BlogDetail.jsx
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";


const BlogDetail = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:5000/api/blogs/${id}`)
      .then(res => setBlog(res.data))
      .catch(err => console.error(err));
  }, [id]);

  if (!blog) return <p className="p-10">Loading...</p>;

  return (
    <div className="max-w-3xl mx-auto px-6 py-12">
        {blog.coverImage && (
            <img
                src={blog.coverImage}
                alt={blog.title}
                className="w-full h-full object-cover rounded mb-8"
            />
                )}
      <h1 className="text-4xl font-bold mb-4">{blog.title}</h1>
      <p className="text-gray-500 mb-6">
        {new Date(blog.customDate || blog.createdAt).toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric"
        })} by {blog.author}
      </p>
      <p className="text-lg leading-relaxed whitespace-pre-line">{blog.content}</p>
    </div>
  );
};

export default BlogDetail;
