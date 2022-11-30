import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { SetSellerInfo } from "../../../Api/User";
import toast from "react-hot-toast";
import ConfirmationModal from "../../../Components/ConfirmationModal";
import { FaTrashAlt } from "react-icons/fa";
import Spinner from "../../../Components/Spinner";

const AllRequestedSeller = () => {
  const [deleteDoc, setDeleteDoc] = useState(null);
  const closeModal = () => {
    setDeleteDoc(null);
  };

  const url = `http://localhost:5000/sellerRequested`;
  const {
    data: allSellerReq = [],
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

  const ApproveSeller = (id) => {
    const approved = { role: "seller" };
    SetSellerInfo(id, approved).then((data) => {
      if (data.modifiedCount > 0) {
        toast.success("Seller Approved!");
        refetch();
      }
    });
  };
  const CancelSeller = (id) => {
    const cancel = { role: null };
    SetSellerInfo(id, cancel).then((data) => {
      if (data.modifiedCount > 0) {
        toast.error("Seller Request Denied!");
        refetch();
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
          toast.error(`${seller.name} Successfully Deleted!`);
          refetch();
        }
      });
  };
  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>location</th>
              <th>Pending Request</th>
              <th>Delete </th>
            </tr>
          </thead>
          <tbody>
            {allSellerReq.map((seller, i) => (
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
                  </div>
                </td>
                <td>
                  <div className="font-bold">{seller.displayName}</div>
                  <div className="text-sm opacity-50">{seller.email}</div>
                  <br />
                </td>
                <td>{seller.location}</td>
                <th>
                  {seller?.isSellerVerified !== "verified" && (
                    <>
                      <button
                        onClick={() => ApproveSeller(seller._id)}
                        className="btn btn-info btn-xs"
                      >
                        Approve Seller
                      </button>

                      <button
                        onClick={() => CancelSeller(seller._id)}
                        className="btn btn-error btn-xs"
                      >
                        X
                      </button>
                    </>
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

export default AllRequestedSeller;
