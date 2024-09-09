import React from 'react';
import { Link} from 'react-router-dom';
import Swal from 'sweetalert2';

const AddVolunteerCard = ({post}) => {
  // const navigate=useNavigate();
    const { _id,name,thumbnail,title,description, category,location, volunteer_need,deadline,email } = post;
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
    //   
    fetch(`https://volunteer-management-server-neon.vercel.app/post/${_id}`,{
        method: 'DELETE'
    })
   
    .then(res=>res.json())
    .then(data=>{
        console.log(data);
        if (data.deletedCount> 0){
            Swal.fire(
                   "Deleted!",
                     "Your Post has been deleted.",
                   "success"
                  )
              
        }
       
    })

    }


  });
    }
    return (
        <div>
            <div className="card card-side bg-base-100 text-white dark:bg-gray-800 container ml-4 mr-4 px-4 mx-auto shadow-xl">
  <figure><img src={thumbnail} alt="Movie"/></figure>
  <div className="card-body">
    <h1 className="card-title">Title: "{title}"</h1>
    <h2 className="card-title">Name: {name}</h2>
                    <p className='font-bold'>Description:-{description}</p>

<p>Date:{deadline}</p>

   
    <div className="join join-vertical  gap-4 lg:join-horizontal">
  {/* <button onClick={()=>handleDelete(_id)} className="btn btn-secondary join-item">Delete</button> */}

  {/* <Link to={`/dashboard/updatebiodata/${bdata._id}`}> */}
  <Link to={`/updatePost/${_id}`}>
  <button className="btn btn-primary join-item">Update</button></Link>
  <Link to='/addvolunteer'><button className="btn btn-warning join-item">Be A Volunteer</button></Link>
  <Link to={`/viewDetails/${_id}`}><button className="btn  btn-success join-item">View Details</button></Link>
</div>
    </div>
  </div>
</div>
        
    );
};

export default AddVolunteerCard;