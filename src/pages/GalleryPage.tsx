import GalleryPageTitle from "../components/Gallery/GalleryPageTitle";
import GalleryGrid from "../components/Gallery/GalleryGrid";
import GalleryCTA from "../components/Gallery/GalleryCTA";

const GalleryPage = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <GalleryPageTitle />
      <GalleryGrid />
      <GalleryCTA />
    </div>
  );
};

export default GalleryPage;
