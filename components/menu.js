import React from 'react'

module.exports = ({state, dispatch}) => {
  const logoutRoute = () => dispatch({type: 'CHANGE_ROUTE', payload: '/'})
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
        </tbody>
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
