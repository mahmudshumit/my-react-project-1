import { useEffect, useState } from "react";

const useMarketplace =()=>{
    const [marketplaces,setMarketplaces]= useState([]);
useEffect(()=>{

fetch('http://localhost:5000/marketplace')
.then(res=>res.json())
.then(data=>setMarketplaces(data));




},[]);
return[marketplaces,setMarketplaces]
}


export default useMarketplace;