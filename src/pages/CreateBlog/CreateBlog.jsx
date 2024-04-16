import { useState } from "react";
import Footer from "../../components/Footer/Footer";
import NavBar from "../../components/NavBar/NavBar";
import "./../CreateBlog/createBlog.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function CreateBlog() {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [subTitle, setSubtitle] = useState("");
  const [description, setDescription] = useState("");

  const blogCreation = async function () {
    const response = await axios.post("http://localhost:3000/createBlog", {
      title,
      subTitle,
      description,
    });

    console.log(response);

    if (response.status == 201) {
      alert(response.data.message);
      navigate("/");
    } else {
      alert("Failed to create Blog");
    }
  };

  console.log(title);
  console.log(subTitle);
  console.log(description);
  return (
    <>
      <NavBar />
      <form
        onSubmit={(e) => {
          e.preventDefault();
          blogCreation();
        }}
      >
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          name="title"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          required
        />
        <br />
        <br />

        <label htmlFor="subtitle">Subtitle:</label>
        <input
          type="text"
          id="subtitle"
          name="subTitle"
          onChange={(e) => {
            setSubtitle(e.target.value);
          }}
          required
        />
        <br />
        <br />

        <label htmlFor="image_url">Image URL:</label>
        <input type="file" id="image_url" name="image_url" />
        <br />
        <br />

        <label htmlFor="description">Description:</label>
        <textarea
          id="description"
          name="description"
          rows="4"
          cols="50"
          onChange={(e) => {
            setDescription(e.target.value);
          }}
          required
        ></textarea>
        <br />

        <input type="submit" value="Submit" />
      </form>
      <Footer />|
    </>
  );
}

export default CreateBlog;
