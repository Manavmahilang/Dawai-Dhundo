'use client'
import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import Home from '@/app/page';
import Link from 'next/link';

interface Product {
  id: string;
  name: string;
  description: string;
  image: string;
  suppliers: {
    id: string;
    image :string;
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
  const [supplier, setProducts] = useState<Supplier[]>([]);

  useEffect(() => {
    fetch('/data/supplier.json')
      .then(response => response.json())
      .then(data => setProducts(data.data.Supplier))
      .catch(error => console.error(error));
  }, []);
  console.log('data', supplier)
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">Our Partners</h2>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {supplier.map(supplier => (
            <div key={supplier.id} className="group relative border rounded-md overflow-hidden w-full h-full">
              <div className="aspect-h-1 aspect-w-1 bg-gray-200 group-hover:opacity-75">
                <img src={supplier.image}alt={supplier.name} className="h-full w-full object-cover object-center rounded-md" style={{ objectFit: 'cover' }} />
              </div>
              <div className="p-4 flex justify-between h-28 ">
                <div>
                  <h3 className="text-sm text-gray-700">
                  <Link href={`/Productdetails/${supplier.id}`}>
                      <span aria-hidden="true" className="absolute inset-0"></span>
                      <h3>{supplier.name}</h3>
                    </Link>
                  </h3>
                </div>
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