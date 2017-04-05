import request from 'superagent'
import getDeviceListSvc from '../services/getDevices'


module.exports = ((loginData, dispatch) => {
  // const {username, password} = loginData
  request
    .post('http://localhost:3000/api/v1/login')
    .send(loginData)
    .withCredentials()
    .end((err, res) => {
      if (!err) {
        getDeviceListSvc(dispatch)
        dispatch({type: 'CHANGE_ROUTE', payload: '/profile'})
      } else {
        dispatch({type: 'CHANGE_ROUTE', payload: '/'})
        //change this in future to keep page and display error
      }
    })
})
