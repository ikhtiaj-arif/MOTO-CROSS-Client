import React from "react";
import { useLoaderData } from "react-router-dom";
import BikeCard from "./BikeCard";

const BikesByTitle = () => {
  const bikes = useLoaderData();
  //
  // console.log(bikes);

  return (
    <div className="w-3/4 mx-auto">
      <h2 className="text-center text-3xl font-medium mt-6">
        Total <span className="text-accent">{bikes.length}</span> Bikes
      </h2>
      <div className="md:grid md:grid-cols-2 lg:grid-cols-3 gap-5  mt-3">
        {bikes.map((bike) => (
          <BikeCard key={bike._id} bike={bike}></BikeCard>
        ))}
      </div>
    </div>
  );
};

export default BikesByTitle;
