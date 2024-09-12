import { useOnce } from "@mongez/react-hooks";
import { useState } from "react";
import { getCategories } from "src/apps/front-office/home/services/home-service";
import { Category } from "src/apps/front-office/utils/types";

export default function useFetchShopCategories() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useOnce(() => {
    getCategories()
      .then(response => {
        const categories = response?.data.categories;
        console.log("categories", response);
        setCategories(categories);
      })
      .catch(error => {
        setError(error.message || "Something went wrong");
      })
      .finally(() => {
        setIsLoading(false);
      });
  });

  return { categories, isLoading, error };
}
