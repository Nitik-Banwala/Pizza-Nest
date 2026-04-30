'use client'
import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Button from './common/Button'
import { PIZZAS, TYPE_FILTERS, SORT_FILTERS } from '../utils/helper'
import { useAuth } from './common/Authcontext'
import { useRouter, useSearchParams } from 'next/navigation'

const FamousDishes = () => {
    const [activeType, setActiveType] = useState('all')
    const [activeSort, setActiveSort] = useState('')
    const [visibleCount, setVisibleCount] = useState(8)

    const { user, addToCart, cart, setShowLoginModal } = useAuth()

    const router = useRouter()
    const searchParams = useSearchParams()
    useEffect(() => {
        const type = searchParams.get('type') || 'all'
        const sort = searchParams.get('sort') || ''

        setActiveType(type)
        setActiveSort(sort)
    }, [searchParams])

    const updateURL = (type, sort) => {
        const params = new URLSearchParams()

        if (type && type !== 'all') params.set('type', type)
        if (sort) params.set('sort', sort)

        router.push(`?${params.toString()}`, { scroll: false })
    }

    const handleTypeFilter = (value) => {
        const newType = activeType === value ? 'all' : value
        setActiveType(newType)
        updateURL(newType, activeSort)
    }

    const handleSortFilter = (value) => {
        const newSort = activeSort === value ? '' : value
        setActiveSort(newSort)
        updateURL(activeType, newSort)
    }

    const getFiltered = () => {
        let items = [...PIZZAS]
        if (activeType === 'veg') items = items.filter(i => i.type === 'veg')
        if (activeType === 'nonveg') items = items.filter(i => i.type === 'nonveg')
        if (activeSort === 'top') items = items.filter(i => i.rating >= 4.4)
        if (activeSort === 'lohi') items.sort((a, b) => a.price - b.price)
        if (activeSort === 'hilo') items.sort((a, b) => b.price - a.price)
        return items
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
            ? 'bg-ultra text-white border-ultra'
            : 'bg-white text-[#444] border-text-gray hover:border-ultra hover:text-ultra'
        }`

    return (
        <div className='px-4 py-10 md:py-25 bg-famous-bg'>
            <div className='max-w-[1140.1px] mx-auto'>

                <h2 className='sm:text-40 Nunito-Sans text-3xl font-semibold text-dark leading-120 mb-8 tracking-tight'>
                    Famous Dishes in Hisar
                </h2>

                <div className='flex flex-wrap items-center gap-3.5 mb-10'>
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
                                <div className='relative w-full h-[192.1px]'>
                                    <Image
                                        src={item.img}
                                        alt={item.name}
                                        fill
                                        className='object-cover'
                                        sizes='(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw'
                                    />
                                </div>
                                <div className='p-3 h-[159]'>
                                    <div className='flex items-start justify-between gap-1.5 mb-[2.1px]'>
                                        <span className='text-xl font-semibold text-blc line-clamp-1! Inter leading-140'>{item.name}</span>
                                        <span className='shrink-0 bg-[#1a8a4a] text-white text-[10.5px] font-semibold px-[7.1px] py-[2.1px] rounded flex items-center gap-[2px]'>
                                            ★ {item.rating}
                                        </span>
                                    </div>
                                    <p className='text-xs text-dark leading-160 mt-0.5 Inter '>{item.rest}</p>
                                    <p className='text-base font-bold leading-160 text-dark Inter mt-1.5'>₹ {item.price}</p>
                                    <button
                                        onClick={() => handleAddToCart(item)}
                                        className={`w-full py-2 border-[1.5px] h-[42.1px] mt-3 border-[ultra rounded-lg text-[13px] font-medium transition-all duration-150 cursor-pointer ${inCart
                                            ? 'bg-[ultra text-white'
                                            : 'bg-transparent text-[ultra hover:bg-[ultra hover:text-white'
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
                    <div className='flex justify-center mt-10'>
                        <Button
                            text={'Show More'}
                            variants='forth'
                            className={'py-4 px-8 cursor-pointer duration-500 transform rounded-lg border border-transparent hover:border-[ultra hover:bg-none hover:bg-transparent hover:text-[ultra bg-[linear-gradient(85.95deg,#EC6112_1.54%,#FF902E_98.46%)] text-white'}
                            onClick={() => setVisibleCount(prev => prev + 4)}
                        />
                    </div>
                )}
            </div>
        </div>
    )
}

export default FamousDishes