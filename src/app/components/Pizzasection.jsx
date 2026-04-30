"use client"
import React, { useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import 'swiper/css'
import Icons from './common/Icons'
import { pizzas } from '../utils/helper'
import Button from './common/Button'

const VegDot = ({ type }) => (
    <span className={`inline-flex items-center justify-center w-4 h-4 border-2 rounded-sm ${type === 'veg' ? 'border-green-600' : 'border-red-600'}`}>
        <span className={`w-2 h-2 rounded-full ${type === 'veg' ? 'bg-green-600' : 'bg-red-600'}`} />
    </span>
)

const PizzaSection = () => {
    const swiperRef = useRef(null)
    const [filter, setFilter] = useState('all')

    const filtered = pizzas.filter(p => filter === 'all' || p.type === filter)

    return (
        <div className='w-full px-4 py-8 max-w-293 mx-auto pt-25'>

            <div className='flex flex-row gap-3 mb-6'>
                <button
                    onClick={() => setFilter('all')}
                    className={`flex items-center gap-1.5 px-4 py-1.5 rounded border text-sm font-normal transition-colors
                        ${filter === 'all' ? 'border-gray-400 bg-gray-100' : 'border-gray-300 bg-white'}`}
                >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <line x1="4" y1="6" x2="20" y2="6" /><line x1="4" y1="12" x2="20" y2="12" /><line x1="4" y1="18" x2="20" y2="18" />
                    </svg>
                    Filter
                </button>
                <button
                    onClick={() => setFilter(filter === 'veg' ? 'all' : 'veg')}
                    className={`flex items-center gap-1.5 px-4 py-1.5 rounded border text-sm font-normal transition-colors
                        ${filter === 'veg' ? 'border-green-500 bg-green-50' : 'border-gray-300 bg-white'}`}
                >
                    <VegDot type="veg" />
                    Veg
                </button>
                <button
                    onClick={() => setFilter(filter === 'nonveg' ? 'all' : 'nonveg')}
                    className={`flex items-center gap-1.5 px-4 py-1.5 rounded border text-sm font-normal transition-colors
                        ${filter === 'nonveg' ? 'border-red-500 bg-red-50' : 'border-gray-300 bg-white'}`}
                >
                    <VegDot type="nonveg" />
                    Non Veg
                </button>
            </div>

  
            <div className='flex items-center justify-between mb-6'>
                <h2 className='text-2xl font-semibold text-gray-900'>What pizza would you like to eat?</h2>
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
                key={filter}
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
                                <p className='text-base font-normal text-gray-800'>{pizza.name}</p>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

        </div>
    )
}

export default PizzaSection