import React, { useEffect, useState } from "react";

const ReportCard = ({ report, handleDeleteReport, setDeleteDoc }) => {
  // console.log(report);
  const { porductId, message, userEmail } = report;

  const [bike, setBike] = useState([]);

  useEffect(() => {
    fetch(`https://server-angon777.vercel.app/bike/${report.productId}`, {
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
  }, [report.productId]);
  return (
    <div className="card card-side bg-base-100 shadow-xl">
      <figure>
        <img src={bike.picture} className="md:w-1/4" alt="Movie" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{bike.Bike_Name}</h2>
        <h2>Report Message:</h2>
        <p>{message}</p>
        <div className="card-actions justify-end">
          <label
            htmlFor="confirmation-modal"
            onClick={() => handleDeleteReport(report._id)}
            className="btn btn-primary"
          >
            Delete Report
          </label>
          <label
            htmlFor="confirmation-modal"
            onClick={() => setDeleteDoc(report.productId)}
            className="btn btn-error"
          >
            Delete Reported Product{" "}
          </label>
        </div>
      </div>
    </div>
  );
};

export default ReportCard;
