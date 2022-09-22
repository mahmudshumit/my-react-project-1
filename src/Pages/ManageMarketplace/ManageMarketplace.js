import React from 'react';
import useMarketplace from '../../hooks/Usemarketplace';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

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
        <div className=' row'>
            <h2 className='text-center'>Manage your collection</h2>
            {
                marketplaces.map(marketplace=>
                
                
                // <div key={marketplace._id}>
                    
                   //<h3>{marketplace.name} <button >Delete</button></h3>  */}
                     
                  <div className=" col-sm-12 col-md-6 col-lg-4  align-items-stretch p-5">
                     <Card key={marketplace._id}
                    style={{ width: '18rem' }}>
                   <Card.Img variant="top" src={marketplace.img} />
                   <Card.Body>
                     <Card.Title>{marketplace.name}</Card.Title>
                     <Card.Text>
                       Some quick example text to build on the card title and make up the
                       bulk of the card's content.
                     </Card.Text>
                     <Button onClick={()=>handleDelete(marketplace._id)} variant="danger">Delete</Button>
                   </Card.Body>
                 </Card>
                  </div>
                   
                //    </div> 
                
                   
                   
                   
                   
                   )
            }
        </div>
    );
};

export default ManageMarketplace;



