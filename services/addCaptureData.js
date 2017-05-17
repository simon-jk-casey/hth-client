import request from 'superagent'
import getCaptureDataSvc from '../services/getCaptureData'

module.exports = (predatorData, dispatch) => {
  const baseUrl = 'http://localhost:3000' // *dev
  // const baseUrl = 'https://predata.herokuapp.com' // *deployed
  request
  .post(baseUrl + '/api/v1/captures')
  .send(predatorData)
  .withCredentials()
  .end((err, res) => {
    if (res) {
      if (!err) {
        getCaptureDataSvc(dispatch)
        dispatch({type: 'CLEAR_STATE_CHANGE_ROUTE', payload: {category: 'newPredatorData', route: '/dataEntry'}})
      } else {
        throw err
      }
    }
  })
}
