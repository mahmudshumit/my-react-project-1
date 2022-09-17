import React from 'react';
import './Marketplace.css';

const Marketplace = ({marketplace}) => {

    const {name,img,description,price}=marketplace;
    return (
        <div className="marketplace">

             <img src={img} className='w-100' alt="/"/> 
              <h2>{name}</h2>  
              <p>Price:${price}</p>  
              <p><small>{description}</small></p>
              <button  className="btn btn-primary">Buy Now</button>


        </div>
    );
}

export default Marketplace;
