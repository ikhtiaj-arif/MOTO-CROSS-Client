import React from 'react';
import About from './About';
import Advertisement from './Advertisement';
import BannerHome from './BannerHome';
import Categories from './Categories/Categories';
import Info from './Info';
import Sellers from './Sellers';
import Services from './Services';
import Testimonials from './Testimonials';

const Home = () => {
    return (
     <div className="mt-8">
      <BannerHome/>
      <Advertisement/>
      <Info/>
      <Categories/>
      <Services/>
      <About/>
      <Sellers/>
      <Testimonials/>
            {/* add more section at the end */}
       </div>
    );
};

export default Home;