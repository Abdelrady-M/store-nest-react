// import { trans } from "@mongez/localization";
// import { useOnce } from "@mongez/react-hooks";
// import { useState } from "react";
// import { toast } from "src/apps/front-office/design-system/components/ui/use-toast";
// import { HomeData } from "src/apps/front-office/utils/types";
// import { popularProductsAtom } from "../../../atoms/popular-products-atom";
// import { getHome } from "../../../services/home-service";

// export default function usePopularProducts() {
//   const [loading, setLoading] = useState(true);
//   const [data, setData] = useState<HomeData>({
//     meta: {
//       appendAppName: true,
//     },
//     rows: [],
//   });
//   useOnce(() => {
//     getHome()
//       .then(response => {
//         setData(response);
//         const categories =
//           response.rows[2]?.columns[0]?.module?.categories || [];
//         const products = categories.flatMap(
//           category => category.products || [],
//         );
//         popularProductsAtom.change("products", products);
//         setLoading(false);
//       })
//       .catch(_error => {
//         toast(_error || trans("someThingWantWrong"));
//       });
//   });

//   return { data, loading };
// }
