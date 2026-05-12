import React, { useContext } from "react";
import { UsercontextData } from "../context/UsercontextProvider";
import { useParams } from "react-router-dom";

const Productdetail = () => {
  const { productData, loading } = useContext(UsercontextData);

  const { productid } = useParams();

  const selectedData = productData.find(
    (item) => item.id === Number(productid),
  );

  if (loading) {
    return (
      <div className="min-h-screen bg-black flex justify-center items-center">
        <h1 className="text-white text-4xl font-bold">Loading...</h1>
      </div>
    );
  }

  if (!selectedData) {
    return (
      <div className="min-h-screen bg-black flex justify-center items-center">
        <h1 className="text-red-500 text-4xl font-bold">Product Not Found</h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white flex justify-center items-center p-6">
      <div
        className="
          w-[350px]
          bg-white
          text-black
          rounded-2xl
          p-6
          shadow-lg
        "
      >
        <img
          className="h-72 w-full object-contain"
          src={selectedData.image}
          alt={selectedData.title}
        />

        <h2 className="mt-5 text-xl font-bold">{selectedData.title}</h2>

        <p className="mt-4 text-red-500 font-bold text-2xl">
          ₹ {selectedData.price}
        </p>

        <p className="mt-4 text-gray-600 text-sm leading-6">
          {selectedData.description}
        </p>

        <button
          className="
            mt-6
            w-full
            py-3
            bg-emerald-500
            text-white
            rounded-xl
            font-semibold
            hover:bg-emerald-600
            transition-all
          "
        >
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default Productdetail;
