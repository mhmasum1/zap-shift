import React, { use } from 'react';
import { Autoplay, EffectCoverflow, Pagination } from 'swiper/modules';
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
            <div className='text-center my-8'>
                <h3 className="text-3xl font-bold  text-center">Review</h3>
                <p className="mt-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis libero vitae repellat qui nesciunt nam earum eum similique inventore eius.</p>
            </div>
            <div>
                <Swiper
                    loop={true}
                    effect={'coverflow'}
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={3}
                    coverflowEffect={{
                        rotate: 30,
                        stretch: "70%",
                        depth: 200,
                        modifier: 1,
                        scale: 0.75,
                        slideShadows: true,
                    }}

                    autoplay={{
                        delay: 2000,
                        disableOnInteraction: false,
                    }}
                    modules={[EffectCoverflow, Autoplay]}
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