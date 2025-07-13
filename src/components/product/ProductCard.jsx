'use client'
import Link from 'next/link'
import Image from 'next/image'
import { ShoppingCart } from 'lucide-react'
import useCartStore from '../../../store/store'
export default function ProductCard({ product }) {
  const addToCart = (product) => {
    useCartStore.getState().addToCart(product)
  }
  return (
<div className="bg-white shadow-md rounded-xl p-4 flex flex-col w-60 h-96 my-2">
  <Link href={`/product/${product.slug}`}>
    <div className="relative w-full h-48 mb-4">
      <Image
        src={product.image_url}
        alt={product.title}
        width={500}
        height={300}
        quality={75}
        fill
        className="object-contain rounded-md"
        unoptimized
      />
    </div>
    <h2 className="text-sm font-medium line-clamp-2 min-h-[40px]">{product.title}</h2>
  </Link>
  <div className="mt-auto flex items-center justify-between pt-4">
  <button
      onClick={(e) => {
        e.stopPropagation()
        addToCart(product)
      }}
      className="rounded-full bg-button-bg w-9 h-9 flex justify-center items-center cursor-pointer"
    >
      <ShoppingCart size={18} color='green' />
    </button>
      <div className='flex flex-col justify-center items-end'>
      <span className="font-semibold text-sm line-through">
      {product.price.toLocaleString("fa")} تومان
    </span>
    <span className="text-green-600 font-semibold text-lg">
      {product.discount_price.toLocaleString("fa")} تومان
    </span>
      </div>
  </div>
</div>
  )
}
