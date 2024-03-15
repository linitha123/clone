import React from 'react'
import './card.css'
import { context } from '../App'
import { useContext } from 'react'
const Card = (props) => {

let name = useContext(context)
let url = 'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/' 
  return (
   <div style={{textAlign:'center'}}>
    <h4>{name}</h4>
   <img src={url+props?.item?.info?.cloudinaryImageId} alt='food' id='img'/>
 <h5>{props?.item?.info?.name}</h5>
  <p>{props?.item?.info?.avgRating}</p>
  <p>{props?.item?.info?.sla?.slaString}</p>
  <p>{props?.item?.info?.cuisines[0]}</p>
  <p>{props?.item?.info?.areaName}</p>
   </div>
  )
}
export default Card

export function cardVeg(Card){
  return  function(props){
    return <div>
  <label>Veg</label>
  <Card {...props} style={{backgroudColor:'green'}}/>
    </div>
    
  }
}



