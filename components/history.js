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
        {renderCaptureHistory()}
      </div>
    </div>
  )

  function renderCaptureHistory () {
    const { historyData } = state
    return historyData.map((capture) =>
      <div key={capture.id}>
        Date: {capture.captureDate} <br />Animal: {capture.predCaptured} Device Type: {capture.deviceType} Device Name: {capture.deviceName} <br />Notes: {capture.notes}
      </div>
    )
  }
}
