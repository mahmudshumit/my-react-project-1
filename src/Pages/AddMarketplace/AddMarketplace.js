import React from 'react';
import { useForm } from "react-hook-form";

const AddMarketplace = () => {
    const { register, handleSubmit } = useForm();
  const onSubmit = data => {
    console.log(data);
    const url=`http://localhost:5000/marketplace`;
    fetch(url,{


        method:'POST',
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify(data)
    }
        
        
        
        )
        .then(res=>res.json())
        .then (result=>{
            console.log(result);
        })
  };
   
    return (
        <div className='w-50 mx-auto'>
            <h1>Add your Collection</h1>
            <form className='d-flex flex-column'onSubmit={handleSubmit(onSubmit)}>
      <input className='mb-2' placeholder='name' {...register("name", { required: true, maxLength: 20 })} />
      <textarea className='mb-2'  placeholder='description' {...register("description")} />
      <input className='mb-2'  placeholder='price' type="number" {...register("price")} />
      <input className='mb-2'  placeholder='Photo URL' type="text" {...register("img")} />
      <input type="submit" value='Add Collection' />
    </form>
        </div>
    );
}

export default AddMarketplace;
