const clone = require('clone')

function reducer(state, action) {
  var newState = clone(state)
  switch (action.type) {
    case 'INIT':
      return newState
    case 'USER_SIGNUP':
      const newUser = newState.newUser
      newUser[action.payload.field] = action.payload.value
      return newStatete
    case 'UPDATE_LOGIN_DETAILS':
      const loginDetails = newState.loginDetails
      loginDetails[action.payload.field] = action.payload.value
      return newState
    case 'CHANGE_ROUTE':
      newState.route = action.payload
      return newState
    default:
      return newState
  }
}

module.exports = reducer
