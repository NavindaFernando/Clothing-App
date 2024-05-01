import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import MainBodyContent from "../(components)/(BodyContent)/MainBodyContent";
import MainNavbar from "../(components)/(Navbar)/MainNavbar";
import TextCategorySlider from "../(components)/(Slider)/TextCategorySlider";
import womenSubOne from "../../assets/images/women_sub_one.png";
import womenSubTwo from "../../assets/images/women_sub_two.png";
import womenSubThree from "../../assets/images/women_sub_three.png";
import womenSubFour from "../../assets/images/women_sub_four.png";
import women_main from "../../assets/images/women_main.png";
import FilterColorItem from "../(components)/(Filter)/FilterColorItem";
import ItemCardSlider from "../(components)/(Slider)/ItemCardSlider";
import Topic from "../(components)/(Topic)/Topic";
import RectangleButton from "../(components)/(Button)/RectangleButton";
import Footer from "../(components)/(Footer)/Footer";
import Review from "../(components)/(Review)/Review";
import { faImage } from "@fortawesome/free-solid-svg-icons";
import ItemDetails from "../(components)/(ItemDetails)/ItemDetails";

function page() {
  return (
    <MainBodyContent>
      <MainNavbar />
      <TextCategorySlider />
      <div className="flex w-full text-[#9B9B9B]">
        Recommended item / Cloths / Item name
      </div>

      <div className="flex w-full mt-4 gap-16 max-sm:flex-wrap max-sm:gap-3">
        <div className="flex flex-row w-[50%] h-fit gap-3 justify-end max-sm:flex-wrap max-sm:w-full flex-wrap">
          {/* item sub image gallery */}
          <div className="w-[70px] flex flex-col gap-3 h-fit max-sm:flex-row max-sm:w-full max-sm:order-2">
            <div
              className="bg-cover bg-center object-cover h-[80px] w-full max-sm:w-[70px]"
              style={{ backgroundImage: `url(${womenSubOne.src})` }}
            ></div>
            <div
              className="bg-cover bg-center object-cover h-[80px] w-full max-sm:w-[70px]"
              style={{ backgroundImage: `url(${womenSubTwo.src})` }}
            ></div>
            <div
              className="bg-cover bg-center object-cover h-[80px] w-full max-sm:w-[70px]"
              style={{ backgroundImage: `url(${womenSubThree.src})` }}
            ></div>
            <div
              className="bg-cover bg-center object-cover h-[80px] w-full max-sm:w-[70px]"
              style={{ backgroundImage: `url(${womenSubFour.src})` }}
            ></div>
          </div>

          {/* item main image */}
          <div className="w-[70%] h-[580px] max-md:h-[360px] max-sm:w-full max-sm:h-[500px] max-sm:order-1">
            <div
              className="bg-cover bg-center object-contain h-full w-full"
              style={{ backgroundImage: `url(${women_main.src})` }}
            ></div>
          </div>

          {/* custormer reviews */}
          <div className="w-full flex flex-col max-sm:w-full mt-5 max-sm:order-2">
            <h4 className="text-2xl text-[#373737] font-bold">
              Customer reviews
            </h4>

            {/* add a review */}
            <div className="mt-4">
              <div className="flex justify-start gap-4">
                <div
                  className="bg-cover bg-center object-cover w-[40px] h-[40px] rounded-full p-5"
                  style={{ backgroundImage: `url(${womenSubFour.src})` }}
                ></div>

                <input
                  type="text"
                  placeholder="Add a review..."
                  className="w-full bg-white rounded-full py-2 px-4 border"
                />

                <div className="w-[40px] h-[40px] rounded-full p-5 border flex justify-center items-center cursor-pointer">
                  <FontAwesomeIcon
                    icon={faImage}
                    className="text-[#d3d3d3] text-sm hover:text-[#3B3A39] text-[18.5px]"
                  />
                </div>
              </div>
              <div className="flex justify-end gap-2 mt-2">
                <div className="w-[100px] h-[40px] text-sm rounded-full flex justify-center items-center cursor-pointer text-black">
                  Cancel
                </div>
                <div className="border-black border w-[100px] h-[40px] text-sm rounded-full flex justify-center items-center cursor-pointer bg-[#3B3A39] text-white">
                  Comment
                </div>
              </div>
            </div>

            {/* review */}
            <Review />
            <Review />
            <Review />
            <Review />
            <Review />
          </div>
        </div>

        {/* item description / details */}
        <div className="w-[50%] flex flex-col gap-2 max-sm:w-full">
          <h6 className="text-base text-[#9B9B9B]">Item name</h6>
          <h4 className="text-2xl text-[#373737] font-bold">12$</h4>
          <p className="text-base text-[#9B9B9B]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus,
            magnam at? Quas, quisquam non suscipit
          </p>
          <hr className="border-slate-100 border-1 my-2" />
          <h6 class="text-base text-[#5E5E5E]">
            Color : <span className="text-[#9B9B9B]">Black</span>{" "}
          </h6>
          <div className="flex flex-row justify-start flex-wrap gap-3 w-full my-0.5">
            <FilterColorItem itemColor="bg-[#626161]" />
            <FilterColorItem itemColor="bg-[#FFB468]" />
            <FilterColorItem itemColor="bg-[#FF7A7A]" />
            <FilterColorItem itemColor="bg-[#6C9EFF]" />
            <FilterColorItem itemColor="bg-[#99DE9C]" />
          </div>
          <h6 class="text-base text-[#5E5E5E]">
            Size : <span className="text-[#9B9B9B]">XL</span>{" "}
          </h6>
          <div className="flex flex-row justify-start flex-wrap gap-3 w-full my-1">
            <div className="text-[#9B9B9B] border-black border py-1.5 text-sm px-6 rounded-full flex justify-center items-center cursor-pointer">
              2XL
            </div>
            <div className="text-[#9B9B9B] border-black border py-1.5 text-sm px-6 rounded-full flex justify-center items-center cursor-pointer">
              XL
            </div>
            <div className="text-[#9B9B9B] border-black border py-1.5 text-sm px-6 rounded-full flex justify-center items-center cursor-pointer">
              L
            </div>
            <div className="text-[#9B9B9B] border-black border py-1.5 text-sm px-6 rounded-full flex justify-center items-center cursor-pointer">
              M
            </div>
            <div className="text-[#9B9B9B] border-black border py-1.5 text-sm px-6 rounded-full flex justify-center items-center cursor-pointer">
              S
            </div>
          </div>
          <h6 class="text-base text-[#5E5E5E]">Quantity</h6>
          <div className="flex flex-row justify-start flex-wrap gap-5 w-full my-1">
            <div className="text-black border-black border w-[50px] h-[50px] text-sm rounded-full flex justify-center items-center cursor-pointer hover:bg-[#3B3A39] hover:text-white">
              -
            </div>
            <div className="text-black text-sm rounded-full flex justify-center items-center">
              2
            </div>
            <div className="text-black border-black border w-[50px] h-[50px] text-sm rounded-full flex justify-center items-center cursor-pointer hover:bg-[#3B3A39] hover:text-white">
              +
            </div>
            <div className="border-black border w-[180px] h-[50px] text-sm rounded-full flex justify-center items-center cursor-pointer bg-[#3B3A39] text-white">
              Add to cart
            </div>
          </div>
          <hr className="border-slate-100 border-1 my-2" />
          <h6 class="text-base text-[#5E5E5E]">Delivery</h6>
          <p class="text-base text-[#9B9B9B]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus,
            magnam at? Quas, quisquam non suscipit
          </p>
          <p class="text-base text-[#9B9B9B]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus,
            magnam at? Quas, quisquam non suscipit
          </p>
          <h6 class="text-base text-[#9B9B9B]">Learn More</h6>
          <hr className="border-slate-100 border-1 my-2" />
          <h6 class="text-base text-[#5E5E5E]">Return & Exchange</h6>
          <p class="text-base text-[#9B9B9B]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus,
            magnam at? Quas, quisquam non suscipit
          </p>
          <p class="text-base text-[#9B9B9B]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus,
            magnam at? Quas, quisquam non suscipit
          </p>
          <h6 class="text-base text-[#9B9B9B]">Learn More</h6>
          <hr className="border-slate-100 border-1 my-2" />

          <ItemDetails />
        </div>
      </div>

      <Topic
        topic="You may also like"
        subTopic="Lorem ipsum dolor sit amet, consectetur adipisicing elit"
      />
      <ItemCardSlider />
      <ItemCardSlider />
      <RectangleButton />
      <Footer />
    </MainBodyContent>
  );
}

export default page;
