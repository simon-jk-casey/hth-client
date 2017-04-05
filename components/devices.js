import React from 'react'
import Menu from './menu'

module.exports = ({state, dispatch}) => {
  return (
    <div>
      <div>
        <Menu dispatch={dispatch} />
      </div>
      <div>
        <button className='buttons' onClick={() => dispatch({type: 'CHANGE_ROUTE', payload: '/addDevice'})}>Add Device</button>
      </div>
      {renderDeviceList()}
    </div>
  )

  function renderDeviceList () {
    const { deviceList } = state
    return deviceList.map((device) =>
      <div key={device.id}>Device Name: {device.deviceName}  Device Type: {device.deviceType} <br /> Notes: {device.notes}</div>
    )
  }
}
