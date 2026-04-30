'use client'
import { useState } from 'react'
import { useAuth } from './Authcontext'

const LoginModal = () => {
    const { showLoginModal, setShowLoginModal, login, user, logout } = useAuth()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    if (!showLoginModal) return null

    const handleLogin = () => {
        const success = login(email, password)
        if (!success) { setError('Please enter a valid email and password.'); return }
        setEmail('')
        setPassword('')
        setError('')
        setShowLoginModal(false)
    }

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') handleLogin()
    }

    return (
        <div className='fixed inset-0 bg-black/45 z-[999] flex items-center justify-center px-4'>
            <div className='bg-white rounded-2xl p-9 w-full max-w-[400px] relative shadow-2xl'>
                <button
                    onClick={() => setShowLoginModal(false)}
                    className='absolute top-3.5 right-4 text-2xl text-gray-300 hover:text-gray-500 cursor-pointer leading-none bg-transparent border-none'
                >
                    ×
                </button>

                <h2 className='text-[26px] font-bold text-blc mb-6'>Log In</h2>

                <input
                    type='email'
                    placeholder='Email'
                    value={email}
                    onChange={e => { setEmail(e.target.value); setError('') }}
                    onKeyDown={handleKeyDown}
                    className='w-full px-4 py-3 border-[1.5px] border-whitey rounded-xl text-[14px] text-blc outline-none mb-3 focus:border-ultra placeholder:text-placeholder transition-colors'
                />

                <input
                    type='password'
                    placeholder='Password'
                    value={password}
                    onChange={e => { setPassword(e.target.value); setError('') }}
                    onKeyDown={handleKeyDown}
                    className='w-full px-4 py-3 border-[1.5px] border-whitey rounded-xl text-[14px] text-blc outline-none mb-1.5 focus:border-ultra placeholder:text-placeholder transition-colors'
                />

                {error && <p className='text-[12px] text-red-500 mb-2'>{error}</p>}

                <button
                    onClick={handleLogin}
                    className='w-full py-3.5 bg-gradient-to-r from-[#f07b2a] to-ultra text-white rounded-xl text-[15px] font-semibold cursor-pointer mt-2 mb-4 hover:opacity-90 transition-opacity border-none'
                >
                    Login
                </button>

                <p className='text-[13px] text-[#aaa] text-center'>
                    New to Pizza Nest ?{' '}
                    <span className='text-ultra font-semibold cursor-pointer'>Create an Account</span>
                </p>
            </div>
        </div>
    )
}

export default LoginModal