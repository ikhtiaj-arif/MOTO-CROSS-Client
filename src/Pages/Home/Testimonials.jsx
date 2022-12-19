import React from "react";
import { FaQuoteLeft } from "react-icons/fa";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Testimonials = () => {
  return (
    <div id="testimonial" className="mt-24">
      <div className="text-center">
        <h1 className="text-2xl  font-bold text-accent">Testimonials</h1>
        <h1 className="text-5xl py-3 font-bold">The user's feedbacks</h1>
        <p className="py-2 font-medium w-3/5 mx-auto text-gray-500">
          Chose the type bike you desire, We have sellers and buyers from all
          over the country. You will find the best deal for your dream bike.
        </p>
      </div>
      <div>
        <motion.div
          transition={{ duration: 1 }}
          initial={{ x: 100, scale: 0.9 }}
          whileInView={{ x: 0 }}
          whileHover={{ scale: 1 }}
          className="card m-5 p-5 md:m-10 md:p-16 card-side bg-base-100 shadow-xl"
        >
          <div>
            <div className="flex justify-between">
              <div className="flex py-2 ">
                <div className="avatar mx-2">
                  <div className="w-12 rounded-full">
                    <img src="https://placeimg.com/192/192/people" />
                  </div>
                </div>
                <div>
                  <h1 className="card-title">MR. Tom Tastes</h1>
                  <p>Social Worker</p>
                </div>
              </div>
              <div className="">
                <FaQuoteLeft className="text-4xl text-gray-500" />
              </div>
            </div>

            <div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
                exercitationem consequuntur magnam pariatur eius rem dolorem
                neque odit et blanditiis harum amet dolore, itaque natus,
                distinctio libero esse porro numquam, voluptate nostrum ex
                repudiandae praesentium excepturi? Nisi aliquam temporibus vel!
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
                transition={{ duration: 1 }}
                initial={{ x: 100, scale: 0.9 }}
                whileInView={{ x: 0 }}
                whileHover={{ scale: 1 }}
              
        className="card m-5 p-5 md:m-10 md:p-16 card-side bg-base-100 shadow-xl">
          <div>
            <div className="flex justify-between">
              <div className="flex py-2">
                <div className="avatar mx-2">
                  <div className="w-12 rounded-full">
                    <img src="https://placeimg.com/192/192/people" />
                  </div>
                </div>
                <div>
                  <h1 className="card-title">MR. Tom Tastes</h1>
                  <p>Social Worker</p>
                </div>
              </div>
              <div className="">
                <FaQuoteLeft className="text-4xl text-gray-500" />
              </div>
            </div>

            <div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
                exercitationem consequuntur magnam pariatur eius rem dolorem
                neque odit et blanditiis harum amet dolore, itaque natus,
                distinctio libero esse porro numquam, voluptate nostrum ex
                repudiandae praesentium excepturi? Nisi aliquam temporibus vel!
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Testimonials;
