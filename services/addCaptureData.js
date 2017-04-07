import request from 'superagent'
import getCaptureDataSvc from '../services/getCaptureData'

module.exports = (predatorData, dispatch) => {
  request
  .post('http://localhost:3000/api/v1/captures')
  .send(predatorData)
  .withCredentials()
  .end((err, res) => {
    if (res) {
      if (!err) {
        getCaptureDataSvc(dispatch)
        dispatch({type: 'CLEAR_STATE', payload: 'newPredatorData'})
        dispatch({type: 'CHANGE_ROUTE', payload: '/DataEntry'})
      } else {
        throw err
      }
    }
  })
}
