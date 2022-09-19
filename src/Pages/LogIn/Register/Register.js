


import React, { useState } from 'react';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';


import './Register.css';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import Social from '../Social/Social';
import Loading from '../../Shared/Loading/Loading';


const Register = () => {


    //terms and condition state

    const[agree,setAgree]=useState(false);




    //hooks for register 
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth,{sendEmailVerification:true});

//update profile
      const [updateProfile, updating, profileError] = useUpdateProfile(auth);


      //navigate to login page

    const navigate = useNavigate();

    const navigateLogin = () => {
        navigate('/login');
    }

    if(loading ||updating){
        return <Loading></Loading>
    }


//handle register 

   const handleRegister= async event =>{
    event.preventDefault();
    const name=event.target.name.value;
    const email=event.target.email.value;
    const password=event.target.password.value;
    // const agree= event.target.terms.checked;


    await createUserWithEmailAndPassword(email, password);
    await updateProfile({ displayName:name });
    console.log('Updated profile');
    navigate('/home');

   

   }

    return (
        <div className='register-form'>
        <h2 className='title'>Register Here</h2>
        <form onSubmit={handleRegister}>
            <input type="text" name="name" id="" placeholder='Enter Your Name' />

            <input type="email" name="email" id="" placeholder='Email Address' required />

            <input type="password" name="password" id="" placeholder='Password' required />
            <input type="password" name="confirm-password" id="" placeholder='Confirm your Password' required />
            <input onClick={()=>setAgree(!agree)} type="checkbox" name="terms" id="terms" />
            
            <label className={agree? 'ps-2 text-primary': 'ps-2 text-danger'} htmlFor="terms">Agree Our Terms and Conditions</label>
            <input
                disabled={!agree}
                className='w-50 mx-auto btn btn-primary mt-2'
                type="submit"
                value="Register" />
        </form>
        <p>Already have an account? <Link to="/login" className='text-primary pe-auto text-decoration-none' onClick={navigateLogin}>Please Login</Link> </p>
         <Social></Social>
    </div>
    );
}

export default Register;
