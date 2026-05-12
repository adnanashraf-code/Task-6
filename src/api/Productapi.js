import axios from "axios";

export const getData = async () => {
  try {
    const randomLimit = Math.floor(Math.random() * 30) + 1;

    const res = await axios.get(
      `https://fakestoreapi.com/products?limit=${randomLimit}`,
    );

    return res.data;
  } catch (error) {
    console.error("Error fetching data:", error);

    return [];
  }
};
