import React from "react";
import ReactIcon from "../assets/icons/react.png";
import TailwindCSSIcon from "../assets/icons/tailwind.png";
import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";

const Footer = () => {
  const icons = [ReactIcon, TailwindCSSIcon];

  const links = [
    {
      icon: FaGithub,
      link: "https://github.com/PaulBondoc",
    },
    {
      icon: FaLinkedin,
      link: "https://www.linkedin.com/in/paul-jhon-bondoc-704a7327a",
    },
    {
      icon: FaFacebook,
      link: "https://www.facebook.com/Pjbndc.01",
    },
  ];
  return (
    <footer className="flex flex-col gap-y-2 items-center py-12 text-white">
      <p className="text-[14px] align-middle">
        Copyright &copy; 2024{" "}
        <span className="logo text-[20px] tracking-wide">
          Movie<span className="text-accent">Hub</span>
        </span>
      </p>
      <p className="flex items-center gap-2 text-[14px]">
        Created with
        {icons.map((item, index) => (
          <img key={index} src={item} className="w-[25px]" loading="lazy" />
        ))}
        By Paul Bondoc
      </p>
      <div>
        <div className="flex gap-5 mt-[2rem]">
          {links.map((item, index) => (
            <div key={index}>
              <a href={item.link} target="_blank">
                <item.icon className="text-[28px] hover:text-accent" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
