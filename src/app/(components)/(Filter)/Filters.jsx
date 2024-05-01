"use client";

import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import FilterTopic from "./FilterTopic";
import FilterColorItem from "./FilterColorItem";
import FilterItem from "./FilterItem";
import FilterBodyContent from "../(BodyContent)/FilterBodyContent";

function Filters() {
  const [showCategory, setShowCategory] = useState(true);
  const [showSubCategory, setShowSubCategory] = useState(true);
  const [showSize, setShowSize] = useState(true);
  const [showColor, setShowColor] = useState(true);
  const [showBrand, setShowBrand] = useState(true);
  const [showDepartment, setShowDepartment] = useState(true);
  const [showCondition, setShowCondition] = useState(true);
  const [showPrice, setShowPrice] = useState(true);

  const toggleCategory = () => {
    setShowCategory(!showCategory);
  };

  const toggleSubCategory = () => {
    setShowSubCategory(!showSubCategory);
  };

  const toggleSize = () => {
    setShowSize(!showSize);
  };

  const toggleColor = () => {
    setShowColor(!showColor);
  };

  const toggleBrand = () => {
    setShowBrand(!showBrand);
  };

  const toggleDepartment = () => {
    setShowDepartment(!showDepartment);
  };

  const toggleCondition = () => {
    setShowCondition(!showCondition);
  };

  const togglePrice = () => {
    setShowPrice(!showPrice);
  };

  return (
    <FilterBodyContent>
      <div className="flex items-center">
        <FilterTopic
          lblHtmlFor="toggleCategory"
          lblName="Category"
          lblId="toggleCategory"
          checked={showCategory}
          onChange={toggleCategory}
          inputWidth="w-[100%]"
          lblColor="text-black"
        />

        <label htmlFor="toggleCategory" className="cursor-pointer ml-2">
          {showCategory ? (
            <FontAwesomeIcon
              icon={faMinus}
              className="text-[#9B9B9B] text-sm hover:text-black"
            />
          ) : (
            <FontAwesomeIcon
              icon={faPlus}
              className="text-[#9B9B9B] text-sm hover:text-black"
            />
          )}
        </label>
      </div>

      {showCategory && (
        <div className="flex flex-col gap-2 ml-3 mt-2">
          <FilterItem
            inputName="category"
            inputValue="shirts"
            inputId="shirts"
            lblHtmlFor="shirts"
            lblName="Shirts"
          />
          <FilterItem
            inputName="category"
            inputValue="t-Shirts"
            inputId="t-Shirts"
            lblHtmlFor="t-Shirts"
            lblName="T-Shirts"
          />
          <FilterItem
            inputName="category"
            inputValue="activewear"
            inputId="activewear"
            lblHtmlFor="activewear"
            lblName="Activewear"
          />
          <FilterItem
            inputName="category"
            inputValue="coats"
            inputId="coats"
            lblHtmlFor="coats"
            lblName="Coats, Jackets & Vests"
          />
          <FilterItem
            inputName="category"
            inputValue="underwear"
            inputId="underwear"
            lblHtmlFor="underwear"
            lblName="Underwear"
          />
          <FilterItem
            inputName="category"
            inputValue="pants"
            inputId="pants"
            lblHtmlFor="pants"
            lblName="Pants"
          />
          <FilterItem
            inputName="category"
            inputValue="sweaters"
            inputId="sweaters"
            lblHtmlFor="sweaters"
            lblName="Sweaters"
          />
          <FilterItem
            inputName="category"
            inputValue="shorts"
            inputId="shorts"
            lblHtmlFor="shorts"
            lblName="Shorts"
          />
          <FilterItem
            inputName="category"
            inputValue="jeans"
            inputId="jeans"
            lblHtmlFor="jeans"
            lblName="Jeans"
          />
          <FilterItem
            inputName="category"
            inputValue="suits"
            inputId="suits"
            lblHtmlFor="suits"
            lblName="Suits & Suit Separates"
          />
          <FilterItem
            inputName="category"
            inputValue="socks"
            inputId="socks"
            lblHtmlFor="socks"
            lblName="Socks"
          />
          <FilterItem
            inputName="category"
            inputValue="swimwear"
            inputId="swimwear"
            lblHtmlFor="swimwear"
            lblName="Swimwear"
          />
          <FilterItem
            inputName="category"
            inputValue="sleepwear"
            inputId="sleepwear"
            lblHtmlFor="sleepwear"
            lblName="Sleepwear & Robes"
          />
        </div>
      )}

      <div className="flex items-center mt-3">
        <FilterTopic
          lblHtmlFor="toggleSize"
          lblName="Size"
          lblId="toggleSize"
          checked={showSize}
          onChange={toggleSize}
          inputWidth="w-full"
          lblColor="text-black"
        />

        <label htmlFor="toggleSize" className="cursor-pointer ml-2">
          {showSize ? (
            <FontAwesomeIcon
              icon={faMinus}
              className="text-[#9B9B9B] text-sm hover:text-black"
            />
          ) : (
            <FontAwesomeIcon
              icon={faPlus}
              className="text-[#9B9B9B] text-sm hover:text-black"
            />
          )}
        </label>
      </div>

      {showSize && (
        <div className="flex flex-col gap-2 ml-3 mt-2">
          <FilterItem
            inputName="size"
            inputValue="xs"
            inputId="xs"
            lblHtmlFor="xs"
            lblName="XS"
          />
          <FilterItem
            inputName="size"
            inputValue="s"
            inputId="s"
            lblHtmlFor="s"
            lblName="S"
          />
          <FilterItem
            inputName="size"
            inputValue="m"
            inputId="m"
            lblHtmlFor="m"
            lblName="M"
          />
          <FilterItem
            inputName="size"
            inputValue="l"
            inputId="l"
            lblHtmlFor="l"
            lblName="L"
          />
          <FilterItem
            inputName="size"
            inputValue="xl"
            inputId="xl"
            lblHtmlFor="xl"
            lblName="XL"
          />
          <FilterItem
            inputName="size"
            inputValue="2xl"
            inputId="2xl"
            lblHtmlFor="2xl"
            lblName="2XL"
          />
          <FilterItem
            inputName="size"
            inputValue="3xl"
            inputId="3xl"
            lblHtmlFor="3xl"
            lblName="3XL"
          />
          <FilterItem
            inputName="size"
            inputValue="4xl"
            inputId="4xl"
            lblHtmlFor="4xl"
            lblName="4XL"
          />
          <FilterItem
            inputName="size"
            inputValue="5xl"
            inputId="5xl"
            lblHtmlFor="5xl"
            lblName="5XL"
          />
          <FilterItem
            inputName="size"
            inputValue="6xl"
            inputId="6xl"
            lblHtmlFor="6xl"
            lblName="6XL"
          />
        </div>
      )}

      <div className="flex items-center mt-3">
        <FilterTopic
          lblHtmlFor="toggleColor"
          lblName="Color"
          lblId="toggleColor"
          checked={showColor}
          onChange={toggleColor}
          inputWidth="w-full"
          lblColor="text-black"
        />

        <label htmlFor="toggleColor" className="cursor-pointer ml-2">
          {showColor ? (
            <FontAwesomeIcon
              icon={faMinus}
              className="text-[#9B9B9B] text-sm hover:text-black"
            />
          ) : (
            <FontAwesomeIcon
              icon={faPlus}
              className="text-[#9B9B9B] text-sm hover:text-black"
            />
          )}
        </label>
      </div>

      {showColor && (
        <div className="flex flex-row flex-wrap gap-3 ml-3 mt-2 w-[90%]">
          <FilterColorItem itemColor="bg-black" />
          <FilterColorItem itemColor="bg-[#F7C786]" />
          <FilterColorItem itemColor="bg-[#007AFF]" />
          <FilterColorItem itemColor="bg-[#D3D6DD]" />
          <FilterColorItem itemColor="bg-[#FF7572]" />
          <FilterColorItem itemColor="bg-[#00BAAD]" />
          <FilterColorItem itemColor="bg-[#96EC29]" />
          <FilterColorItem itemColor="bg-[#9629EC]" />
        </div>
      )}

      <div className="flex items-center mt-3">
        <FilterTopic
          lblHtmlFor="toggleBrand"
          lblName="Brand"
          lblId="toggleBrand"
          checked={showBrand}
          onChange={toggleBrand}
          inputWidth="w-full"
          lblColor="text-black"
        />

        <label htmlFor="toggleBrand" className="cursor-pointer ml-2">
          {showBrand ? (
            <FontAwesomeIcon
              icon={faMinus}
              className="text-[#9B9B9B] text-sm hover:text-black"
            />
          ) : (
            <FontAwesomeIcon
              icon={faPlus}
              className="text-[#9B9B9B] text-sm hover:text-black"
            />
          )}
        </label>
      </div>

      {showBrand && (
        <div className="flex flex-col gap-3 ml-3 mt-2 w-[90%]">
          <FilterItem
            inputName="brand"
            inputValue="adidas"
            inputId="adidas"
            lblHtmlFor="adidas"
            lblName="Adidas"
          />
          <FilterItem
            inputName="brand"
            inputValue="fruit"
            inputId="fruit"
            lblHtmlFor="fruit"
            lblName="Fruit of the Loom"
          />
          <FilterItem
            inputName="brand"
            inputValue="gildan"
            inputId="gildan"
            lblHtmlFor="gildan"
            lblName="Gildan"
          />
          <FilterItem
            inputName="brand"
            inputValue="nike"
            inputId="nike"
            lblHtmlFor="nike"
            lblName="Nike"
          />
          <FilterItem
            inputName="brand"
            inputValue="supreme"
            inputId="supreme"
            lblHtmlFor="supreme"
            lblName="Supreme"
          />
          <FilterItem
            inputName="brand"
            inputValue="boss"
            inputId="boss"
            lblHtmlFor="boss"
            lblName="Boss"
          />
          <FilterItem
            inputName="brand"
            inputValue="unbranded"
            inputId="unbranded"
            lblHtmlFor="unbranded"
            lblName="Unbranded"
          />
        </div>
      )}

      <div className="flex items-center mt-3">
        <FilterTopic
          lblHtmlFor="toggleDepartment"
          lblName="Department"
          lblId="toggleDepartment"
          checked={showDepartment}
          onChange={toggleDepartment}
          inputWidth="w-full"
          lblColor="text-black"
        />

        <label htmlFor="toggleDepartment" className="cursor-pointer ml-2">
          {showDepartment ? (
            <FontAwesomeIcon
              icon={faMinus}
              className="text-[#9B9B9B] text-sm hover:text-black"
            />
          ) : (
            <FontAwesomeIcon
              icon={faPlus}
              className="text-[#9B9B9B] text-sm hover:text-black"
            />
          )}
        </label>
      </div>

      {showDepartment && (
        <div className="flex flex-col gap-3 ml-3 mt-2 w-[90%]">
          <FilterItem
            inputName="department"
            inputValue="men"
            inputId="men"
            lblHtmlFor="men"
            lblName="Men"
          />
          <FilterItem
            inputName="department"
            inputValue="unisex"
            inputId="unisex"
            lblHtmlFor="unisex"
            lblName="Unisex Adults"
          />
          <FilterItem
            inputName="department"
            inputValue="teens"
            inputId="teens"
            lblHtmlFor="teens"
            lblName="Teens"
          />
          <FilterItem
            inputName="department"
            inputValue="notSpecified"
            inputId="notSpecified"
            lblHtmlFor="notSpecified"
            lblName="Not Specified"
          />
        </div>
      )}

      <div className="flex items-center mt-3">
        <FilterTopic
          lblHtmlFor="toggleCondition"
          lblName="Condition"
          lblId="toggleCondition"
          checked={showCondition}
          onChange={toggleCondition}
          inputWidth="w-full"
          lblColor="text-black"
        />

        <label htmlFor="toggleCondition" className="cursor-pointer ml-2">
          {showCondition ? (
            <FontAwesomeIcon
              icon={faMinus}
              className="text-[#9B9B9B] text-sm hover:text-black"
            />
          ) : (
            <FontAwesomeIcon
              icon={faPlus}
              className="text-[#9B9B9B] text-sm hover:text-black"
            />
          )}
        </label>
      </div>

      {showCondition && (
        <div className="flex flex-col gap-3 ml-3 mt-2 w-[90%]">
          <FilterItem
            inputName="condition"
            inputValue="new"
            inputId="new"
            lblHtmlFor="new"
            lblName="New"
          />
          <FilterItem
            inputName="condition"
            inputValue="used"
            inputId="used"
            lblHtmlFor="used"
            lblName="Used"
          />
          <FilterItem
            inputName="condition"
            inputValue="noSpecified"
            inputId="noSpecified"
            lblHtmlFor="noSpecified"
            lblName="Not Specified"
          />
        </div>
      )}

      <div className="flex items-center mt-3">
        <FilterTopic
          lblHtmlFor="togglePrice"
          lblName="Price"
          lblId="togglePrice"
          checked={showPrice}
          onChange={togglePrice}
          inputWidth="w-full"
          lblColor="text-black"
        />

        <label htmlFor="togglePrice" className="cursor-pointer ml-2">
          {showPrice ? (
            <FontAwesomeIcon
              icon={faMinus}
              className="text-[#9B9B9B] text-sm hover:text-black"
            />
          ) : (
            <FontAwesomeIcon
              icon={faPlus}
              className="text-[#9B9B9B] text-sm hover:text-black"
            />
          )}
        </label>
      </div>

      {showPrice && (
        <div className="flex flex-col gap-3 ml-3 mt-2 w-[90%]">
          <FilterItem
            inputName="price"
            inputValue="underPrice"
            inputId="underPrice"
            lblHtmlFor="underPrice"
            lblName="Under $17.00"
          />
          <FilterItem
            inputName="price"
            inputValue="toPrice"
            inputId="toPrice"
            lblHtmlFor="toPrice"
            lblName="$17.00 to $30.00"
          />
          <FilterItem
            inputName="price"
            inputValue="overPrice"
            inputId="overPrice"
            lblHtmlFor="overPrice"
            lblName="Over $30.00"
          />
        </div>
      )}
    </FilterBodyContent>
  );
}

export default Filters;
