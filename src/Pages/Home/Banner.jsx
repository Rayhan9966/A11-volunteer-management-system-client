import React from 'react';
import { Link } from 'react-router-dom';

const Banner = ({image,text}) => 
    {
    return (
        // <div>
        //     <div
        //         className='w-full bg-center bg-cover  h-[38rem]'
        //         style={{
        //             backgroundImage: `url(${image})`,
        //         }}
        //     >
        //         <div className='flex items-center justify-center w-ful bg-gray-900/70'>
        //             <div className='text-center '>
        //                 <h1 className='text-4xl font-bold mt-20 mb-4  text-black lg:text-5xl'>
        //                     {text}
        //                 </h1>
        //                 <br />
        //                 <Link

        //                     to='/add-post'
        //                     className='w-full px-5 py-4 mt-10 mr=20 lg:text-5xl  font-bold text-sm font-3xl text-white capitalize transition-colors duration-300 transform bg-gray-500 rounded-md lg:w-auto hover:bg-gray-500 focus:outline-none focus:bg-gray-500'
        //                 >
        //                    Be a volunteer
                           
        //                 </Link>
        //             </div>
        //         </div>
        //     </div>
            

        // </div>
        <div
      className='w-full bg-center bg-cover h-[38rem]'
      style={{
        backgroundImage: `url(${image})`,
      }}
    >
      <div className='flex gap-3 items-center justify-center w-full h-full bg-white-900/70'>
        <div className='text-center mt-4'>
          <h1 className='text-3xl font-semibold text-white lg:text-4xl'>
            {text}
          </h1>
          <br /><br />  <br /><br />
          <Link
            to='/addvolunteer'
            className='w-full px-5 py-4 mt-5 text-5xl text-sm font-medium text-white capitalize transition-colors duration-300 transform bg-gray-600 rounded-md lg:w-auto hover:bg-green-500 focus:outline-none focus:bg-green-500'
          >
            Be a Volunteer
          </Link>
        </div>
      </div>
    </div>
  );
};

//     );
// };

export default Banner;