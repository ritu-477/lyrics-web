import React, { useState } from 'react'
import Header from '../common/Header'
import CustomButton from '../common/CustomButton'
import { ALPHABET_LIST } from '../utils/helper'
import { DownArrow } from '../utils/icons'
import { useNavigate } from 'react-router-dom'

const Hero = () => {
    const [text, setText] = useState("HIT ME HARD AND ALL")
    const [alphabetText, setAlphabetText] = useState()
    const [activeButton, setActiveButton] = useState("all") 
    const navigate = useNavigate()

    const handleTextChange = (newText) => {
        setActiveButton(newText) 
        navigate(`?value=${newText}`);
        setText(`HIT ME HARD AND ${newText.toUpperCase()}`)
    }

    const handleChange = (newText) => {
        setAlphabetText(`${newText}`)
    }

    return (
        <div className='pt-[11px] pb-12 bg-off-white lg:h-screen'>
            <Header />
            <div className='container'>
                <div className='flex items-center gap-[15px] pt-[17px] max-xl:overflow-x-auto pb-2'>
                    <div className='flex items-center gap-[5px]'>
                        {["all", "pop", "rock", "music"].map((index) => (
                            <CustomButton
                                key={index}
                                customOnClick={() => handleTextChange(index)}
                                classStyle={`!text-xs flex items-center gap-[5px] py-[5.84px] group text-custom-black ${index === "music"? "!px-[7.2px]" : "px-3" 
                                    } ${activeButton === index
                                        ? "!bg-black text-white"
                                        : "text-custom-black hover:!bg-custom-black hover:text-white"
                                    }`}
                                text={index.charAt(0).toUpperCase() + index.slice(1)}
                                icon={index === "music" && <DownArrow classStyle="group-hover:stroke-white transition-all duration-300" />}
                            />
                        ))}
                    </div>
                    <div className='flex items-center gap-[2px]'>
                        {ALPHABET_LIST.map((item, index) => (
                            <a
                                onClick={() => handleChange(item)}
                                key={index}
                                href="#link"
                                className='flex items-center hover:bg-custom-black size-[29px] justify-center rounded-full transition-all duration-300 hover:text-white hover:font-medium text-black text-xs leading-custom-xl'
                            >
                                {item}
                            </a>
                        ))}
                    </div>
                </div>
                <div className='bg-custom-black rounded-[22px] flex pl-12 pr-[43px] justify-between pt-[38px] mt-[35px] relative pb-[43px] max-sm:flex-wrap max-sm:pt-4 max-sm:px-5 max-sm:pb-20'>
                    <h1 className='font-Montserrat text-5xl leading-custom-3xl text-white font-bold max-lg:text-4xl max-sm:text-center max-sm:text-3xl max-sm:mx-auto'>{text}</h1>
                    <img src="/assets/images/webp/hero.webp" alt="hero" className='size-[261px] max-lg:size-48 max-sm:mx-auto max-sm:mt-4 pointer-events-none' />
                    <div className='absolute flex items-center gap-[26px] -bottom-16 max-lg:-bottom-10 max-sm:-bottom-6'>
                        <img src="/assets/images/webp/profile.webp" alt="profile" className='size-[206px] max-lg:size-32 max-sm:size-20 pointer-events-none' />
                        <div>
                            <p className='font-semibold text-[32px] max-lg:text-2xl leading-custom-2xl text-white max-sm:text-lg'>Billie Eilish {alphabetText}</p>
                            <p className='font-medium text-base leading-5 pt-[5px] max-lg:pt-0 pb-[21px] max-sm:text-sm font-Montserrat text-light-gray'>Released May 17, 2024</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero
