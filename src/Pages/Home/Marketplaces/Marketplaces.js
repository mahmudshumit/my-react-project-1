import React, { useEffect, useState } from 'react';
import Marketplace from '../Marketplace/Marketplace';
import './Marketplaces.css';

const Marketplaces = () => {


const [marketplaces,setMarketplaces]= useState([]);
useEffect(()=>{

fetch('Marketplace.json')
.then(res=>res.json())
.then(data=>setMarketplaces(data));




},[])


    return (
        <div id='marketplaces' className='container' >
          <div className='row'>
          <h1 className='text-center mt-5 mb-5'>Our Collections</h1>

<div className="matketplaces-container">
{
       
       marketplaces.map(marketplace=><Marketplace
        key={marketplace.id}
        marketplace={marketplace}
       >
       </Marketplace>)
       }
</div>

          </div>
           



        </div>
    );
}

export default Marketplaces;
