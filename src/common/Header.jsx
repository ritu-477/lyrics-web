import React from 'react'
import CustomButton from './CustomButton'
import { SearchIcon } from '../utils/icons'

const Header = () => {
    const handleSubmit = (e) => (
        e.preventDefault()
    )
    return (
            <div className='container mx-auto'>
            <div className='w-full flex items-center justify-between header-shadow bg-white rounded-[20px] pl-[38px] pr-3 py-[10px] gap-4 max-md:px-3 max-w-[1128px]'>
                    <a href="#logo"><img src="/assets/images/webp/nav-logo.webp" alt="nav-logo" className='h-[26.42px] max-sm:h-[22px]' /></a>
                    <form onSubmit={handleSubmit} className='border border-light-purple max-w-[650px] max-md:hidden max-xl:max-w-[500px] max-lg:max-w-[300px] w-full rounded-full flex items-center pr-[7px] overflow-hidden'>
                        <input required type="text" placeholder='What do you feel like listening to right now ?' className='w-[95%] px-[30px] pt-[13px] pb-[14px] outline-none text-custom-gray placeholder:text-custom-gray !text-sm leading-6 font-normal' />
                    <CustomButton icon={<SearchIcon classStyle="transition-all duration-300 group-hover:fill-black !size-[17px]" />} classStyle="group flex items-center justify-center hover:!bg-white !rounded-full p-[10.34px] !bg-custom-black" />
                    </form>
                    <CustomButton icon={<SearchIcon classStyle="transition-all duration-300 group-hover:fill-black !size-[14px]" />} classStyle="flex group hover:!bg-white items-center md:hidden justify-center !rounded-full !p-2 !bg-custom-black" />
                    <div className='flex items-center gap-5 max-sm:gap-2'>
                        <CustomButton text="Login" classStyle="!border-none text-custom-black !font-normal hover:!text-blue-600" />
                        <CustomButton text="Sign Up" classStyle="!bg-custom-black px-3 sm:px-[25px] py-[9px] text-white hover:!bg-transparent hover:text-black" />
                    </div>
                </div>
            </div>
    )
}

export default Header