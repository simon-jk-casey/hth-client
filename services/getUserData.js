import request from 'superagent'

module.exports = (dispatch) => {
  // const baseUrl = 'http://localhost:3000' // *dev
  const baseUrl = 'https://predata.herokuapp.com' // *deployed
  request
  .get(baseUrl + '/api/v1/user')
  .withCredentials()
  .end((err, res) => {
    if (!err) dispatch({type: 'USER_DETAILS', payload: res.body[0]})
    else throw err
  })
}
