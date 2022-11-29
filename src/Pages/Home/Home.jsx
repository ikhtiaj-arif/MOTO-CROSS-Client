import React from 'react';
import Advertisement from './Advertisement';
import BannerHome from './BannerHome';
import Categories from './Categories/Categories';
import Info from './Info';
import Sellers from './Sellers';
import Services from './Services';

const Home = () => {
    return (
     <div className="mt-8">
      <BannerHome/>
      <Advertisement/>
      <Info/>
      <Categories/>
      <Services/>
      <Sellers/>
            {/* add more section at the end */}
       </div>
    );
};

export default Home;