import {useContext} from 'react'
import { useForm, SubmitHandler } from "react-hook-form"
import { useNavigate } from "react-router-dom"

import './SignUp.scss'
import { AuthContext } from '../store/AuthProvider'

type Form = {
  email: string,
  phone: string,
  user: string,
  password: string
}

const SignUpV2 = () => {
  const navigate = useNavigate()

  const { logIn } = useContext(AuthContext)

  const {
    register,
    handleSubmit,
    // watch,
    formState: { errors },
  } = useForm<Form>()

  const onSubmit: SubmitHandler<Form> = (data) => {
    console.log(data)

    logIn()

    navigate('home')
  }

  // console.log(watch("example"))

  return <div className='login-container'>
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <h2>Sign Up Form (V2) 🔒</h2>
      </div>
      <hr />
      <div className='control-container'>
        <label htmlFor='email'>Email</label>
        <input type='text' {...register('email', { required: true })} />
        {errors.email && <p className='error'>Email is required</p>}
      </div>
      <div className='control-container'>
        <label htmlFor='phone'>Phone</label>
        <input type='text' {...register('phone', { required: true })} />
        {errors.phone && <p className='error'>Phone is required</p>}
      </div>
      <div className='control-container'>
        <label htmlFor='user'>User</label>
        <input type='text' {...register('user', { required: true })} />
        {errors.user && <p className='error'>User is required</p>}
      </div>
      <div className='control-container'>
        <label htmlFor='password'>Password</label>
        <input type='password' {...register('password', { required: true })} />
        {errors.password && <p className='error'>Password is required</p>}
      </div>
      <button type='submit'>⤴ Sign Up</button>
    </form>
  </div>
}

export default SignUpV2