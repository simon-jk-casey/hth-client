import request from 'superagent'

module.exports = (newDevice, dispatch) => {
  request
  .post('http://localhost:3000/api/v1/devices')
  .send(newDevice)
  .withCredentials()
  .end((err, res) => {
    if (res) {
      if (!err) {
        dispatch({type: 'CHANGE_ROUTE', payload: '/devices'})
      }
    } else {
      throw err
    }
  })
}
