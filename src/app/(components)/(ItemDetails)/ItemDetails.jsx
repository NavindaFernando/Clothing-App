"use client";

import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import FilterTopic from "../(Filter)/FilterTopic";

function ItemDetails() {
  const [showDescription, setShowDescription] = useState(true);
  const [showSizeFit, setShowSizeFit] = useState(true);
  const [showAboutStore, setShowAboutStore] = useState(true);

  const toggleDescription = () => {
    setShowDescription(!showDescription);
  };

  const toggleSizeFit = () => {
    setShowSizeFit(!showSizeFit);
  };

  const toggleAboutStore = () => {
    setShowAboutStore(!showAboutStore);
  };

  return (
    <>
      <div className="flex items-center">
        <FilterTopic
          lblHtmlFor="toggleDescription"
          lblName="Description"
          lblId="toggleDescription"
          checked={showDescription}
          onChange={toggleDescription}
          inputWidth="w-[100%]"
          lblColor="text-black"
        />

        <label htmlFor="toggleDescription" className="cursor-pointer ml-2">
          {showDescription ? (
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

      {showDescription && (
        <div className="flex flex-col gap-2">
          <table className="text-[#9B9B9B]">
            <tbody>
              <tr className="border-b border-slate-100 my-2">
                <td className="py-2 pr-10 whitespace-nowrap">Color</td>
                <td className="pr-10 whitespace-nowrap">White</td>
              </tr>
              <tr className="border-b border-slate-100 my-2">
                <td className="py-2 pr-10 whitespace-nowrap">Style</td>
                <td className="pr-10 whitespace-nowrap">Cute-Sweet</td>
              </tr>
              <tr className="border-b border-slate-100 my-2">
                <td className="py-2 pr-10 whitespace-nowrap">Type</td>
                <td className="pr-10 whitespace-nowrap">Babydolls</td>
              </tr>
              <tr className="border-b border-slate-100 my-2">
                <td className="py-2 pr-10 whitespace-nowrap">Neckline</td>
                <td className="pr-10 whitespace-nowrap">Straps</td>
              </tr>
              <tr className="border-b border-slate-100 my-2">
                <td className="py-2 pr-10 whitespace-nowrap">Details</td>
                <td className="pr-10 whitespace-nowrap">Frill, Ruched</td>
              </tr>
              <tr className="border-b border-slate-100 my-2">
                <td className="py-2 pr-10 whitespace-nowrap">Fabric</td>
                <td className="pr-10 whitespace-nowrap">Slight Stretch</td>
              </tr>
              <tr className="border-b border-slate-100 my-2">
                <td className="py-2 pr-10 whitespace-nowrap">Panty Type</td>
                <td className="pr-10 whitespace-nowrap">Thongs</td>
              </tr>
              <tr className="my-2">
                <td className="py-2 pr-10 whitespace-nowrap">Rise</td>
                <td className="pr-10 whitespace-nowrap">Low Rise</td>
              </tr>
            </tbody>
          </table>
        </div>
      )}

      <div className="flex items-center mt-4">
        <FilterTopic
          lblHtmlFor="toggleSizeFit"
          lblName="Size & Fit"
          lblId="toggleSizeFit"
          checked={showSizeFit}
          onChange={toggleSizeFit}
          inputWidth="w-[100%]"
          lblColor="text-black"
        />

        <label htmlFor="toggleSizeFit" className="cursor-pointer ml-2">
          {showSizeFit ? (
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

      {showSizeFit && (
        <div className="flex flex-col gap-2 overflow-x-auto">
          <table className="text-[#9B9B9B]">
            <tbody>
              <tr className="border-b border-slate-100 my-2">
                <td className="py-2 pr-10 whitespace-nowrap">Size</td>
                <td className="pr-10 whitespace-nowrap">Hip Size</td>
                <td className="pr-10 whitespace-nowrap">Inseam</td>
              </tr>
              <tr className="border-b border-slate-100 my-2">
                <td className="py-2 pr-10 whitespace-nowrap">XS</td>
                <td className="pr-10 whitespace-nowrap">98</td>
                <td className="pr-10 whitespace-nowrap">73</td>
              </tr>
              <tr className="border-b border-slate-100 my-2">
                <td className="py-2 pr-10 whitespace-nowrap">S</td>
                <td className="pr-10 whitespace-nowrap">103</td>
                <td className="pr-10 whitespace-nowrap">74</td>
              </tr>
              <tr className="border-b border-slate-100 my-2">
                <td className="py-2 pr-10 whitespace-nowrap">M</td>
                <td className="pr-10 whitespace-nowrap">108</td>
                <td className="pr-10 whitespace-nowrap">75</td>
              </tr>
              <tr className="border-b border-slate-100 my-2">
                <td className="py-2 pr-10 whitespace-nowrap">L</td>
                <td className="pr-10 whitespace-nowrap">113</td>
                <td className="pr-10 whitespace-nowrap">76</td>
              </tr>
              <tr className="border-b border-slate-100 my-2">
                <td className="py-2 pr-10 whitespace-nowrap">XL</td>
                <td className="pr-10 whitespace-nowrap">118</td>
                <td className="pr-10 whitespace-nowrap">77</td>
              </tr>
              <tr className="border-b border-slate-100 my-2">
                <td className="py-2 pr-10 whitespace-nowrap">2XL</td>
                <td className="pr-10 whitespace-nowrap">123</td>
                <td className="pr-10 whitespace-nowrap">78</td>
              </tr>
              <tr className="my-2">
                <td className="py-2 pr-10 whitespace-nowrap">3Xl</td>
                <td className="pr-10 whitespace-nowrap">128</td>
                <td className="pr-10 whitespace-nowrap">79</td>
              </tr>
            </tbody>
          </table>
        </div>
      )}

      <div className="flex items-center mt-4">
        <FilterTopic
          lblHtmlFor="toggleAboutStore"
          lblName="About Store"
          lblId="toggleAboutStore"
          checked={showAboutStore}
          onChange={toggleAboutStore}
          inputWidth="w-[100%]"
          lblColor="text-black"
        />

        <label htmlFor="toggleAboutStore" className="cursor-pointer ml-2">
          {showAboutStore ? (
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

      {showAboutStore && (
        <p class="text-base text-[#9B9B9B] pb-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus,
          magnam at? Quas, quisquam non suscipit
        </p>
      )}
    </>
  );
}

export default ItemDetails;
