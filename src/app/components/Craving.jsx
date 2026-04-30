import React from 'react'
import Button from './common/Button'
import Image from 'next/image'

const Craving = () => {
    return (
        <div>
            <div className='py-10 md:py-25 mx-auto max-w-285 px-4 xl:px-0 flex flex-col md:flex-row gap-6'>
                <div className="bg-[url('/assets/images/png/pizzaone.png')] bg-no-repeat bg-center bg-cover w-full md:max-w-[558.1px] h-[260.1px] md:h-[319.1px] hover:scale-105 duration-500 group rounded-xl ">
                    <div className='mt-8 md:mt-15.75 ml-6 md:ml-8'>
                        <h2 className='text-[#FF902E] text-xl md:text-custom-2xl leading-160'>Delicious</h2>
                        <p className='text-white font-semibold leading-160 text-2xl md:text-4xl'>SPICY PANEER</p>
                        <p className='text-white font-normal leading-160 text-base md:text-xl'>Limited Time</p>
                        <Button text={'Order Now'} variants='first' className={'mt-3 md:mt-4 rounded-lg px-4 py-2.5 font-semibold text-sm md:text-base'} />
                    </div>
                </div>
                <div className="bg-[url('/assets/images/png/pizzatwo.png')] bg-no-repeat bg-center bg-cover w-full md:max-w-[558.1px] h-[260.1px] md:h-[319.1px] hover:scale-105 duration-500 group rounded-xl ">
                    <div className='mt-8 md:mt-15.75 ml-6 md:ml-8'>
                        <h2 className='text-[#FF902E] text-xl md:text-custom-2xl leading-160'>Delicious</h2>
                        <p className='text-white font-semibold leading-160 text-2xl md:text-4xl'>CHEESE BURST</p>
                        <p className='text-white font-normal leading-160 text-base md:text-xl'>Limited Time</p>
                        <Button text={'Order Now'} variants='first' className={'mt-3 md:mt-4 rounded-lg px-4 py-2.5 font-semibold text-sm md:text-base'} />
                    </div>
                </div>
            </div>

            <div className="bg-[url('/assets/images/png/cta.png')] bg-no-repeat bg-center bg-cover max-w-360 min-h-[280.1px] md:h-107.5 mx-auto">
                <div className='max-w-360 min-h-[280.1px] md:h-107.5 mx-auto flex items-center bg-black/85 px-4 py-12 md:py-0'>
                    <div className='max-w-[722.1px] mx-auto flex flex-col text-center items-center'>
                        <h2 className='text-[#FEFEFE] font-semibold text-2xl sm:text-3xl md:text-5xl leading-120'>
                            Craving something cheesy, spicy, or just straight-up delicious?
                        </h2>
                        <p className='max-w-[465.1px] text-[#E8E8E8] leading-160 mt-4 text-sm md:text-base px-2 md:px-0'>
                            Your next favorite pizza is waiting. Freshly baked, flavor-packed, and delivered hot to your door — every single time.
                        </p>
                        <div className='flex flex-col sm:flex-row justify-center gap-4 md:gap-6 mt-6 md:mt-8 w-full'>
                            <Button text={'Order Now'} variants='first' className={'px-8 py-3 md:py-4 text-sm md:text-base'} />
                            <Button text={'View Full Menu'} variants='second' className={'px-8 py-3 md:py-4 text-sm md:text-base'} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Craving