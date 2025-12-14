import HeroSection from "../components/Home/HeroSection";
import FeaturesSection from "../components/Home/FeaturesSection";
import BusinessLinesSection from "../components/Home/BusinessLinesSection";
import HomeCTA from "../components/Home/HomeCTA";

const HomePage: React.FC = () => {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <BusinessLinesSection />
      <HomeCTA />
    </>
  );
};

export default HomePage;
