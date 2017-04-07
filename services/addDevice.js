import request from 'superagent'
import getDeviceListSvc from '../services/getDevices'

module.exports = (newDevice, dispatch) => {
  request
  .post('http://localhost:3000/api/v1/devices')
  .send(newDevice)
  .withCredentials()
  .end((err, res) => {
    if (res) {
      if (!err) {
        getDeviceListSvc(dispatch)
        dispatch({type: 'CLEAR_STATE_CHANGE_ROUTE', payload: {category: 'newDevice', route: '/devices'}})
      }
    } else {
      throw err
    }
  })
}
