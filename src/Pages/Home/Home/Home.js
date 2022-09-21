import React from 'react';
import PageTitle from '../../Shared/PageTitle/PageTitle';
import Banner from '../Banner/Banner';
import Categories from '../Categories/Categories';
import Marketplaces from '../Marketplaces/Marketplaces';


const Home = () => {
    return (
        <>
         <PageTitle title="Home"></PageTitle>
        <Banner></Banner>
        <Marketplaces></Marketplaces>
        <Categories></Categories>
        </>
    );
}

export default Home;
