import React from 'react';
import { useQuery } from '@tanstack/react-query';



const Advertisement = () => {

    const url =`http://localhost:5000/advertiseBike`;
    const { data: bikes = [], isLoading, refetch } = useQuery({
        queryKey: ["advertised"],
        queryFn: async () => {
          const res = await fetch(url);
          const data = await res.json();
          return data;
        },
      });

    return (
        <div className='mt-32'>
            <div className="container mx-auto py-9 md:py-12 px-4 md:px-6">
            <div className="flex items-strech justify-center flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 lg:space-x-8">
               
           {
            bikes.map(bike => <>
                     <div className="items-strech justify-between bg-gray-50 py-6 px-6 md:py-12 lg:px-12 md:w-8/12 lg:w-7/12 xl:w-8/12 2xl:w-9/12">
                    <div className="flex flex-col justify-center md:w-1/2">
                        <h1 className="text-3xl lg:text-4xl font-semibold text-gray-800">Best Deal</h1>
                        <p className="text-base lg:text-xl text-gray-800 mt-2">
                            Current Price:  <span className="font-bold">{bike.price}</span>
                        </p>
                        <p className="text-base lg:text-xl text-gray-800 mt-2">
                            Location:  <span className="font-bold">{bike.address}</span>
                        </p>
                    </div>
                    <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center md:justify-end">
                        
                        <img src={bike.picture} alt="" />
                    </div>
                </div>
            </>)
           }
                
            </div>
        </div>
        </div>
    );
};

export default Advertisement;