'use client'

import { Controller, useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import { sendEmailApi } from '@/lib/sendEmailApi'

import mockdata from '@/mockdata/mockdata.json'
import styles from './styles.module.scss'
import { useEffect, useState } from 'react'


interface IForm {
  name: string
  email: string
  message: string
}

export default function Form () {
  const { control, handleSubmit, setValue } = useForm<IForm>()
  const [language, setLanguage] = useState('EN')
  

  const getData = mockdata.languages.find(data => data.language === language)

  useEffect(() => {
    window.addEventListener('language', () => {
      const getLanguage = localStorage.getItem('language')
      setLanguage(getLanguage || 'EN')
    })
  }, [])

  const onSubmit = (data: IForm) => {
    toast.info('Aguarde um momento', {
      position: "top-right",
      autoClose: false,
      hideProgressBar: false,
      progress: undefined,
      theme: "light",
    });

    sendEmailApi.post('/send-email', {
      ...data,
      from: 'onboarding@igormgoncalvs.com',
      to: 'igor2013mgoncalves@gmail.com'
    })
      .then(() => {
        toast.dismiss()
        toast.success('E-mail enviado com sucesso!', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        setValue('name', '')
        setValue('email', '')
        setValue('message', '')
      })
      .catch(() => {
        toast.dismiss()
        toast.error('Erro ao enviar o e-mail, tente novamente mais tarde.', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      })
  }

  return (
    <div
      className={styles.container}
    >
      <p
        className={styles.title}
      >
        {getData?.contact.form.title}
      </p>

      <form
        className={styles.form}
        onSubmit={handleSubmit(onSubmit)}
      >
        <Controller
          control={control}
          name='name'
          rules={{
            required: {
              value: true,
              message: 'This field is mandatory'
            }
          }}
          render={({field: { onChange, value }}) => (
            <input
              placeholder={getData?.contact.form.name}
              value={value}
              onChange={onChange}
            />
          )}
        />
        <Controller
          control={control}
          name='email'
          rules={{
            required: {
              value: true,
              message: 'This field is mandatory'
            }
          }}
          render={({field: { onChange, value }}) => (
            <input
              placeholder={getData?.contact.form.email}
              value={value}
              onChange={onChange}
            />
          )}
        />
        <Controller
          control={control}
          name='message'
          render={({field: { onChange, value }}) => (
            <textarea
              onChange={onChange}
              value={value}
              placeholder={getData?.contact.form.message}
            />
          )}
        />

        <button>
          {getData?.contact.form.button}
        </button>
      </form>
    </div>
  )
}