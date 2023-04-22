import type { Metadata } from 'next'
import Homecontent from './components/ui/Homecontent'
import ProductDetail from './components/ProductDetail';
import Slideshow from './components/ui/SlideShow';
import Footer from './components/Footer';


export const metadata: Metadata = {
  title: 'Dawai Dhundo | Home',
  description: 'find medicines nearby',
}


export default function Home() {
  return (
    <>
  
   <Homecontent />
   </>
        
  )
}