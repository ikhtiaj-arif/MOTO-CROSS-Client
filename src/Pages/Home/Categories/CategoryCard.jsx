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

        <div className=" py-6  w-full mx-auto">
          <Link to={`/categories/${title}`} className="btn btn-outline px-12 btn-accent ">
            {" "}
            see available {title} bikes
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;
