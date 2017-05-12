import React from 'react'
import Menu from './menu'
import addCaptureDataSvc from '../services/addCaptureData'
import Predators from './predators'

module.exports = ({state, dispatch}) => {
  const captureDevice = (e) => dispatch({type: 'ADD_PREDATOR', payload: {field: 'captureDevice', value: e.target.value}})
  const captureNotes = (e) => dispatch({type: 'ADD_PREDATOR', payload: {field: 'captureNotes', value: e.target.value}})
  const addPredatorData = (e) => {
    console.log(state.newPredatorData)
    e.preventDefault()
    addCaptureDataSvc(state.newPredatorData, dispatch)
    clearForm()
  }
  return (
    <div>
      <div>
        <Menu dispatch={dispatch} />
      </div>
      <div>
        <form id='predatorEntry'>
          <div>
            <select id='test' defaultValue='null' onChange={captureDevice}>
              <option value='null' disabled>Select Device</option>
              {deviceListSelectOptions()}
            </select>
          </div>
          <div className='predatorButtonsDiv'>
            <Predators state={state} dispatch={dispatch} />
          </div>
          <div>
            <input onChange={captureNotes} type='text' placeholder='Notes' />
          </div>
          <button className='buttons' onClick={addPredatorData} type='submit'>SUBMIT</button>
        </form>
        <button className='buttons' onClick={clearForm}>CANCEL</button>
      </div>
    </div>
  )

  function deviceListSelectOptions () {
    const { deviceList } = state
    return deviceList.map((device) =>
      <option key={device.id} value={device.id}>Name: {device.deviceName} - Type: {device.deviceType}</option>
    )
  }

  function clearForm () {
    document.getElementById('predatorEntry').reset()
    document.getElementById(state.predatorSelected).className = 'col-4 col-m-4 predatorCell'
    dispatch({type: 'CLEAR_STATE', payload: 'newPredatorData'})
    dispatch({type: 'CLEAR_STATE', payload: 'predatorSelected'})
    dispatch({type: 'TOGGLE_SELECTED'})
    console.log(state.predatorIsToggled)
  }
}
