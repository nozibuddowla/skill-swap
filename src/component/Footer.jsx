import React from "react";
import skillSwapLogo from "../assets/skill-swap-logo.png";
import { Link } from "react-router";
import MyContainer from "./MyContainer";
import { MdOutlineEmail } from "react-icons/md";
import { BsTelephone } from "react-icons/bs";
import { FaFacebookF, FaLinkedin, FaSquareXTwitter, FaYoutube } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="bg-base-200 text-base-content mt-auto">
      <MyContainer>
        <footer className="footer p-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <aside className="flex flex-col gap-4">
            <Link to="/" className="flex items-center gap-3">
              <img src={skillSwapLogo} className="w-12" alt="SkillSwap Logo" />
              <span className="text-xl font-bold">SkillSwap</span>
            </Link>
            <p className="text-sm">
              Connect, learn, and grow with local skill exchanges. Building
              communities through shared knowledge since 2024.
            </p>
          </aside>

          {/* Quick Links */}
          <nav className="flex flex-col">
            <h6 className="footer-title text-base font-semibold mb-4">
              Quick Links
            </h6>
            <Link to="/browse-skills" className="link link-hover">
              Browse Skills
            </Link>
            <Link to="/how-it-works" className="link link-hover">
              How It Works
            </Link>
            <Link to="/become-teacher" className="link link-hover">
              Become a Teacher
            </Link>
            <Link to="/faq" className="link link-hover">
              FAQ
            </Link>
          </nav>

          {/* Legal & Support */}
          <nav className="flex flex-col">
            <h6 className="footer-title text-base font-semibold mb-4">
              Legal & Support
            </h6>
            <Link to="/about" className="link link-hover">
              About Us
            </Link>
            <Link to="/contact" className="link link-hover">
              Contact
            </Link>
            <Link to="/privacy-policy" className="link link-hover">
              Privacy Policy
            </Link>
            <Link to="/terms" className="link link-hover">
              Terms of Service
            </Link>
          </nav>

          {/* Contact & Social */}
          <nav className="flex flex-col">
            <h6 className="footer-title text-base font-semibold mb-4">
              Get In Touch
            </h6>
            <div className="flex flex-col gap-2 text-sm">
              <a
                href="mailto:support@skillswap.com"
                className="link link-hover flex items-center gap-2"
              >
                <MdOutlineEmail size={16} />
                nozibuddowla@gmail.com
              </a>
              <a
                href="tel:+1234567890"
                className="link link-hover flex items-center gap-2"
              >
                <BsTelephone size={16} /> +8801922438860
              </a>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 mt-4">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-ghost btn-circle btn-sm hover:bg-black hover:text-white transition-all"
                aria-label="Twitter"
              >
                <FaSquareXTwitter size={20} />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-ghost btn-circle btn-sm hover:bg-red-700 hover:text-white transition-all"
                aria-label="YouTube"
              >
                <FaYoutube size={20} />
              </a>
              <a
                href="https://www.facebook.com/nozibuddowla/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-ghost btn-circle btn-sm hover:bg-primary hover:text-white transition-all"
                aria-label="Facebook"
              >
                <FaFacebookF size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/nozibuddowla/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-ghost btn-circle btn-sm hover:bg-primary hover:text-white transition-all"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={20} />
              </a>
            </div>
          </nav>
        </footer>

        {/* Bottom Bar */}
        <div className="border-t border-base-300 py-4 px-10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
            <p className="text-center md:text-left">
              © {new Date().getFullYear()} SkillSwap. All rights reserved.
            </p>
            <div className="flex gap-4">
              <Link to="/privacy-policy" className="link link-hover">
                Privacy
              </Link>
              <Link to="/terms" className="link link-hover">
                Terms
              </Link>
              <Link to="/cookies" className="link link-hover">
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </MyContainer>
    </div>
  );
};

export default Footer;
