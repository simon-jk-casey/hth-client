import React from 'react'
import Menu from './menu'

module.exports = ({state, dispatch}) => {
  return (
    <div>
      <div>
        <Menu dispatch={dispatch} />
      </div>
      <div>
        {renderCaptureHistory()}
      </div>
    </div>
  )

  function renderCaptureHistory () {
    const { historyToggled } = state
    const { historyData } = state
    // will require a table join predData and devices
    if (!historyToggled) {
      for (var i = 0; i < 10; i++) {
        return (
          <div>
            <h2>Predator Capture History</h2>
            Date: {historyData[i].date}
            Animal: {historyData[i].predCaptured}
            Device Name: {historyData[i].deviceName}
            Device Type: {historyData[i].deviceType}
            Notes: {historyData[i].notes}
            <button className='buttons' onClick={() => dispatch({type: 'HISTORY_TOGGLE'})}>SHOW MORE</button>
          </div>
        )
      }
    } else {
      return historyData.map((capture) =>
        <div key={capture.id}>
          <h2>Predator Capture History</h2>
          Date: {capture.date}
          Animal: {capture.predCaptured}
          Device Name: {capture.deviceName}
          Device Type: {capture.deviceType}
          Notes: {capture.notes}
          <button className='buttons' onClick={() => dispatch({type: 'HISTORY_TOGGLE'})}>BACK</button>
        </div>
      )
    }
  }
}
