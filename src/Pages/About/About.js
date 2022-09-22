import { async } from '@firebase/util';
import React, { useState } from 'react';
import PageTitle from '../Shared/PageTitle/PageTitle';


const About = () => {
    const [walletAddress, setwalletAddress] = useState(null);

    const connectWallet=async()=>{
        if (typeof window.ethereum !== 'undefined') {
          const accounts= await  window.ethereum.request({ method: 'eth_requestAccounts' });
             setwalletAddress(accounts[0])
          }
    }
    return (
        
          
           <div className='text-center mt-5'>
             <PageTitle title="COSMOS"></PageTitle>
            <h2 className=' text mt-5'>Account:{walletAddress}</h2>

            <button onClick={connectWallet} className='btn  btn-success mt-3'
       
      >
       Connect Wallet
      </button>
        </div>
        
    );
}

export default About;


// https://i.ibb.co/VqGQK4G/c1.jpg
//  https://i.ibb.co/wRm3wJ2/c2.jpg
//  https://i.ibb.co/HFKzGYH/c3.jpg
//  https://i.ibb.co/hXr295f/c4.png
//  https://i.ibb.co/L6NXDtd/c5.png
//  https://i.ibb.co/MRtGTN4/c6.jpg
