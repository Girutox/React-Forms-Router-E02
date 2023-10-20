import { useState } from 'react'

import './SignUp.scss'

const useForm = () => {
  const [form, setForm] = useState({})

  const register = (controlName: string) => {
    const newControl = {
      id: controlName,
      name: controlName,
      value: '',
      error: '',
      onChange: (evt: React.ChangeEvent<HTMLInputElement>) => {
        setForm(prev => {
          return {
            ...prev,
            [controlName]: {
              ...prev[controlName],
              value: evt.target.value,
              error: ''
            }
          }
        })
      }
    }

    if (!form[controlName]) {
      setForm({
        ...form,
        [controlName]: newControl
      })
    }  

    return { ...form[controlName] } // retornar el nuevo control
  }

  return { register, form }
}

const SignUp = () => {
  const { form, register } = useForm()

  // const isValidForm = () => {
  //   let rpta = true

  //   if (form.email.value === '') {
  //     setForm(prev => {
  //       return {
  //         ...prev,
  //         email: {
  //           ...prev.email,
  //           error: 'Email is required'
  //         }
  //       }
  //     })
  //     rpta = false
  //   }

  //   if (form.phone.value === '') {
  //     setForm(prev => {
  //       return {
  //         ...prev,
  //         phone: {
  //           ...prev.phone,
  //           error: 'Phone is required'
  //         }
  //       }
  //     })
  //     rpta = false
  //   }

  //   return rpta
  // }

  const submitHandler = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault()

    // if (!isValidForm()) return

    console.log(form);
  }

  return <div className='login-container'>
    <form onSubmit={submitHandler}>
      <div>
        <h2>Sign Up Form 🔒</h2>
      </div>
      <hr />
      <div className='control-container'>
        <label htmlFor='email'>Email</label>
        <input type='text' {...register('email')} />
      </div>
      {/* <div className='control-container'>
        <label htmlFor='phone'>Phone</label>
        <input type='text' {...register('phone')} />
      </div>
      <div className='control-container'>
        <label htmlFor='user'>User</label>
        <input type='text' {...register('user')} />
      </div>
      <div className='control-container'>
        <label htmlFor='password'>Password</label>
        <input type='password' {...register('password')} />
      </div> */}
      <button type='submit'>⤴ Sign Up</button>
    </form>
  </div>
}

export default SignUp