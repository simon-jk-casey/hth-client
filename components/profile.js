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
        <div className='profRow'>
          <div className='profHeader col-2 col-m-2'><h4>Username:</h4></div>
          <div className='profData col-7 col-m-7'>{username}</div>
          <div className='editButton col-1 col-m-1'><button>Edit</button></div>
        </div>
        <div className='profRow'>
          <div className='profHeader col-2 col-m-2'><h4>First Name:</h4></div>
          <div className='profData col-7 col-m-7'>{firstName}</div>
          <div className='editButton col-1 col-m-1'><button>Edit</button></div>
        </div>
        <div className='profRow'>
          <div className='profHeader col-2 col-m-2'><h4>Last Name:</h4></div>
          <div className='profData col-7 col-m-7'>{lastName}</div>
          <div className='editButton col-1 col-m-1'><button>Edit</button></div>
        </div>
        <div className='profRow'>
          <div className='profHeader col-2 col-m-2'><h4>Street Number:</h4></div>
          <div className='profData col-7 col-m-7'>{streetNumber}</div>
          <div className='editButton col-1 col-m-1'><button>Edit</button></div>
        </div>
        <div className='profRow'>
          <div className='profHeader col-2 col-m-2'><h4>Street Name:</h4></div>
          <div className='profData col-7 col-m-7'>{streetName}</div>
          <div className='editButton col-1 col-m-1'><button>Edit</button></div>
        </div>
        <div className='profRow'>
          <div className='profHeader col-2 col-m-2'><h4>Suburb:</h4></div>
          <div className='profData col-7 col-m-7'>{suburb}</div>
          <div className='editButton col-1 col-m-1'><button>Edit</button></div>
        </div>
        <div className='profRow'>
          <div className='profHeader col-2 col-m-2'><h4>City:</h4></div>
          <div className='profData col-7 col-m-7'>{city}</div>
          <div className='editButton col-1 col-m-1'><button>Edit</button></div>
        </div>
        <div className='profRow'>
          <div className='profHeader col-2 col-m-2'><h4>Email:</h4></div>
          <div className='profData col-7 col-m-7'>{email}</div>
          <div className='editButton col-1 col-m-1'><button>Edit</button></div>
        </div>
        <div className='profRow'>
          <div className='profHeader col-2 col-m-2'><h4>GPS Coords:</h4></div>
          <div className='profData col-7 col-m-7'>{gpsCoords}</div>
          <div className='editButton col-1 col-m-1'><button>Edit</button></div>
        </div>
      </div>
    </div>
  )
}
