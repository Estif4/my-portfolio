import React from "react";

const Footer = () => {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-between p-8 bg-[#f8e5ab] text-white px-4 sm:px-16">
      <div className="mb-4 sm:mb-0">
        <p className="text-[#464441] text-center sm:text-left text-lg font-semibold">
          Copy Write All rights reserved
        </p>
      </div>
      <div className="flex gap-4 sm:gap-8">
        <a
          href="https://www.linkedin.com/in/estifanos-kelemu-5142a6261/"
          target="_blank"
          rel="noopener noreferrer">
          <img src="linkedin.png" alt="LinkedIn" className="h-8 w-8" />
        </a>
        <a
          href="https://www.facebook.com/yenework.worku.1"
          target="_blank"
          rel="noopener noreferrer">
          <img src="facebook.png" alt="Facebook" className="h-8 w-8" />
        </a>
        <a
          href="https://www.instagram.com/estif_k?igsh=d2VuYjJiMm5lYTdj"
          target="_blank"
          rel="noopener noreferrer">
          <img src="instagram.png" alt="Instagram" className="h-8 w-8" />
        </a>
        <a
          href="https://github.com/Estif4"
          target="_blank"
          rel="noopener noreferrer">
          <img src="github2.png" alt="GitHub" className="h-8 w-8" />
        </a>
        <a
          href="https://t.me/stephen1v"
          target="_blank"
          rel="noopener noreferrer">
          <img src="telegram.png" alt="Telegram" className="h-8 w-8" />
        </a>
      </div>
    </div>
  );
};

export default Footer;
