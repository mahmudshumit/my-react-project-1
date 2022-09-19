import React, { useRef } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';
import Social from '../Social/Social';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const LogIn = () => {
    const emailRef=useRef('');
    const passwordRef=useRef('');
    const navigate=useNavigate();
    const location=useLocation();

     //user coming from where for redirect
    let from = location.state?.from?.pathname || "/";


   


//firebase hooks for log in

    const [
      signInWithEmailAndPassword,
      user,
      loading,
      error,
    ] = useSignInWithEmailAndPassword(auth);
//reset password
    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);
    


    if(user){
      navigate('/home');
    }

    if(loading ||sending){
      return <Loading></Loading>
  }

  if(user){
    navigate(from,{replace:true});
  }
//handling error
  let errorSocial;
  if (error ) {
      
          errorSocial= <p className='text-danger'>Error: {error?.message}</p>
          
        
  
      }

    //not refresh the page
    const handleSubmit=event=>{
        event.preventDefault();
        const email=emailRef.current.value;
        const password=passwordRef.current.value;
   
        signInWithEmailAndPassword(email,password);
    }

    //navigate it to register
    const navigateRegister=()=>{
    navigate('/register');
    }


//reset password

const resetPassword= async()=>{
  const email=emailRef.current.value;
  if(email){
    await sendPasswordResetEmail(email);
    toast("sent email");
  
  }
 else{
  toast('Enter your email address')
 }
}





    return (
        <div className='container w-25 mx-auto'>
            <h2 className='text-center mt-3 mb-4'>Please Log In</h2>
            <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-4" controlId="formBasicEmail">
        
        <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        
        <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button  variant="primary w-50 d-block mx-auto mb-2" type="submit">
       LogIn
      </Button>
    </Form>
    {errorSocial}
    
    <p>New to CosMos? <Link to="/register" className='text-primary pe-auto text-decoration-none' onClick={navigateRegister}>Please Register</Link></p>
    <p>Forget Password?<button className='btn btn-link text-primary pe-auto text-decoration-none' onClick={resetPassword}>Reset Password</button></p>

    <Social></Social>
    <ToastContainer />
        </div>
    );
}

export default LogIn;
