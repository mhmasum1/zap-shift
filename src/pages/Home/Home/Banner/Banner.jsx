import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import banner1 from '../../../../assets/banner/banner1.png'
import banner2 from '../../../../assets/banner/banner2.png'
import banner3 from '../../../../assets/banner/banner3.png'
import { Carousel } from 'react-responsive-carousel';
import { BsArrowUpRightCircleFill } from 'react-icons/bs';
const Banner = () => {
    return (
        <Carousel
            autoPlay={true}
            interval={3000}
            infiniteLoop={true}>

            <div className='relative'>
                <img src={banner1} />
                <button className="btn btn-primary absolute bottom-23 left-20 text-black">Track Your Parcel</button>
                <button className="btn text-3xl absolute bottom-23 left-57 text-black">
                    <BsArrowUpRightCircleFill />
                </button>
                <button className="btn btn-primary absolute bottom-23 left-72 text-black">Track Your Parcel</button>
            </div>
            <div>
                <img src={banner2} />
            </div>
            <div>
                <img src={banner3} />
            </div>
        </Carousel>
    );
};

export default Banner;