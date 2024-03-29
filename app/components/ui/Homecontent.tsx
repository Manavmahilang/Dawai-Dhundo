'use client'
import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import Home from '@/app/page';
import Slideshow from './SlideShow';
import HealthConcern from './HealthConcern';
import TopBrands from './TopBrands';
import Link from 'next/link';
import { json } from 'stream/consumers';

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

const Homecontent = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch('/data/products.json')
      .then(response => response.json())
      .then(data => setProducts(data.data.Product))
      .catch(error => console.error(error));
  }, []);
  console.log('data', products)
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <Slideshow />
        <HealthConcern />
        <TopBrands />
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">All Products</h2>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.map(product => (
            <div key={product.id} className="group relative border rounded-md overflow-hidden w-full h-full">
              <div className="aspect-h-1 aspect-w-1 bg-gray-200 group-hover:opacity-75">
                <img src={product.image} alt={product.name} className="h-full w-full object-cover object-center rounded-md" style={{ objectFit: 'cover' }} />
              </div>
              <div className="p-4 flex justify-between h-28 ">
                <div>
                  <h3 className="text-sm text-gray-700">
                  <Link href={{pathname:`/Productdetails/${product.id}`,query: {id: JSON.stringify(product.id)} }}>
                      <span aria-hidden="true" className="absolute inset-0"></span>
                      {product.name}
                    </Link>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{product.description}</p>
                </div>
                <p className="text-sm font-medium text-gray-700">Rs{product.suppliers[0].price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>

  );
}

export default dynamic(() => Promise.resolve(Homecontent), {
  ssr: false,
});