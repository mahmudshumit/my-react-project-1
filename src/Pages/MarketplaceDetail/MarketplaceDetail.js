import React from 'react';
import { useParams } from 'react-router-dom';

const MarketplaceDetail = () => {
    const{marketplaceId}=useParams();

     
    return (
        <div>
            <h1>welcome to detail page:{marketplaceId}</h1>
        </div>
    );
}

export default MarketplaceDetail;
