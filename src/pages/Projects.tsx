import CustomCursor from '../components/common/CustomCursor/CustomCursor';
import Footer from '../components/common/Footer/Footer';
import Header from '../components/common/Header/Header';
import PageTitle from '../components/common/PageTitle/PageTitle';

export default function Projects() {
  return (
    <>
      <div className='custom-cursor'>
        <CustomCursor />
      </div>

      <div className='content-container'>
        <Header />
        <div className='px-6 md:px-12 lg:px-40 overflow-hidden'>
          <PageTitle 
            title='Projects'
            description="From side projects to enterprise applications, these projects reflect my 
              journey as a software engineer and the technologies I've enjoyed working with along the way."
          />
        </div>
        <Footer />
      </div>
    </>
  );
}