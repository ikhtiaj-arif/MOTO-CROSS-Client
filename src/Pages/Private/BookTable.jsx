import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const BookTable = ({ booking, setDeleteDoc }) => {
  const [bike, setBike] = useState([]);

  useEffect(() => {
    fetch(`https://server-angon777.vercel.app/bike/${booking.productId}`, {
      headers: {
        "content-type": "application/json",
        authorization: `bearer ${localStorage.getItem("motocross-token")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setBike(data);
        //    console.log(data);
      });
  }, [booking.productId]);

  return (
    <tr>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask  w-14 h-12">
              <img src={bike.picture} alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
          <div className="font-medium ">{bike.Bike_Name}</div>
        </div>
      </td>

      <td>
        <div className="font-bold">{booking.userName}</div>
      </td>
      <td>$ {booking.price}</td>
      <th>
        {booking.paid ? (
          <>PAID</>
        ) : (
          <>
            <Link to={`/dashboard/payment/${booking._id}`}>
              <button className="btn btn-success btn-xs">pay</button>
            </Link>
            <label
              htmlFor="confirmation-modal"
              onClick={() => setDeleteDoc(booking._id)}
              className="btn btn-error btn-xs mx-2"
            >
              X
            </label>
          </>
        )}
      </th>
    </tr>
  );
};

export default BookTable;
