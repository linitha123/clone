import React from 'react'
import './Header.css'
const ListItem = (props) => {
  let url1 = 'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/'

  return (

    <div className='container'>
     <div>
    <h4>{props?.item?.card?.info?.name}</h4>
<p>{props?.item?.card?.info?.description}</p>
<p>{(props?.item?.card?.info?.price)/100}</p>
</div>
<img src={`${url1}${props?.item?.card?.info?.imageId}`} alt='food'/>
    </div>
    
    
  )
}

export default ListItem