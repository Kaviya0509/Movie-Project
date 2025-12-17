import React, { useState, useEffect } from "react";
import "./Navbar.scss";
import Logo from "../../../Assets/images.jpg";
import { Link, useNavigate } from "react-router-dom";
import { Input } from "../../Components/Input/Input";
import { useDebounce } from "../../Custom Hook/useDebounce"; // your debounce hook

const Navbar = () => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

   const [open, setOpen] = useState(false);
  
  const debouncedQuery = useDebounce({ value: query, delay: 500 });

  useEffect(() => {
    if (debouncedQuery.trim() !== "") {
      navigate(`/search?q=${debouncedQuery}`);
    }
  }, [debouncedQuery, navigate]);

  const handleSearch = (e) => {
    setQuery(e.target.value);
  };

  const handleLinkClick = () => setOpen(false);

  return (
    <nav className="navbar">
    <div className="navbar-left">
        <img src={Logo} alt="Logo" className="logo" />
        <span className="nav-hamburger" onClick={() => setOpen(!open)}>
          ☰
        </span>
        <ul className={`nav-links ${open ? "open" : ""}`}>
          <li><a href="/#" onClick={handleLinkClick}>Home</a></li>
          <li><a href="/#popular" onClick={handleLinkClick}>Popular</a></li>
          <li><a href="/#trending" onClick={handleLinkClick}>Trending</a></li>
          <li><a href="/#discover" onClick={handleLinkClick}>Discover</a></li>
          <li><a href="/#upcoming" onClick={handleLinkClick}>Upcoming List</a></li>
          <li><a href="/#tvshows" onClick={handleLinkClick}>TV Shows</a></li>
        </ul>
      </div>

      <div className="navbar-right">
        <Input
          type="text"
          name="search"
          className="search-bar"
          placeholder="Search movies..."
          value={query}
          onChange={handleSearch}
        />

        <button className="sign-in">
          <Link to="/signin" style={{ color: "white", textDecoration: "none" }}>
            Sign In
          </Link>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;