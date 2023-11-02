import React from "react";

const Footer = () => {
  const links = [
    { url: "/", text: "Home" },
    { url: "/about", text: "About" },
    { url: "/contact", text: "Contact" },
    { url: "/services", text: "Services" },
    { url: "/blog", text: "Blog" },
  ];
  return (
    <div className="bg-color-page py-16">
      <div className="flex flex-col gap-8">
        <div className="flex flex-row justify-center items-center gap-4">
          <img src="public/logo.png" className=" w-12 h-12"></img>
          <span className="text-white font-normal text-3xl">ITB Swadharma</span>
        </div>
        <div className="flex flex-wrap gap-10 justify-center text-lg text-white font-semibold">
          {links.map((link, index) => (
            <a key={index} href={link.url}>
              {link.text}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
