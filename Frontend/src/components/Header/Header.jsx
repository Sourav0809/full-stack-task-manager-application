import React from "react";
import { MdTaskAlt } from "react-icons/md";
const Header = () => {
  return (
    <header className=" flex justify-start items-center px-10 py-4 bg-blue-600 text-white gap-2 font-poppins">
      <MdTaskAlt className=" text-3xl" />
      <h1 className=" text-2xl">Task Manager</h1>
    </header>
  );
};

export default Header;
