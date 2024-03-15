import React from "react";
import ReactDOM from "react-dom/client";
import RestaurentMenu from "./components/RestaurantMenu";
import { RouterProvider } from "react-router-dom";
import { appRouter } from "./App";
import './index.css'
import b from './components/normal'
let root = ReactDOM.createRoot(document.getElementById('root'))
 

root.render(
<div>
<RouterProvider router={appRouter}/>

</div>

)
