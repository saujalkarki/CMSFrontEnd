import { NavBar, Footer } from "../components";
import { useParams, useNavigate, Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

export function SingleRead() {
  const navigate = useNavigate();

  const { id } = useParams();

  const [blog, setBlog] = useState({});

  const fetchBlog = async () => {
    const blog = await axios.get(`http://localhost:3000/blog/${id}`);

    if (blog.status === 200) {
      setBlog(blog.data.blogExist);
    }
  };

  const deleteBlog = async () => {
    const deleteBlog = await axios.delete(`http://localhost:3000/blog/${id}`);

    if (deleteBlog.status === 200) {
      navigate("/");
      alert(deleteBlog.data.message);
    }
  };

  useEffect(() => {
    fetchBlog();
  }, []);

  return (
    <>
      <NavBar />
      <section className=" bg-stone-300 border-4 border-[#a39797] rounded-xl mx-4 my-6 px-6 pt-6">
        <div className=" ">
          <h1>
            <span className=" text-3xl font-bold border-b-2 border-double border-black">
              {blog.title}
            </span>
          </h1>
          <img src={blog.blogImage} alt="blogImage" className="py-4" />
          <h2 className="text-2xl font-semibold pb-4">{blog.subTitle}</h2>
          <h4 className="text-lg font-medium">{blog.description}</h4>
        </div>
        <div className="flex justify-end mx-4 ">
          <Link
            to={`/updateblog/${blog._id}`}
            className=" my-6 mx-2 border-2 border-black px-[0.60rem] py-2 rounded-lg font-semibold bg-gray-600 text-[#ccc2c2] hover:bg-stone-500"
          >
            Update Blog
          </Link>
          <button
            onClick={deleteBlog}
            className=" my-6 mx-2 border-2 border-black px-[0.60rem] py-2 rounded-lg font-semibold bg-gray-600 text-[#ccc2c2] hover:bg-stone-500"
          >
            Delete Blog
          </button>
        </div>
      </section>
      <Footer />
    </>
  );
}
