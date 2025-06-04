import React from "react";


function Navbar() {
    return (
      <nav className="flex justify-between items-center px-6 py-4 bg-white shadow-md">
        <h1 className="text-2xl font-bold text-blue-700">AIMestro</h1>
        <ul className="flex gap-6 text-gray-600">
            <li className="hover:text-blue-700 cursor-pointer">Home</li>
            <li className="hover:text-blue-700 cursor-pointer">Features</li>
            <li className ="hover:text-blue-700 cursor-pointer">Conatact</li>
        </ul>
      </nav>
    )
}

export default Navbar;