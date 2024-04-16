import { useNavigate } from "react-router-dom";
import "../NavBar/NavBar.css";

function NavBar() {
  const navigate = useNavigate();

  return (
    <nav className="navbar">
      <ul>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Services</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>
      <button className="createBlog">
        <a onClick={() => navigate("/createBlog")}>Create Blog</a>
      </button>
    </nav>
  );
}

export default NavBar;
