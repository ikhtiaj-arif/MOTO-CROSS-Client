import React, { useContext } from "react";
import { AuthContext } from "../../Context/UserContext";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import Spinner from "../../Components/Spinner";

const BookModal = ({ bikeInfo }) => {
  const { Bike_Name, price, _id } = bikeInfo;
  const navigate = useNavigate();

  const { user, loading } = useContext(AuthContext);

  const handleModalSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const userName = user?.displayName;
    const email = user?.email;
    const number = form.number.value;
    const location = form.location.value;
    console.log(userName, email);
    const booking = {
      productId: _id,
      userName,
      email,
      number,
      price,
      location,
    };

    fetch(`http://localhost:5000/bookings`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `bearer ${localStorage.getItem("motocross-token")}`,
      },
      body: JSON.stringify(booking),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.success("booking confirmed!");
          navigate("/dashboard");
        }
      });
  };

  if (loading) {
    return (
      <>
        <Spinner />
      </>
    );
  }
  return (
    <div>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="booking-modal"
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
            <input
              type="text"
              name="email"
              defaultValue={Bike_Name}
              disabled
              placeholder="Email"
              className="input input-bordered w-full mb-4"
            />
            <input
              type="text"
              name="price"
              defaultValue={price}
              disabled
              placeholder="price"
              className="input input-bordered w-full mb-4"
            />
            <input
              type="text"
              name="location"
              placeholder="Location"
              className="input input-bordered w-full mb-4"
              required
            />

            <input
              type="text"
              name="number"
              placeholder="Phone Number"
              className="input input-bordered w-full mb-4"
              required
            />

            <button type="submit" className="btn w-full btn-accent text-white">
              Confirm Appointment
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookModal;
