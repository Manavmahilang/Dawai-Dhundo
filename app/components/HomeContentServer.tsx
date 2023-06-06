import { useEffect, useState } from 'react';
import Slideshow from './ui/SlideShow';
import prisma from '@prisma/client';

interface Product {
  id: string;
  name: string | null;
  description: string | null;
  image: string | null;
  suppliers: ProductSupplier[];
}

interface Supplier {
  id: string;
  name: string | null;
  price: string | null;
  stock: string | null;
  image: string | null;
  distance: string | null;
}

interface ProductSupplier {
  id: string;
  price: string | null;
  stock: string | null;
  distance: string | null;
  supplier: Supplier;
}

interface Props {
  products: Product[];
}

const HomeContentServer = ({ products }: Props) => {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <Slideshow />
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">All Products</h2>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.map(product => (
            <div key={product.id} className="group relative">
              <div className="min-h-80 aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                <img src={product.image ?? ''} alt={product.name ?? ''} className="h-full w-full object-cover object-center lg:h-full lg:w-full" />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <a href="#">
                      <span aria-hidden="true" className="absolute inset-0"></span>
                      {product.name}
                    </a>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{product.description}</p>
                </div>
                <p className="text-sm font-medium text-gray-900">${product.suppliers[0]?.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeContentServer;
