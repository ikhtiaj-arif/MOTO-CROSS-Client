import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

const BikeCard = ({ bike }) => {
  const {
    Bike_Name,
    used,
    location,
    org_price,
    picture,
    price,
    seller_name,
    isSellerVerified,
    _id,
  } = bike;
  return (
    <div>
      <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
        <Link href="#">
          <img className="rounded-t-lg" src={picture} alt="" />
        </Link>
        <div className="p-5">
          <Link href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {Bike_Name}
            </h5>
          </Link>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Original Price: {org_price} Current Price: {price}
          </p>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Used For : {used} days. Location: {location}
          </p>

          {isSellerVerified === "verified" ? (
            <div className="flex">
              <p className="text-white">Seller: {seller_name}</p>
              <FaCheckCircle className="text-success" />
            </div>
          ) : (
            <p className="text-white">{seller_name}</p>
          )}

          <Link
            to={`/bike/${_id}`}
            className="inline-flex items-center btn btn-info"
          >
            More
            <svg
              aria-hidden="true"
              className="w-4 h-4 ml-2 -mr-1"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BikeCard;
