import React from 'react';
import { useQuery } from "@tanstack/react-query";
import { SetSellerInfo } from '../../../Api/User';
import toast from "react-hot-toast";

const AllSeller = () => {
    const url =`http://localhost:5000/seller`
    const {data: allSeller=[], refetch} = useQuery({
        queryKey : ['seller'],
        queryFn: async () => {
            const res = await fetch(url);
            const data = await res.json();
            return data;
        }
    })
   
    const VerifySeller = (id) => {
      const sellerVerified = { isSellerVerified : "verified"}
      SetSellerInfo(id, sellerVerified)
      .then((data) => {
        if (data.modifiedCount > 0) {
          toast.success("Seller Verified!");
          refetch();
        }
      });
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
                  {seller?.isSellerVerified !== "verified" && (
                    <button
                      onClick={()=>VerifySeller(seller._id)}
                      className="btn btn-info btn-xs"
                    >
                      Verify Seller
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