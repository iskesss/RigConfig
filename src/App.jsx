import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import About from "./pages/About";
import MyParts from "./pages/MyParts";
import NoPage from "./pages/NoPage";
import SuggestBuild from "./pages/SuggestBuild";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Dashboard />} />
        <Route path="/dashboard" element={<Dashboard />}></Route>
        <Route path="/myparts" element={<MyParts />}></Route>
        <Route path="/suggestbuild" element={<SuggestBuild />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="*" element={<NoPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
