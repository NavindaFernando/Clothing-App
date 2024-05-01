import React from "react";

function FilterTopic(props) {
  return (
    <>
      <label htmlFor={props.lblHtmlFor} className={`${props.lblMl} cursor-pointer ${props.lblColor} whitespace-nowrap`}>
        {props.lblName}
      </label>

      <input
        type="checkbox"
        id={props.lblId}
        className={`${props.inputWidth} appearance-none`}
        checked={props.checked}
        onChange={props.onChange}
      />
    </>
  );
}

export default FilterTopic;
