import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../../Context/UserContext';

const MyProducts = () => {
    const { user } = useContext(AuthContext)
    const url =`http://localhost:5000/bikes?email=${user.email}`;
    const { data: bikes = [], isLoading } = useQuery({
        queryKey: ["Category"],
        queryFn: async () => {
          const res = await fetch(url);
          const data = await res.json();
          return data;
        },
      });

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
                <tr >
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
                  
                      <button
                        // onClick={() => handleMakeSeller(user._id)}
                        className="btn btn-info btn-xs"
                      >
                        Add Advirtise
                      </button>
                  
                      <button
                        // onClick={() => handleMakeSeller(user._id)}
                        className="btn btn-info btn-xs"
                      >
                        sold/avai
                      </button>
                  
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