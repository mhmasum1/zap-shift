import React from 'react';
import amazonPic from '../../../assets/brands/amazon.png'
import amazonVecPic from '../../../assets/brands/amazon_vector.png'
import casioPic from '../../../assets/brands/casio.png'
import moonstarPic from '../../../assets/brands/moonstar.png'
import randstadPic from '../../../assets/brands/randstad.png'
import starPic from '../../../assets/brands/star.png'
import starPeoplePic from '../../../assets/brands/start_people.png'
import Marquee from 'react-fast-marquee';
const Brands = () => {
    return (
        <div className='pt-7 '>
            <div>
                <h3 className='font-bold text-2xl text-center pb-5'>We've helped thousands of sales teams</h3>
            </div>

            <div>
                <Marquee speed={60} pauseOnHover={true} direction={"right"} >

                    <img src={amazonPic} className="w-20 mx-10" />
                    <img src={amazonVecPic} className="w-20 mx-10" />
                    <img src={casioPic} className="w-20 mx-10" />
                    <img src={moonstarPic} className="w-20 mx-10" />
                    <img src={randstadPic} className="w-20 mx-10" />
                    <img src={starPic} className="w-20 mx-10" />
                    <img src={starPeoplePic} className="w-20 mx-10" />

                </Marquee>
            </div>
            <div className='border-t-2 border-dashed my-15 '></div>
        </div>
    );
};

export default Brands;