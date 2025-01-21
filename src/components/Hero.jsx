// import React, { useState } from "react";
// import { TAB_DATA } from "../../utils/helper";

// const Hero = () => {
//     const [activeTab, setActiveTab] = useState("All");

//     const tabs = ["All", "Pop", "Rock", "More"];
//     const content = TAB_DATA[activeTab];

//     return (
//         <div className="min-h-screen bg-off-white text-gray-900">
//             <div className="bg-gray-50">
//                 <div className="container mx-auto flex space-x-4 py-4">
//                     {tabs.map((tab) => (
//                         <button
//                             key={tab}
//                             onClick={() => setActiveTab(tab)}
//                             className={`px-4 py-2 rounded-full ${activeTab === tab
//                                     ? "bg-blue-500 text-white"
//                                     : "bg-gray-200 text-gray-700"
//                                 }`}
//                         >
//                             {tab}
//                         </button>
//                     ))}
//                 </div>
//             </div>
//             <main className="container mx-auto p-4">
//                 <section className="bg-black text-white rounded-lg p-6 flex items-center space-x-6">
//                     <div className="flex-shrink-0">
//                         <img
//                             src={content.img}
//                             alt={content.artist}
//                             className="w-20 h-20 rounded-full"
//                         />
//                     </div>
//                     <div>
//                         <h2 className="text-3xl font-bold">{content.title}</h2>
//                         <p className="text-lg mt-2">{content.artist}</p>
//                         <p className="text-sm text-gray-400">
//                             Released {content.releaseDate}
//                         </p>
//                     </div>
//                     <div className="flex-grow">
//                         <img
//                             src={content.img}
//                             alt="Album Art"
//                             className="w-32 h-32 rounded-md float-right"
//                         />
//                     </div>
//                 </section>
//             </main>
//         </div>
//     );
// };

// export default Hero;

import React, { useState } from 'react'
import Header from '../common/Header'
import CustomButton from '../common/CustomButton'
import { ALPHABET_LIST } from '../utils/helper'
import { DownArrow } from '../utils/icons'
import { useNavigate } from 'react-router-dom'

const Hero = () => {
    const [domain, setDomain] = useState(null);
    const [text, setText] = useState("HIT ME HARD AND SOFT")
    const [alphaText, setAlphaText] = useState()
    const navigate = useNavigate()
    const handleDomainChange = (newDomain) => {
        setDomain(newDomain);
        navigate(`?value=${newDomain}`);
        setText(`HIT ME HARD AND ${newDomain.toUpperCase()}`)
    };
    const handleChange = (newText) => (
        setAlphaText(`${newText}`)
    )
    return (
        <div className='pt-[10px] pb-10 bg-off-white'>
            <Header />
            <div className='container'>
                <div className='flex items-center gap-[15px] pt-[17px] max-xl:overflow-x-auto pb-2'>
                    <div className='flex items-center gap-[5px]'>
                        <CustomButton customOnClick={() => handleDomainChange("all")} myClass="!text-xs px-[13.48px] py-[5.84px] !bg-black text-white hover:text-black hover:!bg-transparent" text="All" />
                        <CustomButton customOnClick={() => handleDomainChange("pop")} myClass="!text-xs text-custom-black py-[5.84px] px-[11.37px] hover:!bg-custom-black hover:text-white" text="Pop" />
                        <CustomButton customOnClick={() => handleDomainChange("rock")} myClass="!text-xs text-custom-black py-[5.84px] px-[11.8px] hover:!bg-custom-black hover:text-white" text="Rock" />
                        <CustomButton customOnClick={() => handleDomainChange("music")} myClass="!text-xs text-custom-black py-[5.84px] px-[16.7px] hover:!bg-custom-black hover:text-white group flex items-center gap-[5px]" text="More" icon={<DownArrow myClass="group-hover:stroke-white transition-all duration-300" />} />
                    </div>
                    <div className='flex items-center gap-[2px]'>
                        {ALPHABET_LIST.map(function (item, index) {
                            return <a onClick={() => handleChange(item)} key={index} href="#link" className='flex items-center hover:bg-custom-black size-[29px] justify-center rounded-full transition-all duration-300 hover:text-white hover:font-medium text-black text-xs leading-custom-xl'>{item}</a>
                        })}
                    </div>
                </div>
                <div className='bg-custom-black rounded-[22px] flex pl-12 pr-[43px] justify-between pt-[38px] mt-[35px] relative pb-[43px] max-sm:flex-wrap max-sm:pt-4 max-sm:px-5 max-sm:pb-20'>
                    <h1 className='font-montserrat text-5xl leading-custom-3xl text-white font-bold max-lg:text-4xl max-sm:text-center max-sm:text-3xl'>{text}</h1>
                    <img src="/assets/images/webp/hero.webp" alt="hero" className='size-[261px] max-lg:size-48 max-sm:mx-auto max-sm:mt-4' />
                    <div className='absolute flex items-center gap-[26px] -bottom-16 max-lg:-bottom-10 max-sm:-bottom-6'>
                        <img src="/assets/images/webp/profile.webp" alt="profile" className='size-[206px] max-lg:size-32 max-sm:size-20' />
                        <div>
                            <p className='font-semibold text-[32px] max-lg:text-2xl leading-custom-2xl text-white max-sm:text-lg'>Billie Eilish {alphaText}</p>
                            <p className='font-montserrat font-medium text-base leading-5 text-white pt-[5px] max-lg:pt-0 pb-[21px] max-sm:text-sm font-Montserrat'>Relesed May 17, 2024</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero