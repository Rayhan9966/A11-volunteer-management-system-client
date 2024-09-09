import React from 'react';
import { FaCalendar, FaCalendarDay, FaCalendarTimes, FaHome } from 'react-icons/fa';
// import { FaLocationArrow } from 'react-icons/fa';
import { FaCalendarCheck, FaLocationCrosshairs, FaLocationDot, FaLocationPin, FaLocationPinLock, FaMapLocation } from 'react-icons/fa6';
import { Link, useLoaderData } from 'react-router-dom';

const ViewPage = () => {
    const viewDetails=useLoaderData();
    return (
        <div>
           {/* <div> <h1>{viewDetails.title}</h1></div> */}
<div>
<section className="bg-white dark:bg-white-900">
  <div className="container px-6 py-10 mx-auto">
    <h1 className="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-black">
    {viewDetails.title}
    </h1>
    <div className="mt-8 lg:-mx-6 lg:flex lg:items-center">
      <img
        className="object-cover w-full lg:mx-6 lg:w-1/2 rounded-xl h-72 lg:h-96"
        src={viewDetails.thumbnail}
        alt=""
      />
      <div className="mt-6 lg:w-1/2 lg:mt-0 lg:mx-6 ">
        <p className="text-sm font-bold text-black-500 uppercase">category : {viewDetails.category}</p>
        <a
          href="#"
          className="block mt-4 text-xl  text-black-800 "
        >
          <div className='flex gap-1'>
          <FaLocationDot></FaLocationDot> {viewDetails.location}
          </div>
        </a>
        <p className="mt-3  text-gray-500 dark:text-black-300 md:text-sm">
        <span className='font-bold'>
        Description:</span> {viewDetails.description}
        </p>
        <a
          href="#"
          className="inline-block mt-2 text-green-800"
        >
       Total Volunteer: {viewDetails.volunteer_need}
        </a>
        <div className="flex items-center mt-6">
        <FaCalendarCheck></FaCalendarCheck>  Date & Time: 
          <div className="mx-4">
            <h1 className="text-sm text-black-700">
            {viewDetails.deadline}
            </h1>
        
          </div>
         
        </div> <br></br>
        <p className="text-xl font-semibold text-black-500">
        Organizer Name :  {viewDetails.name}
            </p>
        <p className="text-xl  text-black-500">
        Organizer Mail :  {viewDetails.email}
            </p>
          <Link to='/needvolunteer'> <button className='btn btn-outline mt-6 '>   <FaHome className='text-2xl'></FaHome>   </button></Link>
      </div>
      
    </div>
  </div>
</section>

</div>

         
        </div>
    );
};

export default ViewPage;