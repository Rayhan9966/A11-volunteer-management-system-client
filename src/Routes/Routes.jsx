
// import {createBrowserRouter} from  'react-router-dom'
import { createBrowserRouter } from 'react-router-dom';
import Main from '../Layout/Main';
import Home from '../Pages/Home/Home';
import Login from '../Pages/Login/Login';
import Register from '../Pages/SignUp/Register';
import NeedVolunteer from '../Pages/NeedVolunteer';
import AddVolunteer from '../Pages/AddVolunteer';
import ProtectedRoute from './ProtectedRoute/ProtectedRoute';
import NotFoundPage from '../Pages/NotFoundPage';
import ViewPage from '../Pages/viewPage/ViewPage';

import UpdatePost from '../Pages/UpdatePost';
import About from '../Pages/About/About';
import MyVolunteer from '../Pages/MyVolunteer';





const router= createBrowserRouter([
    {
path :'/',
element: <Main></Main>,
errorElement: <NotFoundPage></NotFoundPage>,
children:[
    {

    index:true,
    element:<Home></Home>,
    // loader :()=> fetch(`${import.meta.env.VITE_API_URL}/posts`),
    loader :()=> fetch('https://volunteer-management-server-neon.vercel.app/posts'),
},
    {

    path:'/login',
    element:<Login></Login>,
},
    {

    path:'/myvolunteer',
    element:<MyVolunteer></MyVolunteer>,
    // loader :()=> fetch(`${import.meta.env.VITE_API_URL}/post`),
    loader :()=> fetch('https://volunteer-management-server-neon.vercel.app/post'),
},
  

{

    path:'/register',
    element:<Register></Register>,
},
{

    path:'/about',
    element:<ProtectedRoute>
<About></About>
    </ProtectedRoute>,
},
{

    path:'/updatePost/:id',
    element:<UpdatePost></UpdatePost>,
    // loader: async ({params}) => await fetch(`https://volunteer-management-server-neon.vercel.app/post/${params.id}`)
    // loader: async ({params}) => { await fetch(`http://localhost:9000/post-details/${params.id}`)
    loader: ({params}) =>  fetch(`https://volunteer-management-server-neon.vercel.app/post-details/${params.id}`)
        
    
    
    
},
{

    path:'/viewDetails/:id',
    element:<ProtectedRoute>
        <ViewPage></ViewPage>
    </ProtectedRoute>,
      loader: ({params}) =>  fetch(`https://volunteer-management-server-neon.vercel.app/post-details/${params.id}`)
},
{

    path:'/addvolunteer',
    element:
   <ProtectedRoute> <AddVolunteer></AddVolunteer>
   </ProtectedRoute>,
    
},
    {

        path:'/needvolunteer',
    element:<ProtectedRoute>
        <NeedVolunteer></NeedVolunteer>
    </ProtectedRoute>,
    //  loader :()=> fetch(`${import.meta.env.VITE_API_URL}/post`)
    loader: ()=> fetch('https://volunteer-management-server-neon.vercel.app/post')
    // loader: ()=> fetch('http://localhost:5173/updatePost/post')
}
]
    },

])


export default router;