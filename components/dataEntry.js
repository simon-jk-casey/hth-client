import React from 'react'
import Menu from './menu'
import addCaptureDataSvc from '../services/addCaptureData'
import Predators from './predators'

module.exports = ({state, dispatch}) => {
  const captureDevice = (e) => dispatch({type: 'ADD_PREDATOR', payload: {field: 'captureDevice', value: e.target.value}})
  const captureNotes = (e) => dispatch({type: 'ADD_PREDATOR', payload: {field: 'captureNotes', value: e.target.value}})
  const addPredatorData = (e) => {
    e.preventDefault()
    if (state.newPredatorData.captureDevice === 'null' || state.newPredatorData.captureDevice === undefined) {
      document.getElementById('errorField').innerHTML = 'Please Select Device'
    } else {
      addCaptureDataSvc(state.newPredatorData, dispatch)
      clearForm()
    }
  }
  return (
    <div>
      <div>
        <Menu dispatch={dispatch} />
      </div>
      <div>
        <form id='predatorEntry'>
          <div className='deviceSelector col-12 col-m-12'>
            <select id='deviceSelect' defaultValue='null' onChange={captureDevice}>
              <option value='null'>Select Device</option>
              {deviceListSelectOptions()}
            </select>
          </div>
          <div className='errorDiv col-12 col-m-12'><p id='errorField'></p></div>
          <div className='predatorButtonsDiv'>
            <Predators state={state} dispatch={dispatch} />
          </div>
          <div className='notesDiv'>
            <textarea className='predNotes' onChange={captureNotes} name='Notes' rows='6' cols='60' wrap='soft' maxLength='240' />
          </div>
        </form>
        <div className="buttonDiv col-12 col-m-12">
          <button className='buttons greenButton' form='predatorEntry' onClick={addPredatorData} type='submit'>SUBMIT</button>
          <button className='buttons yellowButton' onClick={clearForm}>CANCEL</button>
        </div>
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
    dispatch({type: 'CLEAR_STATE_CHANGE_ROUTE', payload: {category: 'newPredatorData', route: '/dataEntry'}})
    dispatch({type: 'CLEAR_STATE', payload: 'predatorSelected'})
    dispatch({type: 'TOGGLE_SELECTED'})
    console.log(state.predatorIsToggled)
  }
}
