const clone = require('clone')

function reducer(state, action) {
  var newState = clone(state)
  switch (action.type) {
    case 'INIT':
      return newState

    default:
      return newState
  }
}

module.exports = reducer
