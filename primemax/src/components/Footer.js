import React from "react";
import { FaTwitter, FaInstagram, FaLinkedin, FaGithub, FaMedium } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-black text-gray-400 py-8 px-6">
            {/* Footer Container */}
            <div className="max-w-6xl mx-auto text-center">
                {/* Logo */}
                <h2 className="text-2xl font-bold text-red-600">PRIMEMAX</h2>

                {/* Navigation Links */}
                <div className="flex justify-center gap-6 mt-4">
                    <a href="#" className="hover:text-white">About</a>
                    <a href="#" className="hover:text-white">Help Center</a>
                    <a href="#" className="hover:text-white">Privacy Policy</a>
                    <a href="#" className="hover:text-white">Terms of Service</a>
                </div>

                {/* Social Media Icons */}
                <div className="flex justify-center gap-6 mt-6 text-xl">
                    <a href="https://www.linkedin.com/in/hrithikksingh" className="hover:text-white" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
                    <a href="https://github.com/hrithikksingh3" className="hover:text-white" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
                    <a href="https://medium.com/@hrithikkumarsingh" className="hover:text-white" target="_blank" rel="noopener noreferrer"><FaMedium /></a>
                    <a href="https://x.com/codersvoice_" className="hover:text-white" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
                    <a href="https://www.instagram.com/codersvoice" className="hover:text-white" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
                </div>

                {/* Copyright Text */}
                <p className="text-sm mt-6">Developed with love by Hrithik © {new Date().getFullYear()} PrimeMax. All rights reserved.</p>    
            </div>
        </footer>
    );
};

export default Footer;
