import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Home from "./assets/pages/home";
import Project from "./assets/pages/project";
import Contact from "./assets/pages/contact";
import NotFound from "./assets/pages/notfound";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/project" element={<Project />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
