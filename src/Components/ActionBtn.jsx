import React from "react";
import { motion } from "framer-motion";

const ActionBtn = ({ title }) => {
  return (
    <motion.button 
    whileHover={{ scale: 1.1, transition: { duration: 0.5 } }}
    className="bg-gradient-to-r from-accent to-cyan-700 px-6 py-3 hover:bg-gradient-to-l text-white  md:font-medium uppercase  rounded-full">
      {title}
    </motion.button>
  );
};

export default ActionBtn;
