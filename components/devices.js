import React from 'react'
import Menu from './menu'
import getDeviceSvc from '../services/getDevices'

module.exports = ({state, dispatch}) => {
  return (
    <div>
      <div>
        <Menu dispatch={dispatch} />
      </div>
      <div>
        <button className='button' onClick={() => dispatch({type: 'CHANGE_ROUTE', payload: '/addDevice'})}>Add Device</button>
      </div>
      <div>
        {listDevices()}
      </div>
    </div>
  )

  function listDevices () {
    const devices = getDeviceSvc(dispatch)
    // render device list with remove buttons (need confirmation to proceed also) once data is incoming
  }
}
