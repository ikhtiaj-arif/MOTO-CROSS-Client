import React from 'react';
import logo1 from '../../Assects/icon/Wrench.svg'
import logo2 from '../../Assects/icon/deliveryt.svg'
import logo3 from '../../Assects/icon/person.svg'
import logo4 from '../../Assects/icon/check.svg'


const Services = () => {
    return (
        <div className='mt-24'>
            <h1 className='text-4xl font-bold text-center'>Why <span className='text-accent'>Consider</span> Us!</h1>
            
            <section className=" mt-24 rounded  dark:text-gray-100">
        <div className="container grid grid-cols-1 gap-6 mx-auto sm:grid-cols-2 xl:grid-cols-4">
            <div className=" py-6 space-x- rounded-lg md:space-x-6 border-2 border-accent hover:bg-gray-800">
                <div className="flex justify-center p-4 align-middle rounded-lg sm:p-4">
                   <img src={logo3} className='w-2/4 ' alt="" />
                </div>
                <div className="text-center p-4 text-gray-600 hover:text-accent justify-center ">
                    <p className="text-3xl font-semibold leading-none">24/7</p>
                    <p className="capitalize">Customer Support</p>
                </div>
            </div>
            
            <div className=" py-6 space-x- rounded-lg md:space-x-6 border-2 border-accent  hover:bg-gray-800">
                <div className="flex justify-center p-4 align-middle rounded-lg sm:p-4">
                   <img src={logo4} className='w-2/4 ' alt="" />
                </div>
                <div className="text-center p-4 text-gray-600 hover:text-accent justify-center ">
                    <p className="text-3xl font-semibold leading-none">200+</p>
                    <p className="capitalize">Orders</p>
                </div>
            </div>
           
            <div className=" py-6 space-x- rounded-lg md:space-x-6 border-2 border-accent  hover:bg-gray-800">
                <div className="flex justify-center p-4 align-middle rounded-lg sm:p-4">
                   <img src={logo2} className='w-2/4 ' alt="" />
                </div>
                <div className="text-center p-4 text-gray-600 hover:text-accent justify-center ">
                    <p className="text-3xl font-semibold leading-none">On Time</p>
                    <p className="capitalize">Delivery</p>
                </div>
            </div>

          

            <div className=" py-6 space-x- rounded-lg md:space-x-6 border-2 border-accent hover:bg-gray-800 ">
                <div className="flex justify-center p-4 align-middle rounded-lg sm:p-4">
                   <img src={logo1} className='w-2/4 ' alt="" />
                </div>
                <div className="text-center p-4 text-gray-600 hover:text-accent justify-center ">
                    <p className="text-3xl font-semibold leading-none">Excellent </p>
                    <p className="capitalize">Service</p>
                </div>
            </div>
        </div>
    </section>
            
        </div>
    );
};

export default Services;