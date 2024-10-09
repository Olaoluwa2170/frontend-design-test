import React, { useState } from "react";
import logo from "../assets/images/endeavor.png"; // Ensure this path is correct and the file exists
import { ChevronDown } from "lucide-react";
import { cn } from "../lib/utils";

const Navbar = () => {
  const [click, setClick] = useState(false);

  return (
    <nav
      className={cn(
        "md:min-h-[5rem] md:h-fit h-[5rem] overflow-hidden w-full bg-primary-100 border-b duration-300 border-white fixed top-0 z-1",
        {
          "h-[55vh]": click,
        },
      )}
    >
      <div className="flex justify-between items-center">
        <div className="flex items-center w-full md:w-fit">
          <div className="md:border-r md:px-8 py-2 border-white w-fit">
            <img src={logo} alt="logo" className="w-[80px] object-contain" />
          </div>
          <div className="md:hidden flex justify-end items-center gap-2 w-full">
            <div>
              <img
                src="./search.png"
                className={cn("w-5 cursor-pointer", {
                  hidden: click,
                })}
                alt="search"
              />
            </div>
            <div
              onClick={() => setClick(!click)}
              className={cn("cursor-pointer w-fit py-2 flex flex-col px-3", {
                "gap-2": !click,
              })}
            >
              <div
                className={cn(
                  "h-[2px] rounded-3xl w-5 bg-white duration-300 rotate-45",
                  {
                    "rotate-0 pr-8": !click,
                  },
                )}
              ></div>
              <div
                className={cn(
                  "h-[2px] rounded-3xl w-5 bg-white duration-300 -rotate-45",
                  {
                    "rotate-0": !click,
                  },
                )}
              ></div>
            </div>
          </div>
          <div>
            <ul className="md:flex hidden pl-20 font-jost text-white font-semibold text-lg">
              {navLink.map((link) => (
                <li
                  className="px-3 cursor-pointer text-base flex gap-1"
                  key={link}
                >
                  {link.toUpperCase()}{" "}
                  <ChevronDown
                    className={cn("text-gray-700 cursor-pointer", {
                      hidden: link != "Services",
                    })}
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="md:flex hidden gap-2">
          <ul className="flex items-center pr-16">
            {socials.map((social) => (
              <li className="px-2 w-10 cursor-pointer" key={social}>
                <img src={social} alt={social} />
              </li>
            ))}
          </ul>
          <div className="border-r border-l min-h-[5.9375rem] mr-5 flex items-center px-8 border-white">
            <img src="./search.png" alt="search" />
          </div>
          <div className="font-jost flex flex-col text-white justify-center pr-10">
            <p>Need help?</p>
            <p className="font-semibold">+234 8004023</p>
          </div>
        </div>
      </div>
      <div
        className={cn("md:hidden pl-2 mt-5 duration-500", {
          "translate-x-5": click,
          "translate-x-0": !click,
        })}
      >
        <ul className="">
          {navLink.map((link) => (
            <li
              key={link}
              className={cn(
                "py-1 font-jost  text-gray-200 font-semibold text-lg",
              )}
            >
              {link}
            </li>
          ))}
        </ul>
        <div className="flex gap-2 mt-5">
          {socials.map((link) => (
            <img className={cn("w-5 cursor-pointer")} key={link} src={link} />
          ))}
        </div>
        <div className="font-jost mt-8 flex text-base flex-col text-white justify-center pr-10">
          <p>Need help?</p>
          <p className="">+234 8004023</p>
        </div>
      </div>
    </nav>
  );
};

const navLink = ["Home", "Services", "Pages", "Case Shop", "Blog", "Content"];
const socials = [
  "./facebook.png",
  "./instagram.png",
  "./twitter.png",
  "./linkedin.png",
];

export default Navbar;
