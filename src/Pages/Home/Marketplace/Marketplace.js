import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Marketplace.css';

const Marketplace = ({marketplace}) => {

    const {id,name,img,description,price}=marketplace;
    const navigate=useNavigate();
    const navigateTomarketplaceDetail=id=>{

            navigate(`/marketplace/${id}`);
    }
    return (
        <div className="marketplace">

             <img src={img} className='w-100' alt="/"/> 
              <h2>{name}</h2>  
              <p>Price:${price}</p>  
              <p><small>{description}</small></p>
              <button onClick={()=>navigateTomarketplaceDetail(id)} className="btn btn-primary">Buy Now</button>


        </div>
    );
}

export default Marketplace;
