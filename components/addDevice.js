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
      <div className='devEntryForm'>
        <form id='deviceEntry'>
          <div className='devSelect col-12 col-m-12'>
            <div className='col-5 col-m-5'>
              <label htmlFor='devName'>
                <h4 className='inlineHeading'>Device Name: </h4>
              </label>
              <input id='devName' onChange={deviceName} type='text' placeholder='Device Name' />
            </div>
            <div className='col-5 col-m-5'>
              <label htmlFor='devType'>
                <h4 className='inlineHeading'>Device Type: </h4>
              </label>
              <select id='devType' defaultValue='null' onChange={deviceType} name='Device Type'>
                <option value='null' disabled>Select Device Type</option>
                <option value='killTrap'>Kill Trap</option>
                <option value='captureTrap'>Capture Trap</option>
                <option value='poison'>Poison</option>
                <option value='detectionDevice'>Detection Device</option>
              </select>
            </div>
          </div>
          <div className='dNotes col-10 col-m-10'>
            <label htmlFor='devNotes'>
              <h4 className='inlineHeading'>Notes: </h4>
            </label>
            <input id='devNotes' onChange={deviceNotes} type='text' placeholder='Notes' />
          </div>
          <div className='singleButton'>
            <button className='buttons greenButton' onClick={addDevice} type='submit'>SUBMIT</button>
          </div>
        </form>
        <div className='singleButton'>
          <button className='buttons yellowButton' onClick={() => dispatch({type: 'CLEAR_STATE_CHANGE_ROUTE', payload: {category: 'newDevice', route: '/devices'}})} type='submit'>CANCEL</button>
        </div>
      </div>
    </div>
  )
}
