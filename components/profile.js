import React from 'react'
import Menu from './menu'

module.exports = ({state, dispatch}) => {
  const {username, firstName, lastName, streetNumber, streetName, suburb, city, email, gpsCoords} = state.userDetails
  return (
    <div>
      <div>
        <Menu dispatch={dispatch} />
      </div>
      <div>
        <h3>Welcome back {firstName}!</h3>
      </div>
      <div className='profSection'>
        <table>
          <tbody>
            <tr>
              <th className='profHeader col-2 col-m-2'>Username</th>
              <td className='profData col-9 col-m-9'>{username}</td>
              <td className='editButton col-1 col-m-1'><button>Edit</button></td>
            </tr>
            <tr>
              <th className='profHeader col-2 col-m-2'>First Name</th>
              <td className='profData col-9 col-m-9'>{firstName}</td>
              <td className='editButton col-1 col-m-1'><button>Edit</button></td>
            </tr>
            <tr>
              <th className='profHeader col-2 col-m-2'>Last Name</th>
              <td className='profData col-9 col-m-9'>{lastName}</td>
              <td className='editButton col-1 col-m-1'><button>Edit</button></td>
            </tr>
            <tr>
              <th className='profHeader col-2 col-m-2'>Street Number</th>
              <td className='profData col-9 col-m-9'>{streetNumber}</td>
              <td className='editButton col-1 col-m-1'><button>Edit</button></td>
            </tr>
            <tr>
              <th className='profHeader col-2 col-m-2'>Street Name</th>
              <td className='profData col-9 col-m-9'>{streetName}</td>
              <td className='editButton col-1 col-m-1'><button>Edit</button></td>
            </tr>
            <tr>
              <th className='profHeader col-2 col-m-2'>Suburb</th>
              <td className='profData col-9 col-m-9'>{suburb}</td>
              <td className='editButton col-1 col-m-1'><button>Edit</button></td>
            </tr>
            <tr>
              <th className='profHeader col-2 col-m-2'>City</th>
              <td className='profData col-9 col-m-9'>{city}</td>
              <td className='editButton col-1 col-m-1'><button>Edit</button></td>
            </tr>
            <tr>
              <th className='profHeader col-2 col-m-2'>Email</th>
              <td className='profData col-9 col-m-9'>{email}</td>
              <td className='editButton col-1 col-m-1'><button>Edit</button></td>
            </tr>
            <tr>
              <th className='profHeader col-2 col-m-2'>GPS Coords</th>
              <td className='profData col-9 col-m-9'>{gpsCoords}</td>
              <td className='editButton col-1 col-m-1'><button>Edit</button></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
