import { NavBar, Footer } from "../components";
import axios, { AxiosError } from "axios";
import { useNavigate } from "react-router-dom";

export function CreateBlog() {
  // const [blogData, setBlogData] = useState({
  //   title: "",
  //   subTitle: "",
  //   description: "",
  // });

  const navigate = useNavigate();

  const submitForm = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    console.log(e.currentTarget);

    // const blogPosted = await axios.post("http://localhost:3000/blog", blogData);
    const filePosted = await axios.post("http://localhost:3000/blog", formData);

    if (filePosted.status === 200) {
      alert(filePosted.data.message);
      navigate("/");
    } else {
      alert("Something went Wrong");
    }
  };

  // const blogInfo = (e) => {
  //   const { name, value } = e.target;

  //   setBlogData({
  //     ...blogData,
  //     [name]: value,
  //   });
  // };

  return (
    <>
      <NavBar />
      <section className="w-full flex flex-col items-center my-[1.25rem]">
        <form
          onSubmit={submitForm}
          encType="multipart/form-data"
          className="flex flex-col justify-center gap-4 w-[28vw] bg-slate-400 p-4 my-4 rounded-md shadow-2xl shadow-gray-700"
        >
          <h1 className="text-2xl font-bold text-center">Create Blog</h1>
          <div className="flex flex-col gap-2">
            <label htmlFor="title" className=" text-xl font-medium ">
              Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              className="border-[1px] border-black rounded py-[0.20rem] px-1 text-md font-medium"
              // onChange={blogInfo}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="subTitle" className=" text-xl font-medium ">
              Sub Title
            </label>
            <input
              type="text"
              id="subTitle"
              name="subTitle"
              className="border-[1px] border-black rounded py-[0.20rem] px-1 text-md font-medium"
              // onChange={blogInfo}
            />
          </div>
          <div className="flex flex-col gap-2">
            <input
              type="file"
              id="blogImage"
              name="blogImage"
              className=" text-xl"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="description" className=" text-xl font-medium ">
              Description
            </label>
            <textarea
              id="description"
              name="description"
              className="border-[1px] border-black rounded py-[0.20rem] px-1 text-md font-medium resize-none"
              // onChange={blogInfo}
              rows={"5"}
            ></textarea>
          </div>
          <button className="text-xl font-semibold border-2 border-black rounded-lg py-1 px-3 bg-[#323131] text-white">
            Submit
          </button>
        </form>
      </section>

      <Footer />
    </>
  );
}
