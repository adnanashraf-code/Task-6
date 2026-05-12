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
      <div className="min-h-screen bg-black p-8 md:p-14">
        <div className="mb-16">
          <div className="h-5 w-40 bg-white/10 rounded-full animate-pulse" />

          <div className="h-16 w-[300px] bg-white/10 rounded-2xl mt-6 animate-pulse" />
        </div>

        <div
          className="
          grid
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-3
          xl:grid-cols-4
          gap-10
        "
        >
          {Array(8)
            .fill(0)
            .map((_, index) => {
              return (
                <div
                  key={index}
                  className="
                  bg-white/10
                  border
                  border-white/10
                  rounded-[30px]
                  overflow-hidden
                  animate-pulse
                "
                >
                  <div className="h-[280px] bg-white/10" />

                  <div className="p-6">
                    <div className="h-4 w-28 bg-white/10 rounded-full" />

                    <div className="h-8 w-full bg-white/10 rounded-xl mt-5" />

                    <div className="h-8 w-2/3 bg-white/10 rounded-xl mt-3" />

                    <div className="flex justify-between items-center mt-8">
                      <div className="h-10 w-24 bg-white/10 rounded-xl" />

                      <div className="h-10 w-20 bg-white/10 rounded-full" />
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    );
  }

  let renderdata = products.map((item) => {
    return (
      <Link
        key={item.id}
        to={`/product/${item.id}`}
        className="
          group
          bg-white/10
          backdrop-blur-xl
          border
          border-white/10
          rounded-[30px]
          overflow-hidden
          hover:scale-105
          hover:border-emerald-400/40
          transition-all
          duration-500
          shadow-2xl
        "
      >
        {/* Image Section */}
        <div
          className="
    relative
    bg-gradient-to-br
    from-zinc-900
    via-black
    to-zinc-800
    p-8
    flex
    justify-center
    items-center
    h-[280px]
    overflow-hidden
  "
        >
          {/* Glow Effect */}
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

          {/* Top Shine */}
          <div
            className="
      absolute
      top-0
      left-0
      w-full
      h-full
      bg-gradient-to-b
      from-white/5
      to-transparent
    "
          />

          <img
            src={item.image}
            alt={item.title}
            className="
      relative
      z-10
      h-[190px]
      object-contain
      group-hover:scale-110
      group-hover:rotate-2
      transition-all
      duration-500
      drop-shadow-[0_20px_30px_rgba(0,0,0,0.8)]
    "
          />
        </div>

        {/* Content */}
        <div className="p-6">
          <p
            className="
              text-emerald-400
              text-xs
              uppercase
              tracking-[3px]
              font-semibold
            "
          >
            Premium Product
          </p>

          <h2
            className="
              mt-4
              text-white
              text-xl
              font-bold
              line-clamp-2
              leading-8
            "
          >
            {item.title}
          </h2>

          <div className="mt-6 flex justify-between items-center">
            <h3
              className="
                text-3xl
                font-black
                text-emerald-400
              "
            >
              ₹ {item.price}
            </h3>

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
      </Link>
    );
  });

  return (
    <div className="min-h-screen bg-black overflow-hidden relative">
      {/* Background Blur Effects */}
      <div className="absolute top-[-120px] left-[-120px] h-[350px] w-[350px] bg-emerald-500/20 blur-3xl rounded-full" />

      <div className="absolute bottom-[-120px] right-[-120px] h-[350px] w-[350px] bg-blue-500/20 blur-3xl rounded-full" />

      {/* Main Content */}
      <div className="relative z-10 p-8 md:p-14">
        {/* Header */}
        <div
          className="
            flex
            flex-col
            lg:flex-row
            justify-between
            items-start
            lg:items-center
            gap-8
            mb-16
          "
        >
          <div>
            <p
              className="
                text-emerald-400
                uppercase
                tracking-[5px]
                text-sm
                font-semibold
              "
            >
              Modern Collection
            </p>

            <h1
              className="
                mt-4
                text-white
                text-5xl
                md:text-7xl
                font-black
                leading-tight
              "
            >
              Explore Products
            </h1>
          </div>

          {/* Buttons */}
          <div className="flex gap-4 flex-wrap">
            <button
              onClick={sortLowToHigh}
              className="
                px-8
                py-4
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
              Sort By Price
            </button>

            <button
              onClick={fetchProducts}
              disabled={loading}
              className="
                px-8
                py-4
                rounded-2xl
                bg-blue-500
                text-white
                font-bold
                hover:bg-blue-600
                hover:scale-105
                active:scale-95
                transition-all
                duration-300
                shadow-xl
                shadow-blue-500/30
                disabled:opacity-50
              "
            >
              {loading ? "Refreshing..." : "Refresh"}
            </button>
          </div>
        </div>

        {/* Products Grid */}
        <div
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-3
            xl:grid-cols-4
            gap-10
          "
        >
          {renderdata}
        </div>
      </div>
    </div>
  );
};

export default Products;
