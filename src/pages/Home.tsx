import CustomCursor from '../components/common/CustomCursor/CustomCursor';
import Divider from '../components/Divider/Divider';
import FeaturedWork from '../components/FeaturedWork/FeaturedWork';
import Header from '../components/common/Header/Header';
import Hero from '../components/Hero/Hero';
import Contact from '../components/Contact/Contact';
import Footer from '../components/common/Footer/Footer';

export default function App() {
  return (
    <>
      <div className='custom-cursor'>
        <CustomCursor />
      </div>

      <div className='content-container'>
        <Header />
        <Hero />

        <div className='px-6 md:px-12 lg:px-40 overflow-hidden'>
          <Divider />
          <FeaturedWork />
          <Contact />
        </div>

        <Footer />
      </div>
    </>
  )
}
