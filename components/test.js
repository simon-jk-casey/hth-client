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
        <Menu dispatch={dispatch}/>
        <div className='col-12 col-m-12'>
          <form id='deviceEntry'>
            <div className='addDeviceRow col-12 col-m-12'>
              <div className='col-2 col-m-2'>
                <label htmlFor='devName'><p>Device Name:</p></label>
              </div>
              <div className='col-4 col-m-4'>
                <input id='devName' onChange={deviceName} type='text' placeholder=' Device Name' />
              </div>
            </div>
            <div className='addDeviceRow typeRow col-12 col-m-12'>
              <div className='col-2 col-m-2'>
                <label htmlFor='devType'><p>Device Type:</p></label>
              </div>
              <div className='col-4 col-m-4'>
                <select id='devType' defaultValue='null' onChange={deviceType} name='Device Type'>
                  <option value='null' disabled>Select Device Type</option>
                  <option value='killTrap'>Kill Trap</option>
                  <option value='captureTrap'>Capture Trap</option>
                  <option value='poison'>Poison</option>
                  <option value='detectionDevice'>Detection Device</option>
                </select>
              </div>
            </div>
            <div className='addDeviceRow col-12 col-m-12'>
              <div className='col-2 col-m-2'>
                <label htmlFor='devNotes'><p>Device Notes:</p></label>
              </div>
              <div className='col-4 col-m-4'>
                <textarea id='devNotes' onChange={deviceNotes} rows='6' cols='60' wrap='soft' maxLength='240' />
              </div>
            </div>
          </form>
          <div className='buttonDiv col-12 col-m-12'>
            <button className='buttons greenButton' form='deviceEntry' onClick={addDevice} type='submit'>SUBMIT</button>
            <button className='buttons yellowButton' onClick={() => dispatch({type: 'CLEAR_STATE_CHANGE_ROUTE', payload: {category: 'newDevice', route: '/devices'}})} type='submit'>CANCEL</button>
          </div>
        </div>
      </div>
    </div>
  )
}
