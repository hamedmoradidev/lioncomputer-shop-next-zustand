'use client'
import { create } from 'zustand'
import { persist } from 'zustand/middleware'
const useCartStore = create(
    persist(
        (set, get) => ({
            cart: [],
            
            addToCart: (product) => {
              const existing = get().cart.find(item => item.id === product.id)
              if (existing) {
                set({
                  cart: get().cart.map(item =>
                    item.id === product.id
                      ? { ...item, quantity: item.quantity + 1 }
                      : item
                  )
                })
              } else {
                set({
                  cart: [...get().cart, { ...product, quantity: 1 }]
                })
              }
            },
          
            removeFromCart: (id) => {
              set({
                cart: get().cart.filter(item => item.id !== id)
              })
            },
          
            clearCart: () => {
              set({ cart: [] })
            },
          
            totalItems: () => get().cart.reduce((sum, item) => sum + item.quantity, 0),
          
            totalPrice: () => get().cart.reduce((sum, item) => sum + item.quantity * (item.discount_price || item.price), 0)
          }),
          {
            name: 'cart-storage',
          }
        )          
    )
export default useCartStore
