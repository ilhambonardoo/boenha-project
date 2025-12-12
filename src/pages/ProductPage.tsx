import ProductPageTitle from "../components/Product/ProductPageTitle";
import ProductGrid from "../components/Product/ProductGrid";
import ProductBenefits from "../components/Product/ProductBenefits";

const ProductPage = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <ProductPageTitle />
      <ProductGrid />
      <ProductBenefits />
    </div>
  );
};

export default ProductPage;
