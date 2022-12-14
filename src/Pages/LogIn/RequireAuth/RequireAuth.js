import React from 'react';

import { useAuthState, useSendEmailVerification } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';

const RequireAuth = ({children}) => {
    const [sendEmailVerification, sending, error] = useSendEmailVerification(auth);
    const [user,loading] = useAuthState(auth);
    const location=useLocation();
    if(loading){
        return <Loading></Loading>
    }

    
    if(!user){
        return   <Navigate to="/login" state={{ from: location }} replace />;

        
    }

     console.log(user);
    if(user.providerData[0]?.providerId==='password' &&!user.emailVerified){
        return <div className='text-center mt-5'>
            <h2 className='text-danger'>Email is not Verified</h2>
            <h3 className='text-success'>Please Verify your email Address</h3>
            <button className='btn  btn-success'
        onClick={async () => {
          await sendEmailVerification();
          toast('Sent email');
        }}
      >
       Send  Verification email
      </button>
      <ToastContainer></ToastContainer>
        </div>
    }
    return  children;



      
    
};

export default RequireAuth;
