import { Link } from "react-router-dom";
import "../styles/navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <h1 className="logo">Cine-Stream</h1>

      <div className="nav-links">
       
        <Link
          to="/"
          onClick={() => {
            if (window.location.pathname === "/") {
              window.location.href = "/";
            }
          }}
        >
          Home
        </Link>

        

        <Link to="/favorites">Favorites</Link>
      </div>
    </nav>
  );
}

export default Navbar;
