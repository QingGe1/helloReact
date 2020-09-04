import React, { useState } from 'react';
import { connect } from 'react-redux'
// import { Redirect } from '../router/copyRouter';
import { Redirect } from 'react-router-dom'
import { login } from '../store/action/user';

export default connect(
  ({ user: { isLogin, loading, err } }) => ({ isLogin, loading, err }),
  { login }
)(function LoginPage(props) {
  const [name, setName] = useState('')
  const { isLogin, location, login, loading, err } = props
  if (isLogin) {
    const { form = '/' } = location.state || {};
    console.log(form)
    return <Redirect to={form} />
  }
  return (
    <>
      <input type="text" value={name} onChange={(event) => { setName(event.target.value) }} />
      <button onClick={() => { login({ name }) }}>{loading ? 'loading' : '登录'}</button>
      <p>{err.msg}</p>
    </>
  )
})
