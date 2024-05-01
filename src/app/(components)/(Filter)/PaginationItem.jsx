import React from "react";

function PaginationItem(props) {
  return (
    <div className={`${props.bgColor} ${props.width} ${props.textColor} ${props.hide} h-[40px] justify-center items-center flex font-medium cursor-pointer hover:bg-[#1B1A19] hover:text-white`}>
      {props.text}
    </div>
  );
}

export default PaginationItem;
