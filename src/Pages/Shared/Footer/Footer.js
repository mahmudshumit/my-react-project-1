import React from 'react';

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <footer className='text-center mt-5'>
            <p><small>Copyright @ {year} All right reserved by CosMos Nft Marketplace </small></p>
        </footer>
    );
};

export default Footer;