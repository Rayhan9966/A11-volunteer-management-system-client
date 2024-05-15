import React from 'react';
import { useLoaderData } from 'react-router-dom';
import AddVolunteerCard from './AddVolunteerCard';


const NeedVolunteer = () => {
  const alpost = useLoaderData();
  return (
    <div >

      <h1 className='text-7xl font-bold text-center'>All Volunteer Post</h1>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4 xl:mt-16 xl:grid-cols-2'>
        {

          alpost.map(post =>
            <AddVolunteerCard
              key={post._id}
              post={post}>

            </AddVolunteerCard>
          )
        }
      </div>
    </div>

  );
};

export default NeedVolunteer;