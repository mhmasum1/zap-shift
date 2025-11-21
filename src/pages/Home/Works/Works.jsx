import React from 'react';
import trackPic from '../../../assets/bookingIcon.png'
const Works = () => {
    const cards = [
        {
            title: "Booking Pick & Drop",
            description:
                "From personal packages to business shipments — we deliver on time, every time.",
        },
        {
            title: "Cash On Delivery",
            description:
                "From personal packages to business shipments — we deliver on time, every time.",
        },
        {
            title: "Delivery Hub",
            description:
                "From personal packages to business shipments — we deliver on time, every time.",
        },
        {
            title: "Booking SME & Corporate",
            description:
                "From personal packages to business shipments — we deliver on time, every time.",
        },
    ];

    return (

        <div className='p-10'>
            <div>
                <h3 className='font-bold text-3xl pb-3'>How it Works</h3>
            </div>
            <div className='grid gap-3  sm:grid-cols-2 lg:grid-cols-4'>
                {
                    cards.map((card, index) => (
                        <div key={index} className=' bg-gray-100 p-3 rounded-2xl space-y-7'>
                            <img src={trackPic} alt="" />
                            <p className='text-2xl font-bold'>{card.title}</p>
                            <p>{card.description}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Works;