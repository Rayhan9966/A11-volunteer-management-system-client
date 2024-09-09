import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const MyVolunteer = () => {
    
    const LoadedMyvolunteer = useLoaderData();
    const[myvolunteer,setMyvolunteeer]=useState(LoadedMyvolunteer);

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
                          );
                          const remainingMyvolunteer = myvolunteer.filter(myvolunteer =>
                            myvolunteer._id!== _id);
                             setMyvolunteeer(remainingMyvolunteer);
                }
            })
        
            }
        
        
          });
            }
    return (
        <div>
            <h1  className='text-6xl font-bold text-center'>My Volunteer List</h1>
            <br />

            <div>
                <div className="overflow-x-auto">
                    <table className="table table-zebra">
                        {/* head */}
                        <thead>
                            <tr>
                                <th></th>
                                <th>Tilte</th>
                                <th>Name</th>
                                <th>Description</th>
                                <th>DeadLine</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                          
                       {
                     myvolunteer.map(myvolunteer=><tr key={myvolunteer._id}>
                             <th>#</th>
                             <td>{myvolunteer.title}</td>
                             <td>{myvolunteer.name}</td>
                             <td>{myvolunteer.description}</td>
                             <td>{myvolunteer.deadline}</td>
                             <td>
                                <button onClick={()=>handleDelete(myvolunteer._id)} className='btn btn-secondary'>Delete</button>
                             </td>
                         </tr>)
                       
                       }
                      

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default MyVolunteer;