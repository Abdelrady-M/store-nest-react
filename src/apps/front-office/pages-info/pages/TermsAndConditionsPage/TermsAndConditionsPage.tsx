import Banner from "src/apps/front-office/design-system/components/Banner";
import CategorySidebar from "src/apps/front-office/shop/components/CategorySidebar";
import TrendingProducts from "src/apps/front-office/shop/pages/components/TrendingProducts";
import GoverningLaw from "../../components/GoverningLaw";
import Restrictions from "../../components/Restrictions";
import SearchInput from "../../components/SearchInput";
import Termination from "../../components/Termination";
import TermsOfService from "../../components/TermsOfService";

import Helmet from "@mongez/react-helmet";

export default function TermsAndConditionsPage() {
  return (
    <>
      <Helmet title="Read our terms and conditions to understand your rights and obligations when using our services." />
      <div className="flex flex-col lg:flex-row justify-center items-stretch gap-[40px] pt-[50px] px-3 h-full">
        <div className="w-full lg:w-[75%] lg:flex-grow px-3 mb-[50px]">
          <TermsOfService />
          <Restrictions />
          <Termination />
          <GoverningLaw />
        </div>
        <div className="w-full lg:w-[25%] lg:max-w-[500px] flex flex-col h-full">
          <div className="mb-[50px]">
            <SearchInput />
          </div>
          <div className="relative flex flex-col gap-10 mb-[30px]">
            <CategorySidebar />
            <TrendingProducts className="block max-w-56" />
          </div>
          <div className="hidden lg:block mb-10">
            <Banner
              imageUrl="https://nest-frontend-v6.netlify.app/assets/imgs/banner/banner-11.png"
              title="Oraganic"
              Subtitle={() => (
                <>
                  Save 17% on <span className="text-primary">Oganic</span> Juice
                </>
              )}
            />
          </div>
        </div>
      </div>
    </>
  );
}
