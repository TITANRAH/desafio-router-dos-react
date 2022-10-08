import { NavLink } from "react-router-dom";
import puntero from "../assets/puntero.png";

function NavBar() {
  const setActiveClass = ({ isActive }) => (isActive ? "active" : undefined);
  return (
    <div className="nav">
      <NavLink end to="/" className={setActiveClass}>
        <img className="imagen-nav" src={puntero} alt="" />
      </NavLink>

      <div className="navbar">
        <NavLink end to="/" className={setActiveClass}>
          <h5>Home </h5>
        </NavLink>

        <NavLink to="/pokemones/" className={setActiveClass}>
          <h5>Pokemones </h5>
        </NavLink>
      </div>
    </div>
  );
}

export default NavBar;
