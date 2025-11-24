import React from 'react';
import logo from '../../assets/logo.png'
import { Link } from 'react-router';
const Logo = () => {
    return (
        <div>
            <Link to="/">
                <div className='flex items-end p-3 '>
                    <img className='w-12 h-12' src={logo} alt="" />
                    <p className="text-3xl font-bold -ms-2 ">
                        zap-shift
                    </p>
                </div>
            </Link>
        </div>
    );
};

export default Logo;