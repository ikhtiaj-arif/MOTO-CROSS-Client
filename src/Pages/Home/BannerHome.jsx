import React from 'react';
import {Link} from 'react-router-dom'
import './Style/BannerHome.css'
import bike from '../../Assects/images/bike_banner.jpg'
import TrActionBtn from '../../Components/TrActionBtn';
import ActionBtn from '../../Components/ActionBtn';

const BannerHome = () => {
    return (
        <div id='home' className="carousel-item relative w-full lg:w-3/4 mx-auto">
        <div className="carousel-img">
          <img src={bike} alt="" className="w-full  rounded-xl" />
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <section className="md:py-6 w-full md:w-2/4 dark:text-gray-50">
            <div className="mx-auto flex flex-col items-center p-2 space-y-4  md:px-4 ">
              <h1 className="text-lg md:text-5xl font-bold leading-none text-center">
              Affordable Bikes At The Best Price
              </h1>
              <p className="text-sm md:text-xl md:font-medium md:py-8 text-center">
              There are many variations of bikes available, Find the one you desire the most at the best price possible
              </p>
              <div className="flex flex-col space-y-4 sm:space-y-0 sm:flex-row sm:space-x-8">
               <a href="#category">
              <TrActionBtn
              title='Buy form us'
              />
              </a> 
                  
             
                <Link to='/signup'>
                <ActionBtn title='Become A Seller'/>
                </Link>
               
               
                
              </div>
            </div>
          </section>
        </div>
        <div className="absolute right-0 bottom-0">
 
      </div>

      </div>
    );
};

export default BannerHome;