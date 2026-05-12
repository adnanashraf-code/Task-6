import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Productdetail from "./pages/Productdetail";

const App = () => {
  return (
    <div className="min-h-screen w-full bg-black text-white p-6 sm:p-10">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/product/:productid" element={<Productdetail />} />
      </Routes>
    </div>
  );
};

export default App;
