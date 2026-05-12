import React, { useContext } from "react";
import { UsercontextData } from "../context/UsercontextProvider";
import { useParams } from "react-router-dom";

const Productdetail = () => {
  const Productdata = useContext(UsercontextData);

  const { productid } = useParams();

  let selectedData = Productdata.find(
    (item) => item.id === Number(productid),
  );

  return (
    <div className="min-h-screen bg-black text-white flex justify-center items-center p-6">
      <div className="w-[320px] bg-white text-black rounded-xl p-5">
        <img
          className="h-60 w-full object-contain"
          src={selectedData?.image}
          alt={selectedData?.title}
        />

        <h2 className="mt-4 text-lg font-bold">{selectedData?.title}</h2>

        <p className="mt-2 text-red-500 font-semibold text-xl">
          ₹ {selectedData?.price}
        </p>
      </div>
    </div>
  );
};

export default Productdetail;
