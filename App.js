import React, {  useEffect, useState } from 'react'

import { useParams } from 'react-router-dom'
import Header from './components/Header'
import { Body } from './components/Body'
import { createContext } from 'react'
import { createBrowserRouter ,Outlet} from 'react-router-dom'
import RestaurentMenu from './components/RestaurantMenu'
import { Help } from './components/Help'
// import { lazy ,Suspense} from 'react'
// const Help = lazy(()=> import('./Help'))


let Pname = 'Linitha'

export let context = createContext()

export const App = () => {


  let {resId} = useParams()
 
  console.log(resId)
  return (
    <div>
      <context.Provider value={Pname}>
      <Header/>
   <Outlet />
      </context.Provider>
      
      
   </div>
)
}

export let appRouter = createBrowserRouter([

  {
    path:'/',
    element:<App />,
    children:[
      {
        path:'/',
        element:<Body />
      },
      {
        path:'/offers',
        element:<h1>Offers</h1>
      },
      {
        path:'/help',
        element:<Help/>
        
      },
      {
        path:'/cart',
        element:<h1>cart</h1>
      },
     
      {
        path:'/restaurants/:restId',
        element:<RestaurentMenu />
      },
    ],
   
  }
])





  

