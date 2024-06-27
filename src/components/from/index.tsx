'use client'

import { Controller, useForm } from 'react-hook-form'

import styles from './styles.module.scss'

interface IForm {
  name: string
  email: string
  message: string
}

export default function Form () {
  const { control, handleSubmit, setValue } = useForm<IForm>()

  const onSubmit = (data: IForm) => {
    console.log(data)
    setValue('name', '')
    setValue('email', '')
    setValue('message', '')
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
          rules={{
            required: {
              value: true,
              message: 'This field is mandatory'
            }
          }}
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