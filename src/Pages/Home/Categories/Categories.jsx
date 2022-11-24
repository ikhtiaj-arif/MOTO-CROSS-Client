import React, { useEffect, useState } from 'react';
import CategoryCard from './CategoryCard';

const Categories = () => {
  const [categories, setCategories] = useState([])
  useEffect(()=>{
    fetch(`http://localhost:5000/categories`)
    .then(res => res.json())
    .then(data => setCategories(data))
  },[])

    return (
        <div className="mx-auto mt-32">
      <div className="text-center">
        <h1 className="text-2xl  font-bold text-orange-600">Categories</h1>
        <h1 className="text-5xl py-3 font-bold">The Best Deal In Town</h1>
        <p className="py-2 font-medium w-3/5 mx-auto text-gray-500">
          Chose the type bike you desire, We have sellers and buyers from all over the country. You will find the best deal for your dream bike.
        </p>
      </div>
      <div className="mt-32 grid gird-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {
          categories.map(category => <CategoryCard
          key={category._id}
          category={category}
          ></CategoryCard>)
        }
        
        
      </div>
      <div className=" text-center mt-12">
        <button className="btn btn-outline btn-accent">More pagination</button>
      </div>
    </div>
    );
};

export default Categories;