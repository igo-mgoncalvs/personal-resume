'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { Drawer } from '@mui/material'

import menu from '@/assets/menu.svg'

import styles from './styles.module.css'
import Image from 'next/image'

export default function Header () {
  const [currentRoute, setCurrentRoute] = useState<string>('#home')
  const [language, setLanguage] = useState<string>('EN')
  const [open, setOpen] = useState<boolean>(false)

  useEffect(() => {
    localStorage.setItem('language', language)
    window.dispatchEvent(new Event("language"));
  }, [language])

  const pages = [ 
    {
      id: 0,
      languages: [
        {
          id: 0,
          language: 'EN',
          name: 'Home'
        },
        {
          id: 1,
          language: 'PT',
          name: 'Home'
        },
        {
          id: 1,
          language: 'ES',
          name: 'Home'
        }
      ],
      route: '#home'
    },
    {
      id: 1,
      languages: [
        {
          id: 0,
          language: 'EN',
          name: 'About',
        },
        {
          id: 1,
          language: 'PT',
          name: 'Sobre mim',
        },
        {
          id: 1,
          language: 'ES',
          name: 'Sobre mi',
        }
      ],
      route: '#about'
    },
    {
      id: 2,
      languages: [
        {
          id: 0,
          language: 'EN',
          name: 'Work Expirence',
        },
        {
          id: 1,
          language: 'PT',
          name: 'Experiência profissional',
        },
        {
          id: 2,
          language: 'ES',
          name: 'Experiencia profesional',
        }
      ],
      route: '#work-expirence'
    },
    {
      id: 3,
      languages: [
        {
          id: 0,
          language: 'EN',
          name: 'Projects',
        },
        {
          id: 1,
          language: 'PT',
          name: 'Projetos',
        },
        {
          id: 2,
          language: 'ES',
          name: 'Proyectos',
        }
      ],
      route: '#projects'
    },
    {
      id: 4,
      languages: [
        {
          id: 0,
          language: 'EN',
          name: 'Contact',
        },
        {
          id: 1,
          language: 'PT',
          name: 'Contato',
        },
        {
          id: 2,
          language: 'ES',
          name: 'Contacto',
        }
      ],
      route: '#contact'
    },
  ]

  const languages = [
    {
      id: 0,
      language: 'EN'
    },
    {
      id: 1,
      language: 'PT'
    },
    {
      id: 2,
      language: 'ES'
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
              {item.languages.find(e => e.language === language)?.name}
            </a>
          ))}
        </div>
      </Drawer>

      <div className={styles.links_container}>
        {pages.map(item => (
          <Link
            key={item.id}
            href={item.route}
            className={`${styles.link} ${currentRoute === item.route && styles.link_acive}`}
            onClick={() => setCurrentRoute(item.route)}
          >
            {item.languages.find(e => e.language === language)?.name}
          </Link>
        ))}

      <div
        className={styles.language_container_desk}
      >
        {languages.map(item => (
          <p
            key={item.id}
            className={`${styles.language} ${language === item.language && styles.language_active}`}
            onClick={() => setLanguage(item.language)}
          >
            {item.language}
          </p>
        ))}
      </div>
      </div>

      <div
        className={styles.language_container}
      >
        {languages.map(item => (
          <p
            key={item.id}
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