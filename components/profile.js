import React from 'react'
// import userDataSvc from '../services/getUserData'
import Menu from './menu'

module.exports = ({state, dispatch}) => {
  // userDataSvc(dispatch)
  // const name = state.userDetails.firstName
  const {username, firstName, lastName, streetNumber, streetName, suburb, city, email, gpsCoords} = state.userDetails
  return (
    <div>
      <div>
        <Menu dispatch={dispatch} />
      </div>
      <div>
        <h3>Welcome back {firstName}!</h3>
      </div>
      <div>
        <p>Username: {username}</p>
        <p>First Name: {firstName}</p>
        <p>Last Name: {lastName}</p>
        <p>Street Number: {streetNumber}</p>
        <p>Street Name: {streetName}</p>
        <p>Suburb: {suburb}</p>
        <p>City: {city}</p>
        <p>Email Address: {email}</p>
        <p>GPS Coordinates: {gpsCoords}</p>
      </div>
    </div>
  )
}
