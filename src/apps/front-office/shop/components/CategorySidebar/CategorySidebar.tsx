// Import images
import { trans } from "@mongez/localization";
import image1 from "assets/images/shop-category/category-1.svg";
import image2 from "assets/images/shop-category/category-2.svg";
import image3 from "assets/images/shop-category/category-3.svg";
import image4 from "assets/images/shop-category/category-4.svg";
import image5 from "assets/images/shop-category/category-5.svg";
import useFetchShopCategories from "shared/hooks/useFetchShopCategories";
import Loader from "src/apps/front-office/design-system/components/ui/Indicators/Indicators";
import CategoryItem from "./CategoryItem";

export default function CategorySidebar() {
  const categoryImages = [image1, image2, image3, image4, image5];
  const { categories, isLoading, error } = useFetchShopCategories();
  const categoriesItems = categories.slice(3, 8);

  if (isLoading) return <Loader />;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="p-[30px] rounded-2xl flex flex-col relative border border-solid shadow-gray-300">
      <h5 className="mb-[30px] border-b font-bold border-[#ececec] text-[24px] pb-5 relative after:content-[''] after:bg-[#BCE3C9] after:h-0.5 after:w-20 after:absolute after:left-0 after:rtl:right-0 after:bottom-0">
        {trans("categories")}
      </h5>
      <ul className="group hover:text-primary">
        {categoriesItems.map((item, index) => (
          <CategoryItem
            key={item.id}
            name={item.name}
            img={categoryImages[index]}
            products={item.products!}
          />
        ))}
      </ul>
    </div>
  );
}
