import React from 'react'
import Menu from './menu'

module.exports = ({state, dispatch}) => {
  return (
    <div>

    </div>
  )

  function renderCaptureHistory() {
    const { captureHistory } = state.historyToggles
    const { captures } = state.historyData
    // will require a table join predData and devices
    if (!captureHistory) {
      for (var i = 0; i < 10; i++) {
        return (
          <div>
            Date: {captures[i].date}
            Animal: {captures[i].predCaptured}
            Device Name: {captures[i].deviceName}
            Device Type: {captures[i].deviceType}
            Notes: {captures[i].notes}
            <button className='buttons'></button> 
          </div>
        )
      }
    }
  }
}
