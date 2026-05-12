import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/products");
  };

  return (
    <div className="min-h-screen bg-black overflow-hidden relative">
      {/* Background Effects */}
      <div className="absolute top-[-120px] left-[-120px] h-[350px] w-[350px] bg-emerald-500/20 blur-3xl rounded-full" />

      <div className="absolute bottom-[-120px] right-[-120px] h-[350px] w-[350px] bg-blue-500/20 blur-3xl rounded-full" />

      {/* Grid Overlay */}
      <div
        className="
          absolute
          inset-0
          opacity-[0.03]
          bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)]
          bg-[size:70px_70px]
        "
      />

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center px-6">
        <div className="max-w-6xl text-center">
          {/* Badge */}
          <div
            className="
              inline-flex
              items-center
              gap-3
              px-6
              py-3
              rounded-full
              border
              border-emerald-500/30
              bg-emerald-500/10
              backdrop-blur-xl
            "
          >
            <div className="h-3 w-3 rounded-full bg-emerald-400 animate-pulse" />

            <p
              className="
                text-emerald-300
                text-sm
                uppercase
                tracking-[4px]
                font-semibold
              "
            >
              New Collection Available
            </p>
          </div>

          {/* Heading */}
          <h1
            className="
              mt-10
              text-white
              text-5xl
              sm:text-6xl
              md:text-8xl
              font-black
              leading-[1.1]
            "
          >
            Shop The
            <span className="text-emerald-400"> Future </span>
            Of Style
          </h1>

          {/* Description */}
          <p
            className="
              mt-10
              text-gray-400
              text-lg
              md:text-2xl
              leading-9
              max-w-3xl
              mx-auto
            "
          >
            Premium products crafted with modern design, clean aesthetics, and
            seamless shopping experience.
          </p>

          {/* Button */}
          <button
            onClick={handleNavigate}
            className="
              mt-14
              px-12
              py-5
              rounded-2xl
              bg-emerald-500
              text-white
              text-lg
              font-bold
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

          {/* Stats */}
          <div
            className="
              mt-24
              grid
              grid-cols-2
              md:grid-cols-4
              gap-6
            "
          >
            <div
              className="
                bg-white/5
                border
                border-white/10
                backdrop-blur-xl
                rounded-3xl
                p-8
              "
            >
              <h2 className="text-white text-4xl font-black">50+</h2>

              <p className="text-gray-400 mt-3">Brands</p>
            </div>

            <div
              className="
                bg-white/5
                border
                border-white/10
                backdrop-blur-xl
                rounded-3xl
                p-8
              "
            >
              <h2 className="text-white text-4xl font-black">10K+</h2>

              <p className="text-gray-400 mt-3">Customers</p>
            </div>

            <div
              className="
                bg-white/5
                border
                border-white/10
                backdrop-blur-xl
                rounded-3xl
                p-8
              "
            >
              <h2 className="text-white text-4xl font-black">24/7</h2>

              <p className="text-gray-400 mt-3">Support</p>
            </div>

            <div
              className="
                bg-white/5
                border
                border-white/10
                backdrop-blur-xl
                rounded-3xl
                p-8
              "
            >
              <h2 className="text-white text-4xl font-black">100%</h2>

              <p className="text-gray-400 mt-3">Secure</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
