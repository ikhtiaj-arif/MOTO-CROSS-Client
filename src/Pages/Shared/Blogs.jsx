import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const Blogs = () => {


    const url = 'http://localhost:5000/blogs'
    const { data: blogs = [] } = useQuery({
        queryKey: ["blogs"],
        queryFn: async () => {
          const res = await fetch(url);
          const data = res.json();
          return data;
        },
      });
  console.log(blogs);

  return (
    <div>
        {blogs.map(blog => 
             <div
             key={blog._id}
             className=" dark:text-gray-100 my-6">
             <div className="container max-w-4xl px-10 py-6 mx-auto rounded-lg shadow-sm dark:bg-gray-900">
               <div className="flex items-center justify-between">
                 <span className="text-sm dark:text-gray-400">Nov 28, 2022</span>
                 <Link
                   rel="noopener noreferrer"
                   href="#"
                   className="px-2 py-1 font-bold rounded dark:bg-violet-400 dark:text-gray-900"
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
                 <p className="mt-2">
                  {blog.text}
                 </p>
               </div>
               <div className="flex items-center justify-between mt-4">
               
              
               </div>
             </div>
           </div>
     
            
            )}
     
    </div>
  );
};

export default Blogs;
