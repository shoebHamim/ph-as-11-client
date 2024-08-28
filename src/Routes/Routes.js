import AddService from "../Components/AddService/AddService";
import Blog from "../Components/Blog/Blog";
import Home from "../Components/Home/Home";
import MyReviews from "../Components/MyReviews/MyReviews";
import Register from "../Components/Register/Register";
import AllServices from "../Components/Services/AllServices";
import ServiceDetails from "../Components/Services/ServiceDetails";
import Services from "../Components/Services/Services";
import Main from "../layout/Main";
import PrivateRoute from "./PrivateRoute/PrivateRoute";

const { createBrowserRouter } = require("react-router-dom");
const { default: Login } = require("../Components/Login/Login");

export const  router=createBrowserRouter([
  {path:'/',element:<Main></Main>,children:[
    {path:'/',element:<Home></Home> },
    {path:'/blog',element:<Blog></Blog> },
    {path:'/login',element:<Login></Login>},
    {path:'/myreviews',element:
    <PrivateRoute>
      <MyReviews></MyReviews>
    </PrivateRoute>},
    {path:'/register',element:<Register></Register>},
    {path:'/services',element:<AllServices></AllServices>},
    {path:'/addservice',element:
    <PrivateRoute>
      <AddService></AddService>
    </PrivateRoute>},
    {path:'/serviceDetails/:id',
    element:<ServiceDetails></ServiceDetails>,
    loader:async({params})=>{
      return fetch(`https://shootpro-server.vercel.app/serviceDetails/${params.id}`)
    }
  }

    
  ]}
])

