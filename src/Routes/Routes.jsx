
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




const router= createBrowserRouter([
    {
path :'/',
element: <Main></Main>,
errorElement: <NotFoundPage></NotFoundPage>,
children:[
    {

    index:true,
    element:<Home></Home>,
    loader :()=> fetch(`${import.meta.env.VITE_API_URL}/posts`),
},
    {

    path:'/login',
    element:<Login></Login>,
},
{

    path:'/register',
    element:<Register></Register>,
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
    </ProtectedRoute>
}
]
    },

])


export default router;