// import request from 'superagent'

module.exports = (dispatch) => {
  const baseUrl = 'http://localhost:3000' // *dev
  // const baseUrl = 'https://predata.herokuapp.com' // *deployed
  request
  .get(baseUrl + '/api/v1/devices')
  .withCredentials()
  .end((err, res) => {
    if (!err) dispatch({type: 'DEVICE_LIST', payload: res.body})
    else throw err
  })
}
