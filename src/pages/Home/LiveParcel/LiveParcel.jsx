import React from 'react';
import liveTrac from '../../../assets/live-tracking.png'
import safeDelivery from '../../../assets/safe-delivery.png'

const LiveParcel = () => {

    const features = [
        {
            title: "Live Parcel Tracking",
            description:
                "Stay updated in real-time with our live parcel tracking feature. From pick-up to delivery, monitor your shipment’s journey and get instant status updates for complete peace of mind.",
            image: liveTrac,
        },
        {
            title: "100% Safe Delivery",
            description:
                "We ensure your parcels are handled with the utmost care and delivered securely to their destination. Our reliable process guarantees safe and damage-free delivery every time.",
            image: safeDelivery,
        },
        {
            title: "24/7 Call Center Support",
            description:
                "Our dedicated support team is available around the clock to assist you with any questions, updates, or delivery concerns anytime you need us.",
            image: safeDelivery,
        },
    ];

    return (
        <div className='grid grid-cols-1 gap-6'>

            {features.map((item, index) => (

                <div
                    key={index}
                    className='bg-gray-100 rounded-2xl p-6'
                >
                    <div className='grid grid-cols-[220px_40px_1fr] items-center'>
                        <div className='flex justify-center'>
                            <img
                                src={item.image}
                                alt={item.title}
                                className='max-h-32 object-contain'
                            />
                        </div>

                        <div className="flex justify-center">
                            <div className="border-l-2 border-dashed border-gray-400 h-24"></div>
                        </div>
                        <div className='space-y-2'>
                            <h3 className='text-2xl font-bold'>
                                {item.title}
                            </h3>

                            <p>
                                {item.description}
                            </p>
                        </div>

                    </div>
                </div>

            ))}

        </div>
    );
};

export default LiveParcel;
