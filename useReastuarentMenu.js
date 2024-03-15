import { useEffect, useState } from "react"

export function useRestuarentMenu(menu_url){
  let [showMenu,setShowMenu] = useState([])
  useEffect(()=>{
    fetchData()
},[])
    let fetchData=async function(){
             let data = await fetch(menu_url)
             let json = await data.json()
setShowMenu(json)
    }
    return showMenu
   
}