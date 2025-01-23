import React, { useState, useEffect, useRef } from "react";
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';
import Header from '../common/Header';
import CustomButton from '../common/CustomButton';
import { ALPHABET_LIST } from '../utils/helper';
import { DownArrow } from '../utils/icons';

const Hero = () => {
    const navigate = useNavigate();
    const { id = 'all' } = useParams();
    const [, setActive] = useState(id);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const dropdownRef = useRef(null);

    const handleTextChange = (id) => {
        navigate(`/${id}`);
        setActive(id);
        setIsDropdownOpen(false);
    };

    const [, setText] = useState();
    const [searchParams, setSearchParams] = useSearchParams();
    const value = searchParams.get('value')?.toUpperCase()
    const handleChange = (value, item) => {
        setSearchParams({ value: value.toLowerCase() });
        setText(`${item}`);
    };

    const toggleDropdown = () => {
        setIsDropdownOpen((prev) => !prev);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsDropdownOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div className="pt-[11px] mb-12 bg-off-white">
            <Header />
            <div className="container mx-auto">
                <div className="flex items-center gap-[15px] pt-[17px] pb-2 max-xl:flex-col">
                    <div className="flex items-center gap-[5px] justify-center">
                        <CustomButton customOnClick={() => handleTextChange("all")} classStyle={`${id === "all" ? "bg-custom-black text-white" : ""} !text-xs text-custom-black !px-[13.48px] !py-[5.84px] hover:!bg-custom-black hover:text-white`} text="All" />
                        <CustomButton customOnClick={() => handleTextChange("pop")} classStyle={`${id === "pop" ? "bg-custom-black text-white" : ""} !text-xs text-custom-black !py-[5.84px] !px-[11.37px] hover:!bg-custom-black hover:text-white`} text="Pop" />
                        <CustomButton customOnClick={() => handleTextChange("rock")} classStyle={`${id === "rock" ? "bg-custom-black text-white" : ""} !text-xs text-custom-black !py-[5.84px] !px-[11.8px] hover:!bg-custom-black hover:text-white`} text="Rock" />
                        <div className="relative" ref={dropdownRef}>
                            <CustomButton customOnClick={toggleDropdown} classStyle={`${id === "music" ? "bg-custom-black text-white" : ""} !text-xs text-custom-black !py-[5.84px] !px-[9.2px] hover:!bg-custom-black hover:text-white group flex items-center gap-[5px]`} text="More" icon={<DownArrow classStyle={`${id === "music" ? "stroke-white" : ""} group-hover:stroke-white transition-all duration-300`} />} />
                            {isDropdownOpen && (
                                <div className="absolute left-0 mt-2 bg-white shadow-lg rounded-md z-10">
                                    <button onClick={() => handleTextChange('all')} className="text-black py-2 px-4 hover:bg-blue-500 hover:text-white w-full text-left rounded-md">All</button>
                                    <button onClick={() => handleTextChange('pop')} className="text-black py-2 px-4 hover:bg-blue-500 hover:text-white w-full text-left rounded-md">Pop</button>
                                    <button onClick={() => handleTextChange('rock')} className="text-black py-2 px-4 hover:bg-blue-500 hover:text-white w-full text-left rounded-md">Rock</button>
                                </div>
                            )}
                        </div>
                    </div>
                    <div className="flex items-center gap-[2px] lg:justify-center xl:justify-start max-lg:overflow-x-auto whitespace-nowrap w-full">
                        {ALPHABET_LIST.map((item, index) => (
                            <p onClick={() => handleChange(item)} key={index} className={`flex-shrink-0 max-lg:mb-2 flex items-center cursor-pointer hover:bg-custom-black size-[29px] justify-center rounded-full transition-all duration-300 hover:text-white hover:font-medium text-black text-xs leading-custom-xl ${value === item.toUpperCase() ? "bg-custom-black text-white" : ""}`}>
                                {item}
                            </p>
                        ))}
                    </div>
                </div>
                <div className="bg-custom-black rounded-[22px] flex pl-12 pr-[43px] justify-between pt-[42px] max-lg:mt-6 mt-[35px] relative pb-11 max-sm:flex-wrap max-sm:pt-4 max-sm:px-5 max-sm:pb-20">
                    <h1 className="font-Montserrat leading-custom-3xl text-5xl uppercase text-white font-bold max-lg:text-4xl max-sm:text-center max-sm:text-3xl max-sm:mx-auto">
                        hit me hard and {id === "music" ? "music" : id === "pop" ? "pop" : id === "rock" ? "rock" : "all"}
                    </h1>
                    <img src="/assets/images/webp/hero.webp" alt="hero" className="size-[261px] max-lg:size-48 max-sm:mx-auto max-sm:mt-4 pointer-events-none" />
                    <div className="absolute flex items-center gap-[26px] -bottom-16 max-lg:-bottom-10 max-sm:-bottom-5">
                        <img src="/assets/images/webp/profile.webp" alt="profile" className="size-[206px] max-lg:size-32 max-sm:size-20 pointer-events-none" />
                        <div className="flex flex-col">
                            <p
                                className="font-semibold text-[32px] max-lg:text-2xl leading-custom-2xl text-white max-sm:text-lg">
                                Billie Eilish {value}
                            </p>
                            <p className="font-Montserrat font-medium text-base leading-5 text-light-gray pt-[5px] max-lg:pt-0 max-sm:pb-8 pb-[21px] max-sm:text-sm">
                                Released May 17, 2024
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
