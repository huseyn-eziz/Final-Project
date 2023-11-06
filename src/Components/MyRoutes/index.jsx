import ErrorPage from "../../Pages/ErrorPage";
import Homepage from "../../Pages/Homepage";
import Project from "../../Pages/Project";
import Services from "../../Pages/Services";
import Contact from "../../Pages/Contact";
import Blog from "../../Pages/Blog";





export const myRoutes =[
    {id:1, path:"/",element: <Homepage/> , title:'Home'},
    {id:2, path:"/services",element: <Services/> , title:'Services'},
    {id:3, path:"/blog",element: <Blog/> , title:'Blog'},
    {id:4, path:"/project",element: <Project/> , title:'Project'},
    {id:5, path:"/contact",element: <Contact/> , title:'Contact'},
    {id:6, path:"*", element: <ErrorPage/> }
]