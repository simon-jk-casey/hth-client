import React from 'react'

module.exports = ({state, disptach}) => {
  return (
    <div className="menuBar">
      <table>
        <tr>
          <th className='buttonCell' onClick={() => {type: 'PLACEHOLDER' payload: 'PLACEHOLDER'>Profile</th>
          <th className='buttonCell' onClick={() => {type: 'PLACEHOLDER' payload: 'PLACEHOLDER'>Devices</th>
          <th className='buttonCell' onClick={() => {type: 'PLACEHOLDER' payload: 'PLACEHOLDER'>Data Entry</th>
          <th className='buttonCell' onClick={() => {type: 'PLACEHOLDER' payload: 'PLACEHOLDER'>Entry History</th>
          <th className='buttonCell' onClick={() => {type: 'PLACEHOLDER' payload: 'PLACEHOLDER'>View Data</th>
          <th className='buttonCell' onClick={() => {type: 'PLACEHOLDER' payload: 'PLACEHOLDER'>Log Out</th>
        </tr>
      </table>
    </div>
  )
}
