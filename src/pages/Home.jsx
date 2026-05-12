import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/products");
  };

  return (
    <div className="min-h-screen bg-black overflow-hidden relative">
      {/* Background Blur Effects */}
      <div className="absolute top-[-120px] left-[-120px] h-[350px] w-[350px] bg-emerald-500/20 blur-3xl rounded-full" />

      <div className="absolute bottom-[-120px] right-[-120px] h-[350px] w-[350px] bg-blue-500/20 blur-3xl rounded-full" />

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex flex-col justify-center items-center px-6">
        <div
          className="
            max-w-4xl
            text-center
            flex
            flex-col
            items-center
          "
        >
          <p
            className="
              text-emerald-400
              uppercase
              tracking-[6px]
              text-sm
              font-semibold
              mb-6
            "
          >
            Modern Store
          </p>

          <h1
            className="
              text-white
              text-5xl
              md:text-7xl
              font-black
              leading-tight
            "
          >
            Discover
            <span className="text-emerald-400"> Premium </span>
            Products
          </h1>

          <p
            className="
              mt-8
              text-gray-400
              text-lg
              md:text-xl
              leading-8
              max-w-2xl
            "
          >
            Browse trending collections with clean design, smooth interactions,
            and modern shopping experience.
          </p>

          <div className="flex gap-5 mt-12 flex-wrap justify-center">
            <button
              onClick={handleNavigate}
              className="
                px-10
                py-4
                bg-emerald-500
                text-white
                rounded-2xl
                font-bold
                text-lg
                hover:bg-emerald-600
                hover:scale-105
                active:scale-95
                transition-all
                duration-300
                shadow-2xl
                shadow-emerald-500/30
              "
            >
              Explore Products
            </button>

            <button
              className="
                px-10
                py-4
                border
                border-gray-700
                text-white
                rounded-2xl
                font-bold
                text-lg
                hover:bg-white
                hover:text-black
                transition-all
                duration-300
              "
            >
              View Collection
            </button>
          </div>

          {/* Stats */}
          <div
            className="
              mt-20
              grid
              grid-cols-2
              md:grid-cols-4
              gap-6
              w-full
            "
          >
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10">
              <h2 className="text-3xl font-black text-white">50+</h2>
              <p className="text-gray-400 mt-2">Brands</p>
            </div>

            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10">
              <h2 className="text-3xl font-black text-white">10K+</h2>
              <p className="text-gray-400 mt-2">Customers</p>
            </div>

            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10">
              <h2 className="text-3xl font-black text-white">24/7</h2>
              <p className="text-gray-400 mt-2">Support</p>
            </div>

            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10">
              <h2 className="text-3xl font-black text-white">100%</h2>
              <p className="text-gray-400 mt-2">Secure</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
