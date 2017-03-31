import React from 'react'

module.exports = ({state, dispatch}) => {
  return (
    <div className='menuBar'>
      <table>
        <tr>
          <th className='buttonCell'>
            <button className='menuButton' onClick={() => dispatch({type: 'CHANGE_ROUTE', payload: '/profile'})}>Profile</button>
          </th>
          <th className='buttonCell'>
            <button className='menuButton' onClick={() => dispatch({type: 'CHANGE_ROUTE', payload: '/devices'})}>Devices</button>
          </th>
          <th className='buttonCell'>
            <button className='menuButton' onClick={() => dispatch({type: '', payload: ''})}>Data Entry</button>
          </th>
          <th className='buttonCell'>
            <button className='menuButton' onClick={() => dispatch({type: '', payload: ''})}>Entry History</button>
          </th>
          <th className='buttonCell'>
            <button className='menuButton' onClick={() => dispatch({type: '', payload: ''})}>Data Views</button>
          </th>
          <th className='buttonCell'>
            <button className='menuButton' onClick={() => dispatch({type: 'CHANGE_ROUTE', payload: '/'})}>Log Out</button>
          </th>
        </tr>
      </table>
    </div>
  )
}

//investigate better ways of doing this .. <menu>?


{/* <th className='buttonCell' onClick={() => dispatch({type: 'PLACEHOLDER', payload: '/devices'})}>Devices</th>
<th className='buttonCell' onClick={() => dispatch({type: 'PLACEHOLDER', payload: '/dataEntry'})}>Data Entry</th>
<th className='buttonCell' onClick={() => dispatch({type: 'PLACEHOLDER', payload: 'PLACEHOLDER'})}>Entry History</th>
<th className='buttonCell' onClick={() => dispatch({type: 'PLACEHOLDER', payload: 'PLACEHOLDER'})}>View Data</th>
<th className='buttonCell' onClick={() => dispatch({type: 'CHANGE_ROUTE', payload: '/'})}>Log Out</th> */}
