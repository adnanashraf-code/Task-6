// context/UsercontextProvider.jsx

import React, { createContext, useEffect, useState } from "react";
import { getData } from "../api/Productapi";

// eslint-disable-next-line react-refresh/only-export-components
export const UsercontextData = createContext(null);

const UsercontextProvider = ({ children }) => {
  const [productData, setproductData] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchProducts = async () => {
    try {
      setLoading(true);

      const data = await getData();

      setproductData(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <UsercontextData.Provider
      value={{
        productData,
        fetchProducts,
        loading,
      }}
    >
      {children}
    </UsercontextData.Provider>
  );
};

export default UsercontextProvider;
