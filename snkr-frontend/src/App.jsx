import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
// import Collections from "./pages/Collections";
import About from "./pages/About";
import Contact from "./pages/Contact";
import ProductDetails from "./pages/Products";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import PlaceOrder from "./pages/PlaceOrder";
import Orders from "./pages/Orders";
import Footer from "./components/layout/Footer";
import SearchBar from "./components/layout/SearchBar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footwear from "./pages/Footwear"; // <-- Sneaker listing page
import Navbar from "./components/layout/Navbar";
import AirJordans from "./pages/sneakers/AirJordans";
import Dior from "./pages/sneakers/Dior";
import SbDunks from "./pages/sneakers/SbDunks";
import Shirts from "./pages/apparels/Shirts";
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
        {/* <Route path="/collections" element={<Collections />} /> */}
        <Route path="/footwear" element={<Footwear />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/products/:productId" element={<ProductDetails />} />

        {/* products routes */}
        <Route path="/sneakers/air-jordans" element={<AirJordans />} />
        <Route path="/sneakers/sb-dunks" element={<SbDunks />} />
        {/* <Route path="/sneakers/yeezy350" element={<Yeezy350 />} /> */}
        {/* <Route path="/sneakers/louis-vuitton" element={<LouisVuitton />} /> */}
        <Route path="/sneakers/dior" element={<Dior />} />
        {/* <Route path="/sneakers/gucci" element={<Gucci />} /> */}
        {/* <Route path="/sneakers/prada" element={<Prada />} /> */}
        <Route path="/apparels/shirts" element={<Shirts />} />

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
