'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import Button from './common/Button'
import { PIZZAS } from '../utils/helper'
import { TYPE_FILTERS } from '../utils/helper'
import { SORT_FILTERS } from '../utils/helper'
import { useAuth } from './common/Authcontext'

const FamousDishes = () => {
    const [activeType, setActiveType] = useState('all')
    const [activeSort, setActiveSort] = useState('')
    const [visibleCount, setVisibleCount] = useState(8)

    const { user, addToCart, cart, setShowLoginModal } = useAuth()

    const getFiltered = () => {
        let items = [...PIZZAS]
        if (activeType === 'veg') items = items.filter(i => i.type === 'veg')
        if (activeType === 'nonveg') items = items.filter(i => i.type === 'nonveg')
        if (activeSort === 'top') items = items.filter(i => i.rating >= 4.4)
        if (activeSort === 'lohi') items.sort((a, b) => a.price - b.price)
        if (activeSort === 'hilo') items.sort((a, b) => b.price - a.price)
        return items
    }

    const handleTypeFilter = (value) => {
        setActiveType(value)
        setVisibleCount(8)
    }

    const handleSortFilter = (value) => {
        setActiveSort(prev => prev === value ? '' : value)
        setVisibleCount(8)
    }

    const handleAddToCart = (item) => {
        if (!user) {
            setShowLoginModal(true)
            return
        }
        addToCart(item)
    }

    const filtered = getFiltered()
    const displayItems = filtered.slice(0, visibleCount)
    const hasMore = filtered.length > visibleCount

    const btnClass = (isActive) =>
        `h-10.5 max-w-42.5 w-full rounded-xl border text-[13px] font-medium transition-all duration-150 cursor-pointer ${isActive
            ? 'bg-[#e8601a] text-white border-[#e8601a]'
            : 'bg-white text-[#444] border-[#C1C1C1] hover:border-[#e8601a] hover:text-[#e8601a]'
        }`

    return (
        <div className='px-4 py-10 md:py-16 bg-[#f2f2f7]'>
            <div className='max-w-[1140.1px] mx-auto'>

                <h2 className='text-2xl md:text-[26px] font-bold text-[#111] mb-5 tracking-tight'>
                    Famous Dishes in Hisar
                </h2>

                <div className='flex flex-wrap items-center gap-3.5 mb-6'>
                    {TYPE_FILTERS.map(f => (
                        <button key={f.value} onClick={() => handleTypeFilter(f.value)} className={btnClass(activeType === f.value)}>
                            {f.label}
                        </button>
                    ))}

                    {SORT_FILTERS.map(f => (
                        <button key={f.value} onClick={() => handleSortFilter(f.value)} className={btnClass(activeSort === f.value)}>
                            {f.label}
                        </button>
                    ))}
                </div>

                <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4'>
                    {displayItems.map(item => {
                        const inCart = cart.some(c => c.id === item.id)

                        return (
                            <div key={item.id} className='bg-white rounded-xl overflow-hidden shadow-sm hover:-translate-y-[3px] hover:shadow-md transition-all duration-200'>
                                <div className='relative w-full h-[152px]'>
                                    <Image
                                        src={item.img}
                                        alt={item.name}
                                        fill
                                        className='object-cover'
                                        sizes='(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw'
                                    />
                                </div>
                                <div className='px-3 pt-[11px] pb-[13px]'>
                                    <div className='flex items-start justify-between gap-1.5 mb-[2px]'>
                                        <span className='text-[13.5px] font-semibold text-[#111] leading-tight'>{item.name}</span>
                                        <span className='flex-shrink-0 bg-[#1a8a4a] text-white text-[10.5px] font-semibold px-[7px] py-[2px] rounded flex items-center gap-[2px]'>
                                            ★ {item.rating}
                                        </span>
                                    </div>
                                    <p className='text-[11.5px] text-[#888] mb-1.5'>{item.rest}</p>
                                    <p className='text-[14px] font-semibold text-[#111] mb-[10px]'>₹ {item.price}</p>
                                    <button
                                        onClick={() => handleAddToCart(item)}
                                        className={`w-full py-2 border-[1.5px] border-[#e8601a] rounded-lg text-[13px] font-medium transition-all duration-150 cursor-pointer ${inCart
                                            ? 'bg-[#e8601a] text-white'
                                            : 'bg-transparent text-[#e8601a] hover:bg-[#e8601a] hover:text-white'
                                        }`}
                                    >
                                        {inCart ? '✓ Added' : 'Add to Cart'}
                                    </button>
                                </div>
                            </div>
                        )
                    })}
                </div>

                {hasMore && (
                    <div className='flex justify-center mt-7'>
                        <Button
                            text='Show More'
                            variants='first'
                            className='px-10 py-3 rounded-lg font-semibold text-sm'
                            onClick={() => setVisibleCount(prev => prev + 4)}
                        />
                    </div>
                )}
            </div>
        </div>
    )
}

export default FamousDishes