import request from 'superagent'
import getDeviceListSvc from '../services/getDevices'

module.exports = (newDevice, dispatch) => {
  const baseUrl = 'http://localhost:3000' // *dev
  // const baseUrl = 'https://predata.herokuapp.com' // *deployed
  request
  .post(baseUrl + '/api/v1/devices')
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
