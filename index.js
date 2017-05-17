import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import Router from 'sheet-router'

import reducer from './reducer'

// COMPONENTS
import Signup from './components/signup'
import Login from './components/main'
import History from './components/history'
import Devices from './components/devices'
import AddDevice from './components/addDevice'
import DataEntry from './components/dataEntry'
import Profile from './components/profile'
import Views from './components/dataMapViewer'

const initialState = {
  route: '/',
  loginDetails: {},
  newUser: {},
  userDetails: {},
  deviceList: [],
  newDevice: {},
  newPredatorData: {
    captureNotes: ''
  },
  historyToggled: false,
  historyData: {},
  predatorIsToggled: false,
  predatorSelected: ''
}

const store = createStore(reducer, initialState)
const {getState, dispatch, subscribe} = store

const route = Router({default: '404'}, [
  ['/', (params) => Login],
  ['/signup', (params) => Signup],
  ['/profile', (params) => Profile],
  ['/history', (params) => History],
  ['/devices', (params) => Devices],
  ['/addDevice', (params) => AddDevice],
  ['/dataEntry', (params) => DataEntry],
  ['/views', (params) => Views]
])

subscribe(() => {
  const Component = route(getState().route)
  render(<Component state={getState()} dispatch={dispatch} />, document.querySelector('main'))
})

dispatch({type: 'INIT'})
