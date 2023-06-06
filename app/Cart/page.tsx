'use client'
import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import Link from 'next/link';


interface Product {
  id: number;
  name: string;
  href: string;
  color: string;
  price: string;
  quantity: number;
  imageSrc: string;
  imageAlt: string;
}


const products: Product[] = [
  {
    id: 1,
    name: 'Tulsi Plus Expectorant',
    href: '#',
    color: 'Provide Instant Relief from Cough and Cold Naturally',
    price: 'Rs 90.00',
    quantity: 1,
    imageSrc: 'https://m.media-amazon.com/images/I/81kc-SivMdL._SL1500_.jpg',
    imageAlt: 'Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt.',
  },
  {
    id: 2,
    name: 'Dabur Chyawanprash',
    href: '#',
    color: '– 950gm, 2X/3X Immunity, helps build Strength and for Stamina',
    price: 'Rs 32.00',
    quantity: 1,
    imageSrc: 'https://m.media-amazon.com/images/I/71tH6y4K-SL._SX679_.jpg',
    imageAlt:
      'Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch.',
  },
  // More products...
]

export default function Cart() {
  const [open, setOpen] = useState(true)

  return (
    <div className="flex h-full py-20 flex-col overflow-y-scroll bg-white shadow-xl">
      <div className="flex items-start justify-between px-4 py-6 sm:px-6">
        <h1 className="text-lg font-medium text-gray-900">Shopping cart</h1>
       
      </div>

      <div className="mt-8">
        <div className="flow-root">
          <ul role="list" className="-my-6 divide-y divide-gray-200">
            {products.map((product) => (
              <li key={product.id} className="flex py-6">
                <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                  <img
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    className="h-full w-full object-cover object-center"
                  />
                </div>

                <div className="ml-4 flex flex-1 flex-col">
                  <div>
                    <div className="flex justify-between text-base font-medium text-gray-900">
                      <h3>
                        <a href={product.href}>{product.name}</a>
                      </h3>
                      <p className="ml-4">{product.price}</p>
                    </div>
                    <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                  </div>
                  <div className="flex flex-1 items-end justify-between text-sm">
                    <p className="text-gray-500">Qty {product.quantity}</p>

                    <div className="flex">
                      <button
                        type="button"
                        className="font-medium text-indigo-600 hover:text-indigo-500"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
        <div className="flex justify-between text-base font-medium text-gray-900">
          <p>Subtotal</p>
          <p>Rs 122</p>
        </div>
        <p className="mt-0.5 text-sm text-gray-500">Shipping and taxes calculated at checkout.</p>
        <div className="mt-6">
          <a
            href="#"
            className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
          >
            Checkout
          </a>
        </div>
        <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
          <p>
            or
            <Link href="/Products">
                      <span aria-hidden="true" className="absolute inset-0 text-blue-400"></span>
                      Continue Shopping
                    </Link>
          </p>
        </div>
      </div>
    </div>
  )
}