import React from 'react';
import notfound from '../../../images/music.jpg';
const NotFound = () => {
    return (
        <div >
            <h2 className='text-primary text-center'>Panda is Sleeping</h2>
            <img className="rounded mx-auto d-block" src={notfound} alt="/"/>
        </div>
    );
}

export default NotFound;
