import React from 'react';
import useMarketplace from '../../hooks/Usemarketplace';

const ManageMarketplace = () => {
    const [marketplaces,setMarketplaces] =useMarketplace();


    const handleDelete= id =>{
        const procced=window.confirm('Are you sure you want to delete ');
        if(procced){
            const url=`http://localhost:5000/marketplace/${id}`;

        fetch(url,{
            method:'DELETE'
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            const remaining=marketplaces.filter(marketplace=>marketplace._id!==id);
            setMarketplaces(remaining);
        })
        }
    }

    return (
        <div className='w-50 mx-auto'>
            <h1>Manage your collection</h1>
            {
                marketplaces.map(marketplace=><div key={marketplace._id}>
                    
                   <h3>{marketplace.name} <button onClick={()=>handleDelete(marketplace._id)}>Delete</button></h3> 
            
                   </div> )
            }
        </div>
    );
};

export default ManageMarketplace;
