import React from 'react';
import { useQuery } from "@tanstack/react-query";

const AllSeller = () => {
    const url =`http://localhost:5000/seller`
    const {data: allSeller=[], refetch} = useQuery({
        queryKey : ['users'],
        queryFn: async () => {
            const res = await fetch(url);
            const data = await res.json();
            return data;
        }
    })
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
            {allSeller.map((seller, i) => (
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
                      <div className="font-bold">{seller.email}</div>
                      <div className="text-sm opacity-50">United States</div>
                    </div>
                  </div>
                </td>
                <td>
                  {seller._id}
                  <br />
                  <span className="badge badge-ghost badge-sm">
                    Desktop Support Technician
                  </span>
                </td>
                <td>Purple</td>
                <th>
                  {seller?.role !== "seller" && (
                    <button
                    //   onClick={ }
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

export default AllSeller;