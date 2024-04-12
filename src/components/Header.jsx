import React, { useState } from "react";
import "./Header.css";
import { NavLink } from "react-router-dom";

const Header = () => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleBurger = () => {
		setIsOpen(!isOpen);
	};

	const closeMenu = () => {
		setIsOpen(false);
	};

	return (
		<header>
			<i className="ri-menu-line" onClick={toggleBurger}></i>

			<nav className={isOpen ? "open" : ""}>
				<NavLink className="navlink" to="/" activeClassName="active" onClick={closeMenu}>
					Home
				</NavLink>
				<NavLink className="navlink" to="/crypto" activeClassName="active" onClick={closeMenu}>
					Crypto
				</NavLink>
				<NavLink className="navlink" to="/about" activeClassName="active" onClick={closeMenu}>
					About
				</NavLink>
				<div className="close" onClick={closeMenu}>
					<i className="ri-close-circle-line"></i>
				</div>
			</nav>
		</header>
	);
};

export default Header;
