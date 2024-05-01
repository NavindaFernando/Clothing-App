import React from 'react'

function FilterColorItem(props) {
  return (
    <div className='w-[29px] h-[29px] rounded-full flex items-center justify-center'>
        <div className={`${props.itemColor} w-[24px] h-[24px] rounded-full cursor-pointer`}></div>
    </div>
  )
}

export default FilterColorItem