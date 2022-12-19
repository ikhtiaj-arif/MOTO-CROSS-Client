import React from 'react';
import TrActionBtn from '../../Components/TrActionBtn';
import { motion } from "framer-motion";

const About = () => {
    return (
        <div><div className="hero my-24 pb-14">
        <div className="hero-content flex-col lg:flex-row">

          <motion.div 
            transition={{ duration: 1 }}
            initial={{ x: -100 }}
            whileInView={{ x: 0 }}
            
          className="relative w-full md:w-1/2">
            <img
              alt=""
              src='https://www.cyclenews.com/wp-content/uploads/2022/01/2022-Ducati-Panigale-V4-S-Cycle-News-Review.jpg'
              className="w-4/5 h-full  rounded-lg shadow-2xl"
            />
            <img
              alt=""
              src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxeabh5V6JWnsXx-HMKscN6SwljasrsoAQbg&usqp=CAU'
              className="absolute right-5 top-1/2 border-8  w-3/5 rounded-lg shadow-2xl"
            />
          </motion.div>


          <motion.div 
           transition={{ duration: 1 }}
           initial={{ x: 100 }}
           whileInView={{ x: 0 }}
          className="w-full text-left mt-20 lg:mt-0 h-full md:w-1/2">
              <p className="text-accent py-2 text-lg font-bold">About Us</p>
            <h1 className="text-5xl font-bold">We are qualified & of experience in this field</h1>
            <div className="py-6">
            <p className="py-2">
            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. 
            </p>
            
              <p className="py-2"> the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p> 
            </div>
            <div className='w-2/4'>
              
            <TrActionBtn title='Get More Info' className="btn btn-accent"></TrActionBtn>
            </div>
          </motion.div>
        </div>
      </div>
            
        </div>
    );
};

export default About;