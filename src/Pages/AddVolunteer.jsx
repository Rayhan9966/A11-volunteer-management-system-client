
import React from 'react';

const AddVolunteer = () => {
    return (
        <div className='bg-[#f3f5f0] p-24'>

           <h1 className='font-extrabold text-4xl'>Add Volunteer</h1> 
           <form >


<div className='md:flex gap-4'>

<div className='form-control md:w-1/2 '>
    <label className='lebel'>
        <span className='lebel-text'>Volunteer Name</span>
    </label>
    <label className='input-group'>
        <input type="text" placeholder='Volunteer Name' className='input input-bordered w-full' />
    </label>

</div>
<div className='form-control md:w-1/2 ml-4'>
    <label className='lebel'>
        <span className='lebel-text'>Volunteer Name</span>
    </label>
    <label className='input-group'>
        <input type="text" placeholder='Volunteer Name' className='input input-bordered w-full' />
    </label>

</div>



</div>

           </form>


        </div>
    );
};

export default AddVolunteer;