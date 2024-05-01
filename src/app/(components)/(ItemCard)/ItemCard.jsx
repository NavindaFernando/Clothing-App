import React from "react";
import Image from "next/image";
import Link from "next/link";

function ItemCard(props) {
  return (
    <Link href="/itemDescription">
      <div className="snap-start w-60">
        <div>
          <Image
            src={props.itemImg}
            className="object-fit-cover h-full w-full pointer-events-none"
          />
        </div>
        <div className="mt-3 user-select-none">
          <p className="text-[#9B9B9B] overflow-ellipsis whitespace-nowrap overflow-hidden">
            {props.itemName}
          </p>
          <label htmlFor="" className="text-black font-semibold">
            {props.itemPrice}
          </label>
        </div>
      </div>
    </Link>
  );
}

export default ItemCard;
