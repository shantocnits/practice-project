import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { Button } from "./components/ui/button";
import Home from "./pages/home";
import Project from "./pages/project";
import Contact from "./pages/contact";
import NotFound from "./pages/notfound";

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

      <div className="flex min-h-svh flex-col items-center justify-center">
        <Button variant="outline">Button</Button>
      </div>
    </div>
  );
};

export default App;
