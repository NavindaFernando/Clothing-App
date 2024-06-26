import React from 'react'

function Button(props) {
  return (
    <button type={props.btnType} className={`${props.btnWidth} py-2.5 text-center bg-[#000000] text-[#FFFFFF] rounded-full [box-shadow:0_10px_25px_rgba(0,0,0,0.1)] hover:bg-[#242424]`}>{props.btnName}</button>
    )
}

export default Button