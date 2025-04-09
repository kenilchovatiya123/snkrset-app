import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Collections from "./pages/Collections";
import About from "./pages/About";
import Contact from "./pages/Contact";
import ProductDetails from "./pages/Products";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import PlaceOrder from "./pages/PlaceOrder";
import Orders from "./pages/Orders";
import Footer from "./components/shared/Footer";
import SearchBar from "./components/shared/SearchBar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footwear from "./pages/Footwear"; // <-- Sneaker listing page
import Navbar from "./components/layout/Navbar";
import AirJordan1 from "./pages/collections/AirJordan1";

const App = () => {
  return (
    <div className="w-full">
      <ToastContainer />
      <Navbar />
      <div className="lg:hidden">
        <SearchBar />
      </div>

      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/collections" element={<Collections />} />
        <Route path="/footwear" element={<Footwear />} /> {/* All Sneakers */}
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/products/:productId" element={<ProductDetails />} />
        <Route path="/sneakers/airjordan1" element={<AirJordan1/>}/>

        {/* Auth & Checkout */}
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/place-order" element={<PlaceOrder />} />
        <Route path="/orders" element={<Orders />} />
      </Routes>

      <Footer />
    </div>
  );
};

export default App;
