import React, { useContext, useEffect, useState } from 'react';
import DatePicker from "react-datepicker";
import Swal from 'sweetalert2';
import { AuthContext } from '../Provider/AuthProvider';
import "react-datepicker/dist/react-datepicker.css";
import { useLoaderData, useNavigate, useParams } from 'react-router-dom';

const UpdatePost = () => {
    const navigate=useNavigate();
    const [startDate, setStartDate] = useState(new Date());
    const{user}=useContext(AuthContext)

const upost=useLoaderData();
const { _id,name,thumbnail,title,description, category,location, 
    volunteer_need,deadline,email } = upost;

const handleUpdatePost=event =>{
    event.preventDefault();

    const form =event.target;
    // const name=form.name.value;
    const name=form .name.value;
    const thumbnail=form.thumbnail.value;
    const title=form.title.value;
    const description=form.description.value;
    const category=form.category.value;
    const location=form.location.value;
    const volunteer_need=form.
    volunteer_need.value;
    const deadline=startDate;
    // const orgname=form.orgname.value;
    // const email=form.email.value;
    const email=user?.email;

   const updatedPost={name,thumbnail,title,description, category,location, volunteer_need,deadline,email}
console.log(updatedPost);


//fetch(`${import.meta.env.VITE_API_URL}/post`
fetch(`https://volunteer-management-server-neon.vercel.app/post-details/${_id}`,{
method:'PUT',
headers:{
    'content-type':'application/json'
},
body:JSON.stringify(updatedPost)

})
.then(res=>res.json())
.then(data=>{
console.log(data);
if(data.modifiedCount>0){
    Swal.fire({
        title: 'Success!',
        text: 'Post Updated Successfully!',
        icon: 'success',
        confirmButtonText: 'Done'
      })
}
navigate('/');
})
}




return (
    <div className='bg-[#9cbe65] p-24'>

    <h1 className='font-extrabold text-4xl'>Update Post </h1>
    <form onSubmit={handleUpdatePost} >

{/* //row */}
        <div className='md:flex gap-4  mb-6'>

            <div className='form-control w-full'>
                <label className='lebel'>
                    <span className='lebel-text'>Thumbnail</span>
                </label>
                <label className='input-group'>
                    <input type="text" placeholder='Thumbnail URL' defaultValue={ thumbnail}  name='thumbnail' className='input input-bordered w-full' />
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
                    <input type="text" placeholder='Post Title' defaultValue={ title} name='title' className='input input-bordered w-full' />
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
                    <input type="text" placeholder='Description' defaultValue={ description}  name='description' className='input input-bordered w-full' />
                </label>

            </div>
            <div className='form-control md:w-1/2 ml-4'>
                <label className='lebel'>
                    <span className='lebel-text'>Category</span>
                </label>
                <label className='input-group'>
                    <input type="text" defaultValue={ category}  placeholder='for example- healthcare, education, social service,
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
                    <input type="text" defaultValue={ location}  placeholder='Location' name='location' className='input input-bordered w-full' />
                </label>

            </div>
            <div className='form-control md:w-1/2 ml-4'>
                <label className='lebel'>
                    <span className='lebel-text'>No. of volunteers needed</span>
                </label>
                <label className='input-group'>
                    <input type="text" defaultValue={volunteer_need}  placeholder='how many volunteers needed' name='volunteer_need' className='input input-bordered w-full' />
                </label>

            </div>



        </div>
{/* //row */}
        <div className='md:flex gap-4  mb-6'>

            <div className='form-control md:w-1/2 '>
                <label className='lebel'>
                    <span className='lebel-text'>Deadline</span>
                </label>
                {/* <label className='input-group'>
                    <input type="text" placeholder='Deadline' name='deadline' className='input input-bordered w-full' />
                </label> */}
<DatePicker className='border p-2  md:w-full rounded-md' defaultValue={ deadline}    selected={startDate} onChange={(date) => setStartDate(date)} />
            </div>
            {/* <label className='lebel-text'>Deadline</label>
            <DatePicker 

            selected={startDate} onChange={(date) => setStartDate(date)} /> */}
            <div className='form-control md:w-3/4 ml-4'>
                <label className='lebel'>
                    <span className='lebel-text'>Organizer Name </span>
                </label>
                <label className='input-group'>
                    <input type="text" defaultValue={ name}  placeholder='Name' name='name'  className='input input-bordered w-full' />
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
                    <input type="email" placeholder=' Organizer email@gmail.com' name='email' defaultValue={ email} className='input input-bordered w-full' />
                </label>

            </div>
          



        </div>
<input type='submit' value="UPDATE POST" className='btn text-2xl font-bold text-green-500 bg-green-200 btn-block'></input>
    </form>


</div>
    );
};

export default UpdatePost;


// {* 
// {
//     // const newPost=useLoaderData();
//     const newPost=useParams();
//     const {_id,name,thumbnail,title,description, category,location, volunteerneed,deadline,email}= newPost;
  
// const [updatedpost,setUpdatedpost]=useState({});
//     const [startDate, setStartDate] = useState(new Date());
//     const{user}=useContext(AuthContext);
    
//         const handleUpdatePost= event =>{
//             event.preventDefault();
    
//             const form =event.target;
//             // const name=form.name.value;
//             // const name=user?.name
//             const name= form.name.value;
//             const thumbnail= form.thumbnail.value;
//             const title= form.title.value;
//             const description= form.description.value;
//             const category= form.category.value;
//             const location= form.location.value;
//             const volunteerneed= form.volunteerneed.value;
//             const deadline= startDate;
//             // const orgname=form.orgname.value;
//             // const email=form.email.value;
//             // const email=user?.email;
    
