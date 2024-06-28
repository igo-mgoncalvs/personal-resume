'use client'

import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Navigation, Autoplay } from 'swiper/modules';
import Image from 'next/image';

import open from '@/assets/open.svg'

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import styles from './styles.module.scss';

export default function Carousel() {
  const teste = [
    {
      id: 1,
      image: 'https://carousel-slider.uiinitiative.com/images/guardians-of-the-galaxy.jpg'
    },
    {
      id: 2,
      image: 'https://carousel-slider.uiinitiative.com/images/dr-strange.jpg'
    },
    {
      id: 3,
      image: 'https://carousel-slider.uiinitiative.com/images/eternals.jpg'
    },
    {
      id: 4,
      image: 'https://carousel-slider.uiinitiative.com/images/justice-league.jpg'
    },
    {
      id: 5,
      image: 'https://carousel-slider.uiinitiative.com/images/spider-man.jpg'
    },
    {
      id: 6,
      image: 'https://carousel-slider.uiinitiative.com/images/thor-ragnarok.jpg'
    },
    {
      id: 7,
      image: 'https://carousel-slider.uiinitiative.com/images/suicide-squad.jpg'
    },
    {
      id: 8,
      image: 'https://i.postimg.cc/nzzrycJ5/Frame-2.png'
    }
  ]

  return (
    <div
      className={styles.container}
    >
      <p className={styles.title}>Projects</p>

      <Swiper
        effect={'coverflow'}
        centeredSlides
        loop
        pagination={{
          el:'',
          clickable: true
        }}
        navigation={{
          nextEl: '',
          prevEl: '',
        }}
        // autoplay={{
        //   delay: 2000
        // }}
        modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 0,
          stretch: 10,
          depth: 400,
          modifier: 2.5
        }}
        speed={500}
        className={styles.mySwiper}
      >
        {teste.map(item => (
          <SwiperSlide
            className={styles.swiper_slide}
          >
            <Image
              src={item.image}
              alt='imagem do projeto'
              
              width={100}
              height={100}
              className={styles.image}
            />

            <div
              className={styles.info}
            >
              <p className={styles.title}>Ahuse</p>
              <p className={styles.description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
              <div
                className={styles.openButton}
              >
                <Image
                  src={open}
                  alt='teste'
                  width={16}
                  height={16}
                />
                <p className={styles.openButton_text}>Open</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
