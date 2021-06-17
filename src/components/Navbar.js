import React from "react";

function Navbar() {
  const RightHandNav = () => {
    return (
      <nav className="flex md:space-x-6 font-semibold w-full md:w-auto bg-gray-100 p-6 md:p-0">
        <a href="#" className="p-4 text-xl">
          Home
        </a>
        <a href="#" className="p-4 text-xl">
          About us
        </a>
        <a href="#" className="p-4 text-xl">
          Services
        </a>
        <a href="#" className="p-4 text-xl">
          Blog
        </a>
        <a href="#" className="p-4 text-xl">
          Contact
        </a>
      </nav>
    );
  };

  return (
    <header className=" space-x-4 bg-gray-700 text-white py-4">
      <div className="container mx-auto m:w-full flex justify-between">
        <a href="#" className="block" alt="">
          <h1 className="text-5xl">AMUSED</h1>
        </a>
        <nav className="flex flex-col md:flex-row md:space-x-6 font-semibold w-full md:w-auto bg-gray-100 md:bg-transparent md:text-center p-6 md:p-0 ">
          <RightHandNav />
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
