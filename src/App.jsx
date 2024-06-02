import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, CreateBlog, SingleRead, UpdateBlog } from "./pages/index";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/createblog" element={<CreateBlog />} />
          <Route path="/blog/:id" element={<SingleRead />} />
          <Route path="/updateblog/:id" element={<UpdateBlog />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
