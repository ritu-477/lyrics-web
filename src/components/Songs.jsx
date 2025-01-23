import React, { useState } from 'react'
import { SONGS_LIST, TABLE_HEADING_LIST } from '../utils/helper'
import { CrossIcon } from '../utils/icons'
import Heading from '../common/Heading';

const Songs = () => {
    const [uploads, setUploads] = useState(null)
    const [showImage, setShowImage] = useState(false)

    const handleChange = e => {
        const imgUpload = URL.createObjectURL(e.target.files[0])
        setUploads(imgUpload)
        setShowImage(true)
    }

    const handleRemoveImage = () => {
        setUploads(null)
        setShowImage(false)
    }

    return (
        <div className='pt-10 max-sm:pt-2 pb-12'>
            <div className='max-w-[1161px] mx-auto container'>
                <Heading text={'Songs'} classStyle={'max-lg:pb-4'} />
                <div className='flex items-center justify-center gap-[52px] max-md:gap-6 max-sm:gap-0 max-lg:flex-wrap'>
                    <table className='w-full !max-md:overflow-x-auto !whitespace-nowrap'>
                        <thead>
                            <tr>
                                {TABLE_HEADING_LIST.map(function (item, i) {
                                    return (
                                        <th
                                            key={i}
                                            className={`${i === 3 ? 'text-right' : 'text-left max-sm:pr-3'
                                                } text-sm leading-6 font-semibold sm:pb-[33px] pb-6`}
                                        >
                                            {item}
                                        </th>
                                    )
                                })}
                            </tr>
                        </thead>
                        <tbody>
                            {SONGS_LIST.map(function (obj, i) {
                                return (
                                    <tr key={i}>
                                        <td className='sm:text-sm text-xs leading-6 text-custom-light-gray sm:pb-11 pb-7 max-lg:pr-1'>
                                            0{i + 1}
                                        </td>
                                        <td className='font-semibold max-sm:pr-3 sm:text-sm text-xs leading-6 sm:pb-11 pb-7 lg:w-7/12 max-lg:w-5/12 max-sm:w-4/12'>
                                            {obj.song}
                                        </td>
                                        <td className='text-custom-gray text-xs text-custom-xs leading-5 pb-7 sm:leading-6 sm:pb-11'>
                                            {obj.date}
                                        </td>
                                        <td className='text-text-custom-gray text-xs leading-6 text-right pb-7 sm:pb-11'>
                                            {obj.times}
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                    <div>
                        <div className='relative flex items-center justify-center text-center w-[300px] h-[600px] bg-custom-blue rounded-[20px] max-lg:w-[500px] max-lg:h-[400px] max-md:!w-[300px]'>
                            <input
                                type='file'
                                id='my-image'
                                hidden
                                onChange={handleChange}
                                multiple
                            />
                            <label
                                htmlFor='my-image'
                                className={`cursor-pointer text-white text-sm leading-6 font-normal ${showImage ? 'hidden' : 'block'
                                    }`}
                            >
                                Add Place
                            </label>
                            <img
                                width={300} height={600}
                                className={`w-[300px] h-[600px] object-cover rounded-[20px] max-lg:w-[500px] max-lg:h-[400px] max-md:!w-[300px] ${showImage ? 'block' : 'hidden'
                                    }`}
                                src={uploads}
                                alt='Uploaded'
                            />
                            <div
                                className='absolute top-5 right-5 flex flex-col gap-2 cursor-pointer'
                                onClick={handleRemoveImage}
                            >
                                <span className={`${showImage ? 'block' : 'hidden'}`}>
                                    <CrossIcon />
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Songs