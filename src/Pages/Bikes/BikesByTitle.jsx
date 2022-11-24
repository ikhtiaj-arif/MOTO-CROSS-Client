import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import BikeCard from './BikeCard';

const BikesByTitle = () => {

const bikes = useLoaderData()
// 
console.log(bikes);

    return (
        <div>
            <h2>total bikes{bikes.length}</h2>
            <div className='md:grid md:grid-cols-2 lg:grid-cols-3 gap-5'>
            {
                bikes.map(bike => <BikeCard
                key={bike._id}
                bike={bike}
                ></BikeCard>)
            }

            </div>
        </div>
    );
};

export default BikesByTitle;