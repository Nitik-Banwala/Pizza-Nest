import React from 'react'
import Image from 'next/image'
import Button from './common/Button'
import Icons from './common/Icons'

const Mediumlarge = () => {
  return (
    <div className='px-4 pt-35'>
      <div
        className=" max-w-330 w-full mx-auto bg-[url('/assets/images/png/banner.png')] bg-cover bg-bottom bg-no-repeat rounded-xl md:rounded-4xl pl-4 lg:pl-22.5 py-5 overflow-hidden md:py-0 flex items-center flex-col md:flex-row md:min-h-119 justify-between"
      >
        <div className="max-w-149.25 w-full flex flex-col gap-3 relative font-nunito-sans text-white">
          <Image
            src={'/assets/images/png/free-delivery.webp'}
            height={172}
            width={153}
            alt="free-delivery"
            className="absolute hidden md:block -bottom-15 right-4 object-cover object-center"
          />
          <div className="flex flex-col gap-1 font-nunito-sans">
            <div className="flex flex-col gap-.5">
              <span className="text-base md:text-28px leading-150 font-medium">
                Buy 1 Pizza, Get 1 Free!
              </span>
              <h1 className="text-4xl md:text-custom-5xl italic font-extrabold leading-140">
                Medium & Large pizzas
              </h1>
            </div>
            <span className="text-lg md:text-28px font-medium leading-140 ">
              Limited Offer
            </span>
          </div>
          <Button
            text={'Order Now'}
            variants='first'
            className={'mt-5 rounded-lg text-base w-[145.1px] py-4 font-semibold'}
          />
        </div>

        <div className="relative h-fit">
          <Image
            src={'/assets/images/png/dualpizza.png'}
            height={377}
            width={597}
            alt="hero-pizza"
            className="md:translate-y-15 border-white h-60 w-100 object-center md:h-94.25 md:w-149.25"
          />
          <Image
            src={'/assets/images/png/50-discount.webp'}
            height={173}
            width={168}
            alt="50%"
            className="absolute top-1 hidden md:block -left-14 object-cover object-center"
          />
        </div>
      </div>
    </div>
  )
}

export default Mediumlarge


{/*
    */}