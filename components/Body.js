import { useEffect, useState } from "react";
import Card from "./Card";
import { Link } from "react-router-dom";
import { context } from "../App";
import { useContext } from "react";
import { cardVeg } from "./Card";
import './card.css'
export function Body(props){
  let name = useContext(context)
 
  let RestaurentVeg = cardVeg(Card)
  let [searchBox,setSearchBox] = useState('')
  let [filteredData,setFilteredData] = useState([])
   let [data,setData] = useState(  [
    {
      imgUrl : 'https://img.freepik.com/free-photo/front-view-breakfast-table-with-eggs-buns-cheese-fresh-juice-restaurant-during-daytime-food-meal-breakfast_140725-25904.jpg?size=626&ext=jpg&ga=GA1.1.1316105049.1693383838&semt=ais',
      title: 'Taj Mahal-Abids',
      decription:'North Indian Chinese, South Indian',
      rating: 4.4,
      price:'300 for two',
      time: '22 minutes'
  },

   {
    imgUrl : 'https://img.freepik.com/free-photo/front-view-breakfast-table-with-eggs-buns-cheese-fresh-juice-restaurant-during-daytime-food-meal-breakfast_140725-25904.jpg?size=626&ext=jpg&ga=GA1.1.1316105049.1693383838&semt=ais',
    title: 'Grand Hotel',
    decription:'Biryani Chinese',
    rating: 4.2,
    price:'300 for two',
    time: '25 minutes'
  },
  {
    imgUrl : 'https://img.freepik.com/free-photo/front-view-breakfast-table-with-eggs-buns-cheese-fresh-juice-restaurant-during-daytime-food-meal-breakfast_140725-25904.jpg?size=626&ext=jpg&ga=GA1.1.1316105049.1693383838&semt=ais',
    title: 'Bawarchi',
    decription:'Tandoor, chinese',
    rating: 4.2,
    price:'300 for two',
    time: '30 minutes'
  }
   ])
let getData = async function(){
  let listOfItems = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.406498&lng=78.47724389999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING')
  let listOfItemsData = await listOfItems.json()

  let listOfRestaurents = listOfItemsData?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
  setData(listOfRestaurents)
 setFilteredData(listOfRestaurents)
 
}
useEffect(()=>{
  getData()
},[])
    return(
     <div>
 <input type='text' onChange={function(e){
  console.log(e.target.value)
  setSearchBox(e.target.value)

 }}/>
 <button onClick={function(){
  let filterdItem = data.filter(function(ele){
      return ele.info.name.toUpperCase().includes(searchBox.toUpperCase())
   
  })
  setFilteredData(filterdItem)


 }}>search</button>
 <button onClick={function(){
    getData()
 }}>
  All
 </button>
<button onClick={function(){
   let topRatiedItems =filteredData.filter(function(ele){
    return ele?.info?.avgRating > 4.2
   })
   setFilteredData(topRatiedItems)

   
}}>topRatedItems</button>

<h3>{name}, Whats on your mind?</h3>
    
        <div className='container'>
        {console.log(data)}
  {filteredData.map(function(ele){

      return <Link to={'/restaurants/'+ele.info.id}>{ele?.info?.veg ? <RestaurentVeg item={ele}/> : <Card item={ele} />}</Link>
  })}
        </div>
        </div>
      
    )
}
