import React from 'react';
import { Link } from "react-router-dom";

const CategoryCard = () => {
    return (
        <div className="relative mx-auto  card w-96 h-96 bg-base-100 border shadow-xl">
      <figure>
        <img className="h-52 mt-6 rounded-lg" src='{image}' alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="text-2xl font-bold ">byke category</h2>

        <div className="absolute bottom-0 py-3  w-3/4 mx-auto flex justify-between items-center text-orange-600">
          <p className="text-xl font-semibold ">numbers of bikes</p>
         <Link > <button className="btn btn-outline btn-accent">see all bikes of the category</button></Link>
        </div>
      </div>
    </div>
    );
};

export default CategoryCard;