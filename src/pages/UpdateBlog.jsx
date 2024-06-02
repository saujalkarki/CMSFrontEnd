import { useNavigate, useParams } from "react-router-dom";
import { Footer, Form, NavBar } from "../components";
import axios from "axios";

export function UpdateBlog() {
  const { id } = useParams();

  const navigate = useNavigate();

  const updateBlog = async (e) => {
    e.preventDefault();

    const data = new FormData(e.currentTarget);

    const blogUpdated = await axios.patch(
      `http://localhost:3000/blog/${id}`,
      data
    );

    if (blogUpdated.status === 200) {
      alert(blogUpdated.data.message);
      navigate(`/blog/${id}`);
    } else {
      alert("somthing went wrong");
    }
  };

  return (
    <>
      <NavBar />
      <Form submitForm={updateBlog}>Update Blog</Form>
      <Footer />
    </>
  );
}
