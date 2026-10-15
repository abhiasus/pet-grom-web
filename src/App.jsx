
import { Routes, Route, Navigate } from "react-router-dom";

import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
import Products from "./components/Products";
import Booking from "./components/Booking";
import Contact from "./components/Contact";
import Cart from "./components/Cart";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Services />} />
      <Route path="/products" element={<Products />} />
      <Route path="/booking" element={<Booking />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
