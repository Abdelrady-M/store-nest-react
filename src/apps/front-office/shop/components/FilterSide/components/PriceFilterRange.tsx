import { trans } from "@mongez/localization";
import { Form, getActiveForm } from "@mongez/react-form";
import { useState } from "react";
import { Button } from "src/apps/front-office/design-system/components/ui/button";
import { shopDataAtom } from "../../../atoms/shop-data.atom";

const PriceRangeSlider = () => {
  const fetch = shopDataAtom.get("fetch");

  const [minPrice, setMinPrice] = useState(500);
  const [maxPrice, setMaxPrice] = useState(1000);

  const minPriceCallback = e => {
    if (e.target.value < maxPrice) {
      setMinPrice(() => e.target.value);
    }

    if (e.target.value > maxPrice) {
      setMinPrice(() => maxPrice);
    }
  };

  const maxPriceCallback = e => {
    if (e.target.value > minPrice) {
      setMaxPrice(() => e.target.value);
    }

    if (e.target.value < minPrice) {
      setMaxPrice(() => minPrice);
    }
  };

  const submitHandler = () => {
    fetch(`minPrice=${minPrice}&maxPrice=${maxPrice}`);
    const form = getActiveForm();
    form?.reset();
  };

  return (
    <div className="w-full max-w-xs mx-auto">
      <h2 className="text-lg font-semibold text-gray-800 mb-4">
        {trans("fillByPrice")}
      </h2>

      <Form onSubmit={submitHandler}>
        <div className="relative pt-1">
          <input
            type="range"
            min="0"
            max="2000"
            value={minPrice}
            onChange={minPriceCallback}
            className="w-full h-2 bg-gray-300 rounded-lg appearance-none cursor-pointer slider-thumb-green"
          />
          <input
            type="range"
            min="0"
            max="2000"
            value={maxPrice}
            onChange={maxPriceCallback}
            className="w-full h-2 bg-gray-300 rounded-lg appearance-none cursor-pointer slider-thumb-green"
          />
        </div>

        <div className="flex items-center justify-between mb-2">
          <span className="text-gray-500">
            {trans("from")}: <span className="text-green-500">${minPrice}</span>
          </span>
          <span className="text-gray-500">
            {trans("to")}: <span className="text-green-500">${maxPrice}</span>
          </span>
        </div>

        <Button
          type="submit"
          className="ml-auto block bg-primary text-white py-2 rounded-lg">
          {trans("applyFilter")}
        </Button>
      </Form>
    </div>
  );
};

export default PriceRangeSlider;
