'use client'

import { Controller, useForm } from 'react-hook-form'

import styles from './styles.module.scss'
import { sendEmailApi } from '@/lib/sendEmailApi'
import 'react-toastify/dist/ReactToastify.css'
import { toast } from 'react-toastify'

interface IForm {
  name: string
  email: string
  message: string
}

export default function Form () {
  const { control, handleSubmit, setValue } = useForm<IForm>()

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
        Send me a message
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
              placeholder='Name'
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
              placeholder='E-mail'
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
              placeholder='Your message'
            />
          )}
        />

        <button>
          Contact me
        </button>
      </form>
    </div>
  )
}