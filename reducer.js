const clone = require('clone')

function reducer(state, action) {
  var newState = clone(state)
  switch (action.type) {
    case 'INIT':
      return newState
    case 'USER_SIGNUP':
      const newUser = newState.newUser
      newUser[payload.field] = payload.value
      return newState
    case 'UPDATE_LOGIN_DETAILS':
      const loginDetails = newState.loginDetails
      loginDetails[payload.field] = payload.value
      return newState
    default:
      return newState
  }
}

module.exports = reducer
