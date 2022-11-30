import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import toast from "react-hot-toast";
import Spinner from "../../../Components/Spinner";
import { AuthContext } from "../../../Context/UserContext";

const MyProducts = () => {
  const { user } = useContext(AuthContext);

  const url = `https://server-angon777.vercel.app/bikes?email=${user.email}`;
  const {
    data: bikes = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["Category"],
    queryFn: async () => {
      const res = await fetch(url, {
        headers: {
          authorization: `bearer ${localStorage.getItem("motocross-token")}`,
        },
      });
      const data = await res.json();
      return data;
    },
  });

  const handleAdvertise = (id) => {
    const data = { isAdvertised: "advertise" };

    fetch(`https://server-angon777.vercel.app/bike/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        authorization: `bearer ${localStorage.getItem("motocross-token")}`,
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.success("Advertised");
          refetch();
        }
      });
  };
  const calcelAdvertise = (id) => {
    const data = { isAdvertised: null };
    fetch(`https://server-angon777.vercel.app/bike/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        authorization: `bearer ${localStorage.getItem("motocross-token")}`,
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.error("Removed Advertised");
          refetch();
        }
      });
  };

  // console.log(bikes);
  if (isLoading) {
    return (
      <>
        <Spinner />
      </>
    );
  }

  return (
    <div>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          <thead>
            <tr>
              <th>Bike</th>
              <th></th>
              <th>Price</th>
              <th>Status</th>
              <th>Advertise</th>
            </tr>
          </thead>
          <tbody>
            {bikes.map((bike, i) => (
              <tr key={i}>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask w-14 h-12">
                        <img src={bike.picture} alt="" />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold"></div>
                      <div className="text-sm opacity-50">{bike.Bike_Name}</div>
                    </div>
                  </div>
                </td>
                <td></td>
                <td>
                  {}
                  <br />
                  <span className="badge badge-ghost badge-sm">
                    {bike.price}
                  </span>
                </td>
                <td> {bike.status}</td>
                <td>
                  {bike.status !== "sold" && (
                    <>
                      {" "}
                      {bike.status === "available" &&
                      bike.isAdvertised !== "advertise" ? (
                        <button
                          onClick={() => handleAdvertise(bike._id)}
                          className="btn btn-info btn-xs"
                        >
                          Advirtise Now
                        </button>
                      ) : (
                        <button
                          onClick={() => calcelAdvertise(bike._id)}
                          className="btn btn-error btn-xs"
                        >
                          cancel Adertise
                        </button>
                      )}
                    </>
                  )}
                </td>
                <th></th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyProducts;
