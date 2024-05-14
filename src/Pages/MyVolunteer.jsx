import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const MyVolunteer = () => {
    const LoadedMyvolunteer = useLoaderData();
    const[myvolunteer,setMyvolunteeer]=useState(LoadedMyvolunteer);
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
                                <th>Description</th>
                                <th>DeadLine</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                          
                       {
                     myvolunteer.map(myvolunteer=><tr key={myvolunteer._id}>
                             <th>1</th>
                             <td>{myvolunteer.title}</td>
                             <td>{myvolunteer.description}</td>
                             <td>{myvolunteer.deadline}</td>
                             <td>
                                <button className='btn btn-secondary'>Delete</button>
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