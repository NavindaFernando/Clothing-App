import React from "react";

function FilterBodyContent(props) {
  return (
    <div className="w-[280px] py-4 pr-4 max-sm:w-full">
      <h3 className="text-black">Filter</h3>
      <hr className="w-[200px] opacity-[50%] my-4" />
      {props.children}
    </div>
  );
}

export default FilterBodyContent;
