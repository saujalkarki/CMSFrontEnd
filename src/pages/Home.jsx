import { useEffect, useState } from "react";
import { NavBar, BlogCard, Footer } from "../components";
import axios from "axios";

export function Home() {
  const [blogs, setBlogs] = useState([]);

  const fetchBlogs = async () => {
    try {
      const blogs = await axios.get("http://localhost:3000/blog");
      setBlogs(blogs.data.blogExist);
    } catch (err) {
      alert(err);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <>
      <NavBar />
      <div className=" m-4 grid grid-cols-3">
        {blogs.map(function (blog) {
          return <BlogCard key={blog._id} blog={blog} />;
        })}
      </div>
      <Footer />
    </>
  );
}
