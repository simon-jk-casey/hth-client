import React from 'react'
import Menu from './menu'
import addDataSvc from '../services/addData'

module.exports = ({state, dispatch}) => {
  const captureDevice = (e) => dispatch({type: 'ADD_PREDATOR', payload: {field: 'captureDevice', value: e.target.value}})
  const capturedPredator = (e) => dispatch({type: 'ADD_PREDATOR', payload: {field: 'capturedPredator', value: e.target.value}})
  const captureNotes = (e) => dispatch({type: 'ADD_PREDATOR', payload: {field: 'captureNotes', value: e.target.value}})
  const addPredatorData = (e) => {
    e.preventDefault()
    addDataSvc(state.newPredatorData)
  }
  return (
    <div>
      <div>
        <Menu dispatch={dispatch} />
      </div>
      <div>
        <form id='predatorEntry'>
          <div>
            <select onChange={captureDevice}>
              {deviceListSelectOptions()}
            </select>
          </div>
          <div className='predatorButtonsDiv'>
            <div className='predatorButton'>
              <label htmlFor='shipRat'>Ship Rat</label>
              <input onChange={capturedPredator} type='radio' value='Ship Rat' id='shipRat' />
            </div>
            <div className='predatorButton'>
              <label htmlFor='norwayRat'>Norway Rat</label>
              <input onChange={capturedPredator} type='radio' name='predatorType' value='Norway Rat' id='norwayRat' />
            </div>
            <div className='predatorButton'>
              <label htmlFor='Possum'>Possum</label>
              <input onChange={capturedPredator} type='radio' name='predatorType' value='Possum' id='Possum' />
            </div>
            <div className='predatorButton'>
              <label htmlFor='Ferret'>Ferret</label>
              <input onChange={capturedPredator} type='radio' name='predatorType' value='Ferret' id='Ferret' />
            </div>
            <div className='predatorButton'>
              <label htmlFor='Stoat'>Stoat</label>
              <input onChange={capturedPredator} type='radio' name='predatorType' value='Stoat' id='Stoat' />
            </div>
            <div className='predatorButton'>
              <label htmlFor='Hedgehog'>Hedgehog</label>
              <input onChange={capturedPredator} type='radio' name='predatorType' value='Hedgehog' id='Hedgehog' />
            </div>
            <div className='predatorButton'>
              <label htmlFor='Mouse'>Mouse</label>
              <input onChange={capturedPredator} type='radio' name='predatorType' value='Mouse' id='Mouse' />
            </div>
            <div className='predatorButton'>
              <label htmlFor='Weasel'>Weasel</label>
              <input onChange={capturedPredator} type='radio' name='predatorType' value='Weasel' id='Weasel' />
            </div>
            <div className='predatorButton'>
              <label htmlFor='Cat'>Cat</label>
              <input onChange={capturedPredator} type='radio' name='predatorType' value='Cat' id='Cat' />
            </div>
          </div>
          <div>
            <input onChange={captureNotes} type='text' placeholder='Notes' />
          </div>
          <button className='buttons' onClick={addPredatorData} type='submit'>SUBMIT</button>
        </form>
        <button className='buttons' onClick={() => dispatch({type: 'CHANGE_ROUTE', payload: '/dataEntry'})}>CANCEL</button>
      </div>
    </div>
  )

  function deviceListSelectOptions() {
    const { deviceList } = state
    return deviceList.map((device) =>
      <option key={device.id} value={device.id}>Name: {device.deviceName} - Type: {device.deviceType}</option>
    )
  }
}

// Need to reset form on cancel - need fn with document.getElementById('predatorEntry').reset()
