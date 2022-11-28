import { toHaveStyle } from "@testing-library/jest-dom/dist/matchers";
import React, { useContext } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../Context/UserContext";
import { useNavigate } from "react-router-dom";

const ReportModal = ({ bikeInfo }) => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleModalSubmit = (event) => {
    event.preventDefault();
    const message = event.target.message.value;
    const productId = bikeInfo._id;
    const userEmail = user.email;

    const report = {
      message: message,
      productId,
      userEmail,
    };
    fetch(`http://localhost:5000/reports`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
          authorization: `bearer ${localStorage.getItem("motocross-token")}`,
       
      },
      body: JSON.stringify(report),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.success("Itme Reported!");
          navigate("/");
        }
      });
  };

  return (
    <div>
      <input type="checkbox" id="report-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="report-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <form onSubmit={handleModalSubmit}>
            <input
              type="text"
              name="name"
              defaultValue={user?.displayName}
              disabled
              placeholder="Full Name"
              className="input input-bordered w-full mb-4"
            />
            <input
              type="text"
              name="email"
              defaultValue={user?.email}
              disabled
              placeholder="Email"
              className="input input-bordered w-full mb-4"
            />

            <textarea
              className="textarea bg-gray-200 w-full mb-4"
              name="message"
              required
              placeholder="report message"
            ></textarea>

            <button type="submit" className="btn w-full btn-accent text-white">
              Submit Report
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ReportModal;
