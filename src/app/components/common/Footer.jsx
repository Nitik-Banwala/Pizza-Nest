import React from 'react'
import { footerData } from '@/app/utils/helper'
import Icons from './Icons'

const Footer = () => {
    const year = new Date().getFullYear()
    return (
        <div className='px-4'>
            <div className='flex flex-col bg-white max-w-285 mx-auto'>
                <div className='flex flex-col lg:flex-row w-full lg:gap-0 pt-10 md:pt-20 gap-10 lg:justify-between'>
                    <div className='max-w-full lg:max-w-[558.1px] w-full'>
                        <a href='' className='text-[#EC6112] leading-150 text-3xl md:text-custom-4xl'>Pizza Nest</a>
                        <p className='mt-3 leading-160 text-sm md:text-base font-normal'>
                            At Pizza Nest, we believe every slice should bring joy. Whether you're ordering for one or feeding a crowd, our pizzas are baked with care, topped with love, and delivered hot to your doorstep. You just taste the difference.
                        </p>
                        <div className='flex flex-row gap-5 mt-6'>
                            <div className="group hover:bg-none border-[#FF902E] border duration-500 hover:bg-white cursor-pointer h-11 w-11 md:h-13 md:w-13 rounded-full bg-[linear-gradient(85.95deg,#EC6112_1.54%,#FF902E_98.46%)] flex items-center justify-center">
                                <Icons icon={"facebook"} />
                            </div>
                            <div className="group hover:bg-none border-[#FF902E] border duration-500 hover:bg-white cursor-pointer h-11 w-11 md:h-13 md:w-13 rounded-full bg-[linear-gradient(85.95deg,#EC6112_1.54%,#FF902E_98.46%)] flex items-center justify-center">
                                <Icons icon={"insta"} />
                            </div>
                            <div className="group hover:bg-none border-[#FF902E] border duration-500 hover:bg-white cursor-pointer h-11 w-11 md:h-13 md:w-13 rounded-full bg-[linear-gradient(85.95deg,#EC6112_1.54%,#FF902E_98.46%)] flex items-center justify-center">
                                <Icons icon={"linkdin"} />
                            </div>
                        </div>
                    </div>
                   <div className='flex flex-row flex-wrap gap-8 lg:gap-20 max-w-[350.1px]'>
                        {footerData.map((col) => (
                            <div key={col.title} className='flex flex-col gap-3'>
                                <h3 className='text-sm md:text-base font-semibold text-gray-900'>{col.title}</h3>
                                <ul className='flex flex-col gap-2'>
                                    {col.links.map((link) => (
                                        <li key={link}>
                                            <a
                                                href='#'
                                                className='text-sm md:text-base font-normal text-gray-700 hover:text-[#EC6112] transition-colors'
                                            >
                                                {link}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className='border-t-3 max-w-285 mx-auto mt-8 border-[#D1D1D166]'>
                <div className='w-full py-5 text-center'>
                    <p className='text-xs md:text-sm font-normal text-gray-500'>
                        Copyright Pizza Nest &copy; {year}, All rights reserved
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Footer