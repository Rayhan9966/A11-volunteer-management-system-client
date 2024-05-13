
import React from 'react';

const AddVolunteer = () => {
    return (
        <div className='bg-[#e4eee8] p-24'>

            <h1 className='font-extrabold text-4xl'>Add Volunteer</h1>
            <form >

{/* //row */}
                <div className='md:flex gap-4  mb-6'>

                    <div className='form-control w-full'>
                        <label className='lebel'>
                            <span className='lebel-text'>Thumbnail</span>
                        </label>
                        <label className='input-group'>
                            <input type="text" placeholder='Thumbnail URL' name='thumbnail' className='input input-bordered w-full' />
                        </label>

                    </div>
                  



                </div>
{/* //row */}
                <div className='md:flex gap-4  mb-6'>

                   
                    <div className='form-control w-full'>
                        <label className='lebel'>
                            <span className='lebel-text'>Post Title</span>
                        </label>
                        <label className='input-group'>
                            <input type="text" placeholder='Post Title' name='title' className='input input-bordered w-full' />
                        </label>

                    </div>



                </div>
{/* //row */}
                <div className='md:flex gap-4  mb-6'>

                    <div className='form-control md:w-1/2 '>
                        <label className='lebel'>
                            <span className='lebel-text'>Description</span>
                        </label>
                        <label className='input-group'>
                            <input type="text" placeholder='Description' name='description' className='input input-bordered w-full' />
                        </label>

                    </div>
                    <div className='form-control md:w-1/2 ml-4'>
                        <label className='lebel'>
                            <span className='lebel-text'>Category</span>
                        </label>
                        <label className='input-group'>
                            <input type="text" placeholder='for example- healthcare, education, social service,
animal welfare.' name='category' className='input input-bordered w-full' />
                        </label>

                    </div>



                </div>
{/* //row */}
                <div className='md:flex gap-4 mb-6'>

                    <div className='form-control md:w-1/2 '>
                        <label className='lebel'>
                            <span className='lebel-text'>Location</span>
                        </label>
                        <label className='input-group'>
                            <input type="text" placeholder='Location' name='location' className='input input-bordered w-full' />
                        </label>

                    </div>
                    <div className='form-control md:w-1/2 ml-4'>
                        <label className='lebel'>
                            <span className='lebel-text'>No. of volunteers needed</span>
                        </label>
                        <label className='input-group'>
                            <input type="text" placeholder='how many volunteers needed' name='volunteerneed' className='input input-bordered w-full' />
                        </label>

                    </div>



                </div>
{/* //row */}
                <div className='md:flex gap-4  mb-6'>

                    <div className='form-control md:w-1/2 '>
                        <label className='lebel'>
                            <span className='lebel-text'>Deadline</span>
                        </label>
                        <label className='input-group'>
                            <input type="text" placeholder='Deadline' name='deadline' className='input input-bordered w-full' />
                        </label>

                    </div>
                    <div className='form-control md:w-1/2 ml-4'>
                        <label className='lebel'>
                            <span className='lebel-text'>Organizer Name </span>
                        </label>
                        <label className='input-group'>
                            <input type="text" placeholder='Name' name='name' className='input input-bordered w-full' />
                        </label>

                    </div>



                </div>
{/* //row */}
                <div className='md:flex gap-4  mb-6'>

                    <div className='form-control w-full'>
                        <label className='lebel'>
                            <span className='lebel-text'> Organizer email</span>
                        </label>
                        <label className='input-group'>
                            <input type="email" placeholder=' Organizer email@gmail.com' name='email' className='input input-bordered w-full' />
                        </label>

                    </div>
                  



                </div>
<input type='submit' value="ADD POST" className='btn text-2xl font-bold text-green-500 bg-green-200 btn-block'></input>
            </form>


        </div>
    );
};

export default AddVolunteer;