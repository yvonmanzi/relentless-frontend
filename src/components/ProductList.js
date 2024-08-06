// ProductList.js
import React from "react";
import HibiscusImage from "../assets/images/Hibiscus_Delight_tisane.jpg";
import OolongImage from "../assets/images/oolong_tea.jpeg";
import WhiteteaImage from "../assets/images/white_tea.webp";
const products = [
  {
    id: 1,
    name: "Green tea",
    price: 30.0,
    imageUrl: HibiscusImage,
  },
  { id: 2, name: "Red tea", price: 45.5, imageUrl: OolongImage },
  {
    id: 3,
    name: "Tea powder",
    price: 21.2,
    imageUrl: WhiteteaImage,
  },
];

const ProductList = () => {
  return (
    <div className="bg-blue-100 p-6">
      <header className="flex justify-between items-center mb-6">
        <h1 className="text-xl font-bold">My shop</h1>
        <p>Your cart is empty.</p>
      </header>
      <div className="flex">
        <aside className="w-1/4 mr-6">
          <h2 className="text-lg font-bold mb-4">Categories</h2>
          <ul>
            <li className="bg-blue-300 p-2 mb-2">All</li>
            <li className="p-2">Tea</li>
          </ul>
        </aside>
        <main className="w-3/4">
          <h2 className="text-2xl font-bold mb-4">Products</h2>
          <div className="grid grid-cols-3 gap-4">
            {products.map((product) => (
              <div key={product.id} className="border p-4 bg-white">
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  className="mb-4 w-full h-48 object-cover"
                />
                <h3 className="text-lg font-semibold">{product.name}</h3>
                <p className="text-gray-700">${product.price.toFixed(2)}</p>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default ProductList;
