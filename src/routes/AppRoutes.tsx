import { Routes, Route } from "react-router";
import Home from "../pages/Home";
import Projects from "../pages/Projects";


export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects" element={<Projects />} />
      {/* <Route path="/about" element={<AboutPage />} /> */}

      {/* 404 */}
      {/* <Route path="*" element={<NotFoundPage />} /> */}
    </Routes>
  );
}