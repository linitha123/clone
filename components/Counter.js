import React, { useState , useEffect} from 'react'

const Counter = () => {
   
  let count = 0
  let [fetchData,setData1]=useState([
    {
      imgUrl : 'https://img.freepik.com/free-photo/front-view-breakfast-table-with-eggs-buns-cheese-fresh-juice-restaurant-during-daytime-food-meal-breakfast_140725-25904.jpg?size=626&ext=jpg&ga=GA1.1.1316105049.1693383838&semt=ais',
      title: 'Taj Mahal-Abids',
      decription:'North Indian Chinese, South Indian',
      rating: 4.4,
      price:'300 for two',
      time: '22 minutes'
  },
  {
      imgUrl : 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/smfhai0o8rnjuzp3ngxu',
      title: 'Taj Mahal-Abids',
      decription:'North Indian Chinese, South Indian',
      rating: 4.4,
      price:'300 for two',
      time: '22 minutes'
  },
  {
      imgUrl : 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/6ec34d4d10bbfb16ae63868909dd8119',
      title: 'Taj Mahal-Abids',
      decription:'North Indian Chinese, South Indian',
      rating: 4.4,
      price:'300 for two',
      time: '22 minutes'
  }
  ])
  
   
  useEffect(function(){
 data()
  })
  let data = async function(){
    let data1 = await fetch('https://fakestoreapi.com/products/1')
 let res = await data1.json()
 console.log(res)
     } 

  return (
    <div>
     {fetchData.map(function(ele){
      return <div>
        <img src={ele.imgUrl} alt='item'/>
        <h1>{ele.title}</h1>
        </div>
     })}
 
    </div>
    
  )
  
  


}


export default Counter