import { Link } from "@mongez/react-router";
import { Star, StarHalf } from "lucide-react";
import URLS from "src/apps/front-office/utils/urls";
import { topSellingType } from "./index";
export default function TopSellingCard({
  productImageTop,
  productDescription,
  product,
  salePrice,
  priceOld,
}: topSellingType) {
  return (
    <Link
      to={URLS.shop.viewProduct(product!)}
      className="flex items-center gap-5 mb-7 cursor-pointer relative
      group hover:-translate-y-2 duration-700
       small-to-medium:block small-to-medium:m-auto">
      <div>
        <img
          className="rounded-xl w-32	small-to-medium:w-11/12	"
          src={productImageTop}
          alt="not Found"
        />
      </div>
      <div>
        <h6 className="font-[700] text-sm text-[#253D4E] leading-5 group-hover:text-[#3BB77E] duration-500">
          {productDescription}
        </h6>
        <div className="hidden xl:flex gap-1">
          <ul className="flex items-center">
            <li>
              <Star className="w-4" fill="#fcc43c" stroke="transparent" />
            </li>
            <li>
              <Star className="w-4" fill="#fcc43c" stroke="transparent" />
            </li>
            <li>
              <Star className="w-4" fill="#fcc43c" stroke="transparent" />
            </li>
            <li>
              <Star className="w-4" fill="#fcc43c" stroke="transparent" />
            </li>
            <li>
              <StarHalf className="w-4" fill="#fcc43c" stroke="transparent" />
            </li>
          </ul>
          <span className="text-rateColor">(4.0)</span>
        </div>
        <div className="flex gap-2 mt-1">
          <h3 className="text-lg font-medium text-[#3BB77E]">{salePrice}$</h3>
          <h5 className="text-sm font-medium mt-1 line-through text-[#adadad]">
            {priceOld}$
          </h5>
        </div>
      </div>
    </Link>
  );
}
