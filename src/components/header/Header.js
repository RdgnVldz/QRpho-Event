import React, { useState } from "react";
import { Link, useLocation } from 'react-router-dom';
import './header.css';
import QRphoEvent from '../../assest/images/event-logo.png';
import { GrClose } from 'react-icons/gr';
import { HiMenuAlt3 } from 'react-icons/hi';

function Header() {
    const [isToggle, setIsToggle] = useState(false);
    const location = useLocation(); // Get the current route location

    // Function to toggle the mobile menu
    const toggleMobileMenu = () => {
        setIsToggle(!isToggle);
    };

    // Function to determine if a link should be marked as active
    const isLinkActive = (path) => {
        return location.pathname === path;
    };

    return (
        <nav className="container header_section">
            <div className="qrpho-logo">
                <Link to="/"><img src={QRphoEvent} alt="QRpho Event Logo" /></Link>
            </div>

            <div className="desktop_menu">
                <ul>
                    <li className={isLinkActive("/") ? "active" : ""}>
                        <Link to="/">Home</Link>
                    </li>
                    <li className={isLinkActive("/features") ? "active" : ""}>
                        <Link to="/features">Features</Link>
                    </li>
                    <li className={isLinkActive("/pricing") ? "active" : ""}>
                        <Link to="/pricing">Pricing</Link>
                    </li>
                    <li className={isLinkActive("/howItWorks") ? "active" : ""}>
                        <Link to="/howItWorks">How It Works</Link>
                    </li>
                    <li className={isLinkActive("/login") ? "active" : ""}>
                        <Link to="/login">Login</Link>
                    </li>
                    <li className={isLinkActive("/signUp") ? "active" : ""}>
                        <Link to="/signUp">SIGN UP FOR FREE</Link>
                    </li>
                </ul>
            </div>

            <div className="mobile_menu">
                <button onClick={toggleMobileMenu}>
                    {isToggle ? <GrClose /> : <HiMenuAlt3 />}
                </button>
                <ul className={isToggle ? "show" : "hide"}>
                    <li className={isLinkActive("/") ? "active" : ""}>
                        <Link to="/">Home</Link>
                    </li>
                    <li className={isLinkActive("/features") ? "active" : ""}>
                        <Link to="/features">Features</Link>
                    </li>
                    <li className={isLinkActive("/pricing") ? "active" : ""}>
                        <Link to="/pricing">Pricing</Link>
                    </li>
                    <li className={isLinkActive("/howItWorks") ? "active" : ""}>
                        <Link to="/howItWorks">How It Works</Link>
                    </li>
                    <li className={isLinkActive("/login") ? "active" : ""}>
                        <Link to="/login">Login</Link>
                    </li>
                    <li className={isLinkActive("/signUp") ? "active" : ""}>
                        <Link to="/signUp">SIGN UP FOR FREE</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Header;
