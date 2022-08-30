import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Examination from "./components/Examination";
import Experience from "./components/Experience";
import HomepageBody from "./components/HomepageBody";

export default function Router() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomepageBody />} />
        <Route path="/about" element={<About />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/examination" element={<Examination />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}
