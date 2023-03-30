import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import ActionBtn from "../../../Components/ActionBtn";
import TrActionBtn from "../../../Components/TrActionBtn";

const CategoryCard = ({ category }) => {
  const { image, title } = category;
  return (
    <motion.div
    whileInView={{
      scale:[1, 0.99]
    }}
    whileHover={{ scale: 1, transition: { duration: 0.5 } }}
    className="mx-auto card w-96 h-96 bg-base-100 border shadow-xl">
      <figure>
        <img className="h-64 mt-6 rounded-lg" src={image} alt="Shoes" />
      </figure>
      <div className="card-body text-center">
        <h2 className="text-2xl  font-bold ">{title}</h2>

        <div className=" py-6  w-full mx-auto">
          <Link to={`/categories/${title}`} >
            {" "}
            <TrActionBtn title={`see available ${title} bikes`}/>
            
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default CategoryCard;
