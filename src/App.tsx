import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import HomePage from "./pages/Home/HomePage";
import About from "./pages/About/About";
import Product from "./pages/Product/Product";
import Gallery from "./pages/Gallery/Gallery";
import Bisnis from "./pages/LiniBisnis/Bisnis";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/our-bussiness" element={<Bisnis />} />
        <Route path="/product" element={<Product />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
