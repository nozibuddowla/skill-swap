import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../component/Navbar';
import Footer from '../component/Footer';

const RootLayout = () => {
    return (
        <div className='flex flex-col min-h-screen'>
            <header>
                <Navbar></Navbar>
            </header>
            <main className='flex-1'>
                <Outlet></Outlet>
            </main>
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default RootLayout;