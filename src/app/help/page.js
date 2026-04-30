'use client'
import React from 'react'
import { HELP_DATA } from '@/app/utils/helper'

const Help = () => {
  return (
    <div className='bg-[#f2f2f7] min-h-screen py-32 px-4'>
      <div className='max-w-[800.1px] mx-auto bg-white rounded-xl shadow-sm p-6'>

        <h1 className='text-custom-2xl font-bold text-[#111] mb-6'>
          Help & Support
        </h1>

        {HELP_DATA.map((section, index) => (
          <div key={index} className='mb-6'>
            <h2 className='text-[16px] font-semibold text-[#111] mb-2'>
              {section.title}
            </h2>

            <ul className='text-[13px] text-[#666] space-y-1'>
              {section.items.map((item, i) => (
                <li
                  key={i}
                  className='cursor-pointer hover:text-[#EC6112] transition-colors'
                >
                  • {item}
                </li>
              ))}
            </ul>
          </div>
        ))}

      </div>
    </div>
  )
}

export default Help