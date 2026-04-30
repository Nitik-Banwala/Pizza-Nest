'use client'
import { createContext, useContext, useState, useEffect } from 'react'

const AuthContext = createContext(null)

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [cart, setCart] = useState([])
    const [showLoginModal, setShowLoginModal] = useState(false)

    useEffect(() => {
        try {
            const storedUser = JSON.parse(localStorage.getItem('pn_user') || 'null')
            const storedCart = JSON.parse(localStorage.getItem('pn_cart') || '[]')

            setUser(storedUser)
            setCart(storedCart) 
        } catch (e) { console.error(e) }
    }, [])

    useEffect(() => {
        localStorage.setItem('pn_cart', JSON.stringify(cart))
    }, [cart])

    const login = (email, password) => {
        if (!email || !email.includes('@') || !password) return false
        const userData = { email, name: email.split('@')[0] }
        localStorage.setItem('pn_user', JSON.stringify(userData))
        setUser(userData)
        return true
    }

    const logout = () => {
        localStorage.removeItem('pn_user')
        localStorage.removeItem('pn_cart')
        setUser(null)
        setCart([])
    }

    const addToCart = (item) => {
        if (!user) { setShowLoginModal(true); return }

        setCart(prev => {
            const existing = prev.find(c => c.id === item.id)
            if (existing) {
                return prev.map(c =>
                    c.id === item.id ? { ...c, qty: c.qty + 1 } : c
                )
            }
            return [...prev, { ...item, qty: 1 }]
        })
    }

    const changeQty = (id, delta) => {
        setCart(prev =>
            prev
                .map(c => c.id === id ? { ...c, qty: c.qty + delta } : c)
                .filter(c => c.qty > 0)
        )
    }

    const totalItems = cart.reduce((s, c) => s + c.qty, 0)

    return (
        <AuthContext.Provider value={{
            user, cart, totalItems,
            login, logout,
            addToCart, changeQty,
            showLoginModal, setShowLoginModal
        }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext)