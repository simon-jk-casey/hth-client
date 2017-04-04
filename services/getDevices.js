import request from 'superagent'

module.exports = (dispatch) => {
  request
  .get('localhost:3000/api/v1/devices')
  .withCredentials()
  .end((err, res) => {
    if (!err) console.log(res.body)
    // if (!err) dispatch({type: 'DEVICE_LIST', payload: res.body})
    else throw err
  })
}
