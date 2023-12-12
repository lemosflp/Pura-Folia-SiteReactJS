import React from 'react';
import { useState, useEffect } from 'react'
import './Swiper.css'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


export default () => {

    const [slidesPerView, setSlidePerView] = useState(3)

    const data = [
        { id: '1', image: 'https://purafolia.com/assets/salaobrinq.JPG' },
        { id: '2', image: 'https://purafolia.com/assets/salaobrinq2.JPG' },
        { id: '3', image: './media/img1.png' },
        { id: '4', image: 'https://purafolia.com/assets/salaobrinq.JPG' },
        { id: '5', image: 'https://purafolia.com/assets/salaobrinq2.JPG' },
        { id: '6', image: './media/img1.png' },
        { id: '7', image: './media/img2.png' },
        { id: '8', image: './media/img3.png' },
    ];


    useEffect(() => {

        function handleResize(){
            if (window.innerWidth < 720){
                setSlidePerView(1);
        }else if (window.innerWidth > 720 && window.innerWidth < 1250 ) {
            setSlidePerView(2);
         }else {
            setSlidePerView(3);
         }
        }
        handleResize();

    }, [])

    return (
        <div className='container'>
            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={7}
                slidesPerView={slidesPerView}
                pagination={{ clickable: true }}
                navigation

            >
                {data.map((item) => (
                    <SwiperSlide key={item.id}>
                        <img
                            src={item.image}
                            alt="Foto Pura Folia"
                            className='slide-item'
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};
