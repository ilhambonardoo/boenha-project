import { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ROUTES } from "./constants";
import Footer from "./components/Layouts/Footer";
import Navbar from "./components/Layouts/Navbar";
import StickyWhatsAppButton from "./utils/Feature/StickyWhatsAppButton";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import GalleryPage from "./pages/GalleryPage";
import LiniBisnisPage from "./pages/LiniBisnisPage";
import ContactPage from "./pages/ContactPage";

const App = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <Routes>
              <Route path={ROUTES.HOME} element={<HomePage />} />
              <Route
                path={ROUTES.BUSINESS_LINES}
                element={<LiniBisnisPage />}
              />
              <Route path={ROUTES.PRODUCTS} element={<ProductPage />} />
              <Route path={ROUTES.GALLERY} element={<GalleryPage />} />
              <Route path={ROUTES.CONTACT} element={<ContactPage />} />
            </Routes>
          </motion.div>
        </AnimatePresence>
      </main>
      <Footer />
      <StickyWhatsAppButton />
    </>
  );
};

export default App;
