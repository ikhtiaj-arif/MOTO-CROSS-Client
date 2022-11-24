import React from "react";
import { useLoaderData } from "react-router-dom";
import { FaCheckCircle } from "react-icons/fa";

const BikeInfo = () => {

    const bikeInfo = useLoaderData();
    const {Bike_Name,used, location, org_price, picture, price, seller_name,isVerified, _id} = bikeInfo

  return (
    <div>
      <div className="card lg:card-side bg-base-100 shadow-xl">
        <figure  className='md:w-2/4'>
          <img src={picture} alt="Album" />
        </figure>
        <div className="card-body">
          <div>
             <h2 className="card-title">{Bike_Name}</h2>
             <p>Click the button to listen on Spotiwhy app.</p>
          </div>
          <div>
            <h2>User Details:</h2>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Original Price: {org_price} Current Price: {price}</p>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Used For : {used} days.  Location: {location}</p>

        {
            isVerified === "verified" ? 
            
            <div className="flex">
             <p >Seller: {seller_name}</p><FaCheckCircle className='text-success'/>
           </div>
                :
                <p >{seller_name}</p>
        }
          </div>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Book Now</button>
          </div>
          
        </div>
      
      </div>
    </div>
  );
};

export default BikeInfo;
