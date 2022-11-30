import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import toast from "react-hot-toast";

import ConfirmationModal from "../../../Components/ConfirmationModal";
import ReportCard from "./ReportCard";
import Spinner from "../../../Components/Spinner";

const Reports = () => {
  const [deleteDoc, setDeleteDoc] = useState(null);
  const closeModal = () => {
    setDeleteDoc(null);
  };

  // axios to load product

  // get reports
  const url = `https://server-angon777.vercel.app/reports`;

  const {
    data: reports = [],
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
      console.log(data);
      return data;
    },
  });

  //   get reported products
  // const url2 = `https://server-angon777.vercel.app/bike/${pp}`;

  const handleDeleteReport = (id) => {
    fetch(`https://server-angon777.vercel.app/reports/${id}`, {
      method: "DELETE",
      headers: {
        authorization: `bearer ${localStorage.getItem("motocross-token")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount > 0) {
          toast.success(`Report Successfully Deleted!`);
          refetch();
        }
      });
  };

  const handleDelete = (id) => {
    fetch(`https://server-angon777.vercel.app/bike/${id}`, {
      method: "DELETE",
      headers: {
        authorization: `bearer ${localStorage.getItem("motocross-token")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        refetch();
      });
  };

  
  if(isLoading) {
    return <><Spinner/></>
  }
  return (
    <div className="">
      {reports.map((report) => (
        <ReportCard
          key={report._id}
          report={report}
          setDeleteDoc={setDeleteDoc}
          handleDeleteReport={handleDeleteReport}
        ></ReportCard>
      ))}
      {/* <div className="overflow-x-auto w-full">
        <table className="table w-full">
          <thead>
            <tr>
              <th>
             
              </th>
              <th>Name</th>
              <th>Job</th>
              <th>Favorite Color</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {reports.map((report, i) => (
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
                      <div className="font-bold">{}</div>
                      <div className="text-sm opacity-50">United States</div>
                    </div>
                  </div>
                </td>
                <td>
                  {report._id}
                  <br />
                  <span className="badge badge-ghost badge-sm">
                    Desktop Support Technician
                  </span>
                </td>
                <td>Purple</td>

                <th>
                  <label
                    htmlFor="confirmation-modal"
                    onClick={() => setDeleteDoc(report.productId)}
                    className="btn"
                  >
                    Delete Reported Product{" "}
                  </label>
                </th>
                <th>
                  <label
                    htmlFor="confirmation-modal"
                    onClick={() => handleDeleteReport(report._id)}
                    className="btn btn-error"
                  >
                    X
                  </label>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
     
      </div> */}
      {deleteDoc && (
        <ConfirmationModal
          handleDeleteDoc={handleDelete}
          deleteDoc={deleteDoc}
          cancel={closeModal}
        ></ConfirmationModal>
      )}
    </div>
  );
};

export default Reports;
