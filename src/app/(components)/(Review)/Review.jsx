"use client";

import React, { useState } from "react";
import womenSubFour from "../../../assets/images/women_sub_four.png";
import womenSubOne from "../../../assets/images/women_sub_one.png";
import womenSubTwo from "../../../assets/images/women_sub_two.png";
import womenSubThree from "../../../assets/images/women_sub_three.png";
import like from "../../../assets/images/like.png";
import dislike from "../../../assets/images/dislike.png";
import Image from "next/image";

function Review() {
  const [replyActive, setReplyActive] = useState(false);
  const [repliesActive, setRepliesActive] = useState(false);

  const toggleReplySection = () => {
    setReplyActive(!replyActive);
  };

  const toggleRepliesSection = () => {
    setRepliesActive(!repliesActive);
  };

  return (
    <div className="my-4 flex justify-start gap-4">
      <div
        className="bg-cover bg-center object-cover w-[40px] h-[40px] rounded-full p-5"
        style={{ backgroundImage: `url(${womenSubFour.src})` }}
      ></div>

      <div
        id="customer_review_container"
        className="flex flex-col overflow-hidden overflow-x-auto scroll-smooth [scrollbar-width:none]"
      >
        <div className="flex gap-4 items-center">
          <h6 className="text-base text-[#5E5E5E] whitespace-nowrap">Natasha Fernando</h6>
          <h6 id="review_time_duration" className="text-sm text-[#BFBFBF] whitespace-nowrap">1 month ago</h6>
        </div>
        <p className="text-base text-[#9B9B9B] w-full">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
        <div className="mt-2 w-fit flex justify-start items-center gap-4 overflow-x-auto">
          <div
            className="bg-cover bg-center object-cover h-[80px] w-[70px] max-sm:w-[70px]"
            style={{ backgroundImage: `url(${womenSubOne.src})` }}
          ></div>
          <div
            className="bg-cover bg-center object-cover h-[80px] w-[70px] max-sm:w-[70px]"
            style={{ backgroundImage: `url(${womenSubTwo.src})` }}
          ></div>
          <div
            className="bg-cover bg-center object-cover h-[80px] w-[70px] max-sm:w-[70px]"
            style={{ backgroundImage: `url(${womenSubThree.src})` }}
          ></div>
          <div
            className="bg-cover bg-center object-cover h-[80px] w-[70px] max-sm:w-[70px]"
            style={{ backgroundImage: `url(${womenSubThree.src})` }}
          ></div>
        </div>

        <div className="mt-2 w-fit flex justify-start items-center gap-4">
          <Image src={like} width={20} height={20} className="cursor-pointer" />
          <h6 className="text-sm text-[#BFBFBF]">18</h6>
          <Image
            src={dislike}
            width={20}
            height={20}
            className="cursor-pointer"
          />
          <h6
            className="text-sm text-[#BFBFBF] cursor-pointer hover:text-black"
            onClick={toggleReplySection}
          >
            Reply
          </h6>

          <h6
            className="text-sm text-[#BFBFBF] cursor-pointer hover:text-black right-0 mr-0"
            onClick={toggleRepliesSection}
          >
            2 Replies
          </h6>
        </div>

        {/* adding a reply to the review */}
        {replyActive && (
          <div className="mt-4">
            <div className="flex justify-start gap-4">
              <div
                className="bg-cover bg-center object-cover w-[40px] h-[40px] rounded-full p-5"
                style={{ backgroundImage: `url(${womenSubFour.src})` }}
              ></div>

              <input
                type="text"
                placeholder="Add a reply..."
                className="w-full bg-white rounded-full py-2 px-4 border"
              />
            </div>
            <div className="flex justify-end gap-2 mt-2">
              <div className="w-[100px] h-[40px] text-sm rounded-full flex justify-center items-center cursor-pointer text-black">
                Cancel
              </div>
              <div className="border-black border w-[100px] h-[40px] text-sm rounded-full flex justify-center items-center cursor-pointer bg-[#3B3A39] text-white">
                Reply
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Review;
