// Pages/Products.jsx

import React, { useContext, useEffect, useState } from "react";
import { UsercontextData } from "../context/UsercontextProvider";
import { Link } from "react-router-dom";

const Products = () => {
  const { productData, fetchProducts, loading } = useContext(UsercontextData);

  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(productData);
  }, [productData]);

  const sortLowToHigh = () => {
    const sortedData = [...products].sort((a, b) => a.price - b.price);

    setProducts(sortedData);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-black flex justify-center items-center">
        <h1 className="text-white text-4xl font-bold">Loading...</h1>
      </div>
    );
  }

  let renderdata = products.map((item) => {
    return (
      <Link
        key={item.id}
        to={`/product/${item.id}`}
        className="
          bg-white
          rounded-2xl
          p-5
          shadow-lg
          hover:scale-105
          transition-all
          duration-300
          flex
          flex-col
          items-center
        "
      >
        <img
          src={item.image}
          alt={item.title}
          className="h-52 w-full object-contain"
        />

        <h2 className="mt-4 text-black font-semibold text-lg text-center line-clamp-2">
          {item.title}
        </h2>

        <p className="mt-3 text-red-500 text-xl font-bold">₹ {item.price}</p>
      </Link>
    );
  });

  return (
    <div className="min-h-screen bg-black p-8">
      <div className="flex justify-between items-center mb-10 flex-wrap gap-4">
        <h1 className="text-white text-4xl font-bold">All Products</h1>

        <div className="flex gap-4">
          <button
            onClick={sortLowToHigh}
            className="
              px-5
              py-3
              bg-emerald-500
              rounded-xl
              text-white
              font-semibold
              hover:bg-emerald-600
              transition-all
            "
          >
            Sort By Price
          </button>

          <button
            onClick={fetchProducts}
            disabled={loading}
            className="
    px-5
    py-3
    bg-blue-500
    rounded-xl
    text-white
    font-semibold
    hover:bg-blue-600
    transition-all
    disabled:opacity-50
  "
          >
            {loading ? "Refreshing..." : "Refresh"}
          </button>
        </div>
      </div>

      <div
        className="
          grid
          grid-cols-1
          sm:grid-cols-2
          md:grid-cols-3
          lg:grid-cols-4
          gap-8
        "
      >
        {renderdata}
      </div>
    </div>
  );
};

export default Products;
