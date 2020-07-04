import React from 'react'
import FieldContext from './FieldContext'
import useForm from './useForm'

export default function Form({ children, form, onFinish, onFinishFailed }, ref) {
  const [formInstance] = useForm(form);

  formInstance.setCallback({ onFinish, onFinishFailed })
  const submit = (e) => {
    e.preventDefault();
    formInstance.submit();
  }
  return (
    <form onSubmit={submit}>
      <FieldContext.Provider value={formInstance}>
        {children}
      </FieldContext.Provider>
    </form>
  )
}
