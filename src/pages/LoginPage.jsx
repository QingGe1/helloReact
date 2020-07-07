import React from 'react';
import { Redirect } from '../router/myRouter';
import { connect } from 'react-redux'
import { login } from '../store/action/user';
import { useState } from 'react';

export default connect(
  ({ user: { isLogin, loading, err } }) => ({ isLogin, loading, err }),
  { login }
)(function LoginPage(props) {
  const [name, setName] = useState('')
  const { isLogin, location, login, loading, err } = props
  if (isLogin) {
    const { form = '/' } = location.state || {};
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
