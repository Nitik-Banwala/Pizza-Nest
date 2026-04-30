'use client'
import React, { useState, useEffect } from 'react'
import Icons from './Icons'
import { useAuth } from './Authcontext'
import { useRouter } from 'next/navigation'

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false)
    const { user, logout, setShowLoginModal, totalItems, setShowCart } = useAuth()
  
    const router = useRouter()
    useEffect(() => {
        document.body.style.overflow = menuOpen ? 'hidden' : ''
        return () => { document.body.style.overflow = '' }
    }, [menuOpen])

    const handleLoginClick = () => {
        if (user) return
        setShowLoginModal(true)
        setMenuOpen(false)
    }

    return (
        <>
            <div className='fixed w-full h-25 shadow-lg bg-white z-50'>
                <div className='px-4 max-w-293 mx-auto gap-11.5 flex w-full flex-row'>
                    <div className='flex flex-row w-full max-w-[429.1px] justify-between'>
                        <div className=' mt-6'>
                            <a href='/home'
                                onClick={() => router.push('/home')}
                                className='text-prime-1 Nunito-Sans text-custom-3xl'>Pizza Nest</a>
                        </div>
                        <div className='hidden lg:flex w-full mt-8 items-center gap-1 flex-row border-r border-gray max-w-[205.1px]'>
                            <div>
                                <Icons icon={"location"} />
                            </div>
                            <div>
                                <p className='text-xs font-normal Roboto leading-160'>Location</p>
                                <a href="" className='text-base font-normal leading-160'>Hisar, Haryana 125001</a>
                            </div>
                        </div>
                    </div>

                    <div className='sm:flex hidden flex-row w-full max-w-[664.1px] gap-8'>
                        <div className='hidden md:flex flex-row mt-7.25 border gap-2.25 items-center rounded-lg p-3 w-full border-gray max-w-[437.1px]'>
                            <Icons icon={"search"} />
                            <input
                                type="text"
                                placeholder='Search for what you want...'
                                className='w-full placeholder:text-base placeholder:leading-160 placeholder:text-blacky outline-none'
                            />
                        </div>

                        <div className='max-w-[195.1px] hidden sm:flex mt-8.25 w-full items-center lg:justify-between max-[768px]:right-20 max-[768px]:absolute flex-row'>
                            <div className='flex flex-row gap-2 lg:gap-0 lg:justify-between max-w-[152.1px] w-full'>
                                <div className='flex items-center gap-0.5 cursor-pointer flex-row max-w-14 w-full'
                                    onClick={() => router.push('/help')}
                                >
                                    <Icons icon={"question"} />
                                    <a href="/help"

                                    >Help</a>
                                </div>

                                <div className='flex flex-row items-center gap-0.5 max-w-20 w-full'>
                                    <Icons icon={"person"} />
                                    {user ? (
                                        <button
                                            onClick={logout}
                                            className='text-sm text-prime-1 font-medium cursor-pointer bg-transparent border-none leading-160'
                                            title={`Logged in as ${user.email}`}
                                        >
                                            {user.name}
                                        </button>
                                    ) : (
                                        <button
                                            onClick={handleLoginClick}
                                            className='text-sm cursor-pointer bg-transparent border-none leading-160'
                                        >
                                            Login
                                        </button>
                                    )}
                                </div>
                            </div>


                            <div
                                className='cursor-pointer relative'
                                onClick={() => router.push('/cart')}
                            >
                                <Icons icon={"cart"} />
                                {totalItems > 0 && (
                                    <span className='absolute -top-2 -right-2 min-w-[18.1px] h-[18.1px] bg-prime-1 text-white text-[10px] font-bold rounded-full flex items-center justify-center px-1'>
                                        {totalItems > 99 ? '99+' : totalItems}
                                    </span>
                                )}
                            </div>
                        </div>
                    </div>


                    <button
                        className="md:hidden mt-6.5 mr-3 flex flex-col cursor-pointer justify-center items-center w-10 h-10 gap-1.5 focus:outline-none"
                        onClick={() => setMenuOpen(prev => !prev)}
                        aria-label="Toggle menu"
                    >
                        <span className={`block w-6 h-0.5 bg-gray-700 transition-all duration-300 origin-center ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
                        <span className={`block w-6 h-0.5 bg-gray-700 transition-all duration-300 ${menuOpen ? 'opacity-0 scale-x-0' : ''}`} />
                        <span className={`block w-6 h-0.5 bg-gray-700 transition-all duration-300 origin-center ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
                    </button>
                </div>
            </div>

            <div
                className={`fixed inset-0 z-40 bg-black/30 transition-opacity duration-300 md:hidden
                    ${menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
                onClick={() => setMenuOpen(false)}
            />
            <div
                className={`fixed top-0 right-0 h-full w-72 bg-white z-50 shadow-2xl transition-transform duration-300 ease-in-out md:hidden flex flex-col
                    ${menuOpen ? 'translate-x-0' : 'translate-x-full'}`}
            >
                <div className="flex items-center justify-between px-5 py-5 border-b border-gray-100">
                    <a className="text-prime-1 text-xl font-bold"
                        href='/home'
                        onClick={() => router.push('/home')}
                    >Pizza Nest</a>
                    <button
                        onClick={() => setMenuOpen(false)}
                        className="p-1 rounded-full cursor-pointer hover:bg-gray-100 transition-colors"
                        aria-label="Close menu"
                    >
                        <Icons icon={"close"} />
                    </button>
                </div>

                <div className="flex flex-col gap-6 px-5 py-6">
                    <div className="flex items-center gap-2 border-b pb-3 border-gray-100">
                        <Icons icon={"location"} />
                        <div>
                            <p className="text-xs font-normal text-gray-400">Location</p>
                            <a href="" className="text-sm font-normal">Hisar, Haryana 125001</a>
                        </div>
                    </div>

                    <div className="flex flex-row border gap-2 items-center rounded-lg p-3 w-full border-gray">
                        <Icons  icon={"search"} />
                        <input
                            type="text"
                            placeholder="Search for what you want..."
                            className="w-full text-sm outline-none placeholder:text-gray-400"
                        />
                    </div>

                    <a href="" className="flex items-center gap-1 text-gray-700 hover:text-prime-1 transition-colors">
                        <Icons icon={"question"} />
                        <span className="text-sm">Help</span>
                    </a>

                    {/* LOGIN / LOGOUT in drawer */}
                    {user ? (
                        <button
                            onClick={() => { logout(); setMenuOpen(false) }}
                            className="flex items-center gap-1 text-prime-1 bg-transparent border-none cursor-pointer"
                        >
                            <Icons icon={"person"} />
                            <span className="text-sm font-medium">Logout ({user.name})</span>
                        </button>
                    ) : (
                        <button
                            onClick={handleLoginClick}
                            className="flex items-center gap-1 text-gray-700 hover:text-prime-1 transition-colors bg-transparent border-none cursor-pointer"
                        >
                            <Icons icon={"person"} />
                            <span className="text-sm">Login</span>
                        </button>
                    )}

                    {/* CART WITH BADGE in drawer */}
                    <div className="flex items-center gap-1 cursor-pointer text-gray-700 hover:text-prime-1 transition-colors relative">
                        <div className="relative">
                            <Icons icon={"cart"} />
                            {totalItems > 0 && (
                                <span className='absolute -top-2 -right-2 min-w-[18px] h-[18px] bg-prime-1 text-white text-[10px] font-bold rounded-full flex items-center justify-center px-1'>
                                    {totalItems > 99 ? '99+' : totalItems}
                                </span>
                            )}
                        </div>
                        <span className="text-sm">Cart{totalItems > 0 ? ` (${totalItems})` : ''}</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar