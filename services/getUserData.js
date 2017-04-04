import request from 'superagent'

module.exports = (dispatch) => {
  request
  .get('http://localhost:3000/api/v1/user')
  .withCredentials()
  .end((err, res) => {
    if (!err) dispatch({type: 'USER_DETAILS', payload: res.body[0]})
    else throw err
  })
}
