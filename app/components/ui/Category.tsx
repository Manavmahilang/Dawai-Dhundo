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
    name: 'General Drugs',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQICMqpJgR263Wf6RPuDsNmpStJ7n3WBqc5sw&usqp=CAU',
    discount: 25,
  },
  {
    id: 2,
    name: 'Orthopedics',
    image: 'https://www.kaochen.com/proimages/product/01_Cervical_Collars/MPE01045-47-202207.jpg',
    discount: 20,
  },
  {
    id: 3,
    name: 'Vitamines',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSE3HppP3OxNiid5-nLt9rnFbL8kr_5BWS6Lw&usqp=CAU',
    discount: 30,
  },
  {
    id: 4,
    name: 'Supplements',
    image: 'https://justinsportsmedicineteam.com/wp-content/uploads/2015/08/supplements-pic-trans.png',
    discount: 40,
  },
  {
    id: 5,
    name: 'Personal Care',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT15Xf_xAlAhlBXZYDwCtSMMxTEKTtNiynS0Q&usqp=CAU',
    discount: 20,
  },
];

const CategoryCard = ({ product }: { product: Product }) => (
  <div className="flex flex-col items-center space-y-4">
    <div className="w-60 h-60 relative">
      <img src={product.image} alt={product.name}  className="h-full w-full object-cover object-center lg:h-full lg:w-full" />
    </div>
    <div className="text-lg font-semibold text-center px-2">{product.name}</div>
    <div className="text-gray-500 text-sm text-center pb-4">{product.discount}% off</div>
  </div>
);

const Category = () => (
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
    <h1 className="text-4xl font-bold text-center mb-12">Shop By Category</h1>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
      {products.map((product) => (
        <div key={product.id} className="border rounded-lg overflow-hidden hover:shadow-lg">
          <CategoryCard product={product} />
        </div>
      ))}
    </div>
  </div>
);


export default Category;