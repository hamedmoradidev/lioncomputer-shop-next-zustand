'use client'
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { ShoppingCart } from 'lucide-react'
import useCartStore from '../../../../store/store'
export default function CartBadge() {
  const [isClient, setIsClient] = useState(false)
  useEffect(() => {
    setIsClient(true)
  }, [])
  const totalItems = useCartStore(state => state.totalItems())
  if (!isClient) return null
  return (
    <Link href="/cart" className="rounded-full bg-button-bg w-9 h-9 flex justify-center items-center relative">
      <ShoppingCart size={18} color="green" />
      {totalItems > 0 && (
        <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
          {totalItems}
        </span>
      )}
    </Link>
  )
}
