import {createBrowserRouter} from "react-router-dom";
import Home from "../views/home/Home.js";
import Lodge from "../views/lodge/Lodge.js";
import About from "../views/about/About.js";
import NotFounded from "../views/not-founded/NotFounded.js";

const routes = createBrowserRouter([
    {
        path: '/',
        element: <Home/>,
    },
    {
        path: '/about',
        element: <About/>,
    },
    {
        path: '/lodges/:id',
        element: <Lodge/>,
    },
    {
        path: '*',
        element: <NotFounded/>,
    },
])

export default routes;
