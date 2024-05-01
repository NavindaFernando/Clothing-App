import React from "react";
import MainBodyContent from "../(components)/(BodyContent)/MainBodyContent";
import MainNavbar from "../(components)/(Navbar)/MainNavbar";
import TextCategorySlider from "../(components)/(Slider)/TextCategorySlider";
import payment_icons from "../../assets/images/payment_icons.png";
import Image from "next/image";
import CartItem from "../(components)/(CartItem)/CartItem";
import ItemCardSlider from "../(components)/(Slider)/ItemCardSlider";
import Footer from "../(components)/(Footer)/Footer";

function page() {
  return (
    <MainBodyContent>
      <MainNavbar />
      <TextCategorySlider />

      <div className="flex gap-5 w-full max-md:flex-wrap">
        <div className="flex-col w-1/2 p-8 bg-[#F5F6F8] max-md:w-full">
          <h1 className="text-[1.5rem] font-bold mb-2 text-[#373737]">
            Pay with
          </h1>
          <p className="text-[#BFBFBF]">
            Get full refund if the item is not as described or if is not
            delivered
          </p>
          <div className="mt-2 flex w-full gap-2">
            <Image src={payment_icons} className="w-[300px]" />
          </div>
        </div>

        <div className="flex w-1/2 p-8 bg-[#F5F6F8] max-md:w-full max-sm:flex-col">
          <div className="w-1/2 h-full flex justify-center items-center max-sm:justify-start max-sm:items-start max-sm:h-fit">
            <h1 className="text-[2.5rem] font-bold mb-2 text-[#373737] max-sm:text-[1.5rem]">
              $35.52
            </h1>
          </div>
          <div className="w-1/2 h-full flex flex-col justify-center gap-2 ml-4 max-sm:justify-start max-sm:ml-0 max-sm:w-full">
            <p className="text-[#9B9B9B]">Already saved $12.86</p>
            <p className="text-[#BFBFBF] text-sm">Free shipping</p>
            <button className="mt-1.5 py-2 text-center bg-[#1B1A19] text-[#FFFFFF] rounded-full [box-shadow:0_10px_25px_rgba(0,0,0,0.1)] w-full">
              Checkout
            </button>
          </div>
        </div>
      </div>

      <div className="flex w-full py-6 text-2xl text-[#373737] font-bold">
        All items
      </div>

      <div className="flex flex-col gap-4">
        <CartItem />
        <CartItem />
        <CartItem />
      </div>

      <div className="flex w-full pt-6 text-2xl text-[#373737] font-bold">
        You may also like
      </div>
      <div className="flex w-full py-3 text-[#9B9B9B]">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.
      </div>

      <ItemCardSlider />
      <Footer />
    </MainBodyContent>
  );
}

export default page;
