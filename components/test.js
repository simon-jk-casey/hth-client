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
      <div className='addDevForm col-12 col-m-12'>
        <form id='deviceEntry'>
          <div className='deviceNameType col-6 col-m-6'>
            <div className='deviceName col-6 col-m-6'>
              <label htmlFor='devName'>
                <p className='inlineHeading'>Device Name: </p>
              </label>
              <input id='devName' onChange={deviceName} type='text' placeholder='Device Name' />
            </div>
            <div className='deviceType col-6 col-m-6'>
              <label htmlFor='devType'>
                <p className='inlineHeading'>Device Type: </p>
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
          <div className='deviceNotes col-6 col-m-6'>
            <label htmlFor='devNotes'>
              <p className='inlineHeading'>Notes: </p>
            </label>
            <textarea id='devNotes' onChange={deviceNotes} rows='6' cols='40' wrap='soft' maxLength='240' />
          </div>
        </form>
      </div>
      <div className='buttonDiv col-12 col-m-12'>
        <button className='buttons greenButton' form='deviceEntry' onClick={addDevice} type='submit'>SUBMIT</button>
        <button className='buttons yellowButton' onClick={() => dispatch({type: 'CLEAR_STATE_CHANGE_ROUTE', payload: {category: 'newDevice', route: '/devices'}})} type='submit'>CANCEL</button>
      </div>
    </div>
  )
}
