"use client"
import React, { useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import 'swiper/css'
import { RESTAURANTS } from '../utils/helper'
import Button from './common/Button'
import Icons from './common/Icons'


const RestaurantSection = () => {
    const swiperRef = useRef(null)

    return (
        <div className='w-full px-4 py-10 sm:py-25 max-w-293 mx-auto'>
            <div className='flex items-center justify-between mb-10'>
                <h2 className=' sm:text-40 text-3xl font-semibold text-dark Nunito-Sans leading-120'>Top Restaurants in Hisar</h2>
                <div className='flex gap-2'>
                  <Button onClick={() => swiperRef.current?.slidePrev()} variants='third'
                        text={<Icons icon={'prev'} />}
                        className={'group'} />
                    <Button
                        onClick={() => swiperRef.current?.slideNext()}
                         variants='third'
                        text={<Icons icon={'next'} />}
                        className={'group'} />
                </div>
            </div>

            <Swiper
                modules={[Navigation]}
                
                onSwiper={(swiper)=>(swiperRef.current = swiper)}
                spaceBetween={20}
                slidesPerView={1}

                breakpoints={{
                    480: { slidesPerView: 2 },
                    768: { slidesPerView: 3 },
                    1024: { slidesPerView: 4 },
                }}
                className='pb-4!'
            >
                {RESTAURANTS.map((r) => (
                    <SwiperSlide key={r.id}>
                        <div className='rounded-xl overflow-hidden border border-gray-100 shadow-sm cursor-pointer hover:shadow-md transition-shadow'>

                            <div className='relative'>
                                <img
                                    src={r.image}
                                    alt={r.name}
                                    className='w-full h-[160.1px] object-cover'
                                />
                            </div>


                            <div className='px-3 py-3'>
                                <div className='flex items-center justify-between mb-1'>
                                    <p className='text-base font-semibold text-gray-900 Inter'>{r.name}</p>
                                    <span className='flex items-center gap-1 bg-green-600 text-white text-xs font-semibold px-2 py-0.5 rounded'>
                                        <svg width="10" height="10" viewBox="0 0 24 24" fill="white">
                                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                        </svg>
                                        {r.rating.toFixed(1)}
                                    </span>
                                </div>
                                <p className='text-sm font-normal text-gray-500 Inter'>{r.cuisine}</p>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

        </div>
    )
}

export default RestaurantSection