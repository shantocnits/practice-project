import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Home from "./pages/home";
import NotFound from "./pages/notfound";
import About from "./pages/about";
import Service from "./pages/service";
import Blog from "./pages/blog";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About/>} />
          <Route path="/blog" element={<Blog/>} />
          <Route path="/service" element={<Service />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App