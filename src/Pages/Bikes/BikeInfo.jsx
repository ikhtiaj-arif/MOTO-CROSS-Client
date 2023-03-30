import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import { useLoaderData } from "react-router-dom";
import BookModal from "./BookModal";

import ReportModal from "../../Components/ReportModal";

const BikeInfo = () => {
  const bikeInfo = useLoaderData();
  const {
    Bike_Name,
    used,
    location,
    org_price,
    picture,
    price,
    seller_name,
    isVerified,
    _id,
  } = bikeInfo;

  return (
    <div className="w-3/4 mx-auto h-screen mt-10">
      <div className="card lg:card-side bg-base-100 shadow-xl">
        <figure className="md:w-2/4">
          <img src={picture} alt="Album" />
        </figure>
        <div className="card-body">
          <div>
            <h2 className="card-title">{Bike_Name}</h2>
            <p>Click the button to listen on Spotiwhy app.</p>
          </div>
          <div>
            <h2>User Details:</h2>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Original Price: {org_price} Current Price: {price}
            </p>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Used For : {used} days. Location: {location}
            </p>

            {isVerified === "verified" ? (
              <div className="flex">
                <p>Seller: {seller_name}</p>
                <FaCheckCircle className="text-info" />
              </div>
            ) : (
              <p>{seller_name}</p>
            )}
          </div>
          <div className="card-actions justify-end">
            <label htmlFor="booking-modal" className="btn btn-primary">
              Book Now
            </label>
            <label htmlFor="report-modal" className="btn">
              report
            </label>
          </div>
        </div>
      </div>
      <BookModal bikeInfo={bikeInfo} />
      <ReportModal bikeInfo={bikeInfo}></ReportModal>
    </div>
  );
};

export default BikeInfo;
