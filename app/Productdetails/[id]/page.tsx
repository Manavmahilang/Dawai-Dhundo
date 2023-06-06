'use client'

import { StarIcon } from '@heroicons/react/20/solid';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import React from 'react';


interface Product {
  id: string;
  name: string;
  description: string;
  image: string;
  suppliers: {
    id: string;
    price: string;
    stock: string;
    distance: string;
    supplierId: string;
  }[];
}

interface Supplier {
  id: string;
  name: string;
  price: string;
  stock: string;
  image: string;
  distance: string;
  products: {
    productId: string;
    supplierId: string;
  }[];
}

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

const ProductDetails = () => {
  const searchparams = useSearchParams();
  const findid = searchparams?.get('id');
  const id = findid ? JSON.parse(findid) : null;

  const [product, setProduct] = useState<Product | null>(null);
  const reviews = { href: '#', average: 4, totalCount: 117 };

  useEffect(() => {
    if (id) {
      fetch(`/data/products.json`)
        .then((response) => response.json())
        .then((data) => {
          // Debug: Log the fetched data to the console
          console.log('Fetched data:', data.data);
  
            // Filter the 'Product' array to find the product with the matching ID
            const filteredProduct = data.data.Product.find((item: Product) => item.id === id);
  
            if (filteredProduct) {
              setProduct(filteredProduct);
            } else {
              console.error('Product not found');
            
          } 
        })
        .catch((error) => console.error('Fetch error:', error));
    }
  }, [id]);
  
  if (!product) {
    return <div>Loading...</div>;
  }


  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        {/* Image gallery */}
        <div className="mx-auto mt-6 max-w-xl sm:px-6 max-h-100  lg:gap-x-8 lg:px-8">
          <div className="aspect-h-2 aspect-w-2 hidden overflow-hidden rounded-lg lg:block">
            <img
              src={product.image}
              className="h-full w-full object-cover object-center rounded-md"
            />
          </div>
        </div>
        {/* Product info */}
        <div className="mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16">
          <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
            <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">{product.name}</h1>
          </div>

          {/* Options */}
          <div className="mt-4 lg:row-span-3 lg:mt-0">
            <h2 className="sr-only">Product information</h2>
            <p className="text-3xl tracking-tight text-gray-900">{ }</p>

            {/* Reviews */}
            <div className="mt-6">
              <h3 className="sr-only">Reviews</h3>
              <div className="flex items-center">
                <div className="flex items-center">
                  {[0, 1, 2, 3, 4].map((rating) => (
                    <StarIcon
                      key={rating}
                      className={classNames(
                        reviews.average > rating ? 'text-gray-900' : 'text-gray-200',
                        'h-5 w-5 flex-shrink-0'
                      )}
                      aria-hidden="true"
                    />
                  ))}
                </div>
                <p className="sr-only">{reviews.average} out of 5 stars</p>
                <a href={reviews.href} className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500">
                  {reviews.totalCount} reviews
                </a>
              </div>
            </div>
            <form className="mt-10">
              {/* Add to cart */}
              <button
                type="submit"
                className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Add to bag
              </button>
            </form>
          </div>
          <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
            {/* Description and details */}
            <div>
              <h3 className="sr-only">Description</h3>

              <div className="space-y-6">
                <p className="text-base text-gray-900">{product.description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetails