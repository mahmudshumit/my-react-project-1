import React from 'react';
import { Button } from 'react-bootstrap';
import glogo from '../../../images/glogo.png';
import flogo from '../../../images/flogo.png';
import gitlogo from '../../../images/gitlogo.png';
import { useSignInWithFacebook, useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useNavigate } from 'react-router-dom';
import Loading from '../../Shared/Loading/Loading';
const Social = () => {


    const navigate=useNavigate();
   
   


    //googole authentication
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
   



  ///github authentication
  const [signInWithGithub, gituser, gitloading, giterror] = useSignInWithGithub(auth);


  //facebook
  const [signInWithFacebook, fuser, floading, ferror] = useSignInWithFacebook(auth);

if(loading ||gitloading ||floading){
    return <Loading></Loading>
}
  let errorSocial;
  if (error || giterror ||ferror) {
      
          errorSocial= 
          <p className='text-danger'>Error: {error?.message}   {giterror?.message} {ferror?.message}</p>
       
  
      }

if(user || gituser||fuser){
  navigate('/home');
}

        
    return (
        <div>
            <div className='d-flex align-items-center'>
                <div style={{height:'1px'}}  className="bg-primary w-50"></div>
                <p className='mt-2 px-2'>OR</p>
                <div style={{height:'1px'}}  className="bg-primary w-50"></div>
            </div>
            {errorSocial}
            <Button onClick={() => signInWithGoogle()}  variant="outline-warning w-70 d-block mx-auto my-3">
            <img style={{ width: '20px' }} src={glogo} alt="" />
                    <span className='px-2'>Google Sign In</span>
                    </Button>
                    <Button onClick={() => signInWithFacebook()}  variant="outline-primary w-70 d-block mx-auto my-3">
            <img style={{ width: '20px' }} src={flogo} alt="" />
                    <span className='px-2'>Facebook Sign In</span>
                    </Button>
                    <Button  onClick={() => signInWithGithub()} variant="outline-dark w-70 d-block mx-auto my-3">
            <img style={{ width: '20px' }} src={gitlogo} alt="" />
                    <span className='px-2'>Github Sign In</span>
                    </Button>
        </div>
    );
}

export default Social;
