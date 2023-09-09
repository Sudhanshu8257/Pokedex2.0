import classes from "../css/Navbar.module.css";
import { NavLink } from "react-router-dom";
import React from "react";

const NavLinks = () => {
  return (
    <div className={classes.linksContainer}>
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? classes.activeLinks : classes.links
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/favorites"
        className={({ isActive }) =>
          isActive ? classes.activeLinks : classes.links
        }
      >
        Favorites
      </NavLink>
      <NavLink
        to="/contact"
        className={({ isActive }) =>
          isActive ? classes.activeLinks : classes.links
        }
      >
        Contact
      </NavLink>
      <NavLink
        to="/trivia"
        className={({ isActive }) =>
          isActive ? classes.activeLinks : classes.links
        }
      >
        Trivia
      </NavLink>
      <NavLink
        to="/search"
        className={({ isActive }) =>
          isActive ? classes.activeLinks : classes.links
        }
      >
        Search
      </NavLink>
    </div>
  );
};

export default NavLinks;
