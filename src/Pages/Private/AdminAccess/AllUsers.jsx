import React from "react";
import { useQuery } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { SetSellerInfo } from "../../../Api/User";

const AllUsers = () => {
  const url = `http://localhost:5000/users`;
  const { data: allUsers = [], refetch, isLoading } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await fetch(url);
      const data = await res.json();
      return data;
    },
  });

  const handleMakeSeller = (id) => {
    const sellerRole = { role: 'seller'}
    SetSellerInfo(id, sellerRole)
      .then((data) => {
        if (data.modifiedCount > 0) {
          toast.success("made Seller");
          refetch();
        }
      });
  };
  if(isLoading){
    return <div>spinner</div>
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
            {allUsers.map((user, i) => (
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
                          src="/tailwind-css-component-profile-2@56w.png"
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{user.email}</div>
                      <div className="text-sm opacity-50">United States</div>
                    </div>
                  </div>
                </td>
                <td>
                  {user._id}
                  <br />
                  <span className="badge badge-ghost badge-sm">
                    Desktop Support Technician
                  </span>
                </td>
                <td>Purple</td>
                <th>
                  {user?.role !== "seller" && (
                    <button
                      onClick={() => handleMakeSeller(user._id)}
                      className="btn btn-info btn-xs"
                    >
                      make Seller
                    </button>
                  )}
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUsers;
