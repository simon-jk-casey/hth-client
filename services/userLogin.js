import request from 'superagent'
import getDeviceListSvc from '../services/getDevices'
import userDataSvc from '../services/getUserData'
import getCaptureDataSvc from '../services/getCaptureData'

module.exports = (loginData, dispatch) => {
  request
    .post('http://localhost:3000/api/v1/login')
    .send(loginData)
    .withCredentials()
    .end((err, res) => {
      if (!err) {
        userDataSvc(dispatch)
        getDeviceListSvc(dispatch)
        getCaptureDataSvc(dispatch)
        dispatch({type: 'CLEAR_STATE_CHANGE_ROUTE', payload: {category: 'loginDetails', route: '/profile'}})
      } else {
        dispatch({type: 'CHANGE_ROUTE', payload: '/'})
        // change this in future to keep page and display error
      }
    })
}
