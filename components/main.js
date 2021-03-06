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
    <div className='loginContainer'>
      <form id='userLogin'>
        <div className='usrDiv col-12 col-m-12'>
          <div className='loginLabel col-2 col-m-2'>
            <label htmlFor='usrField'>username:</label>
          </div>
          <div className='col-4 col-m-4'>
            <input id='usrField' onChange={loginUsername} type='text' placeholder='Username' />
          </div>
        </div>
        <div className='passDiv col-12 col-m-12'>
          <div className='loginLabel col-2 col-m-2'>
            <label htmlFor='passField'>password:</label>
          </div>
          <div className='col-4 col-m-4'>
            <input id='passField' onChange={loginPassword} type='password' placeholder='Password' />
          </div>
        </div>
      </form>
      <div className="buttonDiv col-12 col-m-12">
        <button className='buttons greenButton' form='userLogin' onClick={loginButton} type='submit'>Login</button>
        <button className='buttons yellowButton' onClick={signupRoute}>Sign Up</button>
      </div>
    </div>
  )
}
