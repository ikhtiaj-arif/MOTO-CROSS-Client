import React from 'react';

const AddvertiseCard = ({bike}) => {
    const { Bike_Name, price,picture, address} = bike
    return (
        <div className='mb-24'>
               <div className="space-y-4">
              <img
                alt=""
                className="object-cover h-56 mx-auto mb-4 bg-center rounded-sm dark:bg-gray-500"
                src={picture}
              />
              <div className="flex flex-col items-center">
                <h4 className="text-xl font-semibold">{Bike_Name}</h4>
                <p className="text-sm dark:text-gray-400">{address}</p>
                <div className="flex mt-2 space-x-2">
                   $ {price}
                </div>
              </div>
            </div>

        </div>
    );
};

export default AddvertiseCard;