import { Link } from "react-router-dom";

export function BlogCard({ blog }) {
  const shortDescription = blog.description.split(" ").slice(0, 10);
  console.log(blog._id);

  return (
    <Link to={`/blog/${blog._id}`}>
      <div className=" border-[1px] border-black ml-1 mr-2 my-2 rounded-lg bg-stone-300 overflow-hidden cursor-pointer">
        <div className="flex items-center">
          <img
            src={blog.blogImage}
            alt="BlogImage"
            className=" h-56 w-60 bg-black"
          />
          <div className=" flex flex-col items-center gap-2">
            <h2 className="text-xl font-bold ">{blog.title}</h2>
            <h3 className="text-lg  mt-[0.95rem] font-semibold">
              {blog.subTitle}
            </h3>
            <p className="text-lg my-4 px-4 text-justify">
              {shortDescription.join(" ")}....
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
}
