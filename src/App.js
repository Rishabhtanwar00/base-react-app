import Navbar1 from "./components/Navbar";
import About from "./pages/About";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <div className="App">
      <Navbar1 />
      <BrowserRouter>
        <Routes>
          <Route excat path="/" element={<Home />}></Route>
          <Route excat path="/about" element={<About />}></Route>
          <Route excat path="/contact" element={<Contact />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
