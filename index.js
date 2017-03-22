import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import Router from 'sheet-router'

import reducer from './reducer'

// COMPONENTS
import SignUp from './components/signup'
import Login from './components/main'
import Stats from './components/stats'
import DeviceView from './components/deviceView'
import DataEntry from './components/dataEntry'
// SERVICES

const initialState = {
  route: '/'
}

const store = createStore(reducer, initialState)
const {getState, dispatch, subscribe} = store

const route = Router({default: '404'}, [
  ['/', (params) => Login],
  ['/signup', (params) => SignUp],
  ['/statistics', (params) => Stats],
  ['/devices', (params) => DeviceView],
  ['/dataEntry', (params) => DataEntry]
])

subscribe(() => {
  const Component = route(getState().route)
  render(<Component state={getState()} dispatch={dispatch} />, document.querySelector('main'))
})

dispatch({type: 'INIT'})
