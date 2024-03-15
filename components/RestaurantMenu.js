import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import {useRestuarentMenu} from '../useReastuarentMenu'
import ListItem from "./ListItem"
import './Header.css'

function RestaurentMenu(){
    let [showMenu,setShowMenu] = useState(null)
    let {restId} = useParams()
    let url = 'https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.406498&lng=78.47724389999999&restaurantId='
    let url1 = 'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/'
     let menu_url =  `${url}${restId}`
    let json_data = useRestuarentMenu(menu_url)
    
  console.log(json_data)
 

  let showItems = json_data?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards
  console.log(showItems)

let items = showItems?.filter(function(ele){
  return ele?.card?.card['@type'] ==='type.googleapis.com/swiggy.presentation.food.v2.ItemCategory'
})
console.log(items)
let cardItems = items?.map(function(ele){
  return ele?.card?.card?.itemCards
})
console.log(cardItems)
// let cardItems = items[0]?.card?.card?.itemCards


// console.log(cardItems)



   return <div>
 {/* <h1>{showMenu?.name}</h1>
 <h4>{showMenu?.areaName}</h4>
 <p>{showMenu?.sla?.slaString}</p>
 <p>{showMenu?.costForTwoMessage}</p> */}
{/* 
 {cardItems.map(function(ele){
  return <div className="d-flex">
    <div>
    <h3>{ele?.card?.info?.name}</h3>
    <p>{(ele?.card?.info?.price)/100}</p>
    <p>{(ele?.card?.info?.description)}</p>
   </div>
    <img src={url1+ele?.card?.info?.imageId} alt='' style={{width:'150px', height:'100px;'}}/>
    </div>
 })} */}
 {cardItems.map(function(ele){
   return <div>
    {ele.map(function(ele){
      return <div>
       
        <ListItem item={ele}/>
        </div>
    })}
    </div>
 })}
   </div>
  


    
    
}

export default RestaurentMenu