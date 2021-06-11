import React, { useState } from "react";
import { ReactComponent as Chevron } from "../assets/icon-chevron.svg";
import { Link } from "react-router-dom";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  console.log(isOpen);
  return (
    <div>
      <div className="mt-4 mx-4 flex justify-between items-center pb-4 md:flex-col xl:flex-row xl:justify-between">
        <h1 className="text-white text-2xl">THE PLANETS</h1>
        <button
          type="button"
          className="focus:outline-none block md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="h-6 w-6 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            {isOpen && (
              <path
                fill="#FFF"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
              />
            )}
            {!isOpen && (
              <path
                fill="#FFF"
                fillRule="evenodd"
                d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
              />
            )}
          </svg>
        </button>
        <nav className="hidden md:block md:mt-6 xl:mt-0">
          <ul className="text-white flex space-x-8 font-bold">
            <li>
              <Link to={`/planet`}>MERCURY</Link>
            </li>
            <li>VENUS</li>
            <li>EARTH</li>
            <li>MARS</li>
            <li>JUPITER</li>
            <li>SATURN</li>
            <li>URANUS</li>
            <li>NEPTUNE</li>
          </ul>
        </nav>
      </div>
      <hr className="opacity-30" />
      <div className={`${isOpen ? "block" : "hidden"} md:hidden`}>
        <ul className="text-white flex-col font-bold mt-12 space-y-4 mx-4">
          <li className="flex items-center justify-between">
            <div className="flex space-x-4">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="10" cy="10" r="10" fill="#DEF4FC" />
              </svg>
              <span>MERCURY</span>
            </div>
            <Chevron />
          </li>
          <hr className="opacity-10" />
          <li className="flex items-center justify-between">
            <div className="flex space-x-4">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="10" cy="10" r="10" fill="#F7CC7F" />
              </svg>
              <span>VENUS</span>
            </div>
            <Chevron />
          </li>
          <hr className="opacity-10" />
          <li className="flex items-center justify-between">
            <div className="flex space-x-4">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="10" cy="10" r="10" fill="#545BFE" />
              </svg>
              <span>EARTH </span>
            </div>
            <Chevron />
          </li>
          <hr className="opacity-10" />
          <li className="flex items-center justify-between">
            <div className="flex space-x-4">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="10" cy="10" r="10" fill="#FF6A45" />
              </svg>
              <span>MARS</span>
            </div>
            <Chevron />
          </li>
          <hr className="opacity-10" />
          <li className="flex items-center justify-between">
            <div className="flex space-x-4">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="10" cy="10" r="10" fill="#ECAD7A" />
              </svg>
              <span>JUPITER</span>
            </div>
            <Chevron />
          </li>
          <hr className="opacity-10" />
          <li className="flex items-center justify-between">
            <div className="flex space-x-4">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="10" cy="10" r="10" fill="#FCCB6B" />
              </svg>
              <span>SATURNE</span>
            </div>
            <Chevron />
          </li>
          <hr className="opacity-10" />
          <li className="flex items-center justify-between">
            <div className="flex space-x-4">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="10" cy="10" r="10" fill="#65F0D5" />
              </svg>
              <span> URANUS</span>
            </div>
            <Chevron />
          </li>
          <hr className="opacity-10" />
          <li className="flex items-center justify-between">
            <div className="flex space-x-4">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="10" cy="10" r="10" fill="#497EFA" />
              </svg>
              <span>NEPTUNE</span>
            </div>
            <Chevron />
          </li>
        </ul>
      </div>
    </div>
  );
}
