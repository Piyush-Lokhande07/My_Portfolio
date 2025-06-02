'use client';
import React from 'react';

import MagicButton from './ui/MagicButton';
import { HiOutlineMail, HiOutlineLocationMarker } from 'react-icons/hi';  // Import location icon
import { FaTwitter, FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
      return (
      <footer className="w-full pt-20 pb-10 relative bg-gray-900 text-white " id="contact"
      style={{
            background: 'radial-gradient(circle,rgba(123, 54, 227, 1) 20%, rgba(183, 139, 240, undefined) 36%, rgba(72, 16, 114, 1) 84%)'
            }}
      >
            {/* Background grid image */}
            <div className="w-full h-full absolute left-0 bottom-0 min-h-96 -z-10 opacity-20">
            <img
            src="/footer-grid.svg"
            alt="grid"
            className="w-full h-full object-cover"
            />
            </div>

            <div className="flex flex-col items-center max-w-3xl mx-auto px-6 text-center">
            <h1 className="heading lg:max-w-[45vw] text-3xl font-semibold mb-4">
            Let’s <span className="text-purple-400">build</span> something extraordinary together.
            </h1>

            <p className="mb-8 text-gray-300">
            Whether it’s a fresh idea or scaling your vision, I’m here to help you turn it into reality.
            </p>

            {/* Location with icon */}
            <p className="mb-8 text-gray-400 italic flex items-center justify-center gap-2">
              <HiOutlineLocationMarker className="text-purple-400" />
              Based in Yavatmal, Maharashtra.
            </p>

            {/* Email Button */}
            <a href="mailto:piyushkailas88@gmail.com" aria-label="Send Email">
            <MagicButton
                  title="Let's get in touch"
                  icon={<HiOutlineMail />}
                  position="left"
            />
            </a>

            {/* Social Icons */}
            <div className="flex items-center gap-6 mt-12">
            <a
                  href="mailto:piyushkailas88@gmail.com"
                  aria-label="Email"
                  className="social-icon"
            >
                  <HiOutlineMail size={24} />
            </a>
            <a
                  href="https://x.com/PiyushLokh84694"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Twitter"
                  className="social-icon"
            >
                  <FaTwitter size={24} />
            </a>
            <a
                  href="https://github.com/Piyush-Lokhande07"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="social-icon"
            >
                  <FaGithub size={24} />
            </a>
            <a
                  href="https://www.linkedin.com/in/piyush-lokhande-173477298/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="social-icon"
            >
                  <FaLinkedin size={24} />
            </a>
            </div>
            </div>

            {/* Footer Bottom */}
            <div className="mt-16 border-t border-gray-700 pt-6 text-center text-sm text-gray-400">
            Copyright © 2025 Piyush
            </div>

            <style jsx>{`
            .social-icon {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 44px;
            height: 44px;
            border-radius: 0.75rem;
            background-color: rgba(255 255 255 / 0.1);
            backdrop-filter: blur(8px);
            transition: background-color 0.3s ease, color 0.3s ease;
            color: white;
            }
            .social-icon:hover {
            background-color: #7e3ff2;
            color: white;
            cursor: pointer;
            }
            `}</style>
      </footer>
      );
};

export default Footer;
