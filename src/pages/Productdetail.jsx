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
      <div className="h-screen bg-black flex justify-center items-center">
        <div className="flex gap-3">
          <div className="h-5 w-5 rounded-full bg-emerald-400 animate-bounce" />

          <div className="h-5 w-5 rounded-full bg-emerald-400 animate-bounce delay-100" />

          <div className="h-5 w-5 rounded-full bg-emerald-400 animate-bounce delay-200" />
        </div>
      </div>
    );
  }

  if (!selectedData) {
    return (
      <div className="h-screen bg-black flex justify-center items-center">
        <h1 className="text-red-500 text-4xl font-black">Product Not Found</h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen lg:h-screen bg-black lg:overflow-hidden relative flex justify-center items-center py-10 lg:py-0 px-6">
      {/* Background Glow */}
      <div className="absolute top-[-120px] left-[-120px] h-[300px] w-[300px] bg-emerald-500/20 blur-3xl rounded-full" />

      <div className="absolute bottom-[-120px] right-[-120px] h-[300px] w-[300px] bg-blue-500/20 blur-3xl rounded-full" />

      {/* Card */}
      <div
        className="
          relative
          z-10
          w-full
          max-w-5xl
          h-auto
          lg:h-[85vh]
          bg-white/10
          backdrop-blur-xl
          border
          border-white/10
          rounded-[35px]
          overflow-hidden
          grid
          md:grid-cols-2
          shadow-2xl
        "
      >
        {/* Left Side */}
        <div
          className="
            relative
            bg-gradient-to-br
            from-zinc-900
            via-black
            to-zinc-800
            flex
            justify-center
            items-center
            p-8
            overflow-hidden
          "
        >
          {/* Glow */}
          <div
            className="
              absolute
              h-[220px]
              w-[220px]
              bg-emerald-500/10
              blur-3xl
              rounded-full
            "
          />

          {/* Shine */}
          <div
            className="
              absolute
              inset-0
              bg-gradient-to-b
              from-white/5
              to-transparent
            "
          />

          <img
            src={selectedData.image}
            alt={selectedData.title}
            className="
              relative
              z-10
              h-[280px]
              object-contain
              hover:scale-110
              transition-all
              duration-500
              drop-shadow-[0_20px_30px_rgba(0,0,0,0.8)]
            "
          />
        </div>

        {/* Right Side */}
        <div className="p-8 flex flex-col justify-between">
          <div>
            <p
              className="
                text-emerald-400
                uppercase
                tracking-[4px]
                text-xs
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
                md:text-4xl
                font-black
                leading-tight
                line-clamp-2
              "
            >
              {selectedData.title}
            </h1>

            <p
              className="
                mt-5
                text-gray-300
                leading-7
                text-sm
                line-clamp-4
              "
            >
              {selectedData.description}
            </p>

            <div className="mt-8 flex items-center gap-4 flex-wrap">
              <h2
                className="
                  text-4xl
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
          <div className="mt-8 flex gap-4">
            <button
              className="
                flex-1
                py-3
                rounded-2xl
                bg-emerald-500
                text-white
                font-bold
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
                py-3
                rounded-2xl
                border
                border-white/20
                text-white
                font-bold
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
  );
};

export default Productdetail;
