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
        <h1 className="text-white text-5xl font-black animate-pulse">
          Loading...
        </h1>
      </div>
    );
  }

  if (!selectedData) {
    return (
      <div className="min-h-screen bg-black flex justify-center items-center">
        <h1 className="text-red-500 text-5xl font-black">Product Not Found</h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black overflow-hidden relative">
      {/* Background Blur */}
      <div className="absolute top-[-120px] left-[-120px] h-[350px] w-[350px] bg-emerald-500/20 blur-3xl rounded-full" />

      <div className="absolute bottom-[-120px] right-[-120px] h-[350px] w-[350px] bg-blue-500/20 blur-3xl rounded-full" />

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex justify-center items-center px-6 py-10">
        <div
          className="
            w-full
            max-w-6xl
            bg-white/10
            backdrop-blur-xl
            border
            border-white/10
            rounded-[40px]
            overflow-hidden
            grid
            md:grid-cols-2
            shadow-2xl
          "
        >
          {/* Left Side */}
          <div
            className="
              bg-white
              flex
              justify-center
              items-center
              p-10
            "
          >
            <img
              src={selectedData.image}
              alt={selectedData.title}
              className="
                h-[350px]
                w-full
                object-contain
                hover:scale-110
                transition-all
                duration-500
              "
            />
          </div>

          {/* Right Side */}
          <div className="p-10 flex flex-col justify-between">
            <div>
              <p
                className="
                  text-emerald-400
                  uppercase
                  tracking-[4px]
                  text-sm
                  font-semibold
                "
              >
                Premium Product
              </p>

              <h1
                className="
                  mt-4
                  text-white
                  text-3xl
                  md:text-5xl
                  font-black
                  leading-tight
                "
              >
                {selectedData.title}
              </h1>

              <p
                className="
                  mt-6
                  text-gray-300
                  leading-8
                  text-base
                  line-clamp-4
                "
              >
                {selectedData.description}
              </p>

              <div className="mt-8 flex items-center gap-4">
                <h2
                  className="
                    text-5xl
                    font-black
                    text-emerald-400
                  "
                >
                  ₹ {selectedData.price}
                </h2>

                <span
                  className="
                    px-4
                    py-2
                    rounded-full
                    bg-emerald-500/20
                    text-emerald-300
                    text-sm
                    font-semibold
                  "
                >
                  In Stock
                </span>
              </div>
            </div>

            {/* Buttons */}
            <div className="mt-10 flex gap-5 flex-wrap">
              <button
                className="
                  flex-1
                  py-4
                  rounded-2xl
                  bg-emerald-500
                  text-white
                  font-bold
                  text-lg
                  hover:bg-emerald-600
                  hover:scale-105
                  active:scale-95
                  transition-all
                  duration-300
                  shadow-xl
                  shadow-emerald-500/30
                "
              >
                Buy Now
              </button>

              <button
                className="
                  flex-1
                  py-4
                  rounded-2xl
                  border
                  border-white/20
                  text-white
                  font-bold
                  text-lg
                  hover:bg-white
                  hover:text-black
                  transition-all
                  duration-300
                "
              >
                Add To Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Productdetail;
