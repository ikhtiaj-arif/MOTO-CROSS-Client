import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { useLoaderData } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import {
  CardElement,
  Elements,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import Checkout from "./Checkout";

const stripePromise = loadStripe('pk_test_51M6HH1DbwsTqqvezGHc9zCMmRA84s9h16VFbXMki8MBacJQx68ZBsiTqpoGgidn10lC5XjSJzT2NtbnvmozmXksI00gj2dtJ9q');


const Payment = () => {
  const bookingInfo = useLoaderData();
  console.log(bookingInfo.productId);

  const url = `http://localhost:5000/bike/${bookingInfo.productId}`;

  const { data: bikeInfo = [], isLoading } = useQuery({
    queryKey: ["bike"],
    queryFn: async () => {
      const res = await fetch(url);
      const data = res.json();
      return data;
    },
  });



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
  console.log(bikeInfo);
  return (
    <div>
      
      <div className="w-96 bg-gray-200">
      <Elements stripe={stripePromise}>
        <Checkout 
        bikeInfo={bikeInfo} 
        bookingInfo={bookingInfo}
        />
      </Elements>
      </div>
    </div>
  );
};

export default Payment;
