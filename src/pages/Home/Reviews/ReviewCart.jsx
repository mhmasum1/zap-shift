import React from 'react';
import { FaQuoteLeft } from 'react-icons/fa';

const ReviewCart = ({ review }) => {
    const { userName, review: testimonial, user_photoURL, delivery_email } = review;
    return (
        <div className="card max-w-sm bg-[#F5F7F8] rounded-2xl shadow-sm p-6">
            {/* Quote icon */}
            <div className="text-teal-300">
                <FaQuoteLeft className="text-3xl" />
            </div>

            {/* Main text */}
            <p className="mt-4 text-sm leading-relaxed text-slate-700">
                {testimonial}
            </p>

            {/* Dashed divider */}
            <div className="mt-4 mb-5 border-t border-dashed border-slate-300" />

            {/* Avatar + name + designation */}
            <div className="flex items-center gap-3">
                {/* Round avatar circle */}
                <div>
                    <img className='w-9 h-9 rounded-2xl' src={user_photoURL} alt="" />
                </div>

                <div>
                    <p className="text-sm font-semibold text-[#004D52]">
                        {userName}
                    </p>
                    <p className="text-xs text-slate-500">
                        {delivery_email}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ReviewCart;