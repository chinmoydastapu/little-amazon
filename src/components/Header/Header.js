import React from 'react';
import Logo from '../../images/Logo.svg';
import HeaderImg from '../../images/header-img.jpg';
import './Header.css'

const Header = () => {
    return (
        <header>
            <nav className="navbar bg-[#1C2B35] text-white px-10 lg:px-28 sticky top-0">
                <div className="flex-1">
                    <a href='/logo'><img src={Logo} alt="" /></a>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal p-0">
                        <li><a className='hover:text-orange-400' href='/order'>Order</a></li>
                        <li><a className='hover:text-orange-400' href='/review'>Order Review</a></li>
                        <li><a className='hover:text-orange-400' href='/inventory'>Manage Inventory</a></li>
                        <li><a className='hover:text-orange-400' href='/sign-in'>Sign In</a></li>
                    </ul>
                </div>
            </nav>

            <div className='header-bg grid grid-cols-1 lg:grid-cols-2 items-center mx-auto py-8'>
                <div className='mx-auto px-10'>
                    <small className='text-orange-400 font-semibold'>Sale up to 70% off</small>
                    <h1 className='text-white text-4xl font-bold mt-5'>New Collection For Fall</h1>
                    <p className='text-white text-lg mt-4'>Discover all the new arrivals of ready-to-wear collection.</p>
                    <button className='btn bg-orange-600 hover:bg-orange-500 mt-8 border-none'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-5 mr-2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                    </svg>

                        Shop Now</button>
                </div>
                <div className='mx-auto'>
                    <img className='w-full lg:w-4/5 rounded-3xl' src={HeaderImg} alt="" />
                </div>
            </div>
        </header>
    );
};

export default Header;