import React from 'react';
import { motion } from "framer-motion";

const TrActionBtn = ({title}) => {
    return (
        <motion.button
        whileHover={{ scale: 1.1, transition: { duration: 0.5 } }}
        className="bg-transparent border border-accent text-gradient-to-l w-full px-6 py-2 hover:bg-gradient-to-l from-accent to-red-600 hover:text-white font-medium uppercase  rounded-full tra"> {title}
      </motion.button>
    );
};

export default TrActionBtn;