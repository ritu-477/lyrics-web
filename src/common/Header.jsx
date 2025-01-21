// import React, { useState } from 'react';
// import { SearchIcon } from '../../utils/icons';

// const Header = () => {
//     const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//     return (
//         <div className="bg-off-white shadow-custom-xl pt-[11px]">
//             <div className="container mx-auto px-4">
//                 <div className="flex items-center justify-between py-[10px] pr-3 ps-[38.48px] shadow-custom-xl bg-white rounded-[20px] lg:max-w-[1128px] w-full mx-auto">
//                     <a className="max-w-[135.75px]" href="/">
//                         <img src="/assets/images/webp/nav-logo.webp" alt="nav-logo" />
//                     </a>
//                     <div className="hidden lg:flex justify-between w-full border rounded-full py-[5.3px] pr-[7px] ps-[30px] max-w-[650px]">
//                         <input
//                             type="text"
//                             placeholder="What do you feel like listening to right now?"
//                             className="w-full outline-none text-custom-gray placeholder:text-custom-gray text-sm leading-6 font-normal"
//                         />
//                         <button className="!size-[39px] flex items-center justify-center rounded-[144px] bg-custom-black ms-1">
//                             <SearchIcon />
//                         </button>
//                     </div>
//                     <div className="hidden lg:flex space-x-4">
//                         <button className="text-custom-black text-sm leading-6">Login</button>
//                         <button className="px-[26px] pt-[10px] pb-[9px] text-nowrap font-medium text-white text-sm leading-6 rounded-[9px] bg-custom-black">
//                             Sign Up
//                         </button>
//                     </div>

//                     {/* Menu Icon */}
//                     <div
//                         onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//                         className="menuIcon fixed top-4 right-10 max-sm:w-[30px] max-sm:h-[24px] max-lg:w-[38px] max-lg:h-[28px] z-[15] flex justify-between flex-col cursor-pointer transition ease-linear duration-300 lg:hidden"
//                     >
//                         {isMobileMenuOpen ? (
//                             <>
//                                 <span className="h-[4px] absolute top-3 w-full bg-black transform rotate-45 transition duration-300"></span>
//                                 <span className="h-[4px] absolute top-3 w-full bg-black transform -rotate-45 transition duration-300"></span>
//                             </>
//                         ) : (
//                             <>
//                                 <span className="h-[4px] w-full bg-black"></span>
//                                 <span className="h-[4px] w-full bg-black"></span>
//                                 <span className="h-[4px] w-full bg-black"></span>
//                             </>
//                         )}
//                     </div>

//                 {isMobileMenuOpen && (
//                     <div className={`menuList ${isMobileMenuOpen ? 'max-lg:left-0' : 'max-lg:left-[-100%]'} z-10 gap-8 max-lg:w-full max-lg:fixed max-lg:justify-center max-lg:top-0 max-lg:bg-white max-lg:flex-col max-lg:transition-all duration-300 flex fixed items-center max-lg:min-h-screen`}>
//                         <div className="flex lg:hidden justify-between border rounded-full py-[5.3px] pr-[7px] ps-3 w-full lg:max-w-[650px] max-w-[350px]">
//                             <input
//                                 type="text"
//                                 placeholder="What do you feel like listening to right now?"
//                                 className="w-full outline-none text-custom-gray placeholder:text-custom-gray text-xs font-normal"
//                             />
//                             <button className="!size-[39px] flex items-center justify-center rounded-[144px] bg-custom-black ms-1">
//                                 <SearchIcon />
//                             </button>
//                         </div>
//                         <button className="text-custom-black text-sm leading-6">Login</button>
//                         <button className="px-4 py-2 font-medium text-white text-sm leading-6 rounded-md bg-custom-black">
//                             Sign Up
//                         </button>
//                     </div>
//                 )}
//                 </div>
//                 </div>
//         </div>
//     );
// };

// export default Header;

import React from 'react'
import CustomButton from './CustomButton'
import { Search } from '../utils/icons'

const Header = () => {
    const handleSubmit = (e) => (
        e.preventDefault()
    )
    return (
            <div className='max-w-[1160px] mx-auto px-4'>
            <div className='w-full flex items-center justify-between header-shadow bg-white rounded-[20px] pl-[38px] pr-3 py-[10px] gap-4 max-md:px-3 max-w-[1128px]'>
                    <a href="#logo"><img src="/assets/images/webp/nav-logo.webp" alt="nav-logo" className='h-[26.42px] max-sm:h-[22px]' /></a>
                    <form onSubmit={handleSubmit} className='border border-light-purple max-w-[650px] max-md:hidden max-xl:max-w-[500px] max-lg:max-w-[300px] w-full rounded-full flex items-center pr-[7px] overflow-hidden'>
                        <input type="text" placeholder='What do you feel like listening to right now ?' className='w-[95%] px-[30px] pt-[13px] pb-[14px] outline-none text-custom-gray placeholder:text-custom-gray text-sm leading-6 font-normal' />
                        <CustomButton icon={<Search myClass="transition-all duration-300 group-hover:fill-black" />} myClass="group flex items-center justify-center hover:!bg-white !rounded-full py-[10.34px] px-[10.34px] !bg-custom-black" />
                    </form>
                    <CustomButton icon={<Search myClass="transition-all duration-300 group-hover:fill-black" />} myClass="flex group hover:!bg-white items-center md:hidden justify-center !rounded-full !py-[10.34px] !px-[10.34px] !bg-custom-black" />
                    <div className='flex items-center gap-5 max-sm:gap-2'>
                        <CustomButton text="Login" myClass="!border-none text-custom-black !font-normal px-[25px] py-[9px] hover:bg-customBlack hover:!text-white" />
                        <CustomButton text="Sign Up" myClass="!bg-custom-black px-[25px] py-[9px] text-white hover:!bg-transparent hover:text-black" />
                    </div>
                </div>
            </div>
    )
}

export default Header