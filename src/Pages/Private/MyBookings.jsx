import { useQuery } from "@tanstack/react-query";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Context/UserContext";

import ConfirmationModal from "../../Components/ConfirmationModal";
import BookTable from "./BookTable";
import Spinner from "../../Components/Spinner";

const MyBookings = () => {
  const { user } = useContext(AuthContext);
  const [deleteDoc, setDeleteDoc] = useState(null);
  const closeModal = () => {
    setDeleteDoc(null);
  };

  const url = `https://server-angon777.vercel.app/bookings?email=${user?.email}`;

  const {
    data: bookings = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["bookings", user?.email],
    queryFn: async () => {
      const res = await fetch(url, {
        headers: {
          authorization: `bearer ${localStorage.getItem("motocross-token")}`,
        },
      });
      const data = res.json();
      return data;
    },
  });
  // console.log(bookings);

  const handleBookingDelete = (id) => {
    fetch(`https://server-angon777.vercel.app/bookings/${id}`, {
      method: "DELETE",
      headers: {
        authorization: `bearer ${localStorage.getItem("motocross-token")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        refetch();
      });
  };

  if (isLoading) {
    return (
      <>
        <Spinner />
      </>
    );
  }

  return (
    <div>
      <h2 className=""> </h2>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          <thead>
            <tr>
              <th>Booked Items</th>
              <th>Seller </th>
              <th>Price</th>
              <th>Favorite Color</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking) => (
              <BookTable
                key={booking._id}
                booking={booking}
                setDeleteDoc={setDeleteDoc}
              ></BookTable>
            ))}
          </tbody>
        </table>
        {deleteDoc && (
          <ConfirmationModal
            handleDeleteDoc={handleBookingDelete}
            deleteDoc={deleteDoc}
            cancel={closeModal}
          ></ConfirmationModal>
        )}
      </div>
    </div>
  );
};

export default MyBookings;
