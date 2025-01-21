import React from 'react'

const CustomButton = ({classStyle, text, icon, customOnClick }) => {
    return (
        <button onClick={customOnClick} className={`${classStyle} border border-custom-black rounded-[9px] text-nowrap font-medium text-sm leading-6 transition-all duration-300 max-sm:text-xs`}>{text}{icon}</button>
    )
}

export default CustomButton