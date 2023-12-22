import React from 'react'
import './todaysSpecialSection.scss'
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';


function TodaysSpecialSection() {
  return (
    <section id='todaysSpecialSection'>
        <div className="todaysSpecialUpBox">
            <h1>TODAY'S SPECIAL</h1>
        </div>
        <div className="todaysSpecialDownBox">
        <Swiper
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
            <div className="sliderImgBox">
                <img src="https://nunforest.com/restory-demo/upload/menu/c1@2x.jpg" alt="" />
              
                 <div className="sliderTextBox">
                <h1>Daily Cheese Sandwich</h1>
                <div className="sliderLine"></div>
                <p>$6.50</p>
                <div className="sliderHoverBox">
                </div>
            </div>
            </div>
        </SwiperSlide>
        <SwiperSlide >
            <div className="sliderImgBox">
                <img src="https://nunforest.com/restory-demo/upload/menu/c2@2x.jpg" alt="" />
                 <div className="sliderTextBox">
                <h1>Linguini Carbonara</h1>
                <div className="sliderLine"></div>
                <p>$8.90</p>
                <div className="sliderHoverBox">
                </div>
            </div>
            </div>
        </SwiperSlide>
        <SwiperSlide >
            <div className="sliderImgBox">
                <img src="https://nunforest.com/restory-demo/upload/menu/c3@2x.jpg" alt="" />
              
                 <div className="sliderTextBox">
                <h1>Avocado Shell Stuffed</h1>
                <div className="sliderLine"></div>
                <p>$11.50</p>
                <div className="sliderHoverBox">
                </div>
            </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="sliderImgBox">
                <img src="https://nunforest.com/restory-demo/upload/menu/c1@2x.jpg" alt="" />
              
                 <div className="sliderTextBox">
                <h1>Daily Cheese Sandwich</h1>
                <div className="sliderLine"></div>
                <p>$6.50</p>
                <div className="sliderHoverBox">
                </div>
            </div>
            </div>
        </SwiperSlide>
      </Swiper>
        </div>
    </section>
  )
}

export default TodaysSpecialSection