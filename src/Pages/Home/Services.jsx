import React from "react";
import { motion } from "framer-motion";
import logo1 from "../../Assects/icon/Wrench.svg";
import logo2 from "../../Assects/icon/deliveryt.svg";
import logo3 from "../../Assects/icon/person.svg";
import logo4 from "../../Assects/icon/check.svg";

const Services = () => {
  return (
    <div className="mt-24">
      <div className="text-center">

      <h1 className="text-4xl font-bold text-center">
        Why <span className="text-accent">Consider</span> Us!
      </h1>
      <p className="pt-4 text-gray-500 font-medium">We provide the best service on the country.</p>

      </div>
      <section className=" mt-14 mx-auto rounded">
        <div className="container grid grid-cols-1 gap-6 mx-auto sm:grid-cols-2 xl:grid-cols-4">
          <motion.div
            initial={{ x: -100 }}
            whileInView={{
              x: 0,
              transition: { duration: 1 },
            }}
            whileHover={{ scale: 1.1, transition: { duration: 1 } }}
            className="py-6 m-10  rounded-lg md:space-x-6 border-2 border-accent hover:bg-gray-800  hover:text-accent  "
          >
            <div className="flex justify-center p-4 align-middle rounded-lg sm:p-4">
              <img src={logo3} className="w-2/4 " alt="" />
            </div>
            <div className="text-center p-4 text-gray-600justify-center ">
              <p className="text-3xl font-semibold leading-none">24/7</p>
              <p className="capitalize">Customer Support</p>
            </div>
          </motion.div>

          <motion.div 
             initial={{ y: 100 }}
             whileInView={{
               y: 0,
               transition: { duration: 1 },
             }}
             whileHover={{ scale: 1.1, transition: { duration: 1 } }}
          className=" py-6 m-10  rounded-lg md:space-x-6 border-2 border-accent hover:bg-gray-800  hover:text-accent  ">
            <div className="flex justify-center p-4 align-middle rounded-lg sm:p-4">
              <img src={logo4} className="w-2/4 " alt="" />
            </div>
            <div className="text-center p-4 text-gray-600justify-center ">
              <p className="text-3xl font-semibold leading-none">200+</p>
              <p className="capitalize">Orders</p>
            </div>
          </motion.div>

          <motion.div
             initial={{ y: -100 }}
             whileInView={{
               y: 0,
               transition: { duration: 1 },
             }}
             whileHover={{ scale: 1.1, transition: { duration: 1 } }}
          className=" py-6 m-10  rounded-lg md:space-x-6 border-2 border-accent hover:bg-gray-800  hover:text-accent ">
            <div className="flex justify-center p-4 align-middle rounded-lg sm:p-4">
              <img src={logo2} className="w-2/4 " alt="" />
            </div>
            <div className="text-center p-4 text-gray-600  justify-center ">
              <p className="text-3xl font-semibold leading-none">On Time</p>
              <p className="capitalize">Delivery</p>
            </div>
          </motion.div>

          <motion.div 
             initial={{ x: 100 }}
             whileInView={{
               x: 0,
               transition: { duration: 1 },
             }}
             whileHover={{ scale: 1.1, transition: { duration: 1 } }}
          className=" py-6 m-10  rounded-lg md:space-x-6 border-2 border-accent hover:bg-gray-800  hover:text-accent  ">
            <div className="flex justify-center p-4 align-middle rounded-lg sm:p-4">
              <img src={logo1} className="w-2/4 " alt="" />
            </div>
            <div className="text-center p-4 text-gray-600justify-center ">
              <p className="text-3xl font-semibold leading-none">Excellent </p>
              <p className="capitalize">Service</p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;
