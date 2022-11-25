import React, { useContext } from "react";
import { AuthContext } from "../../../Context/UserContext";
import { useQuery } from "@tanstack/react-query";

const AddProducts = () => {
  const { user } = useContext(AuthContext);

  const url = `http://localhost:5000/categories`
  const {data: categories=[], isLoading} = useQuery({
    queryKey: ['Category'],
    queryFn: async () => {
        const res = await fetch(url);
        const data = await res.json();
        return data;
    }
  })

const  handleAddProduct = (event) => {
    event.preventDefault()
const newProduct = {
    name: 'xxx',
    price: 21323
}
fetch('http://localhost:5000/bike', {
    method: "POST",
    headers: {
        'content-tye': 'application/json'
    },
    body: JSON.stringify(newProduct)
})
.then(res => res.json())
.then(data => console.log(data))


}

if(isLoading){
    return <>spinner</>
}

  return (
    <form onSubmit={handleAddProduct}>
      <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm bg-gray-200">
        <div className="space-y-2 col-span-full lg:col-span-1">
          <p className="font-medium">{user?.displayName}</p>
          <p className="text-xs">{user?.email}</p>
        </div>
        <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
          <div className="col-span-full sm:col-span-3">
            <label for="bikeName" className="text-sm">
              Bike Name
            </label>
            <input
              id="bikeName"
              type="text"
              placeholder=" "
              className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900"
            />
          </div>
          <div className="col-span-full sm:col-span-3">
            <label for="orgPrice" className="text-sm">
              Condition
            </label>
            <input
              id="condition"
              name="condition"
              type="number"
              placeholder=""
              className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900"
            />
          </div>

          <div className="col-span-full sm:col-span-3">
            <label for="price" className="text-sm">
              Price
            </label>
            <input
              id="price"
              type="text"
              placeholder=""
              className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900"
            />
          </div>
          <div className="col-span-full sm:col-span-3">
            <label for="orgPrice" className="text-sm">
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
        
          <div className="col-span-full">
            <label for="orgPrice" className="text-sm">
              Upload Picture Of The Bike:
            </label>
            <input type="file" className="file-input w-full max-w-xs" />
          </div>
          <div className="col-span-full">
            <select className="select select-bordered w-full max-w-xs">
              <option disabled selected>
                Chose The Category
              </option>
              {categories.map(e => <option
              key={e}
              >{e.title}</option>)}
            </select>
          </div>
          <div className="col-span-full">
            <label for="address" className="text-sm">
              Address
            </label>
            <input
              id="address"
              type="text"
              placeholder=""
              className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900"
            />
          </div>

          <div className="col-span-full ">
            <label for="zip" className="text-sm">
              ZIP / Postal
            </label>
            <input
              id="zip"
              type="text"
              placeholder=""
              className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900"
            />
          </div>
        </div>
        <button type="submit" className="btn btn-success w-full">ADD NEW BIKE</button>
      </fieldset>
    
    </form>
  );
};

export default AddProducts;
