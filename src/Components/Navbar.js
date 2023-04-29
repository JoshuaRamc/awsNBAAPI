import { useRef } from "react";
import SportsBasketballIcon from "@mui/icons-material/SportsBasketball";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import "../Styles/main.css";

function Navbar() {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <header>
      <SportsBasketballIcon />
      <nav ref={navRef}>
        <Link to="/">Home</Link>
        <Link to="/Add">Add</Link>
        <Link to="/Search">Search</Link>
        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          <FaTimes />
        </button>
      </nav>
      <button className="nav-btn" onClick={showNavbar}>
        <FaBars />
      </button>
    </header>
  );
}

export default Navbar;
