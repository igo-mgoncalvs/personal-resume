'use client'

import { useEffect, useState } from 'react';
import Image from 'next/image';

import mockdata from '@/mockdata/mockdata.json'
import homeImage from '@/assets/home_image.svg'
import resume from '@/assets/resume.svg'
import arrow from '@/assets/arrow.svg'
import aboutMe from '@/assets/aboutMe_image.svg'
import js from '@/assets/js.svg'
import react from '@/assets/react.svg'
import nodejs from '@/assets/nodejs.svg'
import android from '@/assets/android.svg'
import apple from '@/assets/apple.svg'
import photo from '@/assets/Photo.png'
import github from '@/assets/github.svg'
import linkeding from '@/assets/linkeding.svg'

import Form from '@/components/form'
import Carousel from '@/components/carousel'

import styles from './styles.module.scss'
import { ToastContainer } from 'react-toastify';

export default function Home() {
  const icons = [
    {
      iconName: 'js',
      icon: js,
    },
    {
      iconName: 'react',
      icon: react,
    },
    {
      iconName: 'nodejs',
      icon: nodejs,
    },
    {
      iconName: 'android',
      icon: android,
    },
    {
      iconName: 'apple',
      icon: apple,
    },
  ]
  
  const [language, setLanguage] = useState('EN')
  const getData = mockdata.languages.find(data => data.language === language)

  useEffect(() => {
    window.addEventListener('language', () => {
      const getLanguage = localStorage.getItem('language')
      setLanguage(getLanguage || 'EN')
    })
  }, [])

  return (
    <main
      className={styles.main}
    >
      <ToastContainer />
      <div id='home' className={styles.home}>
        <div
          className={styles.welcome}
        >
          <div
            className={styles.text_container}
          >
            <p
              className={styles.name}
            >
              {getData?.home.name}
            </p>

            <div
              className={styles.subtitle}
            >
              <p
                className={styles.specialty}
              >
                {getData?.home.subtitle.specialty}
              </p>
              <p
                className={styles.description}
              >
                {getData?.home.subtitle.description}
              </p>
            </div>

            <p
              className={styles.about}
            >
              {getData?.home.about}
            </p>
          </div>

          <div
            className={styles.buttons_container}
          >
            <a
              href='gigamaisfibra://negociacao'
              className={styles.resume}
            >
              <Image
                src={resume}
                alt='resume image'
              />

              <p>
                {getData?.home.buttons[0].label}
              </p>
            </a>
            <button
              className={styles.contact}
            >
              <p>
                {getData?.home.buttons[1].label}
              </p>

              <Image
                src={arrow}
                alt='contact image'
              />
            </button>
          </div>
        </div>

        <Image
          src={homeImage}
          alt='home image'
          className={styles.image}
          width={464}
          height={411}
        />
      </div>

      <div id='about' className={styles.aboutMe}>
        <Image
          alt='About me image'
          src={aboutMe}
          className={styles.image}
        />

        <div
          className={styles.infos}
        >
          <div
            className={styles.icons_container}
          >
            {getData?.aboutMe.icons.map(item => (
              <Image
                key={item.id}
                src={icons.find(icon => icon.iconName === item.iconName)?.icon}
                alt={item.iconName}
                className={styles.icon}
                width={20}
                height={20}
              />
            ))}
          </div>

          <div
            className={styles.text_container}
          >
            <p
              className={styles.title}
            >
              {getData?.aboutMe.title}
            </p>
            <p
              className={styles.subtitle}
            >
              {getData?.aboutMe.subtitle}
            </p>
            <p
              className={styles.description}
            >
              {getData?.aboutMe.description}
            </p>
          </div>

          <button
            className={styles.resume}
          >
            <Image
              src={resume}
              alt='resume image'
            />

            <p>
              {getData?.aboutMe.button}
            </p>
          </button>
        </div>
      </div>

      <Carousel />

      <div id='contact' className={styles.contact_container} >
        <p
          className={styles.title}
        >
          Contact
        </p>

        <div
          className={styles.container}
        >
          <div
            className={styles.infos}
          >
            <Image
              alt='image'
              src={photo}
              className={styles.image}
            />

            <div
              className={styles.text_container}
            >
              <div>
                <p
                  className={styles.title}
                >
                  {getData?.contact.title}
                </p>
                <p
                  className={styles.subtitle}
                >
                  {getData?.contact.subtitle}
                </p>
              </div>

              <p
                className={styles.description}
              >
                {getData?.contact.description1}
                <b className={styles.email}> {getData?.contact.email} </b>
                {getData?.contact.description2}
              </p>

              <div
                className={styles.icons}
              >
                <Image
                  alt='github'
                  src={github}
                  className={styles.icon}
                />
                <Image
                  alt='linkeding'
                  src={linkeding}
                  className={styles.icon}
                />
              </div>
            </div>
          </div>

          <Form />
        </div>
      </div>
    </main>
  );
}
