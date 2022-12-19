import React, { useState } from "react";
import { motion } from "framer-motion";

const AddvertiseCard = ({ bike }) => {
  const { Bike_Name, price, picture, address } = bike;
  return (
    <div className="w-96">
      <div className="space-y-4">
      <motion.div 
    
        transition={{ duration: 1 }}
        initial={{ x: 100}}
           whileInView={{ x: 0 }}
           whileHover={{ scale: 1.1 }}
     >
        <img
          alt=""
          className="object-cover h-56 mx-auto mb-4 bg-center   rounded-lg"
          src={picture}
          filter="url(#blur)"
      
        />
        
         
     </motion.div>
        
        <div className="flex flex-col items-center">
          <h4 className="text-xl font-semibold">{Bike_Name}</h4>
          <p className="text-sm dark:text-gray-400">{address}</p>
          <div className="flex mt-2 font-medium space-x-2 text-accent pb-3">
            $ {price}
          </div>
        </div>
       
      </div>
    </div>
  );
};

export default AddvertiseCard;
