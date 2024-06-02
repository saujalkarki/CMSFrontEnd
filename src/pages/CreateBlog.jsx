import { NavBar, Form, Footer } from "../components";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export function CreateBlog() {
  const navigate = useNavigate();

  const submitForm = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const filePosted = await axios.post("http://localhost:3000/blog", formData);

    if (filePosted.status === 200) {
      navigate("/");
      alert(filePosted.data.message);
    } else {
      alert("Something went Wrong");
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
