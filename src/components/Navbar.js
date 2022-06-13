import React, { useState, useEffect } from "react";
import "./Navbar.css";

function Navbar() {
	const [navbar, setNavbar] = useState(false);

	useEffect(() => {
		window.addEventListener("scroll", () => {
			if (window.scrollY > 100) {
				setNavbar(true);
			} else {
				setNavbar(false);
			}
		});
		return () => {
			window.removeEventListener("scroll", null);
		};
	}, []);

	return (
		<div className={`navbar ${navbar && "navbar-show"}`}>
			<img
				src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
				alt="Netflix Logo"
				className="navbar-netflix-logo"
			/>
			<img
				src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
				alt="Netflix Avatar"
				className="navbar-netflix-avatar"
			/>
		</div>
	);
}

export default Navbar;
