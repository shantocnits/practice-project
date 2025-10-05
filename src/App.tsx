import { Route, Routes, Navigate } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import Home from "./pages/home";
import NotFound from "./pages/notfound";
import About from "./pages/about";
import Service from "./pages/service";
import Blog from "./pages/blog";
import Layout from "./components/layout.tsx";
import Contact from "./pages/contact";
import PageTitle from "./components/PageTitle";

const App = () => {
  return (
    <BrowserRouter>
      <PageTitle />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/service" element={<Service />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
