import React from 'react'
import './header.scss'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';  
import { Link } from 'react-router-dom';

function Header() {
  return (
    <section id='header'>
        <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
            <img src="https://nunforest.com/restory-demo/upload/others/slide1@2x.jpg" alt="" />
            <div className='sliderBox'>
                <h1>Best Food since 1971</h1>
                <p style={{fontSize:"19px"}}>Fresh & Premium ingredients every time</p>
                <Link className='link' to={"/menu"}> <div className="swiperBtn">SEE THE MENU</div></Link>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <img src="https://nunforest.com/restory-demo/upload/others/slide2.jpg" alt="" />
            <div className='sliderBox'>
            <p>Discover Awesome Features.</p>
              <div>  
                <h1 style={{fontSize:"80px"}}>Interactive and Innovace </h1>
                <h1 style={{fontSize:"80px"}}>Projects</h1>
                </div>

                <Link className='link' to={"/about"}> <div className="swiperBtn">READ MORE</div></Link>
            </div>
            </SwiperSlide>
        <SwiperSlide>
            <img src="https://nunforest.com/restory-demo/upload/others/slide3.jpg" alt="" />
            <div className='sliderBox'>
            <p>Discover Awesome Features.</p>
               <div>
               <h1 style={{fontSize:"70px"}}>We Are An Agency </h1>
                <h1 style={{fontSize:"70px"}}>Of Creative</h1>
               </div>
                <Link className='link' to={"/about"}> <div className="swiperBtn">READ MORE</div></Link>
            </div>
        </SwiperSlide>
      </Swiper>

    </section>
  )
}

export default Header