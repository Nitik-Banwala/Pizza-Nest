"use client"
import React, { useRef, useState, useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import 'swiper/css'
import Icons from './common/Icons'
import { PIZZA } from '../utils/helper'
import Button from './common/Button'

const VegDot = ({ type }) => (
    <span className={`inline-flex items-center justify-center w-5 h-5 border rounded-[2.1px] ${type === 'veg' ? 'border-green-600' : 'border-red-600'}`}>
        <span className={`w-3 h-3 rounded-full ${type === 'veg' ? 'bg-green-600' : 'bg-red-600'}`} />
    </span>
)

const PizzaSection = () => {
    const swiperRef = useRef(null)
    const [filter, setFilter] = useState('all')

    const filtered = PIZZA.filter(p => filter === 'all' || p.type === filter)

    useEffect(() => {
        const savedFilter = localStorage.getItem('filter')
        if (savedFilter) {
            setFilter(savedFilter)
        }
    }, [])
    useEffect(() => {
        localStorage.setItem('filter', filter)
    }, [filter])

    return (
        <div className='w-full px-4 py-10 sm:py-25 max-w-293 mx-auto '>

            <div className='flex flex-row gap-3 '>
                <button
                    onClick={() => setFilter('all')}
                    className={`flex items-center cursor-pointer Nunito-Sans gap-1.5 px-4 py-1.5 rounded border text-sm font-normal transition-colors
                        ${filter === 'all' ? 'border-gray-400 bg-gray-100' : 'border-gray-300 bg-white'}`}
                >
                    <Icons icon={'filter'} />
                    Filter
                </button>
                <button
                    onClick={() => setFilter(filter === 'veg' ? 'all' : 'veg')}
                    className={`flex Nunito-Sans cursor-pointer items-center gap-1.5 px-4 py-1.5 rounded border text-sm font-normal transition-colors
                        ${filter === 'veg' ? 'border-green-500 bg-green-50' : 'border-gray-300 bg-white'}`}
                >
                    <VegDot type="veg" />
                    Veg
                </button>
                <button
                    onClick={() => setFilter(filter === 'nonveg' ? 'all' : 'nonveg')}
                    className={`flex Nunito-Sans cursor-pointer items-center gap-1.5 px-4 py-1.5 rounded border text-sm font-normal transition-colors
                        ${filter === 'nonveg' ? 'border-red-500 bg-red-50' : 'border-gray-300 bg-white'}`}
                >
                    <VegDot type="nonveg" />
                    Non Veg
                </button>
            </div>

            <div className={` flex items-center justify-between my-10`}>
                <h2 className='sm:text-40 text-3xl font-semibold text-dark leading-120 Nunito-Sans '>What pizza would you like to eat?</h2>
                {filter === 'all' && (
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
                )}
            </div>

            <Swiper
                modules={[Navigation]}

                onSwiper={(swiper) => (swiperRef.current = swiper)}
                spaceBetween={20}
                slidesPerView={1}
                breakpoints={{
                    480: { slidesPerView: 2 },
                    768: { slidesPerView: 3 },
                    1024: { slidesPerView: 4 },
                }}
                key={filter}
                className='pb-4!'

            >
                {filtered.map((pizza) => (
                    <SwiperSlide key={pizza.id}>
                        <div className='rounded-xl overflow-hidden border border-gray-100 shadow-sm cursor-pointer hover:shadow-md transition-shadow'>
                            <img
                                src={pizza.image}
                                alt={pizza.name}
                                className='w-full h-[213.1px] object-cover'
                            />
                            <div className='py-3 text-center'>
                                <p className='text-base font-normal Roboto text-gray-800'>{pizza.name}</p>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

        </div>
    )
}

export default PizzaSection