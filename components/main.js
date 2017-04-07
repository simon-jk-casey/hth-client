import React from 'react'
import loginService from '../services/userLogin'

module.exports = ({state, dispatch}) => {
  const signupRoute = () => dispatch({type: 'CHANGE_ROUTE', payload: '/signup'})
  const loginUsername = (e) => dispatch({type: 'UPDATE_LOGIN_DETAILS', payload: {field: 'username', value: e.target.value}})
  const loginPassword = (e) => dispatch({type: 'UPDATE_LOGIN_DETAILS', payload: {field: 'password', value: e.target.value}})
  const loginButton = (e) => {
    e.preventDefault()
    loginService(state.loginDetails, dispatch)
  }
  return (
    <div>
      <form>
        <input onChange={loginUsername} type='text' placeholder='Username' />
        <input onChange={loginPassword} type='text' placeholder='Password' />
        <button className='buttons' onClick={loginButton} type='submit'>Login</button>
      </form>
      <button className='buttons' onClick={signupRoute}>Sign Up</button>
    </div>
  )
}
