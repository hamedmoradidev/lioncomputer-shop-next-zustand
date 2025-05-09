'use client'
import useCartStore from "../../../store/store"
import { Delete } from "lucide-react"
export default function CartPage() {
  const { cart, removeFromCart, totalItems, totalPrice } = useCartStore()
  return (
    <div className="bg-white shadow-md rounded-xl p-4 max-w-4xl mx-auto flex my-20 flex-col justify-between space-y-4 min-h-[400px]">
      <h1 className="text-2xl font-bold mb-4">محتویات سبد خرید</h1>
      {cart.length === 0 ? (
        <p>سبد خرید شما خالی است.</p>
      ) : (
        <>
          <ul className="space-y-4">
            {cart.map(item => (
              <li key={item.id} className="p-4 rounded-md flex justify-between items-center">
                <div>
                  <p className="font-bold">{item.title}</p>
                  <p className="text-sm text-gray-600">تعداد: {item.quantity}</p>
                </div>
                <div className="flex items-center gap-4">
                  <p>{(item.discount_price || item.price).toLocaleString()} تومان</p>
                  <div className="rounded-full bg-button-bg w-9 h-9 flex justify-center items-center cursor-pointer">
                  <Delete color="green" onClick={() => removeFromCart(item.id)} />
                  </div>
                </div>
              </li>
            ))}
          </ul>

          <div className="mt-6 text-right">
            <p>جمع کل ({totalItems()} کالا): <strong>{totalPrice().toLocaleString()} تومان</strong></p>
          </div>
        </>
      )}
    </div>
  )
}
