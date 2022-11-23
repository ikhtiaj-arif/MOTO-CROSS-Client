import React from 'react';
import { Outlet } from 'react-router-dom';
import Nav from '../Pages/Shared/Nav';

const Main = () => {
    return (
        <div>
            <Nav/>
            <Outlet/>
        </div>
    );
};

export default Main;