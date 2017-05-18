import React from 'react'
import Menu from './menu'

module.exports = ({state, dispatch}) => {
  return (
    <div>
      <div>
        <Menu dispatch={dispatch} />
      </div>
      <div>
        <h2> Predator Capture History </h2>
        <div className='col-12 col-m-12'>
          {renderCaptureHistory()}
        </div>
      </div>
    </div>
  )

  function renderCaptureHistory () {
    const { historyData } = state
    return historyData.map((capture) =>
      <div key={capture.id} className='historyPane col-12 col-m-12'>
        <div className='histimg col-4 col-m-4'>
          {imagePicker(capture.predCaptured)}
        </div>
        <div className='histInfo col-8 col-m-8'>
          <div className='histDateAnimal'>
            <div className='histDate'><p>Date: {capture.captureDate}</p></div>
            <div className='histAnimal'><p>Animal: {capture.predCaptured}</p></div>
          </div>
          <div className='histDevTypeName'>
            <div className='histDevType'><p>Device Type: {capture.deviceType}</p></div>
            <div className='histDevName'><p>Device Name: {capture.deviceName}</p></div>
          </div>
          <div className='histNotes'><p>Notes: {capture.notes}</p></div>
        </div>
      </div>
    )
  }

  function imagePicker (animal) {
    switch (animal) {
      case 'Feral Cat':
        return <img src='https://simon-jk-casey.github.io/hth-client/images/pests/feralCat.jpg' className='histimg' />
      case 'Norway Rat':
        return <img src='https://simon-jk-casey.github.io/hth-client/images/pests/norwayRat.jpg' className='histimg' />
      case 'Ship Rat':
        return <img src='https://simon-jk-casey.github.io/hth-client/images/pests/shipRat.jpg' className='histimg' />
      case 'Mouse':
        return <img src='https://simon-jk-casey.github.io/hth-client/images/pests/mouse.jpg' className='histimg' />
      case 'Ferret':
        return <img src='https://simon-jk-casey.github.io/hth-client/images/pests/ferret.jpg' className='histimg' />
      case 'Stoat':
        return <img src='https://simon-jk-casey.github.io/hth-client/images/pests/stoat.jpg' className='histimg' />
      case 'Weasel':
        return <img src='https://simon-jk-casey.github.io/hth-client/images/pests/weasel.jpg' className='histimg' />
      case 'Possum':
        return <img src='https://simon-jk-casey.github.io/hth-client/images/pests/possum.jpg' className='histimg' />
      case 'Hedgehog':
        return <img src='https://simon-jk-casey.github.io/hth-client/images/pests/hedgehog.jpg' className='histimg' />
      default:
        return
    }
  }
}
