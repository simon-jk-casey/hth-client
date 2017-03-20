import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import Router from 'sheet-router'

import reducer from './reducer'

// import components between these comments

//

// import any required services between these comments

//

const initialState = {}

const store = createStore(reducer, initialState)
const {getState, dispatch, subscribe} = store

const route = Router()  //routes go in as params - see BC

subscribe(() => {
  const Component = route(getState().route)
  render(<Component state={getState()} dispatch={dispatch} />, document.querySelector('main'))
})

dispatch({type: 'INIT'})
