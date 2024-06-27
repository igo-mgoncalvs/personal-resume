import Image from 'next/image';

import mockdata from '@/mockdata/mockdata.json'
import homeImage from '@/assets/home_image.svg'
import resume from '@/assets/resume.svg'
import arrow from '@/assets/arrow.svg'

import styles from './styles.module.scss'

export default function Home() {
  return (
    <main
      className={styles.main}
    >
      <div
        id='#home'
        className={styles.home}
      >
        <div
          className={styles.welcome}
        >
          <div
            className={styles.text_container}
          >
            <p
              className={styles.name}
            >
              {mockdata.home.name}
            </p>

            <div
              className={styles.subtitle}
            >
              <p
                className={styles.specialty}
              >
                {mockdata.home.subtitle.specialty}
              </p>
              <p
                className={styles.description}
              >
                {mockdata.home.subtitle.description}
              </p>
            </div>

            <p
              className={styles.about}
            >
              {mockdata.home.about}
            </p>
          </div>

          <div
            className={styles.buttons_container}
          >
            <button
              className={styles.resume}
            >
              <Image
                src={resume}
                alt='resume image'
              />

              <p>
                {mockdata.home.buttons[0].label}
              </p>
            </button>
            <button
              className={styles.contact}
            >
              <p>
                {mockdata.home.buttons[1].label}
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

    </main>
  );
}
