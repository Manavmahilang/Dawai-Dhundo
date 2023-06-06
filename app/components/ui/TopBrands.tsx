'use client'

import Link from "next/link";

interface Product {
  id: number;
  name: string;
  image: string;
  discount: number;
}

const products: Product[] = [
  {
    id: 1,
    name: 'Himalaya',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8Pz-cw3Yq5FIeTcK59-LEzcKltiEZ2J5pFQ&usqp=CAU',
    discount: 25,
  },
  {
    id: 2,
    name: 'Dabur',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTA6X-EGtNlJzEajrpHOYSqwnS1PqMopc39Lg&usqp=CAU',
    discount: 20,
  },
  {
    id: 3,
    name: 'Revital',
    image: 'https://www.netmeds.com/images/cms/wysiwyg/brand/v2/msite/revital.jpg?v=15',
    discount: 30,
  },
  {
    id: 4,
    name: 'Volini',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1vCC5LA_MQHz8eyJ3-LTWk_0iI3pljrOtdg&usqp=CAU',
    discount: 40,
  },
  {
    id: 5,
    name: 'Baidhynath',
    image: 'https://www.netmeds.com/images/cms/wysiwyg/brand/v2/msite/baidyanath.jpg?v=15',
    discount: 20,
  },
];

const TopBrandsCard = ({ product }: { product: Product }) => (
  <div className="flex flex-col items-center space-y-4">
    <div className="w-60 h-60 relative">
      <img src={product.image} alt={product.name} className="h-full w-full object-cover object-center lg:h-full lg:w-full" />
      <Link href={{ pathname: `/Productdetails/p4`, query: { id: JSON.stringify('p4') } }}>
        <span aria-hidden="true" className="absolute inset-0"></span>

      </Link>
    </div>
    <div className="text-lg font-semibold text-center px-2">{product.name}</div>
    <div className="text-gray-500 text-sm text-center pb-4">{product.discount}% off</div>
  </div>
);

const TopBrands = () => (
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
    <h1 className="text-4xl font-bold text-center mb-12">Top Brands</h1>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
      {products.map((product) => (
        <div key={product.id} className="border rounded-lg overflow-hidden hover:shadow-lg">
          <TopBrandsCard product={product} />
        </div>
      ))}
    </div>
  </div>
);


export default TopBrands;