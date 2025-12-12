import HeroSection from "../components/Home/HeroSection";
import FeaturesSection from "../components/Home/FeaturesSection";
import BusinessLinesSection from "../components/Home/BusinessLinesSection";
import TestimonialsSection from "../components/Home/TestimonialsSection";
import HomeCTA from "../components/Home/HomeCTA";

const HomePage: React.FC = () => {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <BusinessLinesSection />
      <TestimonialsSection />
      <HomeCTA />
    </>
  );
};

export default HomePage;
