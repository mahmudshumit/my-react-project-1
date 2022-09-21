import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';

const MarketplaceDetail = () => {
    const{marketplaceId}=useParams();
    const [marketplace,setmarketplace]=useState({});

    useEffect(()=>{
        const url=`http://localhost:5000/marketplace/${marketplaceId}`;

        fetch(url)
        .then(res=>res.json())
        .then(data=>setmarketplace(data));
    },[])

     
    return (
        <div>
            <h1>Your booking detail:{marketplace.name}</h1>
           <div className='text-center'>
           <Link to="/checkout">
           <Button variant="outline-primary">Checkout</Button>
            </Link>
           </div>
        </div>
    );
}

export default MarketplaceDetail;
