import React from 'react';
import Advertisement from './Advertisement';
import BannerHome from './BannerHome';
import Categories from './Categories/Categories';

const Home = () => {
    return (
     <div className="mt-8">
      <BannerHome/>
      <Categories/>
      <Advertisement/>
            {/* add more section at the end */}
       </div>
    );
};

export default Home;