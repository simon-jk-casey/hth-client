const clone = require('clone')

function reducer(state, action) {
  var newState = clone(state)
  switch (action.type) {
    case 'INIT':
      return newState
    case 'USER_SIGNUP':
      const newUser = newState.newUser
      newUser[action.payload.field] = action.payload.value
      return newState
    case 'UPDATE_LOGIN_DETAILS':
      const loginDetails = newState.loginDetails
      loginDetails[action.payload.field] = action.payload.value
      return newState
    case 'CHANGE_ROUTE':
      newState.route = action.payload
      return newState
    case 'USER_DETAILS':
      newState.userDetails = action.payload
      return newState
    case 'DEVICE_LIST':
      newState.deviceList = action.payload
      return newState
    case 'ADD_DEVICE':
      const newDevice = newState.newDevice
      newDevice[action.payload.field] = action.payload.value
      return newState
    case 'ADD_PREDATOR':
      const newPredatorData = newState.newPredatorData
      newPredatorData[action.payload.field] = action.payload.value
      return newState
    case 'HISTORY_TOGGLE':
      let toggled = newState.historyToggled
      if (!toggled) toggled = true
      else toggled = false
      return newState

    default:
      return newState
  }
}

module.exports = reducer
