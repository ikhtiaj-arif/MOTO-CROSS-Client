import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Context/UserContext";
import { useQuery } from "@tanstack/react-query";
import { getUserInfo } from "../../../Api/User";
import { PostImage } from "../../../Api/Postimg";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import Spinner from "../../../Components/Spinner";

const AddProducts = () => {
  const { user } = useContext(AuthContext);
  const [userInfo, setUserInfo] = useState("");

  const navigate = useNavigate();
  useEffect(() => {
    getUserInfo(user?.email).then((data) => setUserInfo(data));
  }, [user?.email]);

  // console.log(userInfo);

  const url = `https://server-angon777.vercel.app/categories`;
  const { data: categories = [], isLoading } = useQuery({
    queryKey: ["Category"],
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
  console.log(userInfo);
  const handleAddProduct = (event) => {
    event.preventDefault();

    const form = event.target;
    const bikeName = form.bikeName.value;
    const condition = form.condition.value;
    const price = form.price.value;
    const orgPrice = form.org_price.value;
    const used = form.used.value;
    const location = form.address.value;
    const category = form.category.value;
    const phone = form.phone.value;
    const image = form.image.files[0];

    PostImage(image).then((imgUrl) => {
      const product = {
        picture: imgUrl,
        title: category,
        Bike_Name: bikeName,
        price: price,
        org_price: orgPrice,
        used,
        seller_name: userInfo.displayName,
        email: userInfo.email,
        address: location,
        isSellerVerified: userInfo.isSellerVerified,
        condition,
        phone,
        status: "available",
      };
      console.log(product);

      fetch("https://server-angon777.vercel.app/bike", {
        method: "POST",
        headers: {
          "content-type": "application/json",
          authorization: `bearer ${localStorage.getItem("motocross-token")}`,
        },
        body: JSON.stringify(product),
      })
        .then((res) => res.json())
        .then((data) => {
          // console.log(data);
          if (data.acknowledged) {
            toast.success("booking confirmed!");
            navigate("/dashboard/myProducts");
          }
        });
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
    <form onSubmit={handleAddProduct}>
      <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm bg-gray-200">
        <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
          <div className="col-span-full sm:col-span-3">
            <label htmlFor="bikeName" className="text-sm">
              Bike Name
            </label>
            <input
              id="bikeName"
              name="bikeName"
              type="text"
              placeholder=" "
              className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900"
            />
          </div>
          <div className="col-span-full sm:col-span-3">
            <label htmlFor="orgPrice" className="text-sm">
              Current Condition Of The Bike:
            </label>
            <input
              id="condition"
              name="condition"
              type="text"
              placeholder=""
              className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900"
            />
          </div>

          <div className="col-span-full sm:col-span-3">
            <label htmlFor="price" className="text-sm">
              Price
            </label>
            <input
              id="price"
              name="price"
              type="text"
              placeholder=""
              className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900"
            />
          </div>
          <div className="col-span-full sm:col-span-3">
            <label htmlFor="orgPrice" className="text-sm">
              Original Price
            </label>
            <input
              id="org_price"
              name="org_price"
              type="number"
              placeholder=""
              className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900"
            />
          </div>
          <div className="col-span-full sm:col-span-3">
            <label htmlFor="orgPrice" className="text-sm">
              Days Used
            </label>
            <input
              id="used"
              name="used"
              type="number"
              placeholder=""
              className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900"
            />
          </div>
          <div className="col-span-full sm:col-span-3">
            <label htmlFor="orgPrice" className="text-sm">
              Contact
            </label>
            <input
              id="phone"
              name="phone"
              type="number"
              placeholder=""
              className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900"
            />
          </div>

          <div className="col-span-full">
            <label htmlFor="orgPrice" className="text-sm">
              Upload Picture Of The Bike:
            </label>
            <input
              type="file"
              id="image"
              name="image"
              accept="image/*"
              className="file-input w-full max-w-xs"
            />
          </div>
          <div className="col-span-full">
            <select
              name="category"
              className="select select-bordered w-full max-w-xs"
            >
              <option disabled selected>
                Chose The Category
              </option>
              {categories.map((e) => (
                <option key={e._id} value={e.title}>
                  {e.title}
                </option>
              ))}
            </select>
          </div>
          <div className="col-span-full">
            <label htmlFor="address" className="text-sm">
              Address
            </label>
            <input
              id="address"
              name="address"
              type="text"
              placeholder=""
              className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900"
            />
          </div>

          <div className="col-span-full ">
            <button type="submit" className="btn btn-success w-full">
              ADD NEW BIKE
            </button>
          </div>
        </div>
      </fieldset>
    </form>
  );
};

export default AddProducts;
