import { useState } from 'react'

export const useForm = <T extends object>() => {
  const [form, setForm] = useState<T>({} as T)

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

  const isValidForm = () => {
    let rpta = true

    for (const key in form) {
      if ((form[key] as { value: string }).value === '') {
        setForm(prev => {
          return {
            ...prev,
            [key]: {
              ...prev[key],
              error: `${key} field is required`
            }
          }
        })
        rpta = false
      }
    }

    return rpta
  }

  return { register, form, isValidForm }
}