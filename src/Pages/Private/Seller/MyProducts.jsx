import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../../Context/UserContext";

const MyProducts = () => {
  const { user } = useContext(AuthContext);
  const url = `http://localhost:5000/bikes?email=${user.email}`;
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

    fetch(`http://localhost:5000/bike/${id}`, {
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
    const data = { isAdvertised: "cancel" };
    fetch(`http://localhost:5000/bike/${id}`, {
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

  if (isLoading) {
    return <>spinner</>;
  }

  return (
    <div>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th>Name</th>
              <th>Job</th>
              <th>Favorite Color</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {bikes.map((bike, i) => (
              <tr key={i}>
                <th>
                  <label>
                    <input type="checkbox" className="checkbox" />
                  </label>
                </th>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={bike.picture}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold"></div>
                      <div className="text-sm opacity-50">{bike.Bike_Name}</div>
                    </div>
                  </div>
                </td>
                <td>
                  {}
                  <br />
                  <span className="badge badge-ghost badge-sm">
                    Desktop Support Technician
                  </span>
                </td>
                <td>Purple</td>
                <th>
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

                  {bike.status}
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyProducts;
