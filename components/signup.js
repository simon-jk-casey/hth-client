import React from 'react'
import signupService from '../services/signup'

// consider a NZ address finder API for this?

module.exports = ({state, dispatch}) => {
  const inputUsername = (e) => dispatch({type: 'USER_SIGNUP', payload: {field: 'username', value: e.target.value}})
  const inputPassword = (e) => dispatch({type: 'USER_SIGNUP', payload: {field: 'password', value: e.target.value}})
  const inputFirstName = (e) => dispatch({type: 'USER_SIGNUP', payload: {field: 'firstName', value: e.target.value}})
  const inputLastName = (e) => dispatch({type: 'USER_SIGNUP', payload: {field: 'lastName', value: e.target.value}})
  const inputStreetNumber = (e) => dispatch({type: 'USER_SIGNUP', payload: {field: 'streetNumber', value: e.target.value}})
  const inputStreetName = (e) => dispatch({type: 'USER_SIGNUP', payload: {field: 'streetName', value: e.target.value}})
  const inputSuburb = (e) => dispatch({type: 'USER_SIGNUP', payload: {field: 'suburb', value: e.target.value}})
  const inputCity = (e) => dispatch({type: 'USER_SIGNUP', payload: {field: 'city', value: e.target.value}})
  const inputEmail = (e) => dispatch({type: 'USER_SIGNUP', payload: {field: 'email', value: e.target.value}})
  const inputGpsCoords = (e) => dispatch({type: 'USER_SIGNUP', payload: {field: 'gpsCoords', value: e.target.value}})
  const executeSignup = (e) => {
    e.preventDefault()
    signupService(state, dispatch)
  }
  return (
    <div className='signup'>
        <form>
          <input onChange={inputUsername} type='text' placeholder='Username' />
          <input onChange={inputPassword} type='password' placeholder='Password' />
          <input onChange={inputFirstName} type='text' placeholder='First Name' />
          <input onChange={inputLastName} type='text' placeholder='Last Name' />
          <input onChange={inputStreetNumber} type='text' placeholder='Street No.' />
          <input onChange={inputStreetName} type='text' placeholder='Street Name' />
          <input onChange={inputSuburb} type='text' placeholder='Suburb' />
          <input onChange={inputCity} type='text' placeholder='City' />
          <input onChange={inputEmail} type='email' placeholder='Email Address' />
          <input onChange={inputGpsCoords} type='text' placeholder='GPS Coordinates' />
          <button className='buttons' onClick={executeSignup} type='submit'>SIGN UP</button>
        </form>
        <button className='buttons' onClick={() => dispatch({type: 'CHANGE_ROUTE', payload: '/'})} type='submit'>CANCEL</button>
    </div>
  )
}
