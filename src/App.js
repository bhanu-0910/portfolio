import { HashRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import "./App.css";

function App() {
  return (
    <HashRouter>
      <div className="page">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </main>
        <footer className="site-footer">
          <span>© 2026 Vadla Bhanu Prakash</span>
          <span className="footer-dot">·</span>
          <span>Built with React</span>
        </footer>
      </div>
    </HashRouter>
  );
}

export default App;