import React, { use } from 'react';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import ReviewCart from './ReviewCart';


const Reviews = ({ reviewsPromise }) => {
    const reviews = use(reviewsPromise)
    console.log(reviews)
    return (
        <div>
            <div className='text-center'>
                <h3 className="text-3xl text-center">Review</h3>
                <p className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis libero vitae repellat qui nesciunt nam earum eum similique inventore eius.</p>
            </div>
            <div>
                <Swiper
                    effect={'coverflow'}
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={3}
                    coverflowEffect={{
                        rotate: 50,
                        stretch: 0,
                        depth: 100,
                        modifier: 1,
                        slideShadows: true,
                    }}
                    pagination={true}
                    modules={[EffectCoverflow, Pagination]}
                    className="mySwiper"
                >
                    {
                        reviews.map(review => (
                            <SwiperSlide key={review.id}>
                                <ReviewCart review={review} ></ReviewCart>
                            </SwiperSlide>
                        ))
                    }

                </Swiper>
            </div>
        </div>
    );
};

export default Reviews;