import type { Metadata } from 'next'
import Products from './components/ui/Products'
import ProductDetail from './components/ProductDetail';
import Cart from './components/Cart';


export const metadata: Metadata = {
  title: 'Dawai Dhundo | Home',
  description: 'find medicines nearby',
}
const images = [
  "https://images.pexels.com/photos/14538648/pexels-photo-14538648.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/14538648/pexels-photo-14538648.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/14538648/pexels-photo-14538648.jpeg?auto=compress&cs=tinysrgb&w=600",
];

export default function Home() {
  return (
    <><Products
    />
    <ProductDetail /></>
        
        
  )
}