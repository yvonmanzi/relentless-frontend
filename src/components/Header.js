// src/components/Header.js
import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    // <header className="bg-blue-600 text-white p-4">
    //   <div className="container mx-auto">
    //     <h1 className="text-2xl font-bold">
    //       <Link to="/">My Blog</Link>
    //     </h1>
    //   </div>
    // </header>
    <header className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex justify-center">
        <h1 className="text-2xl font-bold">
          {/* <Link to="/">My Blog</Link> */}
          eCommerce
        </h1>
      </div>
    </header>
  );
};

export default Header;
