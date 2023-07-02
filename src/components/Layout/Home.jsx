import React from 'react';
import Header from '../Header/Header';
import { Outlet } from 'react-router-dom';

const Home = () => {
    return (
        <div className='w-11/12 mx-auto mt-3 '>
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default Home;