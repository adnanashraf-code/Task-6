import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/products");
  };

  return (
    <div className="min-h-screen w-full bg-black text-white flex items-center justify-center px-6">
      <div className="flex flex-col items-center gap-6 text-center">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          Explore Amazing Products
        </h1>

        <p className="text-gray-400 max-w-xl text-sm md:text-base">
          Discover premium collections with modern UI, responsive layouts, and
          smooth user experience built using React and Tailwind CSS.
        </p>

        <button
          onClick={handleNavigate}
          className="
            px-8
            py-4
            bg-emerald-500
            hover:bg-emerald-600
            active:scale-95
            transition-all
            duration-300
            rounded-xl
            font-semibold
            text-lg
            shadow-lg
            shadow-emerald-500/20
          "
        >
          Explore All Products
        </button>
      </div>
    </div>
  );
};

export default Home;
