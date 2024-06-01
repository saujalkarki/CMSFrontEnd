import { Link } from "react-router-dom";

export function NavBar() {
  return (
    <nav className=" bg-gray-500 flex items-center justify-between">
      <Link to={"/"} className=" ml-16 my-2 cursor-pointer">
        <img src="/navLogo.png" alt="navLogo" className=" h-16" />
      </Link>
      <div className=" flex text-xl font-semibold gap-16">
        <Link to={"/"} className="hover:text-[#b4b2b2]">
          Home
        </Link>
        <Link className="hover:text-[#b4b2b2]">Blog</Link>
        <Link className="hover:text-[#b4b2b2]">About</Link>
        <Link className="hover:text-[#b4b2b2]">Contact</Link>
      </div>
      <Link to={"/createblog"}>
        <button className=" mr-16 text-lg font-semibold bg-white px-[0.75rem] py-[0.45rem] rounded-3xl border-2 border-black hover:bg-gray-500 ">
          New Blog
        </button>
      </Link>
    </nav>
  );
}
