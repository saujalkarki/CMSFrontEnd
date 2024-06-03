import { useEffect, useState } from "react";
import { NavBar, BlogCard, Footer } from "../components";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export function Home() {
  const [blogs, setBlogs] = useState([]);

  const navigate = useNavigate();

  const fetchBlogs = async () => {
    try {
      const blogs = await axios.get("http://localhost:3000/blog");
      setBlogs(blogs.data.blogExist);
    } catch (err) {
      if (err.message === "Network Error") {
        navigate("/error");
        toast.error(err.message);
      } else {
        toast.warning(err.response.data.message);
      }
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
