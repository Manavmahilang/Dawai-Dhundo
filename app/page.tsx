import type { Metadata } from 'next'
import Footer from './components/Footer';
import HomeContentServer from './components/HomeContentServer';
import Homeclient from './components/Homeclient';
import HealthConcern from './components/ui/HealthConcern';
import TopBrands from './components/ui/TopBrands';
import Slideshow from './components/ui/SlideShow';
import Homecontent from './components/ui/Homecontent';


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