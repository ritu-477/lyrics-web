import React, { useState } from 'react';
import { ALPHABET_LIST } from '../utils/helper';
import { useSearchParams } from 'react-router-dom';

const AlphabetsTable = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [selected, setSelected] = useState(ALPHABET_LIST[0]); 

    const handleChange = (item) => {
        setSearchParams({ value: item.toLowerCase() });
        setSelected(item);
    };

    return (
        <div className="border-t border-t-light-purple border-b border-b-light-purple lg:pb-[37px] lg:pt-[42px] py-6 mb-8">
            <div className="container mx-auto">
                <div className="flex max-w-[829px] mx-auto items-center gap-[2px] lg:justify-center xl:justify-start max-lg:overflow-x-auto whitespace-nowrap w-full">
                    {ALPHABET_LIST.map((item, index) => (
                        <p
                            key={index}
                            onClick={() => handleChange(item)}
                            className={`flex-shrink-0 max-lg:mb-2 flex items-center cursor-pointer hover:bg-custom-black size-[29px] justify-center rounded-full transition-all duration-300 hover:text-white hover:font-medium text-black text-xs leading-custom-xl ${selected === item
                                    ? 'bg-custom-black text-white'
                                    : ''
                                }`}
                        >
                            {item}
                        </p>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AlphabetsTable;
