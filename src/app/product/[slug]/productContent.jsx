'use client'
import Image from 'next/image'
import useCartStore from '../../../../store/store'
export default function ProductContent({ product }) {
  const addToCart = () => {
    useCartStore.getState().addToCart(product)
  }
  return (
    <div className="container mx-auto my-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="md:col-span-1 space-y-4">
          <Image
            src={product.image_url}
            alt={product.title}
            width={600}
            height={600}
            className="w-full h-auto rounded-xl border"
          />
          <div className="flex gap-2 overflow-x-auto">
              <img
                src={product.image_url}
                alt={product.title}
                className="w-24 h-24 rounded-lg cursor-pointer"
              />
          </div>
        </div>
      <div className="mt-10 bg-white p-6 rounded-xl shadow-md leading-relaxed text-gray-700">
                  <h1 className="text-2xl font-bold text-gray-800">{product.title}</h1>
          <p className="text-gray-600 text-sm mb-2">برند: {product.brand} | دسته‌بندی: {product.category}</p>
                <div className="bg-white p-4 rounded-xl shadow-md space-y-4">
          {product.discount_price ? (
            <div className='flex'>
              <p className="line-through text-sm">
               {product.price.toLocaleString('fa')} تومان
              </p>
              <p className="text-promotion-text text-lg font-bold">
               {product.discount_price.toLocaleString('fa')} تومان
              </p>
            </div>
          ) : (
            <p className="text-green-600 text-lg font-bold">
             {product.price.toLocaleString('fa')} تومان
            </p>
          )}

          <p className={`text-sm font-medium ${product.in_stock ? 'text-promotion-text' : 'text-red-500'}`}>
            {product.in_stock ? 'موجود در انبار' : 'ناموجود'}
          </p>
          <button
            onClick={addToCart}
            disabled={!product.in_stock}
            className={`w-full py-2 rounded-xs transition bg-promotion-text text-white cursor-pointer`}
          >
            افزودن به سبد خرید
          </button>
        </div>
        <div>
          <h2 className="text-xl font-bold mb-4 mt-10">توضیحات محصول</h2>
        <p>{product.description}</p>
          </div>
      </div>
      </div>
    </div>
  )
}
