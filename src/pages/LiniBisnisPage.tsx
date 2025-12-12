import LiniBisnisPageTitle from "../components/BussinessLine/LiniBisnisPageTitle";
import UtamaSection from "../components/BussinessLine/UtamaSection";
import LiniBisnisCTA from "../components/BussinessLine/LiniBisnisCTA";

const LiniBisnisPage = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <LiniBisnisPageTitle />
      <UtamaSection />
      <LiniBisnisCTA />
    </div>
  );
};

export default LiniBisnisPage;
