const clone = require('clone')

function reducer (state, action) {
  var newState = clone(state)
  switch (action.type) {
    case 'INIT':
      return newState
    case 'CHANGE_PAGE':
      newState.route = action.payload
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
    case 'ENTRY_HISTORY':
      newState.historyData = action.payload
      return newState
    case 'CLEAR_STATE':
      newState[action.payload] = {}
      return newState
    case 'CLEAR_STATE_CHANGE_ROUTE':
      newState[action.payload.category] = {}
      newState.route = action.payload.route
      return newState
    case 'TOGGLE_SELECTED':
      if (!newState.predatorIsToggled) {
        newState.predatorIsToggled = true
      } else {
        newState.predatorIsToggled = false
      }
      newState.predatorSelected = action.payload
      return newState
    default:
      return newState
  }
}

module.exports = reducer
