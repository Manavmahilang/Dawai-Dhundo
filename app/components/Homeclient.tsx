'use client'
import dynamic from 'next/dynamic';
import HomeContentServer from './HomeContentServer';
import { useEffect, useState } from 'react';

const HomeContentClient = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch('/api/products');
      const data = await res.json();
      setProducts(data);
    }

    fetchData();
  }, []);

  return <HomeContentServer products={products} />;
};

export default dynamic(() => Promise.resolve(HomeContentClient), {
  ssr: false,
});
