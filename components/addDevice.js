import React from 'react'
import Menu from './menu'
import addDeviceSvc from '../services/addDevice'

module.exports = ({state, dispatch}) => {
  const deviceName = (e) => dispatch({type: 'ADD_DEVICE', payload: {field: 'deviceName', value: e.target.value}})
  const deviceType = (e) => dispatch({type: 'ADD_DEVICE', payload: {field: 'deviceType', value: e.target.value}})
  const deviceNotes = (e) => dispatch({type: 'ADD_DEVICE', payload: {field: 'deviceNotes', value: e.target.value}})
  const addDevice = (e) => {
    e.preventDefault()
    addDeviceSvc(state.newDevice, dispatch)
  }
  return (
    <div>
      <div>
        <Menu dispatch={dispatch} />
      </div>
      <div>
        <form id='deviceEntry'>
          <input onChange={deviceName} type='text' placeholder='Device Name' />
          <select defaultValue='null' onChange={deviceType} name='Device Type'>
            <option value='null' disabled>Select Device Type</option>
            <option value='killTrap'>Kill Trap</option>
            <option value='captureTrap'>Capture Trap</option>
            <option value='poison'>Poison</option>
            <option value='detectionDevice'>Detection Device</option>
          </select>
          <input onChange={deviceNotes} type='text' placeholder='Notes' />
          <button className='buttons' onClick={addDevice} type='submit'>SUBMIT</button>
        </form>
        <button className='buttons' onClick={() => dispatch({type: 'CLEAR_STATE_CHANGE_ROUTE', payload: {category: 'newDevice', route: '/devices'}})} type='submit'>CANCEL</button>
      </div>
    </div>
  )
}
