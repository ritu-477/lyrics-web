import React, { useState } from 'react'
import Header from '../common/Header'
import CustomButton from '../common/CustomButton'
import { ALPHABET_LIST } from '../utils/helper'
import { DownArrow } from '../utils/icons'
import { useSearchParams } from 'react-router-dom'

const Hero = () => {
    const [activeParams, setActiveParams] = useSearchParams()
    const [text, setText] = useState("")

    const handleTextChange = (value) => {
        setActiveParams({ value })
    }

    const handleChange = (item) => {
        const lowerCaseItem = item.toLowerCase(); 
        setText(lowerCaseItem);
        setActiveParams((prev) => ({ ...Object.fromEntries(prev.entries()), letter: lowerCaseItem }));
    };

    return (
        <div className='pt-[11px] pb-12 bg-off-white lg:h-screen'>
            <Header />
            <div className='container mx-auto'>
                <div className='flex items-center gap-[15px] pt-[17px] max-xl:overflow-x-auto pb-2'>
                    <div className='flex items-center gap-[5px]'>
                        <CustomButton customOnClick={() => handleTextChange("soft")} classStyle={`${activeParams.get('value') === 'soft' ? "bg-custom-black text-white" : ""} !text-xs text-custom-black !px-[13.48px] !py-[5.84px] hover:!bg-custom-black hover:text-white`} text="All" />
                        <CustomButton customOnClick={() => handleTextChange("pop")} classStyle={`${activeParams.get('value') === 'pop' ? "bg-custom-black text-white" : ""} !text-xs text-custom-black !py-[5.84px] !px-[11.37px] hover:!bg-custom-black hover:text-white`} text="Pop" />
                        <CustomButton customOnClick={() => handleTextChange("rock")} classStyle={`${activeParams.get('value') === 'rock' ? "bg-custom-black text-white" : ""} !text-xs text-custom-black !py-[5.84px] !px-[11.8px] hover:!bg-custom-black hover:text-white`} text="Rock" />
                        <CustomButton customOnClick={() => handleTextChange("music")} classStyle={`${activeParams.get('value') === 'music' ? "bg-custom-black text-white" : ""} !text-xs text-custom-black !py-[5.84px] !px-[9.2px] hover:!bg-custom-black hover:text-white group flex items-center gap-[5px]`} text="More" icon={<DownArrow classStyle={`${activeParams.get('value') === "music" ? "stroke-white" : ""} group-hover:stroke-white transition-all duration-300`} />} />
                    </div>
                    <div className='flex items-center gap-[2px]'>
                        {ALPHABET_LIST.map(function (item, index) {
                            return <a onClick={() => handleChange(item)} key={index} href="#link" className='flex items-center hover:bg-custom-black size-[29px] justify-center rounded-full transition-all duration-300 hover:text-white hover:font-medium text-black text-xs leading-custom-xl'>{item}</a>
                        })}
                    </div>
                </div>
                <div className='bg-custom-black rounded-[22px] flex pl-12 pr-[43px] justify-between pt-[38px] mt-[35px] relative pb-[43px] max-sm:flex-wrap max-sm:pt-4 max-sm:px-5 max-sm:pb-20'>
                    <h1 className='font-Montserrat leading-custom-3xl text-5xl uppercase text-white font-bold max-lg:text-4xl max-sm:text-center max-sm:text-3xl max-sm:mx-auto'>hit me hard and {activeParams.get('value') === "music" ? "music" : activeParams.get('value') === "pop" ? "pop" : activeParams.get('value') === "rock" ? "rock" : "soft"}</h1>
                    <img src="/assets/images/webp/hero.webp" alt="hero" className='size-[261px] max-lg:size-48 max-sm:mx-auto max-sm:mt-4 pointer-events-none' />
                    <div className='absolute flex items-center gap-[26px] -bottom-16 max-lg:-bottom-10 max-sm:-bottom-6'>
                        <img src="/assets/images/webp/profile.webp" alt="profile" className='size-[206px] max-lg:size-32 max-sm:size-20 pointer-events-none' />
                        <div>
                            <p className='font-semibold text-[32px] max-lg:text-2xl leading-custom-2xl text-white max-sm:text-lg'>Billie Eilish {text.toUpperCase()}</p>
                            <p className='font-Montserrat font-medium text-base leading-5 text-light-gray pt-[5px] max-lg:pt-0 max-sm:pb-8 pb-[21px] max-sm:text-sm'>Relesed May 17, 2024</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero
