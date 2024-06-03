import { useNavigate, useParams } from "react-router-dom";
import { Footer, Form, NavBar } from "../components";
import axios from "axios";
import { toast } from "react-toastify";

export function UpdateBlog() {
  const { id } = useParams();

  const navigate = useNavigate();

  const updateBlog = async (e) => {
    e.preventDefault();

    const data = new FormData(e.currentTarget);

    try {
      const blogUpdated = await axios.patch(
        `http://localhost:3000/blog/${id}`,
        data
      );
      if (blogUpdated.status === 200) {
        toast.success(blogUpdated.data.message);
        navigate(`/blog/${id}`);
      }
    } catch (err) {
      if (err.message === "Network Error") {
        navigate("/error");
        toast.error(err.message);
      } else {
        navigate("/");
        toast.error(err.response.data.message);
      }
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
