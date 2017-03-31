import React from 'react'
import userData from '../services/getUserData'

module.exports = ({state, dispatch}) => {
  userData(userId, dispatch)
  return (
    <div>
      <p>TEST PAGE</p>
    </div>
  )
}
