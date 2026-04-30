'use client'
import React, { useState, useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import 'swiper/css'
import { useAuth } from '../components/common/Authcontext'
import { MEALS } from '../utils/helper'
import Icons from '../components/common/Icons'
import Image from 'next/image'
import Button from '../components/common/Button'


const Cart = () => {
    const [selected, setSelected] = useState('cod')
    const { user, cart, totalItems, logout, addToCart, changeQty, setShowLoginModal } = useAuth()

    const options = [
        { id: 'upi', label: 'UPI (Google Pay, PhonePe, Paytm)', svg: 'line' },
        { id: 'card', label: 'Credit / Debit Card', svg: 'line' },
        { id: 'cod', label: 'Cash on Delivery' },
    ]
    const [addedIds, setAddedIds] = useState([])
    const prevRef = useRef(null)
    const nextRef = useRef(null)
    const swiperRef = useRef(null)


    const handleAddMeal = (meal) => {
        if (!user) { setShowLoginModal(true); return }
        addToCart(meal)
        setAddedIds(prev => [...prev, meal.id])
        setTimeout(() => setAddedIds(prev => prev.filter(id => id !== meal.id)), 1200)
    }

    const subTotal = cart.reduce((s, c) => s + c.price * c.qty, 0)
    const tax = Math.round(subTotal * 0.075)
    const grandTotal = subTotal + tax

    return (
        <div className=' pt-40 min-h-screen pb-22.5 px-4'>
            <div className='max-w-285 mx-auto flex gap-5 items-start'>
                <div className='flex-1 min-w-0'>
                    <div className=' mb-10 flex items-center justify-between '>
                        <span className='text-2xl  font-semibold leading-160 text-dark'>
                            {totalItems} Item{totalItems !== 1 ? 's' : ''} you have selected
                        </span>
                        <span className='text-[14px] font-medium text-ultra cursor-pointer'>Explore Menu</span>
                    </div>
                    <div className='bg-white min-[443px]:flex-row flex-col rounded-xl p-5 mb-4 lg:mb-10 flex sm:items-center items-start  gap-4 shadow-sm'>
                        <div className=' rounded-xl flex items-center justify-center shrink-0'>
                            <Image
                                src={'/assets/images/png/dominos.png'}
                                width={213}
                                height={176}
                                alt='dominos'
                            />

                        </div>
                        <div className='flex sm:flex-row flex-col justify-between w-full'>
                            <div className='flex-1'>
                                <div className='text-4xl leading-140 font-semibold text-blc mb-1'>Domino’s Pizza</div>
                                <div className='text-xl text-black font-medium leading-160 mb-0.5'>Pizza, Fast Food, Beverages</div>
                                <div className='text-base leading-160 font-normal text-body-text'>Main Market, Mehta Nagar, Hisar, Haryana – 125001</div>
                            </div>
                            <div className='flex flex-row items-end gap-1'>
                                <div className='flex items-center gap-1 bg-[#1a8a4a] text-white text-[12px] font-semibold px-2.5 py-1 rounded-md'>
                                    ★ 4.2
                                </div>
                                <div className='text-[11px] flex flex-col text-black text-sm font-medium'>12,300 <span className='text-body-text font-light'>
                                    Delivery Rating</span></div>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col lg:flex-row max-w-285 mx-auto lg:gap-10 gap-4'>
                        <div className='flex flex-col flex-1 min-w-0 max-w-[722.1px] '>
                            <div className='bg-white rounded-xl shadow-sm overflow-hidden lg:mb-10 mb-4'>
                                {cart.length === 0 ? (
                                    <div className='px-5 py-5 text-center text-[13px] text-placeholder'>
                                        {user ? 'Your cart is empty. Add something delicious!' : 'Log in to add items to your cart.'}
                                    </div>
                                ) : (
                                    cart.map((item) => (
                                        <div key={item.id} className='flex items-center gap-3.5 px-[18.1px] py-3.5 border-b border-[#f0f0f0] last:border-b-0'>
                                            <div className=' rounded-sm h-[133.1px] flex items-center justify-center text-3xl shrink-0'>
                                                <Image
                                                    src={item.img}
                                                    width={139}
                                                    height={133}
                                                    alt='img'
                                                    className='rounded-sm h-[133.1px]' />
                                            </div>
                                            <div className='flex-1 min-w-0'>
                                                <div className='text-2xl font-semibold leading-160 text-blc mb-0.5'>
                                                    {item.name}
                                                </div>
                                                <p className='text-base font-normal leading-160 max-w-[343.1px] mt-1 '>A delectable combination of sweet & juicy golden com</p>
                                                <div className='text-base font-medium leading-160 text-[#999] mt-1.5'>Regular | {item.rest}</div>

                                            </div>
                                            <div className='text-xl leading-150 items-end flex flex-col font-semibold text-blc self-start pt-0.5'>₹{item.price * item.qty}
                                                <div className='flex items-center border-[1.5px] border-whitey overflow-hidden mt-2 w-fit'>
                                                    <button onClick={() => changeQty(item.id, -1)} className='w-6.5 h-[26.1px] bg-white text-species-heading hover:text-white text-base flex items-center justify-center cursor-pointer border-none hover:bg-black'>−</button>
                                                    <span className='w-13.25 text-center text-[13px] font-semibold text-blc border-x border-whitey leading-[26.1px]'>{item.qty}</span>
                                                    <button onClick={() => changeQty(item.id, 1)} className='w-6.5 h-[26.1px] bg-white text-species-heading hover:text-white text-base flex items-center justify-center cursor-pointer border-none hover:bg-black'>+</button>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                )}
                            </div>
                            <div>
                                <div className='flex items-center justify-between mb-3.5 max-w-[722.1px]'>
                                    <span className='text-[15px] font-semibold text-blc'>Complete Your Meal</span>
                                    <div className='flex gap-1.5'>
                                      
                                        <Button onClick={()=> swiperRef.current?.slidePrev()} variants='third'
                                        text={<Icons icon={'prev'}/>}
                                          className={'group'} />
                                        <Button 
                                        onClick={()=> swiperRef.current?.slideNext()}
                                        ref={nextRef}  variants='third'
                                        text={<Icons icon={'next'}/>}
                                        className={'group'} />
                                    </div>
                                </div>
                                <Swiper
                                    loop
                                    modules={[Navigation]}
                                    onSwiper={(swiper)=>(swiperRef.current = swiper)}
                                    breakpoints={{
                                        480: { slidesPerView: 2 },
                                        768: { slidesPerView: 2 },
                                        1024: { slidesPerView: 3 },
                                    }}
                                    spaceBetween={20}
                                    className='max-w-[722.1px]'


                                    navigation={{ prevEl: prevRef.current, nextEl: nextRef.current }}
                                    onBeforeInit={(swiper) => {
                                        swiper.params.navigation.prevEl = prevRef.current
                                        swiper.params.navigation.nextEl = nextRef.current
                                    }}
                                >
                                    {MEALS.map((meal) => {

                                        return (
                                            <SwiperSlide key={meal.id} style={{ width: '226px' }}>
                                                <div className='rounded-2xl overflow-hidden border h-[297.1px] border-para bg-white shadow-sm'>
                                                    <div className=' relative overflow-hidden h-[252.1px]'>
                                                        <img
                                                            src={meal.emoji}
                                                            alt={meal.name}
                                                            width={227}
                                                            height={252}
                                                            className=' object-cover w-full h-full'
                                                        />

                                                        <div className='absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent' />

                                                        <div className='absolute bottom-0 left-0 right-0 flex items-end justify-between px-3 py-2.5'>
                                                            <span className='text-[14px] font-semibold text-white drop-shadow'>{meal.name}</span>
                                                            <span className='text-[14px] font-semibold text-white drop-shadow'>₹ {meal.price}</span>
                                                        </div>
                                                    </div>
                                                    <button

                                                        className={`w-full Nunito-Sans py-2.5 border-none bg-white text-black text-2xl leading-120 font-semibold flex items-center justify-center gap-1.5 transition-colors cursor-pointer`}
                                                    >
                                                        + Add
                                                    </button>
                                                </div>
                                            </SwiperSlide>
                                        )
                                    })}
                                </Swiper>
                            </div>
                        </div>
                        <div className='w-full lg:w-[378.1px] lg:shrink-0'>
                            <div className='bg-white flex flex-col gap-y-5'>

                                <div className='px-4 py-3.5 rounded-xl shadow-[0px_4px_11.2px_0px_#0000001F] '>
                                    <div className='text-xl font-bold leading-150 text-blc mb-2.5'>Choose a Delivery Address</div>
                                    <div className='flex items-center gap-2.5'>
                                        <div className='w-8.5 h-8.5 rounded-sm bg-[linear-gradient(85.95deg,#EC6112_1.54%,#FF902E_98.46%)] flex items-center justify-center text-[15px] shrink-0'><Icons icon={'location2'} /></div>
                                        <div className='flex-1 text-[13px] font-semibold text-blc'>
                                            Current Address<br />
                                            <span className='font-normal text-[#666] text-[12px]'>Hisar</span>
                                        </div>
                                        <button className='bg-ultra text-white border-none rounded-md px-3 py-1.5 text-[12px] font-semibold cursor-pointer'>Change</button>
                                    </div>
                                </div>

                                <div className='px-4 py-3.5 rounded-xl shadow-[0px_4px_11.2px_0px_#0000001F]'>
                                    <div className='text-xl font-bold leading-150 text-blc mb-2.5'>Offer</div>
                                    <div className='flex items-center gap-2.5 cursor-pointer'>
                                        
                                        <div className='w-8.5 h-8.5 rounded-sm bg-[linear-gradient(85.95deg,#EC6112_1.54%,#FF902E_98.46%)] flex items-center justify-center text-[14px] shrink-0'> <Icons icon={'offer'} /></div>
                                        <div className='flex-1'>
                                            <div className='text-[13px] font-semibold text-blc'>Select offer</div>
                                            <div className='text-[11px] text-[#888]'>Get discount with your order</div>
                                        </div>
                                        <span className='text-[18px] text-[#aaa]'>›</span>
                                    </div>
                                </div>

                                <div className='px-4 py-3.5 rounded-xl shadow-[0px_4px_11.2px_0px_#0000001F]'>
                                    <div className='text-xl font-bold leading-150 text-blc mb-2.5'>
                                        Select Payment Method
                                    </div>

                                    <div className='flex flex-col gap-2.5'>
                                        {options.map((opt,index)=>(
                                              <label key={opt.id} className={`flex items-center gap-2.5 cursor-pointer ${index <=1 && "border-b border-payment-border pb-2"}`} >
                                                <input
                                                    type='checkbox'
                                                    checked={selected === opt.id}
                                                    onChange={() => setSelected(opt.id)}
                                                    className='w-4 h-4 accent-ultra cursor-pointer'
                                                />
                                                <span className='text-[13px] text-[#222]'>{opt.label}</span>
                                            </label>
                                        ))}
                                    </div>
                                </div>

                                <div className='px-4 py-3.5 rounded-xl shadow-[0px_4px_11.2px_0px_#0000001F]'>
                                    <div className='text-xl font-bold leading-150 text-blc mb-2.5'>Price Detail</div>
                                    <div className='flex flex-col gap-2'>
                                        <div className='flex justify-between leading-150 text-lg font-semibold'><span>Sub Total</span><span>₹ {subTotal}</span></div>
                                        <div className='flex justify-between leading-150 text-lg font-semibold'><span>Discount</span><span>-</span></div>
                                        <div className='flex justify-between leading-150 text-lg font-semibold'><span>Taxes and Charges</span><span>₹ {tax}</span></div>
                                        <div className='flex justify-between text-xl font-bold leading-150 text-blc mt-1 pt-2 border-t border-[#eee]'>
                                            <span>Grand Total</span><span>₹ {grandTotal}</span>
                                        </div>
                                    </div>
                                    <button className='w-full py-3.5 mt-3.5 bg-gradient-to-r from-[#f07b2a] to-ultra text-white border-none rounded-xl text-[15px] font-bold cursor-pointer hover:opacity-90 transition-opacity'>
                                        Place Order
                                    </button>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default Cart