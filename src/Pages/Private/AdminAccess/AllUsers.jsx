import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { SetSellerInfo } from "../../../Api/User";
import ConfirmationModal from "../../../Components/ConfirmationModal";
import Spinner from "../../../Components/Spinner";

const AllUsers = () => {
  const [deleteDoc, setDeleteDoc] = useState(null);
  const closeModal = () => {
    setDeleteDoc(null);
  };

  const url = `http://localhost:5000/users`;
  const {
    data: allUsers = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["users"],
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

  const handleMakeSeller = (id) => {
    const sellerRole = { role: "seller" };
    SetSellerInfo(id, sellerRole).then((data) => {
      if (data.modifiedCount > 0) {
        toast.success("made Seller");
        refetch();
      }
    });
  };

  const handleDelete = (user) => {
    fetch(`http://localhost:5000/user/${user._id}`, {
      method: "DELETE",
      headers: {
        authorization: `bearer ${localStorage.getItem("motocross-token")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount > 0) {
          toast.success(`${user.name} Successfully Deleted!`);
          refetch();
        }
      });
  };

  if (isLoading) {
    return (
      <div>
        <Spinner />
      </div>
    );
  }
  console.log(allUsers);

  return (
    <div>
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
            {allUsers.map((user, i) => (
              <tr key={i}>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={user.photoURL}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{user.displayName}</div>
                      <div className="text-sm opacity-50">{user.email}</div>
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
                  {user?.role === "sellerRequest" && (
                    <button
                      onClick={() => handleMakeSeller(user._id)}
                      className="btn btn-info btn-xs"
                    >
                      make Seller
                    </button>
                  )}
                </th>
                <th>
                  <label
                    htmlFor="confirmation-modal"
                    onClick={() => setDeleteDoc(user)}
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

export default AllUsers;
