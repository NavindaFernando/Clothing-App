import React from "react";
import MainBodyContent from "../(components)/(BodyContent)/MainBodyContent";
import MainNavbar from "../(components)/(Navbar)/MainNavbar";
import TextCategorySlider from "../(components)/(Slider)/TextCategorySlider";
import ItemCard from "../(components)/(ItemCard)/ItemCard";
import cardOne from "../../assets/images/item_card_cloth.png";
import cardTwo from "../../assets/images/item_card_shoes.png";
import cardThree from "../../assets/images/item_card_cosmetics.png";
import cardFour from "../../assets/images/item_card_watch.png";
import cardFive from "../../assets/images/item_card_Jewelry.png";
import Footer from "../(components)/(Footer)/Footer";
import PaginationItem from "../(components)/(Filter)/PaginationItem";
import Filters from "../(components)/(Filter)/Filters";

function page() {
  return (
    <MainBodyContent>
      <MainNavbar />
      <TextCategorySlider />

      <div className="flex max-sm:flex-col">
        <Filters />

        <div className="flex justify-start items-start flex-wrap w-fit px-2 py-4 gap-4 content-start max-sm:justify-center">
          <ItemCard itemImg={cardOne} itemName="Item name" itemPrice="13$" />
          <ItemCard itemImg={cardTwo} itemName="Item name" itemPrice="9$" />
          <ItemCard itemImg={cardThree} itemName="Item name" itemPrice="17$" />
          <ItemCard itemImg={cardFour} itemName="Item name" itemPrice="12$" />
          <ItemCard itemImg={cardFive} itemName="Item name" itemPrice="8$" />
          <ItemCard itemImg={cardOne} itemName="Item name" itemPrice="13$" />
          <ItemCard itemImg={cardTwo} itemName="Item name" itemPrice="9$" />
          <ItemCard itemImg={cardThree} itemName="Item name" itemPrice="17$" />
          <ItemCard itemImg={cardFour} itemName="Item name" itemPrice="12$" />
          <ItemCard itemImg={cardTwo} itemName="Item name" itemPrice="9$" />
          <ItemCard itemImg={cardFive} itemName="Item name" itemPrice="8$" />
        </div>
      </div>

      <div className="flex gap-2 justify-end items-center max-sm:justify-center py-5">
        <PaginationItem bgColor="bg-[#EEEEEE]" width="w-[80px]" text="Prev" />
        <PaginationItem
          bgColor="bg-[#1B1A19]"
          width="w-[40px]"
          text="1"
          textColor="text-white"
        />
        <PaginationItem
          bgColor="bg-[#EEEEEE]"
          width="w-[40px]"
          text="2"
          textColor="text-black"
        />
        <PaginationItem
          bgColor="bg-[#EEEEEE]"
          width="w-[40px]"
          text="3"
          textColor="text-black"
        />
        <PaginationItem
          bgColor="bg-[#EEEEEE]"
          width="w-[40px]"
          text="4"
          textColor="text-black"
          hide="max-sm:hidden"
        />
        <PaginationItem
          bgColor="bg-[#EEEEEE]"
          width="w-[40px]"
          text="5"
          textColor="text-black"
          hide="max-sm:hidden"
        />
        <PaginationItem
          bgColor="bg-[#1B1A19]"
          width="w-[80px]"
          text="Next"
          textColor="text-white"
        />
      </div>

      <Footer />
    </MainBodyContent>
  );
}

export default page;
