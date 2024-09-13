import { Product } from "src/apps/front-office/utils/types";

export type topSellingType = {
  productImageTop?: string;
  productDescription?: string;
  productTitle?: string;
  salePrice?: number;
  priceOld?: number;
  product?: Product;
};
