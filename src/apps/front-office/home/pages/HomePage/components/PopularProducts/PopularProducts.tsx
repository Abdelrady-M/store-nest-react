import { popularProductsAtom } from "apps/front-office/home/atoms/popular-products-atom";
import PopularProductsTabs from "./PopularProductsTabs";
import ProductsGrid from "./ProductsGrid";

export default function PopularProducts() {
  const products = popularProductsAtom.use("activeProducts");
  products.length = 10;
  return (
    <div className="mx-auto py-20">
      <PopularProductsTabs />
      <ProductsGrid products={products} />
    </div>
  );
}
