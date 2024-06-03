import { NavBar, Form, Footer } from "../components";
import axios, { AxiosError } from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export function CreateBlog() {
  const navigate = useNavigate();

  const submitForm = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    try {
      const filePosted = await axios.post(
        "http://localhost:3000/blog",
        formData
      );

      console.log(filePosted);
      if (filePosted.status === 200) {
        navigate("/");
        toast.success(filePosted.data.message);
        toast.success(filePosted.data.message);
        toast.success(filePosted.data.message);
        toast.success(filePosted.data.message);
      }
    } catch (err) {
      navigate("/error");
      toast.error(err.response.data.message);
    }
  };

  return (
    <>
      <NavBar />
      <Form submitForm={submitForm}>Create Blog</Form>
      <Footer />
    </>
  );
}
