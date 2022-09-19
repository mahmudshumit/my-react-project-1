import React from 'react';
import { Button } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';

const MarketplaceDetail = () => {
    const{marketplaceId}=useParams();

     
    return (
        <div>
            <h1>welcome to detail page:{marketplaceId}</h1>
           <div className='text-center'>
           <Link to="/checkout">
           <Button variant="outline-primary">Checkout</Button>
            </Link>
           </div>
        </div>
    );
}

export default MarketplaceDetail;
