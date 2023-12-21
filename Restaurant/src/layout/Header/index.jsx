import React from 'react'
import './header.scss'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';  
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function Header() {
  const { t } = useTranslation();

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
                <h1>{t("HeaderText1")}</h1>
                <p style={{fontSize:"19px"}}>{t("HeaderInformText")}</p>
                <Link className='link' to={"/menu"}> <div className="swiperBtn">{t("HeaderBtnMenu")}</div></Link>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <img src="https://nunforest.com/restory-demo/upload/others/slide2.jpg" alt="" />
            <div className='sliderBox'>
            <p>{t("HeaderInformText1")}</p>
              <div>  
                <h1 style={{fontSize:"80px"}}>{t("HeaderText2")}</h1>
                <h1 style={{fontSize:"80px"}}>{t("HeaderText2.1")}</h1>
                </div>

                <Link className='link' to={"/about"}> <div className="swiperBtn">{t("HeaderBtnMore")}</div></Link>
            </div>
            </SwiperSlide>
        <SwiperSlide>
            <img src="https://nunforest.com/restory-demo/upload/others/slide3.jpg" alt="" />
            <div className='sliderBox'>
            <p>{t("HeaderInformText1")}</p>
               <div>
               <h1 style={{fontSize:"70px"}}>{t("HeaderText3")}</h1>
                <h1 style={{fontSize:"70px"}}>{t("HeaderText3.1")}</h1>
               </div>
                <Link className='link' to={"/about"}> <div className="swiperBtn">{t("HeaderBtnMore")}</div></Link>
            </div>
        </SwiperSlide>
      </Swiper>

    </section>
  )
}

export default Header