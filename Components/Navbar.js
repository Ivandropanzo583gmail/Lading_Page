
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi"; 
import Link from 'next/link';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-md  w-full z-10 ">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <div className="flex items-center">
          <div className="  mr-4">
            <img src="./Navbar/email.png" />
          </div>
          <div>
            <h1 className="text-xl font-medium text-blue-700 tracking-wider ">Sendpay</h1>
          </div>
        </div>

        {/* Links Desktop */}
        <div className="hidden md:flex space-x-8">
          <ul className="flex space-x-24 text-sm font-semibold">
            <li className="hover:text-gray-400"><Link href="/">Home</Link></li>
            <li className='hover:text-gray-400'><Link href="#service" >Service</Link></li>
            <li className='hover:text-gray-400'><Link href="#How_Works" >How it works</Link></li>
            <li className='hover:text-gray-400'><Link href="#contact" >Contact</Link></li>
          </ul>
        </div>

        {/* Botão "Get A Quote" */}
        <button className="hidden md:block">
          <a href="#" className="bg-red-600 text-white px-4 py-2 rounded">Sign in</a>
        </button>

        {/* Menu Mobile */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu}>
            {isOpen ? (
              <FiX className="text-3xl text-gray-800" />
            ) : (
              <FiMenu className="text-3xl text-gray-800" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md">
          <ul className=" text-sm font-semibold text-center">
            <li className="hover:text-gray-400 block py-2 px-4"><Link href="/" >Home</Link></li>
            <li className='hover:text-gray-400 block py-2 px-4'><Link href="#service" >Service</Link></li>
            <li className='hover:text-gray-400 block py-2 px-4'><Link href="#How_Works" >How it works</Link></li>
            <li className='hover:text-gray-400 block py-2 px-4'><Link href="#contact" >Contact</Link></li>
          </ul>
          <a href="#" className="block bg-red-600 text-white py-2 px-4 rounded m-2 text-center">
            Sign in
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
