import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import Router from 'sheet-router'

import reducer from './reducer'

// COMPONENTS
import SignUp from './components/signup'
import Login from './components/main'
import Stats from './components/stats'
import Devices from './components/devices'
import DataEntry from './components/dataEntry'
import Profile from './components/profile'
// SERVICES

const initialState = {
  route: '/',
  loginDetails: {},
  newUser: {},
  userDetails: {},
  deviceList: {}
}

const store = createStore(reducer, initialState)
const {getState, dispatch, subscribe} = store

const route = Router({default: '404'}, [
  ['/', (params) => Login],
  ['/signup', (params) => SignUp],
  ['/profile', (params) => Profile],
  ['/statistics', (params) => Stats],
  ['/devices', (params) => Devices],
  ['/dataEntry', (params) => DataEntry]
])

subscribe(() => {
  const Component = route(getState().route)
  render(<Component state={getState()} dispatch={dispatch} />, document.querySelector('main'))
})

dispatch({type: 'INIT'})
