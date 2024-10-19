import logo from "../assets/m.png";
import {
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
  AiOutlineClose,
  AiOutlineMenu,
  AiOutlinePhone,
} from "react-icons/ai";
import { CgFileDocument } from "react-icons/cg";
import { useState } from "react";

function NavBar() {
  let [open, setOpen] = useState(false);

  return (
    <div className="bg-gradient-to-r from-gray-600 to-green-500 shadow-md w-full fixed top-0 left-0 z-10 md:bg-gradient-to-r md:from-purple-600 md:to-green-500 sm:bg-blue-600">
      <div className="md:flex items-center justify-between py-4 md:px-6 px-2">
        <div
          className="font-bold text-2xl cursor-pointer flex items-center font-[Poppins] text-white"
        >
          <span className="text-3xl mr-1 pt-2">
            <a href={"#/"}>
              <img src={logo} alt="logo" className="w-10 bg-gray-100 p-1 shadow-lg rounded-xl hover:scale-105 transition-transform duration-300 overflow-hidden" />
            </a>
          </span>
        </div>

        <div
          onClick={() => setOpen(!open)}
          className="text-3xl text-white absolute right-8 top-8 cursor-pointer md:hidden"
        >
          {open ? <AiOutlineClose /> : <AiOutlineMenu />}
        </div>

        <ul
          className={`md:flex md:items-center md:pb-0 mt-2 md:mt-2 pb-12 absolute md:static md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            open ? "top-20" : "top-[-490px]"
          }`}
        >
          <li className="md:ml-8 md:mx-10 text-xl md:my-0 my-7 flex items-center">
            <a
              onClick={() => setOpen(!open)}
              href={"#/"}
              className="text-white hover:text-lime-300 duration-500 flex items-center gap-2"
            >
              <AiOutlineHome /> <span>Home</span>
            </a>
          </li>

          <li className="md:ml-8 md:mx-10 text-xl md:my-0 my-7 flex items-center">
            <a
              onClick={() => setOpen(!open)}
              href={"#/about"}
              className="text-white hover:text-lime-300 duration-500 flex items-center gap-2"
            >
              <AiOutlineUser /> <span>About</span>
            </a>
          </li>

          <li className="md:ml-8 md:mx-10 text-xl md:my-0 my-7 flex items-center">
            <a
              onClick={() => setOpen(!open)}
              href={"#/project"}
              className="text-white hover:text-lime-300 duration-500 flex items-center gap-2"
            >
              <AiOutlineFundProjectionScreen /> <span>Projects</span>
            </a>
          </li>

          <li className="md:ml-8 md:mx-10 text-xl md:my-0 my-7 flex items-center">
            <a
              onClick={() => setOpen(!open)}
              href={"#/resume"}
              className="text-white hover:text-lime-300 duration-500 flex items-center gap-2"
            >
              <CgFileDocument /> <span>Resume</span>
            </a>
          </li>

          <li className="md:ml-8 md:mx-10 text-xl md:my-0 my-7 flex items-center">
            <a
              onClick={() => setOpen(!open)}
              href={"#/contact"}
              className="text-white hover:text-lime-300 duration-500 flex items-center gap-2"
            >
              <AiOutlinePhone /> <span>Contact</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default NavBar;