import React, { useState, useEffect } from "react";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import Header from '../common/Header';
import CustomButton from '../common/CustomButton';
import { ALPHABET_LIST } from '../utils/helper';
import { DownArrow } from '../utils/icons';

const Hero = () => {
    const { category = "all" } = useParams();
    const [selectedCategory, setSelectedCategory] = useState(category);
    const [alphabetText, setArtistName] = useState("");
    const [searchParams, setSearchParams] = useSearchParams();
    const [isDropdownOpen, setIsDropdownOpen] = useState(false); 
    const [selectedLetter, setSelectedLetter] = useState(""); 
    const navigate = useNavigate();

    useEffect(() => {
        const letter = searchParams.get("letter");
        if (letter) {
            setArtistName(letter.toUpperCase());
            setSelectedLetter(letter.toUpperCase()); 
        } else {
            setArtistName("");
            setSelectedLetter(""); 
        }
    }, [searchParams]);

    const handleChange = (letter) => {
        const newName = letter.toUpperCase();
        setArtistName(newName);
        setSelectedLetter(newName); 
        setSearchParams({ ...searchParams, letter: letter.toLowerCase() });
    };

    const handleTextChange = (category) => {
        setSelectedCategory(category);
        setIsDropdownOpen(false); 
        navigate(`/${category.toLowerCase()}`);
    };

    const toggleDropdown = () => {
        setIsDropdownOpen((prev) => !prev);
    };

    return (
        <div className="pt-[11px] mb-12 bg-off-white lg:h-screen">
            <Header />
            <div className="container mx-auto">
                <div className="flex items-center gap-[15px] pt-[17px] pb-2 max-xl:flex-col">
                    <div className="flex items-center gap-[5px]">
                        <CustomButton
                            customOnClick={() => handleTextChange("all")}
                            classStyle={`${selectedCategory === "all" ? "bg-custom-black text-white" : ""} !text-xs text-custom-black !px-[13.48px] !py-[5.84px] hover:!bg-custom-black hover:text-white`}
                            text="All"
                        />
                        <CustomButton
                            customOnClick={() => handleTextChange("pop")}
                            classStyle={`${selectedCategory === "pop" ? "bg-custom-black text-white" : ""} !text-xs text-custom-black !py-[5.84px] !px-[11.37px] hover:!bg-custom-black hover:text-white`}
                            text="Pop"
                        />
                        <CustomButton
                            customOnClick={() => handleTextChange("rock")}
                            classStyle={`${selectedCategory === "rock" ? "bg-custom-black text-white" : ""} !text-xs text-custom-black !py-[5.84px] !px-[11.8px] hover:!bg-custom-black hover:text-white`}
                            text="Rock"
                        />
                        <div className="relative">
                            <CustomButton
                                customOnClick={toggleDropdown} 
                                classStyle={`${selectedCategory === "music" ? "bg-custom-black text-white" : ""} !text-xs text-custom-black !py-[5.84px] !px-[9.2px] hover:!bg-custom-black hover:text-white group flex items-center gap-[5px]`}
                                text="More"
                                icon={<DownArrow classStyle={`${selectedCategory === "music" ? "stroke-white" : ""} group-hover:stroke-white transition-all duration-300`} />}
                            />
                            {isDropdownOpen && (
                                <div className="absolute left-0 mt-2 bg-white shadow-lg rounded-md z-10">
                                    <button
                                        onClick={() => handleTextChange('all')}
                                        className="text-black py-2 px-4 hover:bg-blue-500 hover:text-white w-full text-left"
                                    >
                                        All
                                    </button>
                                    <button
                                        onClick={() => handleTextChange('pop')}
                                        className="text-black py-2 px-4 hover:bg-blue-500 hover:text-white w-full text-left"
                                    >
                                        Pop
                                    </button>
                                    <button
                                        onClick={() => handleTextChange('rock')}
                                        className="text-black py-2 px-4 hover:bg-blue-500 hover:text-white w-full text-left"
                                    >
                                        Rock
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                    <div className="flex items-center gap-[2px] lg:justify-center xl:justify-start max-lg:overflow-x-auto whitespace-nowrap w-full">
                        {ALPHABET_LIST.map((item, index) => (
                            <p
                                onClick={() => handleChange(item)}
                                key={index}
                                className={`flex-shrink-0 flex items-center cursor-pointer hover:bg-custom-black size-[29px] justify-center rounded-full transition-all duration-300 hover:text-white hover:font-medium text-black text-xs leading-custom-xl ${selectedLetter === item.toUpperCase() ? "bg-custom-black text-white" : ""
                                    }`}
                            >
                                {item}
                            </p>
                        ))}
                    </div>
                </div>
                <div className="bg-custom-black rounded-[22px] flex pl-12 pr-[43px] justify-between pt-[38px] max-sm:mt-6 mt-[35px] relative pb-[43px] max-sm:flex-wrap max-sm:pt-4 max-sm:px-5 max-sm:pb-20">
                    <h1 className="font-Montserrat leading-custom-3xl text-5xl uppercase text-white font-bold max-lg:text-4xl max-sm:text-center max-sm:text-3xl max-sm:mx-auto">
                        hit me hard and {selectedCategory === "music" ? "music" : selectedCategory === "pop" ? "pop" : selectedCategory === "rock" ? "rock" : "all"}
                    </h1>
                    <img
                        src="/assets/images/webp/hero.webp"
                        alt="hero"
                        className="size-[261px] max-lg:size-48 max-sm:mx-auto max-sm:mt-4 pointer-events-none"
                    />
                    <div className="absolute flex items-center gap-[26px] -bottom-16 max-lg:-bottom-10 max-sm:-bottom-6">
                        <img
                            src="/assets/images/webp/profile.webp"
                            alt="profile"
                            className="size-[206px] max-lg:size-32 max-sm:size-20 pointer-events-none"
                        />
                        <div>
                            <p className="font-semibold text-[32px] max-lg:text-2xl leading-custom-2xl text-white max-sm:text-lg">
                                Billie Eilish {alphabetText}
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
