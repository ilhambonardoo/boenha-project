import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import StickyWhatsAppButton from "./components/StickyWhatsAppButton";
import HomePage from "./pages/Home/HomePage";
import AboutPage from "./pages/About/AboutPage";
import ProductPage from "./pages/Product/ProductPage";
import GalleryPage from "./pages/Gallery/GalleryPage";
import LiniBisnisPage from "./pages/LiniBisnis/LiniBisnisPage";
import ContactPage from "./pages/Contact/ContactPage";

const App = () => {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/tentang-kami" element={<AboutPage />} />
          <Route path="/lini-bisnis" element={<LiniBisnisPage />} />
          <Route path="/produk" element={<ProductPage />} />
          <Route path="/galeri" element={<GalleryPage />} />
          <Route path="/kontak" element={<ContactPage />} />
        </Routes>
      </main>
      <Footer />
      <StickyWhatsAppButton />
    </>
  );
};

export default App;
