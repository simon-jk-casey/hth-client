import React from 'react'

module.exports = ({state, dispatch}) => {
  const toggleSelected = (e) => {
    dispatch({type: 'TOGGLE_SELECTED', payload: e.target.parentElement.id})
    dispatch({type: 'ADD_PREDATOR', payload: {field: 'capturedPredator', value: e.target.parentElement.id}})
    const selectClass = 'col-4 col-m-4 predatorSelected'
    const unselectClass = 'col-4 col-m-4 predatorCell'
    document.getElementById(e.target.parentElement.id).className = selectClass
    if (state.predatorSelected !== e.target.parentElement.id) {
      document.getElementById(state.predatorSelected).className = unselectClass
    }
  }

  return (
    <div className='predatorComponent'>
      <div className='predatorSelectorRow col-12'>
        <div id='Norway Rat' className='predatorCell col-4' onClick={toggleSelected}>
          <img className='predImg' src='https://simon-jk-casey.github.io/hth-client/images/pests/norwayRat.jpg' />
            <h4 className='predatorHeading'>Norway Rat</h4>
        </div>
        <div id='Ship Rat' className='predatorCell col-4' onClick={toggleSelected}>
          <img className='predImg' src='https://simon-jk-casey.github.io/hth-client/images/pests/shipRat.jpg' />
            <h4 className='predatorHeading'>Ship Rat</h4>
        </div>
        <div id='Mouse' className='predatorCell col-4' onClick={toggleSelected}>
          <img className='predImg' src='https://simon-jk-casey.github.io/hth-client/images/pests/mouse.jpg' />
            <h4 className='predatorHeading'>Mouse</h4>
        </div>
      </div>
      <div className='predatorSelectorRow col-12'>
        <div id='Ferret' className='predatorCell col-4' onClick={toggleSelected}>
          <img className='predImg' src='https://simon-jk-casey.github.io/hth-client/images/pests/ferret.jpg' />
            <h4 className='predatorHeading'>Ferret</h4>
        </div>
        <div id='Stoat' className='predatorCell col-4' onClick={toggleSelected}>
          <img className='predImg' src='https://simon-jk-casey.github.io/hth-client/images/pests/stoat.jpg' />
            <h4 className='predatorHeading'>Stoat</h4>
        </div>
        <div id='Weasel' className='predatorCell col-4' onClick={toggleSelected}>
          <img className='predImg' src='https://simon-jk-casey.github.io/hth-client/images/pests/weasel.jpg' />
            <h4 className='predatorHeading'>Weasel</h4>
        </div>
      </div>
      <div className='predatorSelectorRow col-12'>
        <div id='Possum' className='predatorCell col-4' onClick={toggleSelected}>
          <img className='predImg' src='https://simon-jk-casey.github.io/hth-client/images/pests/possum.jpg' />
            <h4 className='predatorHeading'>Possum</h4>
        </div>
        <div id='Hedgehog' className='predatorCell col-4' onClick={toggleSelected}>
          <img className='predImg' src='https://simon-jk-casey.github.io/hth-client/images/pests/hedgehog.jpg' />
            <h4 className='predatorHeading'>Hedgehog</h4>
        </div>
        <div id='Feral Cat' className='predatorCell col-4' onClick={toggleSelected}>
          <img className='predImg' src='https://simon-jk-casey.github.io/hth-client/images/pests/feralCat.jpg' />
          <h4 className='predatorHeading'>Feral Cat</h4>
        </div>
      </div>
    </div>
  )
}
