import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    axios
      .get("https://server-angon777.vercel.app/blogs")
      .then((res) => {
        setBlogs(res.data);
      })
      .catch((e) => console.log(e));
  }, []);

  return (
    <div>
      {blogs.map((blog) => (
        <div key={blog._id} className=" dark:text-gray-800 my-6">
          <div className="container max-w-4xl px-10 py-6 mx-auto rounded-lg shadow-sm ">
            <div className="flex items-center justify-between">
              <span className="text-sm dark:text-gray-400">Nov 28, 2022</span>
              <Link
                rel="noopener noreferrer"
                href="#"
                className="px-2 py-1 font-bold rounded dark:bg-accent dark:text-gray-900"
              >
                {blog.topic}
              </Link>
            </div>
            <div className="mt-3">
              <Link
                rel="noopener noreferrer"
                href="#"
                className="text-2xl font-bold hover:underline"
              >
                {blog.title}
              </Link>
              <p className="mt-2">{blog.text}</p>
            </div>
            <div className="flex items-center justify-between mt-4"></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Blogs;
