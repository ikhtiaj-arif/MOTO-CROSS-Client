import React from "react";
import { Link } from "react-router-dom";

const CategoryCard = ({ category }) => {
  const { image, title } = category;
  return (
    <div className="mx-auto card w-96 h-96 bg-base-100 border shadow-xl">
      <figure>
        <img className="h-64 mt-6 rounded-lg" src={image} alt="Shoes" />
      </figure>
      <div className="card-body text-center">
        <h2 className="text-2xl  font-bold ">{title}</h2>

        <div className=" py-3  w-3/4 mx-auto flex justify-between items-center text-orange-600">
          <Link to={`/categories/${title}`} className="btn btn-outline btn-accent ">
            {" "}
            see available bikes
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;
