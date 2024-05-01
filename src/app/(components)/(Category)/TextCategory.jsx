import React from "react";
import Link from "next/link";

function TextCategorie(props) {
  return (
    <Link href="/filter">
      <div
        className={`${props.categoryBgColor} whitespace-nowrap user-select-none [scroll-snap-align:start] relative w-fit px-10 py-2.5 text-center cursor-pointer ${props.categoryHover} text-[#9B9B9B] rounded-full mr-2 ${props.categoryBoxShadow}`}
      >
        {props.categoryName}
      </div>
    </Link>
  );
}

export default TextCategorie;
