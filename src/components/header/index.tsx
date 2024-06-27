'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Drawer } from '@mui/material'

import menu from '@/assets/menu.svg'

import styles from './styles.module.css'
import Image from 'next/image'

export default function Header () {
  const [currentRoute, setCurrentRoute] = useState<string>('#home')
  const [language, setLanguage] = useState<string>('EN')
  const [open, setOpen] = useState<boolean>(false)

  const pages = [ 
    {
      id: 0,
      name: 'Home',
      route: '#home'
    },
    {
      id: 1,
      name: 'About',
      route: '#about'
    },
    {
      id: 2,
      name: 'Work Expirence',
      route: '#work-expirence'
    },
    {
      id: 3,
      name: 'Projects',
      route: '#projects'
    },
    {
      id: 4,
      name: 'Contact',
      route: '#contact'
    },
  ]

  const languages = [
    {
      id: 0,
      language: 'PT'
    },
    {
      id: 1,
      language: 'EN'
    },
  ]

  return (
    <div
      className={styles.container}
    >
      <Image
        src={menu}
        width={24}
        height={24}
        alt='icon de menu'
        className={styles.menu_icon}
        onClick={() => setOpen(!open)}
      />

      <Drawer
        open={open}
        anchor='left'
        onClose={() => setOpen(false)}
        sx={{
          '.MuiDrawer-paper': {
            backgroundColor: 'var(--dark-blue-normal)'
          }
        }}
      >
        <div
          className={styles.menu_drawer}
        >
          {pages.map(item => (
            <a
              href={item.route}
              key={item.id}
              className={`${styles.menu_link} ${currentRoute === item.route && styles.menu_link_active}`}
              onClick={() => {
                setCurrentRoute(item.route)
                setOpen(false)
              }}
            >
              {item.name}
            </a>
          ))}
        </div>
      </Drawer>

      <div className={styles.links_container}>
        {pages.map(item => (
          <Link
            href={item.route}
            className={`${styles.link} ${currentRoute === item.route && styles.link_acive}`}
            onClick={() => setCurrentRoute(item.route)}
          >
            {item.name}
          </Link>
        ))}
      </div>

      <div
        className={styles.language_container}
      >
        {languages.map(item => (
          <p
            className={`${styles.language} ${language === item.language && styles.language_active}`}
            onClick={() => setLanguage(item.language)}
          >
            {item.language}
          </p>
        ))}
      </div>

    </div>
  )
}