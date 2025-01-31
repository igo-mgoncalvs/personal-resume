'use client'

import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Navigation, Autoplay } from 'swiper/modules';
import Image from 'next/image';

import open from '@/assets/open.svg'
import github from '@/assets/github.svg'
import android from '@/assets/android.svg'
import apple from '@/assets/apple.svg'

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import mockdata from '@/mockdata/mockdata.json'

import styles from './styles.module.scss';

export default function Carousel() {
  const [language, setLanguage] = useState('EN')
  const getData = mockdata.languages.find(data => data.language === language)

  useEffect(() => {
    window.addEventListener('language', () => {
      const getLanguage = localStorage.getItem('language')
      setLanguage(getLanguage || 'EN')
    })
  }, [])

  return (
    <div
      className={styles.container}
      id='projects'
    >
      <p className={styles.title}>{getData?.projects.title}</p>

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
        autoplay={{
          delay: 5000
        }}
        modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 0,
          stretch: 10,
          depth: 400,
          modifier: 2.5
        }}
        breakpoints={{
          320: {
            coverflowEffect: {
              depth: 400,
            }
          },
          768: {
            coverflowEffect: {
              depth: 350,
            },
          }
        }}
        speed={500}
        className={styles.mySwiper}
      >
        {getData?.projects.list.map(item => (
          <SwiperSlide
            key={item.id}
            className={styles.swiper_slide}
          >
            <img
              src={item.image}
              alt='imagem do projeto'
              className={styles.image}
            />

            <div
              className={styles.info}
            >
              <p className={styles.title}>{item.name}</p>
              <p className={styles.description}>{item.description}</p>
              <div className={styles.linksButtons}>
                {item.projectPlaystore && (
                  <a
                    href={item.projectPlaystore}
                    target='_blank'
                    className={styles.openButton}
                  >
                    <Image
                      src={android}
                      alt='open icon'
                      width={16}
                      height={16}
                      className={styles.icon}
                    />
                    <p className={styles.openButton_text}>Open</p>
                  </a>
                )}

                {item.projectAppstore && (
                  <a
                    href={item.projectAppstore}
                    target='_blank'
                    className={styles.openButton}
                  >
                    <Image
                      src={apple}
                      alt='open icon'
                      width={16}
                      height={16}
                      className={styles.icon}
                    />
                    <p className={styles.openButton_text}>Open</p>
                  </a>
                )}

                {item.projectLink && (
                  <a
                    href={item.projectLink}
                    target='_blank'
                    className={styles.openButton}
                  >
                    <Image
                      src={open}
                      alt='open icon'
                      width={16}
                      height={16}
                      className={styles.icon}
                    />
                    <p className={styles.openButton_text}>Open</p>
                  </a>
                )}

                {item.githubLink && (
                  <a
                    href={item.githubLink}
                    target='_blank'
                    className={styles.openButton}
                  >
                    <Image
                      src={github}
                      alt='github icon'
                      width={16}
                      height={16}
                      className={styles.icon}
                    />
                    <p className={styles.openButton_text}>Github</p>
                  </a>
                )}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
