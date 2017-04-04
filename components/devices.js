import React from 'react'
import Menu from './menu'
// import getDeviceSvc from '../services/getDevices'

module.exports = ({state, dispatch}) => {
  return (
    <div>
      <div>
        <Menu dispatch={dispatch} />
      </div>
      <div>
        <button className='buttons' onClick={() => dispatch({type: 'CHANGE_ROUTE', payload: '/addDevice'})}>Add Device</button>
      </div>
      <div>
      </div>
    </div>
  )
}
