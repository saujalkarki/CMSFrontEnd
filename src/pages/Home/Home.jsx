import NavBar from "../../components/NavBar/NavBar";
import Card from "../../components/card/Card";
import Footer from "../../components/Footer/Footer";
import axios from "axios";
import { useState, useEffect } from "react";

function Home() {
  const [blogs, setBlogs] = useState([]);

  const fetchBlogs = async () => {
    const blogDatas = await axios.get("http://localhost:3000/readBlog");
    setBlogs(blogDatas.data.blogs);
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <>
      <NavBar />
      <div className="container">
        {blogs.map(function (blog) {
          return (
            <Card
              title={blog.title}
              subTitle={blog.subTitle}
              description={blog.description}
              key={blog._id}
            />
          );
        })}
      </div>
      <Footer />
    </>
  );
}

export default Home;
