import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { SetSellerInfo } from "../../../Api/User";
import toast from "react-hot-toast";
import ConfirmationModal from "../../../Components/ConfirmationModal";
import Spinner from "../../../Components/Spinner";

const AllSeller = () => {
  const [deleteDoc, setDeleteDoc] = useState(null);
  const closeModal = () => {
    setDeleteDoc(null);
  };

  const url = `http://localhost:5000/seller`;
  const {
    data: allSeller = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["seller"],
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

  const VerifySeller = (seller) => {
    const id = seller._id;
    const email = seller.email;
    const sellerVerified = { isSellerVerified: "verified" };
    SetSellerInfo(id, sellerVerified).then((data) => {
      if (data.modifiedCount > 0) {
        fetch(`http://localhost:5000/bikes?email=${email}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        authorization: `bearer ${localStorage.getItem("motocross-token")}`,
      },
      body: JSON.stringify(sellerVerified),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.success("Seller Verified!");
          refetch();
        }
      });
    
      }
    });
  };

  const handleDelete = (seller) => {
    fetch(`http://localhost:5000/user/${seller._id}`, {
      method: "DELETE",
      headers: {
        authorization: `bearer ${localStorage.getItem("motocross-token")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount > 0) {
          toast.success(`${seller.name} Successfully Deleted!`);
          refetch();
        }
      });
  };
  if (isLoading) {
    return <Spinner />;
  }
  console.log(allSeller);
  return (
    <div>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Job</th>
              <th>Verification</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {allSeller.map((seller, i) => (
              <tr key={i}>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={seller.image}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="font-bold">{seller.displayName}</div>
                  <div className="text-sm opacity-50">{seller.email}</div>
                  <br />
                </td>
                <td>{seller.location}</td>
                <th>
                  {seller?.isSellerVerified !== "verified" ? (
                    <>
                      {" "}
                      <button
                        onClick={() => VerifySeller(seller)}
                        className="btn btn-info btn-xs"
                      >
                        Verify Seller
                      </button>
                    </>
                  ) : (
                    <>{seller?.isSellerVerified}</>
                  )}
                </th>

                <th>
                  <label
                    htmlFor="confirmation-modal"
                    onClick={() => setDeleteDoc(seller)}
                    className="btn"
                  >
                    Delete{" "}
                  </label>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
        {deleteDoc && (
          <ConfirmationModal
            handleDeleteDoc={handleDelete}
            deleteDoc={deleteDoc}
            cancel={closeModal}
          ></ConfirmationModal>
        )}
      </div>
    </div>
  );
};

export default AllSeller;