//            const updatedPost={name,thumbnail,title,description, category,location, volunteerneed,deadline,email}
//     console.log(updatedPost);
    
    
//     //fetch(`${import.meta.env.VITE_API_URL}/post`
//     fetch(`https://volunteer-management-server-neon.vercel.app/updatepost/${_id}`,{
//     // fetch('http://localhost:5173/updatePost/post',{
//         method:'PUT',
//         headers:{
//             'content-type':'application/json'
//         },
//         body:JSON.stringify(updatedPost)
    
//     })
//     .then(res=>res.json())
//     .then(data=>{
//         console.log(data);
//         if(data.insertedId){
//             Swal.fire({
//                 title: 'Success!',
//                 text: 'Updated Successfully!',
//                 icon: 'success',
//                 confirmButtonText: 'Done'
//               })
//         }
//     })

//         }

// //  fetch(`http://localhost:9000/post-details/${params.id}`)
//  useEffect(() => {
//     fetch(`http://localhost:9000/post-details/${newPost.id}`)
//     .then(res=>res.json())
//    .then(data=>{
//     setUpdatedpost(data);
//    })
    
//   }); 

//     return (
//         <div>
//             <div className='bg-[#cacaa5] p-24'>

// <h1 className='font-extrabold text-4xl'>Update Volunteer</h1>
// <form  onSubmit={handleUpdatePost} >
   


//     <div className='md:flex gap-4  mb-6'>

//         <div className='form-control w-full'>
//             <label className='lebel'>
//                 <span className='lebel-text'>Thumbnail</span>
//             </label>
//             <label className='input-group'>
//                 <input type="text" placeholder='Thumbnail URL' defaultValue={thumbnail}  name='thumbnail' className='input input-bordered w-full' />
//             </label>

//         </div>
      



//     </div>

//     <div className='md:flex gap-4  mb-6'>

       
//         <div className='form-control w-full'>
//             <label className='lebel'>
//                 <span className='lebel-text'>Post Title</span>
//             </label>
//             <label className='input-group'>
//                 <input type="text" placeholder='Post Title' defaultValue={title}  name='title' className='input input-bordered w-full' />
//             </label>

//         </div>



//     </div>

//     <div className='md:flex gap-4  mb-6'>

//         <div className='form-control md:w-1/2 '>
//             <label className='lebel'>
//                 <span className='lebel-text'>Description</span>
//             </label>
//             <label className='input-group'>
//                 <input type="text" placeholder='Description'  defaultValue={description}  name='description' className='input input-bordered w-full' />
//             </label>

//         </div>
//         <div className='form-control md:w-1/2 ml-4'>
//             <label className='lebel'>
//                 <span className='lebel-text'>Category</span>
//             </label>
//             <label className='input-group'>
//                 <input type="text"  defaultValue={category} placeholder='for example- healthcare, education, social service,
// animal welfare.' name='category' className='input input-bordered w-full' />
//             </label>

//         </div>



//     </div>

//     <div className='md:flex gap-4 mb-6'>

//         <div className='form-control md:w-1/2 '>
//             <label className='lebel'>
//                 <span className='lebel-text'>Location</span>
//             </label>
//             <label className='input-group'>
//                 <input type="text" placeholder='Location' name='location' defaultValue={location}  className='input input-bordered w-full' />
//             </label>

//         </div>
//         <div className='form-control md:w-1/2 ml-4'>
//             <label className='lebel'>
//                 <span className='lebel-text'>No. of volunteers needed</span>
//             </label>
//             <label className='input-group'>
//                 <input type="text" placeholder='how many volunteers needed' defaultValue={ volunteerneed}  name='volunteerneed' className='input input-bordered w-full' />
//             </label>

//         </div>



//     </div>

//     <div className='md:flex gap-4  mb-6'>

//         <div className='form-control md:w-1/2 '>
//             <label className='lebel'>
//                 <span className='lebel-text'>Deadline</span>
//             </label>
//             {/* <label className='input-group'>
//                 <input type="text" placeholder='Deadline' name='deadline' className='input input-bordered w-full' />
//             </label> */}
// <DatePicker className='border p-2  md:w-full rounded-md' defaultValue={deadline} selected={startDate} onChange={(date) => setStartDate(date)} />
//         </div>
//         {/* <label className='lebel-text'>Deadline</label>
//         <DatePicker 

//         selected={startDate} onChange={(date) => setStartDate(date)} /> */}
//         <div className='form-control md:w-3/4 ml-4'>
//             <label className='lebel'>
//                 <span className='lebel-text'>Organizer Name </span>
//             </label>
//             <label className='input-group'>
//                 <input type="text" placeholder='Name' defaultValue={email}  name='name'   className='input input-bordered w-full' />
//             </label>

//         </div>



//     </div>

//     <div className='md:flex gap-4  mb-6'>

//         <div className='form-control w-full'>
//             <label className='lebel'>
//                 <span className='lebel-text'> Organizer email</span>
//             </label>
//             <label className='input-group'>
//                 <input type="email" placeholder=' Organizer email@gmail.com' name='email' defaultValue={user?.email} className='input input-bordered w-full' />
//             </label>

//         </div>
      



//     </div>
// <input type='submit' value="UPDATE POST" className='btn text-2xl font-bold text-green-500 bg-green-200 btn-block'></input>
// </form>


// </div>
//         </div>

//     );
// }; 
    
//     *}