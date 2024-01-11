
import Contact from "./container/Contact";
import About from "./container/About";
import Home from "./container/Home";
import "./App.css";
import Navbar from "./container/Navbar";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
