
import { useQuery } from "@tanstack/react-query";
import React, { useContext, useState } from "react";
import { AuthContext } from "../../Context/UserContext";
import { Link } from 'react-router-dom'
import ConfirmationModal from "../../Components/ConfirmationModal";




const MyBookings = () => {
  const { user } = useContext(AuthContext);
  const [deleteDoc, setDeleteDoc] = useState(null);
  const closeModal =() => {
    setDeleteDoc(null)
  }


  const url = `http://localhost:5000/bookings?email=${user?.email}`;

  const { data: bookings = [], isLoading, refetch } = useQuery({
    queryKey: ["bookings", user?.email],
    queryFn: async () => {
      const res = await fetch(url, {
        headers: {
            authorization: `bearer ${localStorage.getItem('motocross-token')}`
        }
      });
      const data = res.json();
      return data;
    },
  });

  const handleBookingDelete = (id) => {
    fetch(`http://localhost:5000/bookings/${id}`,{
      method: 'DELETE',
      headers: {
        authorization: `bearer ${localStorage.getItem('motocross-token')}`
       }
    })
    .then(res=>res.json())
    .then(data => {
      console.log(data);
      refetch()
    })

  }




if(isLoading){
  return <>spinner</>
}

  return (
    <div>
      <h2>a table to show the booked products </h2>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          <thead>
            <tr>
              <th>Name</th>
              <th>Job</th>
              <th>Favorite Color</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking, i) => (
              <tr key={i}>
       
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
                      <div className="font-bold">{booking.number}</div>
                      {/* <div className="text-sm opacity-50">United States</div> */}
                    </div>
                  </div>
                </td>
                <td>
                  Zemlak, Daniel and Leannon
                  <br />
                  <span className="badge badge-ghost badge-sm">
                    Desktop Support Technician
                  </span>
                </td>
                <td>Purple</td>
                <th>
                  {
                    booking.paid ?
                    <>PAID</>
                    :
                    <>
                     <Link to={`/dashboard/payment/${booking._id}`}><button className="btn btn-success btn-xs">pay</button></Link>
                  <label htmlFor="confirmation-modal" onClick={()=>setDeleteDoc(booking._id)} className="btn btn-error btn-xs mx-2">X</label>
                    </>
                  }
                 
                </th>
              </tr>
            ))}
          </tbody>
        </table>
        {  deleteDoc && <ConfirmationModal
      handleDeleteDoc={handleBookingDelete}
      deleteDoc={deleteDoc}
      cancel={closeModal}
     ></ConfirmationModal>}
      </div>
    </div>
  );
};

export default MyBookings;
