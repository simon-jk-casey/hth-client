import React from 'react'

module.exports = ({state, dispatch}) => {
  return (
    <div className='menuBar'>
      <table>
        <tbody>
          <tr>
            <th className='buttonCell'>
              <button className='menuButton' onClick={() => dispatch({type: 'CHANGE_ROUTE', payload: '/profile'})}>Profile</button>
            </th>
            <th className='buttonCell'>
              <button className='menuButton' onClick={() => dispatch({type: 'CHANGE_ROUTE', payload: '/devices'})}>Devices</button>
            </th>
            <th className='buttonCell'>
              <button className='menuButton' onClick={() => dispatch({type: 'CHANGE_ROUTE', payload: '/dataEntry'})}>Data Entry</button>
            </th>
            <th className='buttonCell'>
              <button className='menuButton' onClick={() => dispatch({type: 'CHANGE_ROUTE', payload: '/history'})}>Entry History</button>
            </th>
            <th className='buttonCell'>
              <button className='menuButton' onClick={() => dispatch({type: '', payload: ''})}>Data Views</button>
            </th>
            <th className='buttonCell'>
              <button className='menuButton' onClick={() => dispatch({type: 'CHANGE_ROUTE', payload: '/'})}>Log Out</button>
            </th>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

// investigate better ways of doing this .. <menu>?
