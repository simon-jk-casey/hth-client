import React from 'react'

module.exports = ({state, dispatch}) => {
  return (
    <div className='menuBar'>
      <table>
        <tr>
          <th className='buttonCell' onClick={() => dispatch({type: 'PLACEHOLDER', payload: 'PLACEHOLDER'})}>Profile</th>
          <th className='buttonCell' onClick={() => dispatch({type: 'PLACEHOLDER', payload: 'PLACEHOLDER'})}>Devices</th>
          <th className='buttonCell' onClick={() => dispatch({type: 'PLACEHOLDER', payload: 'PLACEHOLDER'})}>Data Entry</th>
          <th className='buttonCell' onClick={() => dispatch({type: 'PLACEHOLDER', payload: 'PLACEHOLDER'})}>Entry History</th>
          <th className='buttonCell' onClick={() => dispatch({type: 'PLACEHOLDER', payload: 'PLACEHOLDER'})}>View Data</th>
          <th className='buttonCell' onClick={() => dispatch({type: 'CHANGE_ROUTE', payload: '/'})}>Log Out</th>
        </tr>
      </table>
    </div>
  )
}
