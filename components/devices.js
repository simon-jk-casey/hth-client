import React from 'react'
import Menu from './menu'

module.exports = ({state, dispatch}) => {
  return (
    <div>
      <div>
        <Menu dispatch={dispatch} />
      </div>
      <div className='addDevButton'>
        <button className='buttons greenButton' onClick={() => dispatch({type: 'CHANGE_ROUTE', payload: '/addDevice'})}>Add Device</button>
      </div>
      <div>
        {renderDeviceList()}
      </div>
    </div>
  )

  function renderDeviceList () {
    const { deviceList } = state
    return deviceList.map((device) =>
      <div key={device.id} className='devices'>
        <div className='deviceRow'>
          <div className='col-6 col-m-6'>
            <h4 className='inlineHeading'>Device Name: </h4>{device.deviceName}
          </div>
          <div className='col-6 col-m-6'>
            <h4 className='inlineHeading'>Device Type: </h4>{device.deviceType}
          </div>
        </div>
        <div className='col-12 col-m-12'>
          <h4 className='inlineHeading'>Notes: </h4>{device.notes}
        </div>
      </div>
    )
  }
}
