import React from 'react';
import logo from '../../assets/logo.png'
const Logo = () => {
    return (
        <div>
            <div className='flex items-end '>
                <img src={logo} alt="" />
                <p className="text-3xl font-bold -ms-2 ">
                    zap-shift
                </p>
            </div>
        </div>
    );
};

export default Logo;