'use client'

interface Product {
  id: number;
  name: string;
  image: string;
  discount: number;
}

const products: Product[] = [
  {
    id: 1,
    name: 'Weight Care',
    image: 'https://www.netmeds.com/images/cms/wysiwyg/category/v2/img/weight-care.jpg',
    discount: 25,
  },
  {
    id: 2,
    name: 'Women Care',
    image: 'https://www.netmeds.com/images/cms/wysiwyg/category/v2/img/women-s-care.jpg',
    discount: 20,
  },
  {
    id: 3,
    name: 'Bone and Joint Pain',
    image: 'https://www.netmeds.com/images/cms/wysiwyg/category/v2/img/bone-and-joint-pain.jpg',
    discount: 30,
  },
  {
    id: 4,
    name: 'Cold and Fever',
    image: 'https://www.netmeds.com/images/cms/wysiwyg/category/v2/img/cold-and-fever.jpg',
    discount: 40,
  },
  {
    id: 5,
    name: 'Lungs Care',
    image: 'https://www.netmeds.com/images/cms/wysiwyg/category/v2/img/lung-care.jpg',
    discount: 20,
  },
];

const HealthConcernCard = ({ product }: { product: Product }) => (
  <div className="flex flex-col items-center space-y-4 px-3 py-8">
    <div className="w-200 h-200 relative">
      <img src={product.image} alt={product.name}  className="h-full w-full object-cover object-center lg:h-full lg:w-full" />
    </div>
    <div className="text-lg font-semibold text-center px-2 pt-4">{product.name}</div>
    {/* <div className="text-gray-500 text-sm text-center pb-4">{product.discount}% off</div> */}
  </div>
);

const HealthConcern = () => (
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
    <h1 className="text-4xl font-bold text-center mb-12">Health Concern</h1>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
      {products.map((product) => (
        <div key={product.id} className="border rounded-lg overflow-hidden hover:shadow-lg">
          <HealthConcernCard product={product} />
        </div>
      ))}
    </div>
  </div>
);


export default HealthConcern;