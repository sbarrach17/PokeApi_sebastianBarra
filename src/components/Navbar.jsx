import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    const setActiveClass = ({ isActive }) => (isActive ? "active" : "");

    return (
        <nav className=" navbar navbar-dark bg-dark pe-3">
            <img className="logo img-fluid " src="/img/logonav.png" alt="PokeBola" />

            <div>
                <NavLink to="/" className={setActiveClass}>
                    Home
                </NavLink>
                <NavLink to="/Pokemones" className={setActiveClass}>
                    Pokemones
                </NavLink>
            </div>
        </nav>
    );
};

export default Navbar;
