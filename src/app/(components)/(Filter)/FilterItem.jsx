import React from "react";

function FilterItem(props) {
  return (
    <div>
      <input
        type="radio"
        name={props.inputName}
        value={props.inputValue}
        id={props.inputId}
        className="cursor-pointer"
      />
      <label htmlFor={props.lblHtmlFor} className="text-[#9B9B9B] ml-2 cursor-pointer">
        {props.lblName}
      </label>
    </div>
  );
}

export default FilterItem;
