import React, { useState } from "react";
import { useLocation } from 'react-router-dom';
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
                <a href="/"><img src={QRphoEvent} alt="QRpho Event Logo" /></a>
            </div>

            <div className="desktop_menu">
                <ul>
                    <li className={isLinkActive("/QRpho-Event/") ? "active" : ""}>
                        <a href="/QRpho-Event/">Home</a>
                    </li>
                    <li className={isLinkActive("/QRpho-Event/features") ? "active" : ""}>
                        <a href="/QRpho-Event/features">Features</a>
                    </li>
                    <li className={isLinkActive("/QRpho-Event/pricing") ? "active" : ""}>
                        <a href="/QRpho-Event/pricing">Pricing</a>
                    </li>
                    <li className={isLinkActive("/QRpho-Event/howItWorks") ? "active" : ""}>
                        <a href="/QRpho-Event/howItWorks">How It Works</a>
                    </li>
                    <li className={isLinkActive("/QRpho-Event/login") ? "active" : ""}>
                        <a href="/QRpho-Event/login">Login</a>
                    </li>
                    <li className={isLinkActive("/QRpho-Event/signUp") ? "active" : ""}>
                        <a href="/QRpho-Event/signUp">SIGN UP FOR FREE</a>
                    </li>
                </ul>
            </div>

            <div className="mobile_menu">
                <button onClick={toggleMobileMenu}>
                    {isToggle ? <GrClose /> : <HiMenuAlt3 />}
                </button>
                <ul className={isToggle ? "show" : "hide"}>
                    <li className={isLinkActive("/QRpho-Event/") ? "active" : ""}>
                        <a href="/QRpho-Event/">Home</a>
                    </li>
                    <li className={isLinkActive("/QRpho-Event/features") ? "active" : ""}>
                        <a href="/QRpho-Event/features">Features</a>
                    </li>
                    <li className={isLinkActive("/QRpho-Event/pricing") ? "active" : ""}>
                        <a href="/QRpho-Event/pricing">Pricing</a>
                    </li>
                    <li className={isLinkActive("/QRpho-Event/howItWorks") ? "active" : ""}>
                        <a href="/QRpho-Event/howItWorks">How It Works</a>
                    </li>
                    <li className={isLinkActive("/QRpho-Event/login") ? "active" : ""}>
                        <a href="/QRpho-Event/login">Login</a>
                    </li>
                    <li className={isLinkActive("/QRpho-Event/signUp") ? "active" : ""}>
                        <a href="/QRpho-Event/signUp">SIGN UP FOR FREE</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Header;
