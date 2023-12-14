import React from 'react'
import './popularDishes.scss'
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from 'swiper/modules';
import "swiper/css";

function PopularDishesSection() {
  return (
    <section id='popularDishesSection'>
      <div className="popularDishesText">
                <h1>POPULAR DISHES</h1>
                <img src="https://nunforest.com/restory-demo/images/divider@2x.png" alt="" />
      </div>
   <div className='popularSlider'>
   <Swiper  pagination={{
          dynamicBullets: true,
        }} 
        modules={[Pagination]}
        watchSlidesProgress={true}
         slidesPerView={2} 
         className="mySwiper">
        <SwiperSlide>
          <div className="sliderBigBox">
            <div className="sliderBigBoxLeft">
          <img src="https://nunforest.com/restory-demo/upload/menu/1@2x.jpg" alt="" />
            </div>
            <div className="sliderBigBoxRight">
              <h1>Thai Chicken Curry</h1>
              <span>Praesent dapibus, neque id cursus faucibus, tortor neque egestas</span>
              <p>$20.15</p>
            </div>
            <div className="sliderSmallBox"></div>
          </div>
          <div className="sliderBigBox">
          <div className="sliderBigBoxRight">
              <h1 style={{maxWidth:"220px", textAlign:'center'}}>Creamed Mushroom Penne</h1>
              <span>Praesent dapibus, neque id cursus faucibus, tortor neque egestas</span>
              <p>$8.99</p>
            </div>
            <div className="sliderBigBoxLeft">
          <img src="https://nunforest.com/restory-demo/upload/menu/3@2x.jpg" alt="" />
            </div>
            <div className="sliderSmallBox"></div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="sliderBigBox">
            <div className="sliderBigBoxLeft">
          <img src="https://nunforest.com/restory-demo/upload/menu/2@2x.jpg" alt="" />
            </div>
            <div className="sliderBigBoxRight">
              <h1 style={{maxWidth:"220px", textAlign:'center'}}>Sweet & Spicy Chicken</h1>
              <span>Praesent dapibus, neque id cursus faucibus, tortor neque egestas</span>
              <p>$18.30</p>
            </div>
            <div className="sliderSmallBox"></div>
          </div>
        <div className="sliderBigBox">
          <div className="sliderBigBoxRight">
              <h1>French Salad</h1>
              <span>Praesent dapibus, neque id cursus faucibus, tortor neque egestas</span>
              <p>$11.20</p>
            </div>
            <div className="sliderBigBoxLeft">
          <img src="https://nunforest.com/restory-demo/upload/menu/4@2x.jpg" alt="" />
            </div>
            <div className="sliderSmallBox"></div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="sliderBigBox">
            <div className="sliderBigBoxLeft">
          <img src="https://nunforest.com/restory-demo/upload/menu/1@2x.jpg" alt="" />
            </div>
            <div className="sliderBigBoxRight">
              <h1>Thai Chicken Curry</h1>
              <span>Praesent dapibus, neque id cursus faucibus, tortor neque egestas</span>
              <p>$20.15</p>
            </div>
            <div className="sliderSmallBox"></div>
          </div>
          <div className="sliderBigBox">
          <div className="sliderBigBoxRight">
              <h1 style={{maxWidth:"220px", textAlign:'center'}}>Creamed Mushroom Penne</h1>
              <span>Praesent dapibus, neque id cursus faucibus, tortor neque egestas</span>
              <p>$8.99</p>
            </div>
            <div className="sliderBigBoxLeft">
          <img src="https://nunforest.com/restory-demo/upload/menu/3@2x.jpg" alt="" />
            </div>
            <div className="sliderSmallBox"></div>
          </div>
        </SwiperSlide>
      </Swiper>
   </div>
    </section>
  )
}

export default PopularDishesSection
