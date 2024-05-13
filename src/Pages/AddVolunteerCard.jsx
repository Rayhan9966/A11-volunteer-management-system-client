import React from 'react';
import Swal from 'sweetalert2';

const AddVolunteerCard = ({post}) => {
    const { _id,name,thumbnail,title,description, category,location, volunteerneed,deadline,email } = post;
    const handleDelete=_id=>{
console.log(_id);

Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!"
  }).then((result) => {
    if (result.isConfirmed) {
    //   Swal.fire({
    //     title: "Deleted!",
    //     text: "Your file has been deleted.",
    //     icon: "success"
    //   });
    console.log('dlt cnfrm');
    }
  });
    }
    return (
        <div>
            <div className="card card-side bg-base-100 text-white dark:bg-gray-800 container ml-4 mr-4 px-4 mx-auto shadow-xl">
  <figure><img src={thumbnail} alt="Movie"/></figure>
  <div className="card-body">
    <h2 className="card-title">Title: "{title}"</h2>
                    <p className='font-bold'>Description:-{description}</p>

<p>Date:{deadline}</p>

   
    <div className="join join-vertical  gap-4 lg:join-horizontal">
  <button onClick={()=>handleDelete(_id)} className="btn btn-secondary join-item">Delete</button>


  <button className="btn btn-primary join-item">Update</button>
  <button className="btn btn-warning join-item">Apply</button>
</div>
    </div>
  </div>
</div>
        
    );
};

export default AddVolunteerCard;