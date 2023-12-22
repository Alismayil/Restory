import React from 'react'
import './clientReviewsSection.scss'
import { HiMiniCalendar } from "react-icons/hi2";
import { FaRegClock } from "react-icons/fa6";
import { ImUsers } from "react-icons/im";
import { SlLike } from "react-icons/sl";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

function ClientReviewsSection() {
    return (
        <section id='clientReviewsSection'>
            <div className="clientReviewsUpBox">
                <div className="clientReviewsText">
                    <h1>CLIENTS REVIEWS</h1>
                    <img src="https://nunforest.com/restory-demo/images/divider@2x.png" alt="" />
                </div>
            </div>
            <div className="clientReviewsMiddleBox">
            <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
            <div className="swiperLine"></div>
            <div className="swiperImgBox">
                <img src="https://nunforest.com/restory-demo/upload/others/cl1.jpg" alt="" />
            </div>
            <div className="swiperTextBox">
                <h1>Harold Lewis</h1>
                <div className="line"></div>
                <p>" Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede. "</p>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="swiperLine"></div>
            <div className="swiperImgBox">
                <img src="https://nunforest.com/restory-demo/upload/others/cl2.jpg" alt="" />
            </div>
            <div className="swiperTextBox">
                <h1>David Norton</h1>
                <div className="line"></div>
                <p>" Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. "</p>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="swiperLine"></div>
            <div className="swiperImgBox">
                <img src="https://nunforest.com/restory-demo/upload/others/cl3.jpg" alt="" />
            </div>
            <div className="swiperTextBox">
                <h1>Lora Mites</h1>
                <div className="line"></div>
                <p>" Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. "</p>
            </div>
        </SwiperSlide>
      </Swiper>
            </div>
            <div className="clientReviewsDownBox">
                <div className="clientReviewsIconAndTextBox">
                    <HiMiniCalendar style={{ fontSize: "40px", color: "gray" }} />
                    <h2>YEARS EXPERIENCE</h2>
                    <p>23</p>
                </div>
                <div className="clientReviewsIconAndTextBox">
                    <FaRegClock style={{ fontSize: "40px", color: "gray" }} />
                    <h2>HOURS OF COOKING</h2>
                    <p>3k+</p>
                </div>
                <div className="clientReviewsIconAndTextBox">
                    <ImUsers style={{ fontSize: "40px", color: "gray" }} />
                    <h2>HAPPY CLIENTS</h2>
                    <p>8k+</p>
                </div>
                <div className="clientReviewsIconAndTextBox">
                    <SlLike style={{ fontSize: "40px", color: "gray" }} />
                    <h2>SKILLED CHIEFS</h2>
                    <p>12</p>
                </div>

            </div>
            
        </section>
    )
}

export default ClientReviewsSection