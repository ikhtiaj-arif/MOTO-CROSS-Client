import React from "react";
import { useQuery } from "@tanstack/react-query";
import AddvertiseCard from "./AddvertiseCard";
import Spinner from "../../Components/Spinner";

const Advertisement = () => {
  const url = `https://server-angon777.vercel.app/advertiseBike`;
  const {
    data: bikes = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["advertised"],
    queryFn: async () => {
      const res = await fetch(url, {
        headers: {
          authorization: `bearer ${localStorage.getItem("motocross-token")}`,
        },
      });
      const data = await res.json();
      // console.log(data);
      return data;
    },
  });
  if (isLoading) {
    return <Spinner />;
  }
  if (bikes.length === 0) {
    return <></>;
  }

  return (
    <div id="add"
    className="mt-32 text-center lg:w-3/4 mx-auto">
      <h1 className="text-4xl font-bold">Featcherd Bikes</h1>
      <h1 className="font-medium">Best Deals</h1>
      <div className="grid w-full grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-4 mt-8">
        {bikes.map((bike) => (
          <AddvertiseCard key={bike._id} bike={bike}></AddvertiseCard>
        ))}
      </div>
    </div>
  );
};

export default Advertisement;
