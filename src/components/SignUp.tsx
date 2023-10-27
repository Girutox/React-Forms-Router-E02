import { useForm } from '../hooks/useForm'

import './SignUp.scss'

type FormInputProps = {
  id: string,
  name: string,
  value: string,
  error: string,
  onChange: (evt: React.ChangeEvent<HTMLInputElement>) => void
}

type Form = {
  email: FormInputProps,
  phone: FormInputProps,
  user: FormInputProps,
  password: FormInputProps
}

const SignUp = () => {
  const { form, register, isValidForm } = useForm<Form>()

  const submitHandler = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault()

    if (!isValidForm()) return

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
        {form.email?.error !== '' && <p className='error'>{form.email?.error}</p>}
      </div>
      <div className='control-container'>
        <label htmlFor='phone'>Phone</label>
        <input type='text' {...register('phone')} />
        {form.phone?.error !== '' && <p className='error'>{form.phone?.error}</p>}
      </div>
      <div className='control-container'>
        <label htmlFor='user'>User</label>
        <input type='text' {...register('user')} />
        {form.user?.error !== '' && <p className='error'>{form.user?.error}</p>}
      </div>
      <div className='control-container'>
        <label htmlFor='password'>Password</label>
        <input type='password' {...register('password')} />
        {form.password?.error !== '' && <p className='error'>{form.password?.error}</p>}
      </div>
      <button type='submit'>⤴ Sign Up</button>
    </form>
  </div>
}

export default SignUp