import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <header className="nav">
      <div className="nav-inner">
        <NavLink to="/" className="brand">
          <span className="brand-mark">Vadla Bhanu Prakash</span>
        </NavLink>
        <nav className="nav-links">
          <NavLink to="/" className="nav-link" end>
            <span className="nav-index">01</span> Home
          </NavLink>
          <NavLink to="/projects" className="nav-link">
            <span className="nav-index">02</span> Projects
          </NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;