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
          <select onChange={deviceType} name='Device Type'>
            <option value='killTrap'>Kill Trap</option>
            <option value='captureTrap'>Capture Trap</option>
            <option value='poison'>Poison</option>
            <option value='detectionDevice'>Detection Device</option>
          </select>
          <input onChange={deviceNotes} type='text' placeholder='Notes' />
          <button className='buttons' onClick={addDevice} type='submit'>SUBMIT</button>
        </form>
        <button className='buttons' onClick={() => dispatch({type: 'CHANGE_ROUTE', payload: '/devices'})} type='submit'>CANCEL</button>
      </div>
    </div>
  )
}
