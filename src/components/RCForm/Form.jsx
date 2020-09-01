import React from 'react'
import FieldContext from './FieldContext'
import useForm from './useForm'

export default function Form({ children, form, onFinish, onFinishFailed }, ref) {
  const [formInstance] = useForm(form);
  
  React.useImperativeHandle(ref, () => formInstance);
  
  formInstance.setCallback({ onFinish, onFinishFailed });
  
  const submit = (e) => {
    e.preventDefault();
    e.stopPropagation();
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
