import { HashRouter, Routes, Route, NavLink } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import "./App.css";

function App() {
  return (
    <HashRouter>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/projects">Projects</NavLink>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </HashRouter>
  );
}

export default App;