import request from 'superagent'

module.exports = ({newUserData}, dispatch) => {
  // const {username, password, firstName, lastName, streetNumber, suburb, city, email, gpsCoords} = newUserData

  request
  .post('localhost:3000/api/v1/signup')
  .send({newUserData})
  .end((err, res) => {
    if (res) {
      if (!err) {
        dispatch({type: 'PLACEHOLDER-ROUTE', payload: 'PLACEHOLDER-ROUTE'})
      }
    }
  })
}
