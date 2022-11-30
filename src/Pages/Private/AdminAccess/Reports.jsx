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
  const url = `http://localhost:5000/reports`;

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
  // const url2 = `http://localhost:5000/bike/${pp}`;

  const handleDeleteReport = (id) => {
    fetch(`http://localhost:5000/reports/${id}`, {
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
    fetch(`http://localhost:5000/bike/${id}`, {
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

  if (isLoading) {
    return (
      <>
        <Spinner />
      </>
    );
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
