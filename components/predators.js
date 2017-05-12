import React from 'react'

module.exports = ({state, dispatch}) => {
  // function toggleSelected (id) {
  //   document.getElementById(id).className = 'predatorSelected'
  // }
  //
  const toggleSelected = (e) => {
    dispatch({type: 'TOGGLE_SELECTED', payload: e.target.parentElement.id})
    const selectClass = 'col-4 col-m-4 predatorSelected'
    const unselectClass = 'col-4 col-m-4 predatorCell'
    document.getElementById(e.target.parentElement.id).className = selectClass
    if (state.predatorSelected !== e.target.parentElement.id) {
      document.getElementById(state.predatorSelected).className = unselectClass
    }
  }

  const capturedPredator = (e) => dispatch({type: 'ADD_PREDATOR', payload: {field: 'capturedPredator', value: e.target.value}})

  return (
    <div className='predatorComponent'>
      <div className='predatorSelectorRow col-12'>
        <div id='norwayRat' className='predatorCell col-4' onClick={toggleSelected} onChange={capturedPredator} value='Norway Rat'>
          <img className='predImg' src='../images/pests/norwayRat.jpg' />
            <h4 className='predatorHeading'>Norway Rat</h4>
        </div>
        <div id='shipRat' className='predatorCell col-4' onClick={toggleSelected} onChange={capturedPredator} value='Ship Rat'>
          <img className='predImg' src='../images/pests/shipRat.jpg' />
            <h4 className='predatorHeading'>Ship Rat</h4>
        </div>
        <div id='kioreRat' className='predatorCell col-4' onClick={toggleSelected} onChange={capturedPredator} value='Kiore (Pacific) Rat'>
          <img className='predImg' src='../images/pests/kiorePacificRat.jpg' />
            <h4 className='predatorHeading'>Kiore (Pacific) Rat</h4>
        </div>
      </div>
      <div className='predatorSelectorRow col-12'>
        <div id='ferret' className='predatorCell col-4' onClick={toggleSelected} onChange={capturedPredator} value='Ferret'>
          <img className='predImg' src='../images/pests/ferret.jpg' />
            <h4 className='predatorHeading'>Ferret</h4>
        </div>
        <div id='stoat' className='predatorCell col-4' onClick={toggleSelected} onChange={capturedPredator} value='Stoat'>
          <img className='predImg' src='../images/pests/stoat.jpg' />
            <h4 className='predatorHeading'>Stoat</h4>
        </div>
        <div id='weasel' className='predatorCell col-4' onClick={toggleSelected} onChange={capturedPredator} value='Weasel'>
          <img className='predImg' src='../images/pests/weasel.jpg' />
            <h4 className='predatorHeading'>Weasel</h4>
        </div>
      </div>
      <div className='predatorSelectorRow col-12'>
        <div id='possum' className='predatorCell col-4' onClick={toggleSelected} onChange={capturedPredator} value='Possum'>
          <img className='predImg' src='../images/pests/possum.jpg' />
            <h4 className='predatorHeading'>Possum</h4>
        </div>
        <div id='hedgehog' className='predatorCell col-4' onClick={toggleSelected} onChange={capturedPredator} value='Hedgehog'>
          <img className='predImg' src='../images/pests/hedgehog.jpg' />
            <h4 className='predatorHeading'>Hedgehog</h4>
        </div>
        <div id='cat' className='predatorCell col-4' onClick={toggleSelected} onChange={capturedPredator} value='Feral Cat'>
          <img className='predImg' src='../images/pests/feralCat.jpg' />
          <h4 className='predatorHeading'>Feral Cat</h4>
        </div>
      </div>
    </div>
  )
}
